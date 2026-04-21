const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
const SCORE_THRESHOLD = 0.7;
const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET) {
    if (process.env.NODE_ENV === "development") {
      return token === "dev-bypass";
    }
    return false;
  }

  try {
    const body = new URLSearchParams({
      secret: RECAPTCHA_SECRET,
      response: token,
    });

    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!res.ok) return false;

    const data = await res.json();
    return data.success === true && data.score >= SCORE_THRESHOLD;
  } catch {
    return false;
  }
}
