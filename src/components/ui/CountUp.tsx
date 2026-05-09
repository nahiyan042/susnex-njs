"use client";

import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";

interface CountUpProps {
  /** Target number to count up to. */
  to: number;
  /** Animation length in seconds. Keep equal across siblings to synchronize. */
  duration?: number;
  /** Optional prefix (e.g. "$"). */
  prefix?: string;
  /** Optional suffix (e.g. "+", "%", "k"). */
  suffix?: string;
  /** External trigger; counter starts when this flips to `true`. */
  play?: boolean;
  /** Number of decimal places to render. */
  decimals?: number;
  /** Optional className passed through to the span. */
  className?: string;
}

/**
 * Tween-based count-up that mutates the DOM directly via a ref so multiple
 * CountUps can share the same `play` trigger and finish in lock-step without
 * causing per-tick React re-renders.
 */
export function CountUp({
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  play = true,
  decimals = 0,
  className,
}: CountUpProps) {
  const value = useMotionValue(0);
  const ref = useRef<HTMLSpanElement>(null);

  const format = (n: number) => {
    const safe = Number.isFinite(n) ? n : 0;
    const fixed = safe.toFixed(decimals);
    const withCommas = Number(fixed).toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return `${prefix}${withCommas}${suffix}`;
  };

  useEffect(() => {
    if (!play) return;
    if (ref.current) ref.current.textContent = format(0);
    const controls = animate(value, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = format(latest);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, to, duration, prefix, suffix, decimals]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={format(to)}
    >
      {format(0)}
    </span>
  );
}
