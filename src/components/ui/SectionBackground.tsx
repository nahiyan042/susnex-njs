"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

interface SectionBackgroundProps {
  lightSrc: string;
  darkSrc: string;
  opacity?: number;
  className?: string;
}

export function SectionBackground({
  lightSrc,
  darkSrc,
  opacity = 0.35,
  className = "",
}: SectionBackgroundProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

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
        const offset = (clamped - 0.5) * 60;
        img.style.transform = `translateY(${offset}px) scale(1.15)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  const src = resolvedTheme === "dark" ? darkSrc : lightSrc;

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <div ref={imgRef} className="absolute inset-[-15%] will-change-transform">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
          quality={75}
        />
      </div>
    </div>
  );
}
