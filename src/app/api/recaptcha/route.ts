import { NextRequest, NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { rateLimit } from "@/lib/rate-limit";
import { parseJsonBody, tooManyRequests, serverError } from "@/lib/api-helpers";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const { ok } = rateLimit(`recaptcha:${ip}`, 10);
    if (!ok) return tooManyRequests();

    const body = await parseJsonBody(req);
    if (body === null || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { token } = body as { token?: string };
    if (!token || typeof token !== "string") {
      return NextResponse.json({ error: "Token required" }, { status: 400 });
    }

    const valid = await verifyRecaptcha(token);
    return NextResponse.json({ success: valid });
  } catch {
    return serverError();
  }
}
