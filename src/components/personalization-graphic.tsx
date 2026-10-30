"use client";
import { TypingText, appCard, appPanel } from "@/components/app-ui";
import { useDemoLoop } from "@/components/demo-loop";

const typed = "Hey team, quick update on the launch —";
const ghost = " we’re on track to ship it Friday.";

const traits = [
  { label: "Voice", value: "Warm, direct", fill: 80 },
  { label: "Vocabulary", value: "“ship it”, “quick sync”", fill: 60 },
  { label: "Typing style", value: "Short sentences, em dashes", fill: 66 },
];

export function PersonalizationGraphic() {
  const { ref, count, phase, progress } = useDemoLoop(typed.length);
  return (
    <div ref={ref} aria-hidden="true" className={appPanel}>
      <div className={appCard}>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="mt-5 text-base leading-relaxed sm:text-lg">
          <TypingText typed={typed} ghost={ghost} count={count} phase={phase} />
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-white/40">
          <kbd className={`rounded border px-1.5 py-0.5 transition-colors ${phase === "accepted" ? "border-white/40 bg-white/10 text-white" : "border-white/15"}`}>
            Tab
          </kbd>
          to accept
        </div>
      </div>

      <div className="mt-3 space-y-4 rounded-2xl bg-[#1c1f29] p-5 text-white ring-1 ring-white/5 sm:p-6">
        {traits.map((trait) => (
          <div key={trait.label}>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="font-semibold">{trait.label}</span>
              <span className="truncate text-white/40">{trait.value}</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-[#3d457f] transition-[width] duration-300" style={{ width: `${trait.fill * progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
