"use client";

import { useEffect, useRef, useState } from "react";

function getCursorTheme(target: HTMLElement | null): "light" | "dark" {
  let current = target;

  while (current && current !== document.body) {
    const background = window.getComputedStyle(current).backgroundColor;
    if (background && background !== "rgba(0, 0, 0, 0)" && background !== "transparent") {
      const match = background.match(/\d+(?:\.\d+)?/g);
      if (match && match.length >= 3) {
        const [r, g, b] = match.slice(0, 3).map(Number);
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        return luminance > 0.62 ? "light" : "dark";
      }
    }
    current = current.parentElement;
  }

  return "light";
}

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.body.classList.add("has-cursor");

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let hover = false;
    let raf = 0;

    const applyTheme = (target: HTMLElement | null) => {
      const theme = getCursorTheme(target);
      const color = theme === "dark" ? "#f3f1ec" : "#121212";

      if (dot.current) {
        dot.current.style.background = color;
      }

      if (ring.current) {
        ring.current.style.borderColor = color;
      }
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;

      if (dot.current) {
        dot.current.style.left = `${x}px`;
        dot.current.style.top = `${y}px`;
      }

      const target = document.elementFromPoint(x, y) as HTMLElement | null;
      applyTheme(target);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      hover = Boolean(
        t?.closest("a, button, [role='button'], .cursor-grow"),
      );
      dot.current?.classList.toggle("is-hover", hover);
      ring.current?.classList.toggle("is-hover", hover);
      applyTheme(t as HTMLElement | null);
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) {
        ring.current.style.left = `${rx}px`;
        ring.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    applyTheme(document.body);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
