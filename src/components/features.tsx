"use client";
import { FactCard, TypingText, appCard, appPanel, factGreen } from "@/components/app-ui";
import { useEffect, useRef, useState } from "react";
import { useDemoLoop } from "@/components/demo-loop";

type GraphicProps = { active?: boolean };

const features = [
  {
    title: "Learns your voice",
    body: "Nish learns from past writing and improves automatically through the OS accessibility API.",
    Graphic: VoiceGraphic,
  },
  {
    title: "Confidence-weighted suggestions",
    body: "Nish provides ghost-text using relevant memories and doesn’t interrupt when confidence is low.",
    Graphic: ConfidenceGraphic,
  },
  {
    title: "Infinite memory",
    body: "Nish stores useful facts and context so it can recall them when they’re relevant.",
    Graphic: MemoryGraphic,
  },
];

export function Features() {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLDivElement | null)[]>([]);

  // Only the row crossing the middle of the viewport shows its demo; the others stay hidden.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(rows.current.indexOf(entry.target as HTMLDivElement));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    rows.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F1EEF9] px-4 py-24 text-left sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {features.map(({ title, body, Graphic }, i) => {
          const shown = active === i;
          return (
            <div
              key={title}
              ref={(el) => {
                rows.current[i] = el;
              }}
              className="grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16"
            >
              <div className={`transition-opacity duration-500 ${shown ? "opacity-100" : "opacity-30"}`}>
                <p className="text-sm font-semibold text-orange-500">{String(i + 1).padStart(2, "0")} /</p>
                <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight sm:text-4xl">{title}</h3>
                <p className="mt-5 max-w-xl text-lg text-black/70 sm:text-xl">{body}</p>
              </div>
              <div
                aria-hidden="true"
                className={`transition-all duration-500 ease-out lg:order-first ${shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
              >
                <Graphic active={shown} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const bars = [30, 55, 40, 75, 60, 90, 45, 70, 100, 65, 50, 80, 35, 60, 85, 55, 40, 70, 30, 50];
const sources = [
  { app: "Mail", text: "Thanks — looping in Rain here." },
  { app: "Slack", text: "ship it 🚀" },
  { app: "Notes", text: "Q4 goals: launch, hire, iterate" },
];

function VoiceGraphic({ active = true }: GraphicProps) {
  // Each "step" reveals one past-writing source; the suggest/accepted phases build the profile.
  const { ref, count, phase } = useDemoLoop(sources.length, 700, active);
  const learned = phase !== "typing";
  return (
    <div ref={ref} className={appPanel}>
      <div className="space-y-2">
        {sources.map((s, i) => (
          <div
            key={s.app}
            className={`flex items-center gap-3 rounded-xl bg-[#1c1f29] px-4 py-3 text-sm text-white ring-1 ring-white/5 transition-all duration-500 ${i < count ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
          >
            <span className="w-12 shrink-0 text-[10px] font-semibold tracking-wider text-white/40">{s.app.toUpperCase()}</span>
            <span className="truncate">{s.text}</span>
          </div>
        ))}
      </div>
      <div className="my-4 flex justify-center text-white/30">↓</div>
      <div className={appCard}>
        <div className="flex h-14 items-center justify-center gap-1">
          {bars.map((h, i) => (
            <span
              key={i}
              className={`w-1.5 rounded-full transition-all duration-500 ${phase === "accepted" ? "bg-[#6cc495]" : "bg-[#3d457f]"}`}
              style={{ height: learned ? `${h}%` : "8%", transitionDelay: `${i * 25}ms` }}
            />
          ))}
        </div>
        <p className="mt-3 text-center text-[10px] font-semibold tracking-wider text-white/40">
          {phase === "accepted" ? "VOICE PROFILE UPDATED" : "YOUR VOICE PROFILE"}
        </p>
      </div>
    </div>
  );
}

const confident = { typed: "Let’s meet Thursday to finalize", ghost: " the launch plan." };
const unsure = { typed: "I was thinking we could" };

function ConfidenceGraphic({ active = true }: GraphicProps) {
  const high = useDemoLoop(confident.typed.length, 45, active);
  const low = useDemoLoop(unsure.typed.length, 45, active);
  return (
    <div className={`${appPanel} space-y-3`}>
      <div ref={high.ref} className={appCard}>
        <div className="text-base sm:text-lg">
          <TypingText {...confident} count={high.count} phase={high.phase} />
        </div>
        <Meter value={92} progress={high.progress} label={high.phase === "typing" ? "Thinking…" : "Shown"} strong />
      </div>
      <div ref={low.ref} className={appCard}>
        <div className="text-base sm:text-lg">
          <TypingText {...unsure} count={low.count} phase={low.phase} />
        </div>
        <Meter value={31} progress={low.progress} label={low.phase === "typing" ? "Thinking…" : "Stays quiet"} />
      </div>
    </div>
  );
}

function Meter({ value, progress, label, strong }: { value: number; progress: number; label: string; strong?: boolean }) {
  const shown = Math.round(value * progress);
  return (
    <div className="mt-4 flex items-center gap-3 text-xs">
      <div className="h-1.5 flex-1 rounded-full bg-white/10">
        <div
          className="h-full rounded-full transition-[width] duration-300"
          style={{ width: `${shown}%`, backgroundColor: strong ? factGreen : "rgb(255 255 255 / 0.2)" }}
        />
      </div>
      <span className="w-28 shrink-0 text-right tabular-nums text-white/40">
        {shown}% · {label}
      </span>
    </div>
  );
}

const reminder = { typed: "Quick reminder that the launch is", ghost: " this Friday, Nov 7." };

function MemoryGraphic({ active = true }: GraphicProps) {
  const { ref, count, phase } = useDemoLoop(reminder.typed.length, 45, active);
  return (
    <div ref={ref} className={`${appPanel} space-y-3`}>
      <FactCard date="Oct 24" capture="Launch moved to Friday. From: Rain Ren" active={phase !== "typing"}>
        The product launch was moved to Friday, November 7.
      </FactCard>
      <FactCard date="Sep 12">Ritwik Singh is the CTO and owns the release checklist.</FactCard>
      <div className={appCard}>
        <div className="text-base sm:text-lg">
          <TypingText {...reminder} count={count} phase={phase} />
        </div>
      </div>
    </div>
  );
}
