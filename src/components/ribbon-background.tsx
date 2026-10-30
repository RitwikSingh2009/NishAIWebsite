"use client";
import { useEffect, useRef } from "react";

// One soft ribbon per feature row, coiling in loops from one top corner to the opposite bottom corner, so
// consecutive ribbons meet: top-left → bottom-right, top-right → bottom-left, …
// While a row is scrolled through, its ribbon draws along its length in step with scroll (no time-based motion);
// once you move past, it fades and the next takes over.

// Per row: how many loops, and which side they curl toward.
const routes = [
  { loops: 3, curl: 1 },
  { loops: 2, curl: -1 },
  { loops: 3, curl: -1 },
];

// A gently S-curved base line between the corners with a trochoid wrapped around it, like a coiled ribbon
// or cursive "e"s. The loop offset is zero at both ends (whole number of loops), so ribbons meet at the corners.
function buildPath({ loops, curl }: (typeof routes)[number], flip: boolean, width: number, height: number) {
  const [x0, x1] = flip ? [width + 20, -20] : [-20, width + 20];
  const [y0, y1] = [-10, height + 10];
  // Evenly paced base line (uneven speed turns loops into cusps), with a gentle sideways sway
  const base = (t: number) => [x0 + (x1 - x0) * t, y0 + (y1 - y0) * t + Math.sin(2 * Math.PI * t) * height * 0.12];
  // Loops only form when the radius beats the base speed, so size it from the route length
  const radius = Math.min((2.4 * Math.hypot(x1 - x0, y1 - y0)) / (2 * Math.PI * loops), height * 0.3);
  const steps = 600;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const [bx, by] = base(t);
    const [nx, ny] = base(Math.min(1, t + 0.001));
    const [px, py] = base(Math.max(0, t - 0.001));
    const len = Math.hypot(nx - px, ny - py) || 1;
    const [tx, ty] = [(nx - px) / len, (ny - py) / len];
    const [ox, oy] = [-ty * curl, tx * curl];
    const phi = 2 * Math.PI * loops * t;
    const along = -radius * Math.sin(phi);
    const across = radius * 0.8 * (1 - Math.cos(phi));
    const x = bx + tx * along + ox * across;
    const y = by + ty * along + oy * across;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

export function RibbonBackground({ rows }: { rows: React.MutableRefObject<(HTMLElement | null)[]> }) {
  const container = useRef<HTMLDivElement>(null);
  const layers = useRef<(HTMLDivElement | null)[]>([]);
  const paths = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const sizes: string[] = [];
    const update = () => {
      frame = 0;
      const box = container.current?.getBoundingClientRect();
      if (!box) return;
      rows.current.forEach((row, i) => {
        const layer = layers.current[i];
        const path = paths.current[i];
        if (!row || !layer || !path) return;
        const rect = row.getBoundingClientRect();
        layer.style.top = `${rect.top - box.top}px`;
        layer.style.height = `${rect.height}px`;
        const size = `${box.width}x${rect.height}`;
        if (sizes[i] !== size) {
          sizes[i] = size;
          path.setAttribute("d", buildPath(routes[i % routes.length], i % 2 === 1, box.width, rect.height));
        }
        // 0 when the row's top reaches 60% down the viewport, 1 when its bottom does.
        const progress = (window.innerHeight * 0.6 - rect.top) / rect.height;
        path.style.strokeDashoffset = String(1 - Math.min(1, Math.max(0, progress)));
        layer.style.opacity = progress > 0 && progress < 1 ? "1" : "0";
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [rows]);

  return (
    <div ref={container} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {routes.map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            layers.current[i] = el;
          }}
          className="absolute inset-x-0 opacity-0 transition-opacity duration-500"
        >
          <svg className="absolute inset-0 h-full w-full overflow-visible">
            <path
              ref={(el) => {
                paths.current[i] = el;
              }}
              fill="none"
              stroke="#E9E3F8"
              strokeWidth={36}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray="1 1"
              strokeDashoffset={1}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
