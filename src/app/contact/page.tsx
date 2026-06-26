"use client";

import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSuccessMessage("Message sent! We'll reach out shortly.");
        (e.target as HTMLFormElement).reset();
      } else {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-emerald-50/50 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-3">
            Contact Us
          </h1>
          <p className="text-slate-600 font-medium">
            Custom project in mind? Drop us a line.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-emerald-100 p-8 rounded-[2rem] shadow-xl">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">Full Name</label>
            <input type="text" name="name" required placeholder="Your name" className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder-slate-400 text-sm" />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">Email</label>
            <input type="email" name="email" required placeholder="you@company.com" className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder-slate-400 text-sm" />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">Message</label>
            <textarea name="message" required rows={4} placeholder="How can we help?" className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder-slate-400 text-sm" />
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-2xl bg-emerald-800 hover:bg-emerald-700 disabled:bg-slate-200 text-white font-bold tracking-widest uppercase transition-all shadow-lg active:scale-[0.98] text-sm cursor-pointer">
            {isSubmitting ? "Sending..." : "Submit Message"}
          </button>

          {successMessage && <p className="text-center text-sm font-bold text-emerald-600 mt-4">{successMessage}</p>}
        </form>
      </div>
    </main>
  );
}