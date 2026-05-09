"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, type MotionProps } from "framer-motion";

export interface ClientLogoTileProps {
  src: string;
  /**
   * Full company name. Used as alt text, the cursor-tracked hover
   * caption, and the screen-reader label. Native `title` is intentionally
   * omitted so the browser's default tooltip doesn't compete with our
   * floating caption.
   */
  name: string;
  /**
   * When true, the logo gets a higher fill ratio inside the square tile
   * (~100% vs the default ~90%). Reserved for flagship marks (industry
   * bodies, anchor brand partners) where the logo should dominate. The
   * tile size itself stays uniform — only the inner image scales.
   */
  prominent?: boolean;
  /**
   * Framer Motion props the parent uses to animate the tile in (entrance
   * variants, stagger, in-view triggers, etc.). Spread BEFORE our own
   * motion props so the tile's hover behaviour and refs always win.
   */
  motionProps?: MotionProps;
}

const captionSpring = { stiffness: 350, damping: 30, mass: 1 } as const;

/**
 * Square client logo tile rendered on the sage gradient backplate
 * (`.logo-tile`). On hover, a small dark caption pill follows the cursor
 * showing the company name — same pattern used by the team page's
 * `TiltedImageCard`. Caption is `pointer-events:none` so it never
 * intercepts hover/click on the underlying tile.
 *
 * The tile is intentionally NOT `overflow-hidden`: the caption needs to
 * be allowed to extend outside the tile bounds when the cursor sits near
 * the edge. The `object-contain` image cap + percentage max-h/max-w
 * prevent any visual overflow of the logo itself, so this is safe.
 */
export function ClientLogoTile({
  src,
  name,
  prominent,
  motionProps,
}: ClientLogoTileProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Caption tracks cursor position relative to the tile's top-left corner,
  // with a small offset so the pill sits to the bottom-right of the cursor
  // (less obstructive than placing it directly under the pointer).
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useSpring(0, captionSpring);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left + 14);
    y.set(e.clientY - rect.top + 14);
  }

  function handleMouseEnter() {
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
  }

  return (
    <motion.div
      {...motionProps}
      ref={ref}
      whileHover={{ scale: 1.06, y: -3 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="logo-tile group relative flex aspect-square items-center justify-center rounded-xl border p-2 transition-shadow hover:shadow-lg sm:p-3"
    >
      <Image
        src={src}
        alt={name}
        width={400}
        height={400}
        className={`h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          prominent
            ? "max-h-[100%] max-w-[100%]"
            : "max-h-[90%] max-w-[90%]"
        }`}
        sizes="(max-width: 640px) 32vw, (max-width: 1024px) 24vw, 200px"
      />

      {/* Cursor-tracked caption — same shape as the TiltedImageCard caption
          on the team page, kept consistent across the site. */}
      <motion.span
        aria-hidden
        style={{ x, y, opacity }}
        className="logo-tile-caption pointer-events-none absolute left-0 top-0 z-30 select-none whitespace-nowrap rounded-md bg-[rgba(13,31,22,0.95)] px-2.5 py-1 text-[11px] font-medium leading-none tracking-[0.01em] text-white shadow-[0_6px_16px_rgba(0,0,0,0.28)]"
      >
        {name}
      </motion.span>
    </motion.div>
  );
}

export default ClientLogoTile;
