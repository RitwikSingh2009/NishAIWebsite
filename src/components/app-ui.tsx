import type { Phase } from "@/components/demo-loop";

// Styles sampled from the Nish desktop app so marketing graphics match the real UI.
export const appPanel = "rounded-3xl bg-[#121215] p-4 sm:p-6";
export const appCard = "rounded-2xl bg-[#1b1d24] p-5 text-white ring-1 ring-white/5 sm:p-6";
export const factGreen = "#6cc495";

export function Ghost({ children }: { children: React.ReactNode }) {
  return <span className="animate-ghost-in italic text-[#3d457f]">{children}</span>;
}

export function Caret() {
  return <span className="mx-px inline-block h-5 w-0.5 translate-y-1 animate-pulse bg-white" />;
}

// Typed text + ghost completion. The invisible copy reserves the final size so cards don't jump.
export function TypingText({ typed, ghost, count, phase }: { typed: string; ghost?: string; count: number; phase: Phase }) {
  return (
    <span className="grid">
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {typed}
        {ghost}
      </span>
      <span className="col-start-1 row-start-1">
        {typed.slice(0, count)}
        {phase === "accepted" && ghost && <span className="animate-accept">{ghost}</span>}
        <Caret />
        {phase === "suggest" && ghost && <Ghost>{ghost}</Ghost>}
      </span>
    </span>
  );
}

export function FactCard({ date, children, capture, active }: { date: string; children: React.ReactNode; capture?: string; active?: boolean }) {
  return (
    <div className={`rounded-xl bg-[#1c1f29] p-4 text-white ring-1 transition-shadow duration-500 ${active ? "ring-[#6cc495]/60" : "ring-white/5"}`}>
      <div className="flex items-center justify-between text-[10px] font-semibold tracking-wider">
        <span className="rounded bg-[#6cc495]/10 px-1.5 py-0.5 text-[#6cc495]">FACT</span>
        <span className="font-normal tracking-normal text-white/40">{date}</span>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed">{children}</p>
      {capture && (
        <p className="mt-3 truncate rounded bg-white/5 px-2 py-1 text-[10px] text-white/40">
          <span className="font-semibold tracking-wider">CAPTURE</span> {capture}
        </p>
      )}
    </div>
  );
}
