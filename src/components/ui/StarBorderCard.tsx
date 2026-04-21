"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";

interface StarBorderCardProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  color?: string;
  radius?: string;
}

export function StarBorderCard({
  children,
  className = "",
  speed = 6,
  color = "var(--color-green)",
  radius = "1rem",
}: StarBorderCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const vars = {
    "--star-speed": `${speed}s`,
    "--star-color": color,
    "--star-radius": radius,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`star-border-card group relative overflow-hidden ${className}`}
      style={{ ...vars, borderRadius: radius }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ borderRadius: radius }}
      >
        <div className="star-border-gradient absolute inset-[-2px] animate-[star-spin_var(--star-speed)_linear_infinite] rounded-[inherit]" />
      </div>
      <div
        className="relative z-10 h-full rounded-[inherit] bg-bg-card"
        style={{ borderRadius: `calc(${radius} - 2px)` }}
      >
        {children}
      </div>
    </div>
  );
}
