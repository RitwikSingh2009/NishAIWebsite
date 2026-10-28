export async function joinWaitlist(email: string, website: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Signups are temporarily unavailable. Please try again soon.");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/rpc/join_waitlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: key },
      body: JSON.stringify({ signup_email: email.trim().toLowerCase(), website }),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("We couldn’t save your signup. Please try again.");
  } finally {
    clearTimeout(timeout);
  }
}
