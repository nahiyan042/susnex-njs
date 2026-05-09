"use client";

import { useEffect, useRef } from "react";

interface SectionBackgroundProps {
  lightSrc?: string;
  darkSrc?: string;
  opacity?: number;
  className?: string;
  variant?:
    | "solar-grid"
    | "leaf-canopy"
    | "circular-economy"
    | "water-flow"
    | "hex-bloom"
    | "eco-nodes";
}

export function SectionBackground({
  lightSrc,
  darkSrc,
  opacity = 0.35,
  className = "",
  variant = "hex-bloom",
}: SectionBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const motifRef = useRef<HTMLDivElement>(null);

  // Keep backward compatibility for existing SectionBackground calls.
  void lightSrc;
  void darkSrc;

  useEffect(() => {
    const container = containerRef.current;
    const motif = motifRef.current;
    if (!container || !motif) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        const offset = (clamped - 0.5) * 26;
        motif.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <div
        ref={motifRef}
        className="absolute inset-[-10%] will-change-transform"
        style={getMotifBackground(variant)}
      />
    </div>
  );
}

function getMotifBackground(variant: NonNullable<SectionBackgroundProps["variant"]>) {
  const vignette =
    "linear-gradient(to bottom, color-mix(in srgb, black 8%, transparent), transparent 42%, color-mix(in srgb, black 32%, transparent))";

  const patterns: Record<NonNullable<SectionBackgroundProps["variant"]>, string> = {
    "solar-grid":
      "repeating-linear-gradient(60deg, color-mix(in srgb, var(--color-green) 16%, transparent) 0 1px, transparent 1px 40px), repeating-linear-gradient(-60deg, color-mix(in srgb, var(--color-green-light) 12%, transparent) 0 1px, transparent 1px 40px), radial-gradient(circle at 22% 18%, color-mix(in srgb, var(--color-green-light) 30%, transparent) 0 140px, transparent 240px)",
    "leaf-canopy":
      "radial-gradient(ellipse at 14% 26%, color-mix(in srgb, var(--color-green-light) 34%, transparent) 0 80px, transparent 82px), radial-gradient(ellipse at 34% 68%, color-mix(in srgb, var(--color-green) 28%, transparent) 0 98px, transparent 100px), radial-gradient(ellipse at 78% 24%, color-mix(in srgb, var(--color-green-dark) 25%, transparent) 0 110px, transparent 112px), repeating-linear-gradient(30deg, color-mix(in srgb, var(--color-green) 13%, transparent) 0 1px, transparent 1px 26px)",
    "circular-economy":
      "radial-gradient(circle at 20% 40%, transparent 0 52px, color-mix(in srgb, var(--color-green) 20%, transparent) 53px 56px, transparent 57px 94px, color-mix(in srgb, var(--color-green-light) 18%, transparent) 95px 98px, transparent 99px), radial-gradient(circle at 76% 66%, transparent 0 44px, color-mix(in srgb, var(--color-green) 22%, transparent) 45px 49px, transparent 50px 84px, color-mix(in srgb, var(--color-green-dark) 19%, transparent) 85px 88px, transparent 89px), radial-gradient(circle at 48% 20%, color-mix(in srgb, var(--color-green-light) 24%, transparent) 0 100px, transparent 160px)",
    "water-flow":
      "repeating-radial-gradient(ellipse at 30% 70%, color-mix(in srgb, var(--color-green-light) 14%, transparent) 0 3px, transparent 3px 24px), repeating-linear-gradient(175deg, color-mix(in srgb, var(--color-green) 15%, transparent) 0 2px, transparent 2px 20px), radial-gradient(circle at 84% 24%, color-mix(in srgb, var(--color-green) 24%, transparent) 0 140px, transparent 220px)",
    "hex-bloom":
      "radial-gradient(circle at 18% 16%, color-mix(in srgb, var(--color-green-light) 34%, transparent) 0 120px, transparent 200px), radial-gradient(circle at 82% 70%, color-mix(in srgb, var(--color-green) 28%, transparent) 0 140px, transparent 220px), repeating-linear-gradient(60deg, color-mix(in srgb, var(--color-green) 18%, transparent) 0 1px, transparent 1px 34px)",
    "eco-nodes":
      "radial-gradient(circle at 12% 34%, color-mix(in srgb, var(--color-green) 34%, transparent) 0 12px, transparent 13px), radial-gradient(circle at 42% 58%, color-mix(in srgb, var(--color-green-light) 34%, transparent) 0 10px, transparent 11px), radial-gradient(circle at 72% 26%, color-mix(in srgb, var(--color-green-dark) 34%, transparent) 0 13px, transparent 14px), radial-gradient(circle at 90% 78%, color-mix(in srgb, var(--color-green) 30%, transparent) 0 9px, transparent 10px), linear-gradient(120deg, transparent 0%, color-mix(in srgb, var(--color-green) 15%, transparent) 46%, transparent 100%), repeating-linear-gradient(52deg, color-mix(in srgb, var(--color-green-light) 15%, transparent) 0 1px, transparent 1px 30px)",
  };

  return { background: `${patterns[variant]}, ${vignette}` };
}
