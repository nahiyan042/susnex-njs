const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_NEWSLETTER_LIST_ID;

export async function subscribeToNewsletter(
  email: string
): Promise<boolean> {
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    return false;
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [Number(BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    return res.ok || res.status === 204;
  } catch {
    return false;
  }
}
