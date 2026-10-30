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

  if (status === "success") {
    return (
      <div role="status">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">You’re on the list.</h2>
        <p className="mt-4 text-lg text-black/70">We’ll email you when Nish AI is ready for you. Thanks for being here early.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} aria-busy={status === "submitting"}>
      <label htmlFor="waitlist-email" className="block text-3xl font-semibold tracking-tight sm:text-5xl">
        Be first to hear when we launch.
      </label>
      <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="you@company.com"
          aria-describedby="waitlist-note waitlist-message"
          className="min-w-0 flex-1 rounded-md border border-black/15 bg-white px-4 py-3 text-base outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
        />
        <button
          disabled={status === "submitting"}
          className="rounded-md bg-purple-200 px-5 py-3 text-sm transition-colors hover:bg-purple-300 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? "Joining…" : "Join the waitlist ↗"}
        </button>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p id="waitlist-note" className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-black/50">
        By joining, you agree to receive emails about Nish AI’s launch and early access. Request removal anytime through
        our <a href="/contact" className="underline">contact page</a>.
      </p>
      <p id="waitlist-message" role="alert" className="mt-3 text-sm text-red-700">{message}</p>
    </form>
  );
}
