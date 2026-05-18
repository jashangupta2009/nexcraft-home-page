"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const rafRef = useRef(0);
  const target = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.dataset.cursorReady = "true";

    const handleMove = (e: PointerEvent) => {
      target.current.x = e.clientX / window.innerWidth;
      target.current.y = e.clientY / window.innerHeight;
    };

    const tick = () => {
      const c = current.current;
      const t = target.current;
      c.x += (t.x - c.x) * 0.12;
      c.y += (t.y - c.y) * 0.12;
      root.style.setProperty("--mx", `${(c.x * 100).toFixed(2)}%`);
      root.style.setProperty("--my", `${(c.y * 100).toFixed(2)}%`);
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafRef.current);
      delete root.dataset.cursorReady;
    };
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}
