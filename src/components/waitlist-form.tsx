"use client";
import { FormEvent, useRef, useState } from "react";
import { joinWaitlist } from "@/lib/waitlist";

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const pending = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    pending.current = true;
    setStatus("submitting");
    setMessage("");
    try {
      await joinWaitlist(String(data.get("email") || ""), String(data.get("website") || ""));
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error && error.name !== "AbortError" && error.name !== "TypeError" ? error.message : "Connection interrupted. Please try again.");
    } finally {
      pending.current = false;
    }
  }
  return <div id="waitlist" className="scroll-mt-32">
    {status === "success" ? <div role="status" className="border-4 border-black bg-lime-200 p-6 brutal-shadow"><h2 className="text-2xl font-black">You’re on the list.</h2><p className="mt-2 text-sm">We’ll email you when Nish AI is ready for you. Thanks for being here early.</p></div> :
      <form onSubmit={submit} aria-busy={status === "submitting"}>
        <label htmlFor="waitlist-email" className="mb-2 block text-sm font-black">Be first to hear when we launch.</label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input id="waitlist-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" aria-describedby="waitlist-note waitlist-message" className="min-w-0 flex-1 rounded-none border-2 border-black bg-white px-4 py-4 text-base outline-offset-4 focus:outline-cyan-600" />
          <button disabled={status === "submitting"} className="border-2 border-black bg-lime-300 px-6 py-4 text-sm font-black uppercase brutal-shadow-interactive disabled:cursor-wait disabled:bg-zinc-200">{status === "submitting" ? "Joining…" : "Join the waitlist ↗"}</button>
        </div>
        <div className="hidden" aria-hidden="true"><label htmlFor="website">Leave this empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <p id="waitlist-note" className="mt-4 text-xs leading-relaxed text-zinc-500">By joining, you agree to receive emails about Nish AI’s launch and early access. Your email is used for these updates. Request removal anytime through our <a href="/contact" className="underline">contact page</a>.</p>
        <p id="waitlist-message" role="alert" className="mt-3 text-sm font-bold text-red-700">{message}</p>
      </form>}
  </div>;
}
