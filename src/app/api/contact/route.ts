import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { rateLimit } from "@/lib/rate-limit";
import { escapeHtml, sanitizeInput } from "@/lib/sanitize";
import { sendEmail } from "@/lib/mailer";
import {
  parseJsonBody,
  tooManyRequests,
  serverError,
} from "@/lib/api-helpers";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const { ok } = rateLimit(`contact:${ip}`);
    if (!ok) return tooManyRequests();

    const body = await parseJsonBody(req);
    if (body === null) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message, token } = parsed.data;

    const captchaValid = await verifyRecaptcha(token);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 403 }
      );
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    await sendEmail({
      to: "ask@susnex.com",
      replyTo: email,
      subject: `[Website Contact] ${sanitizedSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitizedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(sanitizedSubject)}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(sanitizedMessage).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return serverError();
  }
}
