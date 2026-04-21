"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { HeroBackground } from "@/components/animations/HeroBackground";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/f31275c2625b48398f3a12669261c514@susnex.com?anonymous&ep=plink";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/lottie/OVF9b8PYIK-1.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => {});
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {isDark ? (
          <div className="h-full w-full bg-bg-primary">
            <HeroBackground />
          </div>
        ) : (
          <div
            className="h-full w-full"
            style={{ background: "var(--gradient-hero)" }}
          >
            <HeroBackground />
          </div>
        )}
      </div>

      {/* Content — single centered column */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-2xl font-bold leading-snug tracking-tight text-balance sm:text-3xl md:text-4xl"
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
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base"
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
          className="my-6 w-full max-w-2xl"
        >
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              className="mx-auto w-full"
            />
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-green-dark)] hover:shadow-xl"
          >
            Schedule a Meeting
          </a>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-border bg-bg-primary/50 px-8 py-3 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-bg-secondary"
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
          className="mt-8 flex items-center justify-center gap-6"
        >
          <Image
            src="/images/hero/gri-training-partner.png"
            alt="GRI Training Partner 2026"
            width={160}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
          />
          <Image
            src="/images/hero/ungc-member.png"
            alt="United Nations Global Compact Member"
            width={48}
            height={48}
            className="h-10 w-auto object-contain brightness-0 invert dark:brightness-100 dark:invert-0 sm:h-12"
          />
          <Image
            src="/images/hero/slcp-approved.png"
            alt="SLCP Approved Training Body"
            width={140}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
