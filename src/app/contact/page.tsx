"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded-md border border-black/15 bg-white px-4 py-3 text-base outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setMessage("Message sent. We’ll get back to you shortly.");
        form.reset();
      } else {
        setMessage("Submission failed. Please try again.");
      }
    } catch {
      setMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="px-4 pt-24 pb-24 sm:pt-32">
      <div className="mx-auto max-w-xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-6xl">
          Get in <span className="font-display font-normal italic text-purple-500">touch</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-12 space-y-5">
          {/* Honeypot spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Name</label>
            <input id="name" type="text" name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email</label>
            <input id="email" type="email" name="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="How can we help?" className={`${inputClass} resize-none`} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-purple-200 px-5 py-3 text-sm transition-colors hover:bg-purple-300 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>

          <p role="status" className="text-center text-sm text-black/70">{message}</p>
        </form>
      </div>
    </main>
  );
}
