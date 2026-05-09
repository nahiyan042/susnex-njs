"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import {
  createElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import "./StarBorder.css";

// How long after `active` flips to false we keep the keyframe animation
// running so the comet can glide off-screen instead of snapping back to
// its starting position. Must be >= the CSS opacity fade-out duration in
// StarBorder.css (currently 0.55s).
const FADE_OUT_HOLD_MS = 650;

export interface StarBorderProps {
  /** Element/component to render as the outer container. Defaults to `button`. */
  as?: ElementType;
  /** Class names applied to the outer container. */
  className?: string;
  /** Class names applied to the inner content wrapper. */
  innerClassName?: string;
  /** Border highlight colour (CSS colour value). Fades to transparent. */
  color?: string;
  /** Animation duration (e.g. `"6s"`). Lower is faster. */
  speed?: string;
  /** Vertical thickness of the animated border in pixels. */
  thickness?: number;
  /** Inline style for the outer container. */
  style?: CSSProperties;
  /** Card / button content. */
  children?: ReactNode;
  /**
   * Hover-only mode. The comet trails keep running underneath but stay
   * invisible until the container is hovered. Each card animates
   * independently. Pure CSS — no JS hover tracking required.
   */
  animateOnHover?: boolean;
  /**
   * Explicit active state. When provided, the comet visibility is driven
   * solely by this boolean (true → fade in, false → fade out) and CSS
   * `:hover` is ignored. Use this when you want JS-controlled hover
   * tracking — for instance when wrapping the card in a parent that
   * needs to coordinate hover with other state.
   */
  active?: boolean;
  /** Pass-through props (onClick, role, aria-*, href, etc.). */
  [key: string]: unknown;
}

/**
 * StarBorder — animated comet-trail border that loops along the top and
 * bottom edges of any element. Adapted from React Bits, kept neutral
 * inside so it can wrap arbitrary content (buttons, cards, images).
 */
export function StarBorder({
  as,
  className = "",
  innerClassName = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  style,
  children,
  animateOnHover = false,
  active,
  ...rest
}: StarBorderProps) {
  const Component: ElementType = as ?? "button";

  // When `active` is supplied we drive the visibility from React state
  // exclusively (no CSS :hover involvement). When it's undefined we fall
  // back to the pure-CSS hover behaviour governed by `.is-hover-only`.
  const isControlled = active !== undefined;

  // Two pieces of internal state for controlled mode:
  //   * `shouldAnimate` — gates whether the keyframe animation is even
  //     applied to the gradient bands. False by default so cards aren't
  //     burning frames in the background.
  //   * `animationKey` — bumped on every fresh hover-in. Used as the
  //     React `key` on the gradient elements, which forces them to
  //     remount and therefore restart the keyframe from frame 0. This
  //     is what makes each hover *start* the comet sweep instead of
  //     picking up wherever the previous run happened to be.
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevActiveRef = useRef(false);

  // useLayoutEffect (not useEffect) so the key bump + is-animating class
  // commit before the browser paints. This collapses the hover-in into a
  // single visual frame: the user never sees an intermediate state where
  // is-active is on but is-animating isn't, which would otherwise let the
  // opacity transition tick for one frame before the new gradient mounts.
  useLayoutEffect(() => {
    if (!isControlled) return;

    const prev = prevActiveRef.current;
    const next = !!active;

    if (next && !prev) {
      // Fresh hover-in: cancel any pending stop, restart the comet.
      if (stopTimerRef.current !== null) {
        clearTimeout(stopTimerRef.current);
        stopTimerRef.current = null;
      }
      setAnimationKey((k) => k + 1);
      setShouldAnimate(true);
    } else if (!next && prev) {
      // Hover-out: keep the animation alive long enough for the comet to
      // glide off and the opacity transition to finish, then turn it
      // off so we're not painting an invisible animation forever.
      if (stopTimerRef.current !== null) clearTimeout(stopTimerRef.current);
      stopTimerRef.current = setTimeout(() => {
        setShouldAnimate(false);
        stopTimerRef.current = null;
      }, FADE_OUT_HOLD_MS);
    }

    prevActiveRef.current = next;
  }, [active, isControlled]);

  useEffect(() => {
    return () => {
      if (stopTimerRef.current !== null) {
        clearTimeout(stopTimerRef.current);
        stopTimerRef.current = null;
      }
    };
  }, []);

  const containerClass = [
    "star-border-container",
    animateOnHover && !isControlled ? "is-hover-only" : "",
    isControlled ? "is-controlled" : "",
    isControlled && active ? "is-active" : "",
    isControlled && shouldAnimate ? "is-animating" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(
    Component,
    {
      className: containerClass,
      style: {
        padding: `${thickness}px 0`,
        ...style,
      },
      ...rest,
    },
    <div
      key={`bottom-${animationKey}`}
      className="border-gradient-bottom"
      style={{
        // 27% rx keeps the comet visually the same width as before — when
        // the gradient element was 300% wide we used 18% rx (= 54% of the
        // container). Now at 200% wide we need 27% rx for the same 54%.
        background: `radial-gradient(ellipse 27% 80% at center, ${color} 0%, ${color} 6%, transparent 35%)`,
        animationDuration: speed,
      }}
    />,
    <div
      key={`top-${animationKey}`}
      className="border-gradient-top"
      style={{
        background: `radial-gradient(ellipse 27% 80% at center, ${color} 0%, ${color} 6%, transparent 35%)`,
        animationDuration: speed,
      }}
    />,
    <div key="inner" className={`inner-content ${innerClassName}`.trim()}>
      {children}
    </div>,
  );
}

export default StarBorder;
