import { WaitlistForm } from "@/components/waitlist-form";
import logo from "../../public/images/Logo.png";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-12 pt-6 md:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <section>
          <p className="mb-7 inline-block border-2 border-black bg-[#CFB0EB] px-4 py-2 text-xs font-black uppercase tracking-widest brutal-shadow">● Pre-launch · Join the waitlist</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.035em] lg:text-[clamp(3rem,5vw,4.5rem)]">
            <span className="block">Personalized</span>
            <span className="block">writing</span>
            <span className="mt-3 block text-[0.82em] leading-tight tracking-[-0.025em]"><em className="decoration-[#A3C6F0] decoration-[0.06em] underline underline-offset-[0.12em]">wherever</em> you type.</span>
          </h1>
          <p className="mb-8 mt-8 max-w-lg text-lg font-medium leading-relaxed text-zinc-700">Nish is a writing engine tailored to you, built right into your desktop apps. It learns your voice, vocabulary, and typing style, then helps autocomplete your thoughts as you write.</p>
          <WaitlistForm />
        </section>
        <section aria-label="Illustration of Nish AI autocomplete" className="relative pb-5 lg:pl-4">
          <div className="border-4 border-black bg-white brutal-shadow-lg">
            <div aria-hidden="true" className="flex h-9 items-center justify-end border-b-4 border-black bg-[#FFE69C] px-4 text-xs">● ● ○</div>
            <div className="p-6 sm:p-9">
              <p className="mb-8 text-xs uppercase tracking-widest text-zinc-500">A little less tab-switching energy</p>
              <p className="text-2xl font-bold leading-relaxed sm:text-3xl">Let’s bring the team up to speed<span className="bg-[#E1E9FA] text-zinc-500"> on the launch plan and next steps.</span><span aria-hidden="true">▏</span></p>
              <div className="mt-8 flex items-center gap-3 text-xs font-bold text-zinc-500"><kbd className="border-2 border-black px-2 py-1 text-black">Tab ↵</kbd> An idea of what’s coming</div>
            </div>
            <div className="flex items-center gap-4 border-t-4 border-black bg-zinc-100 p-5"><div className="brand-logo h-16 w-16 !bg-transparent"><img src={logo.src} alt="" className="brand-logo-image mix-blend-multiply" /></div><div><p className="text-lg leading-tight"><span className="font-black">Nish AI</span><span className="mx-2 text-zinc-400">—</span><span className="font-display italic text-zinc-700">What does that even mean?</span></p><p className="mt-1 text-sm text-zinc-600">Built for your kind of work. Context makes all the difference.</p></div></div>
          </div>
        </section>
      </div>
      <section aria-label="What we’re building" className="mt-20 grid gap-6 border-t-4 border-black pt-8 md:grid-cols-3">
        {[["01", "LEARNS YOUR VOICE", "Nish learns from past writing and improves automatically through the OS accessibility API."], ["02", "CONFIDENCE-WEIGHTED SUGGESTIONS", "Nish provides ghost-text using relevant memories and doesn’t interrupt when confidence is low."], ["03", "INFINITE MEMORY", "Nish stores useful facts and context so it can recall them when they’re relevant."]].map(([number, title, copy]) => <div key={number}><span className="text-xs font-bold text-zinc-500">{number} /</span><h2 className="mb-2 mt-2 text-lg font-black">{title}</h2><p className="max-w-sm text-sm leading-relaxed text-zinc-600">{copy}</p></div>)}
      </section>
      <footer className="mt-12 flex flex-wrap justify-between gap-3 text-xs font-bold text-zinc-500"><span>© Nish AI LLC</span><span>A little context goes a long way.</span></footer>
    </main>
  );
}
