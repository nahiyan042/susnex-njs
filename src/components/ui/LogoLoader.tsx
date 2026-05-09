"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export interface LogoLoaderProps {
  /** Logo size in pixels. The orbital ring and halo scale from this. */
  size?: number;
  /** Optional caption shown beneath the logo (e.g. "Loading…"). */
  label?: string;
  /** Render as a full-viewport overlay (centered on the page). */
  fullScreen?: boolean;
  /** Extra classes on the outer wrapper. */
  className?: string;
}

/**
 * LogoLoader — branded loading indicator built around the SusNex logo.
 *
 * Composition (back to front):
 *   1. Soft brand-green radial halo behind the logo.
 *   2. Two concentric orbital rings drawn as SVG dashed circles, spinning
 *      in opposite directions with different speeds — gives a satisfying
 *      "system at work" feel without being noisy.
 *   3. The logo itself, gently breathing (scale 0.96 ↔ 1.04, 1.6s loop).
 *   4. Optional label below.
 *
 * All motion respects `prefers-reduced-motion`: when enabled, the rings
 * are static (still visible, so users can tell something is loading) and
 * the logo doesn't pulse.
 */
export function LogoLoader({
  size = 96,
  label,
  fullScreen = false,
  className = "",
}: LogoLoaderProps) {
  const prefersReducedMotion = useReducedMotion();

  // Ring sizes track the logo size so the loader scales as a unit.
  const innerRingSize = Math.round(size * 1.45);
  const outerRingSize = Math.round(size * 1.85);
  const haloSize = Math.round(size * 2.1);

  const wrapperClass = fullScreen
    ? "fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg-primary/95 backdrop-blur-sm"
    : "flex flex-col items-center justify-center";

  return (
    <div
      className={`${wrapperClass} ${className}`.trim()}
      role="status"
      aria-live="polite"
      aria-label={label ?? "Loading"}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: outerRingSize, height: outerRingSize }}
      >
        {/* Soft brand-green halo behind the logo — sits flat, never
            animates (a moving glow would be distracting). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-[var(--color-green)]/15 blur-2xl"
          style={{ width: haloSize, height: haloSize }}
        />

        {/* Outer orbital ring — slow counter-clockwise. SVG dashed
            stroke gives the "comet trail" look without needing a real
            mask. Padding via viewBox keeps the stroke from clipping. */}
        <motion.svg
          aria-hidden="true"
          className="absolute"
          width={outerRingSize}
          height={outerRingSize}
          viewBox="0 0 100 100"
          animate={prefersReducedMotion ? undefined : { rotate: -360 }}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 4.5,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="var(--color-green)"
            strokeOpacity="0.45"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray="2 8"
          />
        </motion.svg>

        {/* Inner orbital ring — faster, clockwise, with a single bright
            arc (achieved with stroke-dasharray + stroke-dashoffset) so
            it reads as motion at any moment, not as a uniform pulse. */}
        <motion.svg
          aria-hidden="true"
          className="absolute"
          width={innerRingSize}
          height={innerRingSize}
          viewBox="0 0 100 100"
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 1.6,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="var(--color-green)"
            strokeOpacity="0.85"
            strokeWidth="2.25"
            strokeLinecap="round"
            // 30/100 of circumference visible, 70/100 gap — produces a
            // bright leading arc that chases itself around the ring.
            strokeDasharray="70 200"
          />
        </motion.svg>

        {/* The logo itself — gentle breathing pulse. We use a div wrapper
            because next/image needs explicit sizing and we want the
            scale animation to apply to the wrapper, not the <img>
            element directly (avoids layout-shift on each cycle). */}
        <motion.div
          className="relative"
          style={{ width: size, height: size }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [0.96, 1.04, 0.96],
                  opacity: [0.9, 1, 0.9],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 1.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
          }
        >
          <Image
            src="/images/logo.png"
            alt="SusNex"
            fill
            priority
            sizes={`${size}px`}
            className="object-contain"
          />
        </motion.div>
      </div>

      {label && (
        <motion.p
          className="mt-6 font-heading text-sm font-medium tracking-wide text-text-secondary"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {label}
        </motion.p>
      )}

      <span className="sr-only">Loading content, please wait.</span>
    </div>
  );
}

export default LogoLoader;
