import { NextRequest, NextResponse } from "next/server";

import { jobApplicationSchema } from "@/lib/schemas";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { rateLimit } from "@/lib/rate-limit";
import { escapeHtml, sanitizeInput } from "@/lib/sanitize";
import { sendEmail } from "@/lib/mailer";
import { tooManyRequests, serverError } from "@/lib/api-helpers";

/**
 * Career applications endpoint.
 *
 * Receives a `multipart/form-data` POST from `JobApplicationForm` containing:
 *   • the text fields validated by `jobApplicationSchema`
 *   • a single `cv` file (PDF / DOC / DOCX, ≤ 5 MB)
 *
 * On success the candidate's CV is forwarded to `hr@susnex.com` as an email
 * attachment, with `Reply-To` set to the candidate's address so HR can reply
 * inline. The candidate themselves never receives a copy from this endpoint —
 * they get the in-page success state instead, which keeps the email volume
 * sane and avoids leaking that the SMTP user lives at a different address.
 *
 * The intentional design choice: we do NOT persist the CV to disk anywhere on
 * the server. The file is held in memory long enough to attach, then the
 * Buffer is dropped when the function returns. This keeps the deployment
 * stateless and side-steps storage / GDPR concerns for a low-volume endpoint.
 */

const HR_INBOX = "hr@susnex.com";
const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB

const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];

function badRequest(message: string, details?: unknown) {
  return NextResponse.json({ error: message, details }, { status: 400 });
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const { ok } = rateLimit(`job-app:${ip}`, 3);
    if (!ok) return tooManyRequests();

    const contentType = req.headers.get("content-type") ?? "";
    if (!contentType.includes("multipart/form-data")) {
      return badRequest("Expected multipart/form-data");
    }

    let formData: FormData;
    try {
      formData = await req.formData();
    } catch {
      return badRequest("Could not parse upload");
    }

    // Extract text fields into a plain object Zod can validate. We pull every
    // expected key explicitly rather than spreading entries so a malicious
    // client can't smuggle extra props through `.strict()`.
    const text = {
      position: String(formData.get("position") ?? ""),
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      location: String(formData.get("location") ?? ""),
      education: String(formData.get("education") ?? ""),
      fieldOfStudy: String(formData.get("fieldOfStudy") ?? ""),
      university: String(formData.get("university") ?? ""),
      graduationYear: String(formData.get("graduationYear") ?? ""),
      yearsExperience: String(formData.get("yearsExperience") ?? ""),
      businessAreas: String(formData.get("businessAreas") ?? ""),
      portfolioUrl: String(formData.get("portfolioUrl") ?? ""),
      motivation: String(formData.get("motivation") ?? ""),
      consent: String(formData.get("consent") ?? ""),
      token: String(formData.get("token") ?? ""),
    };

    const parsed = jobApplicationSchema.safeParse(text);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const cvField = formData.get("cv");
    if (!(cvField instanceof File) || cvField.size === 0) {
      return badRequest("Please attach your CV");
    }
    if (cvField.size > MAX_CV_BYTES) {
      return badRequest("CV must be 5 MB or smaller");
    }

    const ext = cvField.name.toLowerCase().match(/\.[a-z0-9]+$/u)?.[0] ?? "";
    const typeOk = ALLOWED_CV_TYPES.has(cvField.type);
    const extOk = ALLOWED_CV_EXTENSIONS.includes(ext);
    if (!typeOk && !extOk) {
      return badRequest("CV must be a PDF, DOC, or DOCX file");
    }

    const captchaValid = await verifyRecaptcha(parsed.data.token);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 403 }
      );
    }

    const data = parsed.data;
    const fullName = sanitizeInput(data.fullName);
    const location = sanitizeInput(data.location);
    const fieldOfStudy = sanitizeInput(data.fieldOfStudy);
    const university = sanitizeInput(data.university);
    const motivation = sanitizeInput(data.motivation);
    const portfolio = data.portfolioUrl ? sanitizeInput(data.portfolioUrl) : "";

    const businessAreas = (data.businessAreas ?? "")
      .split(",")
      .map((entry) => sanitizeInput(entry))
      .filter(Boolean);

    const education = sanitizeInput(data.education);
    const yearsLabel = sanitizeInput(data.yearsExperience);

    const buf = Buffer.from(await cvField.arrayBuffer());
    const safeFilename = `${fullName.replace(/[^a-zA-Z0-9-_]+/gu, "_")}-CV${ext || ".pdf"}`;

    await sendEmail({
      to: HR_INBOX,
      replyTo: data.email,
      subject: `[Career] ${data.position} — ${fullName}`,
      html: `
        <h2>New Application — ${escapeHtml(data.position)}</h2>
        <p>A new candidate applied via the SusNex website.</p>

        <h3>Candidate</h3>
        <p>
          <strong>Full name:</strong> ${escapeHtml(fullName)}<br/>
          <strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a><br/>
          <strong>Phone:</strong> ${escapeHtml(data.phone)}<br/>
          <strong>Current location:</strong> ${escapeHtml(location)}
        </p>

        <h3>Education</h3>
        <p>
          <strong>Degree:</strong> ${escapeHtml(education)}<br/>
          <strong>Field of study:</strong> ${escapeHtml(fieldOfStudy)}<br/>
          <strong>Institution:</strong> ${escapeHtml(university)}<br/>
          <strong>Graduation year:</strong> ${escapeHtml(data.graduationYear)}
        </p>

        <h3>Experience</h3>
        <p>
          <strong>Years of experience:</strong> ${escapeHtml(yearsLabel)}<br/>
          <strong>Industry exposure:</strong> ${
            businessAreas.length > 0
              ? businessAreas.map((a) => escapeHtml(a)).join(", ")
              : "Not specified"
          }<br/>
          <strong>Portfolio / LinkedIn:</strong> ${
            portfolio
              ? `<a href="${escapeHtml(portfolio)}">${escapeHtml(portfolio)}</a>`
              : "Not provided"
          }
        </p>

        <h3>Why SusNex</h3>
        <p>${escapeHtml(motivation).replace(/\n/g, "<br/>")}</p>

        <hr/>
        <p style="font-size:12px;color:#666">
          CV attached as <strong>${escapeHtml(safeFilename)}</strong>
          (${(cvField.size / 1024).toFixed(0)} KB,
          ${escapeHtml(cvField.type || ext.replace(".", "").toUpperCase())}).
          Submitted from IP <code>${escapeHtml(ip)}</code>.
        </p>
      `,
      attachments: [
        {
          filename: safeFilename,
          content: buf,
          contentType: cvField.type || "application/octet-stream",
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch {
    return serverError();
  }
}
