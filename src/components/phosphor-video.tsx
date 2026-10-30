"use client";
import { useEffect, useRef } from "react";

// Pre-rendered loop of the wavy Phosphor effect (scripts/render_phosphor.py), faded at the edges.
const fade = "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)";

export function PhosphorVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) videoRef.current?.pause();
  }, []);

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      poster="/videos/phosphor.jpg"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
      style={{ maskImage: fade, WebkitMaskImage: fade }}
    >
      <source src="/videos/phosphor.webm" type="video/webm" />
      <source src="/videos/phosphor.mp4" type="video/mp4" />
    </video>
  );
}
