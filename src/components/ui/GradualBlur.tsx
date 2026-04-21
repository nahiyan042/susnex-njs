"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface GradualBlurProps {
  children: ReactNode;
  className?: string;
  blurMax?: number;
  threshold?: number;
}

export function GradualBlur({
  children,
  className = "",
  blurMax = 8,
  threshold = 0.3,
}: GradualBlurProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.filter = "none";
      el.style.opacity = "1";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const ratio = entry.intersectionRatio;
          const blur = Math.max(0, blurMax * (1 - ratio / threshold));
          const opacity = Math.min(1, ratio / threshold);
          (entry.target as HTMLElement).style.filter =
            blur > 0.1 ? `blur(${blur}px)` : "none";
          (entry.target as HTMLElement).style.opacity = String(opacity);
        }
      },
      {
        threshold: Array.from({ length: 20 }, (_, i) => i / 19),
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [blurMax, threshold]);

  return (
    <div ref={ref} className={className} style={{ filter: `blur(${blurMax}px)`, opacity: 0, willChange: "filter, opacity" }}>
      {children}
    </div>
  );
}
