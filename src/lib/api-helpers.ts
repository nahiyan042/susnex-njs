import { NextRequest, NextResponse } from "next/server";

const MAX_BODY_SIZE = 16_384; // 16 KB

export function methodNotAllowed() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export function serverError() {
  return NextResponse.json(
    { error: "Something went wrong. Please try again later." },
    { status: 500 }
  );
}

export function tooManyRequests() {
  return NextResponse.json(
    { error: "Too many requests. Please try again later." },
    { status: 429, headers: { "Retry-After": "900" } }
  );
}

export async function parseJsonBody(req: NextRequest): Promise<unknown | null> {
  const contentType = req.headers.get("content-type");
  if (!contentType?.includes("application/json")) return null;

  const contentLength = req.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_BODY_SIZE) return null;

  try {
    return await req.json();
  } catch {
    return null;
  }
}
