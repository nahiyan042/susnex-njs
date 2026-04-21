import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { rateLimit } from "@/lib/rate-limit";
import { subscribeToNewsletter } from "@/lib/brevo";
import {
  parseJsonBody,
  tooManyRequests,
  serverError,
} from "@/lib/api-helpers";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const { ok } = rateLimit(`newsletter:${ip}`, 3);
    if (!ok) return tooManyRequests();

    const body = await parseJsonBody(req);
    if (body === null) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, token } = parsed.data;

    const captchaValid = await verifyRecaptcha(token);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 403 }
      );
    }

    await subscribeToNewsletter(email);

    return NextResponse.json({ success: true });
  } catch {
    return serverError();
  }
}
