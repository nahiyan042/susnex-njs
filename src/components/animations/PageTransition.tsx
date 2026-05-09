"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * PageTransition — wraps the App Router `children` with a keyed motion
 * wrapper so every route change replays an entrance animation. It's
 * deliberately *entrance-only* (no exit) because Next.js App Router
 * unmounts the old route's children synchronously when navigating, so
 * the classic AnimatePresence `mode="wait"` pattern would end up
 * playing the exit animation on the *new* page's content (since by the
 * time the exit fires, React has already swapped the children prop on
 * the wrapper). Entrance-only is what well-tuned Next.js sites use, and
 * it gives the click → new-page motion that feels "polished" without
 * any flicker or content-shift surprise.
 *
 * The key is `usePathname()`, which means:
 *   - hash links (`#section`) don't retrigger (same pathname),
 *   - query-string changes (`?filter=x`) don't retrigger (pathname-only),
 *   - real navigations (`/about` → `/team`) do retrigger.
 *
 * `useReducedMotion()` skips the transform/opacity animation entirely
 * for users who've requested reduced motion at the OS level — the page
 * just appears instantly, which is the only respectful behaviour for
 * vestibular-sensitive visitors.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      // Slight upward translate combined with opacity gives a "settling
      // into place" feel rather than a hard cut. 8px is enough to be
      // perceptible but small enough that it never causes visible
      // layout shift or makes a long page feel like it's being pulled
      // around.
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        // Custom cubic-bezier ≈ ease-out-expo. Fast at the start, soft
        // settle at the end — matches the gentle motion language used
        // throughout the rest of the site (ScrollReveal, StarBorder,
        // hover lifts).
        ease: [0.22, 1, 0.36, 1],
      }}
      // willChange hint so the browser puts this element on its own
      // compositor layer for the duration of the animation. No effect
      // after the animation completes (motion clears it automatically).
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
