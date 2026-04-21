import { NextRequest, NextResponse } from "next/server";
import { serviceInquirySchema } from "@/lib/schemas";
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
    const { ok } = rateLimit(`inquiry:${ip}`);
    if (!ok) return tooManyRequests();

    const body = await parseJsonBody(req);
    if (body === null) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const parsed = serviceInquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, company, email, serviceInterest, message, token } =
      parsed.data;

    const captchaValid = await verifyRecaptcha(token);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 403 }
      );
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedMessage = sanitizeInput(message);

    await sendEmail({
      to: "ask@susnex.com",
      replyTo: email,
      subject: `[Service Inquiry] ${serviceInterest}`,
      html: `
        <h2>New Service Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitizedName)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Service Interest:</strong> ${escapeHtml(serviceInterest)}</p>
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
