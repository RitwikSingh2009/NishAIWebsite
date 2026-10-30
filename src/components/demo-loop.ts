"use client";
import { useEffect, useRef, useState } from "react";

// Drives the looping product demos: type `length` steps → show suggestion → accept → hold → restart.
export type Phase = "typing" | "suggest" | "accepted";

const PAUSE_MS = 500;
const SUGGEST_MS = 1500;
const HOLD_MS = 2400;

// `enabled` = false freezes the demo (so it can fade out intact); re-enabling restarts it from the top.
export function useDemoLoop(length: number, stepMs = 45, enabled = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [state, setState] = useState<{ count: number; phase: Phase }>({ count: 0, phase: "typing" });

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (enabled) setState({ count: 0, phase: "typing" });
  }, [enabled]);

  useEffect(() => {
    if (!visible || !enabled || reducedMotion) return;
    const { count, phase } = state;
    const [next, delay]: [typeof state, number] =
      phase === "typing" && count < length ? [{ count: count + 1, phase }, stepMs]
      : phase === "typing" ? [{ count, phase: "suggest" }, PAUSE_MS]
      : phase === "suggest" ? [{ count, phase: "accepted" }, SUGGEST_MS]
      : [{ count: 0, phase: "typing" }, HOLD_MS];
    const id = setTimeout(() => setState(next), delay);
    return () => clearTimeout(id);
  }, [state, visible, enabled, reducedMotion, length, stepMs]);

  if (reducedMotion) return { ref, count: length, phase: "accepted" as Phase, progress: 1 };
  return { ref, ...state, progress: length ? state.count / length : 1 };
}
