"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const rafRef = useRef(0);
  const target = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    const handleMove = (e: PointerEvent) => {
      target.current.x = e.clientX / window.innerWidth;
      target.current.y = e.clientY / window.innerHeight;
      if (!active) setActive(true);
    };

    const handleLeave = () => setActive(false);

    const tick = () => {
      const c = current.current;
      const t = target.current;
      c.x += (t.x - c.x) * 0.09;
      c.y += (t.y - c.y) * 0.09;
      const node = root.current;
      if (node) {
        node.style.setProperty("--mx", `${(c.x * 100).toFixed(2)}%`);
        node.style.setProperty("--my", `${(c.y * 100).toFixed(2)}%`);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="cursor-glow"
      data-active={active ? "true" : "false"}
    />
  );
}
