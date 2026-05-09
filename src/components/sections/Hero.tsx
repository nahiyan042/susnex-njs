"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Antigravity = dynamic(
  () => import("@/components/animations/Antigravity").then((m) => m.Antigravity),
  { ssr: false }
);

// Curated sustainability palettes — sampled per particle.
// Light theme: deeper natural tones that read cleanly on white.
const ANTIGRAVITY_PALETTE_LIGHT = [
  "#5c7c35", // deep moss
  "#7ba844", // leaf
  "#89b54f", // brand green
  "#a8d06b", // light green
  "#c8d957", // lime
  "#e6c34a", // honey
  "#f4d35e", // sun yellow
  "#b89a5e", // warm earth
];

// Dark theme: brighter, glowing tones that pop on a near-black field.
const ANTIGRAVITY_PALETTE_DARK = [
  "#74c047", // vivid green
  "#a8d06b", // light green
  "#c8d957", // lime
  "#e8d774", // soft yellow
  "#f4d35e", // sun yellow
  "#ffeb99", // cream
  "#bcd97a", // sage glow
  "#7ba844", // leaf
];

const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/f31275c2625b48398f3a12669261c514@susnex.com?anonymous&ep=plink";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    const lottieFile = isDark
      ? "/lottie/OVF9b8PYIK-1-dark.json"
      : "/lottie/OVF9b8PYIK-1.json";

    fetch(lottieFile)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => {});
  }, [isDark]);

  return (
    <section className="hero-section relative flex min-h-[100svh] w-full max-w-full flex-col items-center overflow-hidden pt-32 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      {/* Background Layer — Antigravity 3D particle field */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at 50% 35%, color-mix(in srgb, var(--color-green-mint) 35%, transparent) 0%, transparent 60%), var(--bg-primary)"
              : "radial-gradient(ellipse at 50% 35%, color-mix(in srgb, var(--color-green-mint) 55%, transparent) 0%, transparent 60%), var(--bg-primary)",
          }}
        />
        <Antigravity
          count={700}
          colors={isDark ? ANTIGRAVITY_PALETTE_DARK : ANTIGRAVITY_PALETTE_LIGHT}
          particleShape="sphere"
          particleSize={0.85}
          ringRadius={20}
          magnetRadius={70}
          waveAmplitude={2.6}
          waveSpeed={0.32}
          rotationSpeed={0.09}
          pulseSpeed={1.5}
          lerpSpeed={0.04}
          mouseInfluence={0.55}
          autoAnimate
        />
      </div>

      {/* Content — fills the safe area between top padding and bottom padding,
          and self-centers there so it can never cross above into the header. */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 text-center sm:px-6">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-2xl font-bold leading-snug tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl"
        >
          From{" "}
          <span className="text-[var(--color-green-light)]">
            Sustainability Strategy
          </span>{" "}
          to{" "}
          <span className="text-[var(--color-green-light)]">
            Competitive Advantage
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base md:text-lg"
        >
          SusNex helps organizations turn ESG commitments into measurable
          results through reporting, energy &amp; carbon programs, social
          impact systems, and capacity-building.
        </motion.p>

        {/* Lottie Animation — large, centered under title */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="my-3 w-full max-w-3xl sm:my-5"
        >
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              className="mx-auto w-full max-h-[34vh] scale-100 sm:max-h-none sm:scale-105 md:scale-110"
            />
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-3 flex flex-col items-center gap-4 sm:mt-5 sm:flex-row"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button-primary inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-9 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-green-dark)] hover:shadow-xl"
          >
            Schedule a Meeting
          </a>
          <Link
            href="/services"
            className="neo-button-secondary inline-flex items-center justify-center rounded-full border border-border bg-bg-primary/50 px-9 py-3 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-bg-secondary"
          >
            Explore Programs
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Credential Logos — centered row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-10 sm:gap-6"
        >
          <Image
            src="/images/hero/gri-training-partner.png"
            alt="GRI Training Partner 2026"
            width={160}
            height={48}
            className="h-9 w-auto object-contain sm:h-12"
          />
          <Image
            src={isDark ? "/images/hero/textile-exchange-dark.png" : "/images/hero/ungc-member.png"}
            alt={isDark ? "Textile Exchange Member" : "United Nations Global Compact Member"}
            width={48}
            height={48}
            className="h-9 w-auto object-contain sm:h-12"
          />
          <Image
            src={isDark ? "/images/hero/slcp-primary.png" : "/images/hero/slcp-black.png"}
            alt="SLCP Approved Training Body"
            width={140}
            height={48}
            className="h-9 w-auto object-contain sm:h-12"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator — hidden on mobile to avoid overlap with content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-text-secondary">
            Scroll
          </span>
          <svg
            className="h-5 w-5 text-text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
