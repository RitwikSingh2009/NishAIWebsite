"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
        setSuccessMessage("Message sent successfully! We will get back to you shortly.");
        (e.target as HTMLFormElement).reset();
      } else {
        setSuccessMessage("Submission failed. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen w-full px-6 pb-20 overflow-hidden">
      <div className="max-w-xl mx-auto space-y-8">
        
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="border-4 border-black bg-white p-6 brutal-shadow max-w-sm"
        >
          <h1 className="font-display text-4xl font-medium uppercase tracking-tighter">Contact Us</h1>
          <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mt-1">Get in touch with our team</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 100, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ type: "spring", damping: 14 }}
          onSubmit={handleSubmit} 
          className="space-y-6 bg-white border-4 border-black p-8 brutal-shadow-lg"
        >
          {/* Honeypot Spam Protection */}
          <input type="checkbox" name="botcheck" className="hidden" />

          <div>
            <label className="block text-sm font-black uppercase tracking-tight mb-2">Full Name</label>
            <motion.input 
              whileFocus={{ scale: 1.01 }}
              type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-3 border-2 border-black rounded-none text-black font-bold focus:outline-none focus:bg-[#E1E9FA] placeholder-zinc-400 text-sm shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors" />
          </div>

          <div>
            <label className="block text-sm font-black uppercase tracking-tight mb-2">Email Address</label>
            <motion.input 
              whileFocus={{ scale: 1.01 }}
              type="email" name="email" required placeholder="name@company.com" className="w-full px-4 py-3 border-2 border-black rounded-none text-black font-bold focus:outline-none focus:bg-[#F0E5FA] placeholder-zinc-400 text-sm shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors" />
          </div>

          <div>
            <label className="block text-sm font-black uppercase tracking-tight mb-2">Message</label>
            <motion.textarea 
              whileFocus={{ scale: 1.01 }}
              name="message" required rows={4} placeholder="How can we help your team?" className="w-full px-4 py-3 border-2 border-black rounded-none text-black font-bold focus:outline-none focus:bg-[#EFF5D9] resize-none placeholder-zinc-400 text-sm shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors" />
          </div>

          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#EAB1CF] border-4 border-black font-black uppercase tracking-widest text-sm brutal-shadow-interactive cursor-pointer disabled:bg-zinc-300"
          >
            {isSubmitting ? "Sending..." : "Submit Message"}
          </motion.button>

          {successMessage && (
            <motion.p 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-center text-xs font-black uppercase tracking-wider text-[#8646BE] bg-zinc-100 p-2 border-2 border-black mt-4"
            >
              {successMessage}
            </motion.p>
          )}
        </motion.form>
      </div>
    </main>
  );
}
