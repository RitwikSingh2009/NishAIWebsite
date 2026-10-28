import { WaitlistForm } from "@/components/waitlist-form";
import logo from "../../public/images/Logo.png";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-12 pt-6 md:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <section>
          <p className="mb-7 inline-block border-2 border-black bg-purple-300 px-4 py-2 text-xs font-black uppercase tracking-widest brutal-shadow">● Pre-launch · Join the waitlist</p>
          <h1 className="text-5xl font-black uppercase leading-[1.02] tracking-tighter sm:text-7xl">Less typing.<br />More <span className="mt-3 inline-block border-4 border-black bg-cyan-300 px-3 pb-2 brutal-shadow">thinking.</span></h1>
          <p className="mb-8 mt-8 max-w-lg text-lg font-medium leading-relaxed text-zinc-700">Autocomplete that speaks your team’s language. Nish AI is building intelligent writing tools around your terminology, your workflows, and your context.</p>
          <WaitlistForm />
        </section>
        <section aria-label="Illustration of Nish AI autocomplete" className="relative pb-5 lg:pl-4">
          <div className="border-4 border-black bg-white brutal-shadow-lg">
            <div className="flex items-center justify-between border-b-4 border-black bg-yellow-200 px-5 py-4"><span className="text-xs font-black uppercase tracking-widest">Your words. A head start.</span><span aria-hidden="true">● ● ○</span></div>
            <div className="p-6 sm:p-9">
              <p className="mb-8 font-mono text-xs uppercase tracking-widest text-zinc-500">A little less blank-page energy</p>
              <p className="text-2xl font-bold leading-relaxed sm:text-3xl">Let’s bring the team up to speed<span className="bg-cyan-100 text-zinc-500"> on the launch plan and next steps.</span><span aria-hidden="true">▏</span></p>
              <div className="mt-8 flex items-center gap-3 text-xs font-bold text-zinc-500"><kbd className="border-2 border-black px-2 py-1 text-black">Tab ↵</kbd> An idea of what’s coming</div>
            </div>
            <div className="flex items-center gap-4 border-t-4 border-black bg-zinc-100 p-5"><div className="brand-logo h-16 w-16"><img src={logo.src} alt="" className="brand-logo-image" /></div><div><p className="font-black">Built for your kind of work.</p><p className="text-sm text-zinc-600">Context makes all the difference.</p></div></div>
          </div>
          <span className="absolute -bottom-1 right-3 rotate-[-4deg] border-2 border-black bg-lime-300 px-5 py-3 text-sm font-black uppercase brutal-shadow">Big ideas. Fewer keystrokes.</span>
        </section>
      </div>
      <section aria-label="What we’re building" className="mt-20 grid gap-6 border-t-4 border-black pt-8 md:grid-cols-3">
        {[["01", "Your team’s vocabulary", "Suggestions shaped around the language your team actually uses."], ["02", "Context that clicks", "Designed for specialized workflows, beyond generic autocomplete."], ["03", "Privacy by design", "Built with private, self-contained company deployments in mind."]].map(([number, title, copy]) => <div key={number}><span className="font-mono text-xs font-bold text-zinc-500">{number} /</span><h2 className="mb-2 mt-2 text-lg font-black">{title}</h2><p className="max-w-sm text-sm leading-relaxed text-zinc-600">{copy}</p></div>)}
      </section>
      <footer className="mt-12 flex flex-wrap justify-between gap-3 text-xs font-bold text-zinc-500"><span>© Nish AI LLC</span><span>A little context goes a long way.</span></footer>
    </main>
  );
}
