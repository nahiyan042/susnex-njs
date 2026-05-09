"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Curated set of glyphs available to a roadmap node. Every icon is
 * authored as if drawn inside a 32×32 box and uses `currentColor`, so
 * the same source renders cleanly in both the desktop SVG (centred on
 * the node circle) and the small mobile timeline.
 *
 * Bookend convention used across the site: `play` for the kickoff
 * milestone, `handshake` for the closing milestone. The other names
 * are content-specific (e.g. `factory` for site visits, `droplet` for
 * wastewater sampling, `recycle` for circularity, etc.).
 */
export type RoadmapIcon =
  | "play"
  | "handshake"
  | "search"
  | "document"
  | "factory"
  | "training"
  | "users"
  | "chart"
  | "clipboard"
  | "target"
  | "pencil"
  | "eye"
  | "palette"
  | "megaphone"
  | "wrench"
  | "globe"
  | "recycle"
  | "link"
  | "award"
  | "check-badge"
  | "heart"
  | "droplet"
  | "refresh"
  | "chat";

export interface RoadmapStep {
  title: string;
  /**
   * Optional secondary line shown beneath the title. Omit when the
   * source diagram only carries a title for that node (e.g. the GESI
   * roadmap's "Training & Awareness" / "Performance monitoring
   * program" / "Continuous Improvement Plan" — no subtitle is
   * rendered, no empty gap).
   */
  subtitle?: string;
  /**
   * Optional engagement-week label rendered as a small italic green
   * pill ABOVE the node circle (e.g. "W 1", "W 7-12", "W 25-38"). The
   * ESG layout doesn't use this; the energy layout does.
   */
  week?: string;
  /** Optional icon rendered inside the node circle. */
  icon?: RoadmapIcon;
}

/**
 * Pre-baked layout variants. New roadmaps should add a layout here
 * rather than hard-coding positions in consumer code, so all roadmap
 * geometry stays centralised in this file.
 */
export type RoadmapLayout = "esg" | "energy" | "materials";

interface Props {
  steps: RoadmapStep[];
  heading?: string;
  subheading?: string;
  /**
   * Choose the SVG node placement preset:
   *   - "esg"       → 12 nodes, with apex nodes on BOTH the right and
   *                   left half-loops (default — matches the original
   *                   ESG reporting roadmap).
   *   - "energy"    → 11 nodes. Same path geometry, but the left
   *                   half-loop has NO apex node and the bottom row
   *                   has 4 nodes instead of 3 (matches the Energy &
   *                   Carbon Management source diagram).
   *   - "materials" → 10 nodes. Both loop apexes occupied, but only
   *                   2 nodes in the middle row and 3 in the bottom
   *                   row (matches the Sustainable Materials &
   *                   Circularity "The Program" diagram).
   */
  layout?: RoadmapLayout;
}

/**
 * Geometry for the desktop S-curve roadmap.
 *
 * The SVG uses a 1400 × 1100 viewBox. Each entry maps a step (by index)
 * to its node centre and the side on which its text label should sit so
 * labels do not collide with the curving path.
 *
 * The path itself is a single SVG `d` string composed of three straight
 * segments connected by two cubic-Bezier half-loops. The Bezier control
 * points are chosen so each loop's geometric midpoint (at parameter
 * t = 0.5) lands exactly on the apex node — this is why the right-loop
 * apex node sits at (1213, 300) and the left-loop apex (used only by the
 * ESG layout) at (175, 700). Recomputing the midpoint with new control
 * points is required if the path is ever reshaped.
 */
const VIEW_W = 1400;
const VIEW_H = 1100;

type Side = "bottom" | "top" | "left" | "right";

interface NodePos {
  x: number;
  y: number;
  /** Side of the node where the text label is placed. */
  side: Side;
}

const ESG_POSITIONS: ReadonlyArray<NodePos> = [
  { x: 200, y: 100, side: "bottom" }, // 0  Kickoff Meeting
  { x: 500, y: 100, side: "bottom" }, // 1  Understanding the ESG Context
  { x: 800, y: 100, side: "bottom" }, // 2  On-site Visit
  { x: 1213, y: 300, side: "right" }, // 3  Awareness Development (right loop apex)
  { x: 1100, y: 500, side: "bottom" }, // 4  Stakeholder Mapping
  { x: 800, y: 500, side: "bottom" }, // 5  Materiality Assessment
  { x: 500, y: 500, side: "bottom" }, // 6  Data Collection
  { x: 175, y: 700, side: "left" }, // 7  ESG Goals & Targets (left loop apex)
  { x: 300, y: 900, side: "bottom" }, // 8  Developing Storyline
  { x: 600, y: 900, side: "bottom" }, // 9  Review
  { x: 900, y: 900, side: "bottom" }, // 10 Design
  { x: 1200, y: 900, side: "bottom" }, // 11 Publication
];

/**
 * Energy & Carbon variant: same S-curve as ESG but with NO node on the
 * left loop apex (the curve still loops, the path just rolls past
 * without a stop). The bottom row gains a 4th node to compensate, so
 * the total is 11 instead of 12.
 *
 * Index map matches the source roadmap diagram:
 *   0 Kickoff      1 Initial Data        2 Factory Visit
 *   3 Training (right apex)
 *   4 Data Collection   5 ASHRAE Audit    6 Factory Consultation
 *   7 Assistance   8 Interim Monitoring  9 Validation Visit  10 Final Report
 */
const ENERGY_POSITIONS: ReadonlyArray<NodePos> = [
  { x: 200, y: 100, side: "bottom" }, // 0  Kickoff Meeting
  { x: 500, y: 100, side: "bottom" }, // 1  Initial Data Collection
  { x: 800, y: 100, side: "bottom" }, // 2  Factory Visit
  { x: 1213, y: 300, side: "right" }, // 3  Training of Factory Personnel (right apex)
  { x: 1100, y: 500, side: "bottom" }, // 4  Data Collection & Compilation
  { x: 800, y: 500, side: "bottom" }, // 5  ASHRAE Level-2 Energy Audit Report
  { x: 500, y: 500, side: "bottom" }, // 6  Factory Consultation for Target Setting
  { x: 300, y: 900, side: "bottom" }, // 7  Assistance During Implementation
  { x: 600, y: 900, side: "bottom" }, // 8  Interim Monitoring
  { x: 900, y: 900, side: "bottom" }, // 9  Validation Visit
  { x: 1200, y: 900, side: "bottom" }, // 10 Final Improvement Report
];

/**
 * Sustainable Materials & Circularity variant: same S-curve as ESG,
 * with BOTH loop apexes occupied (Circular Materials on the right,
 * Training on the left). The middle row carries only 2 nodes and the
 * bottom row only 3, for 10 total.
 *
 * Index map matches the source roadmap diagram (path-direction order):
 *   0 Kick of Meeting   1 Global Trends   2 Technicalities
 *   3 Circular Materials (right apex)
 *   4 Traceability (mid-right)   5 Aligning Suppliers (mid-left)
 *   6 Training (left apex)
 *   7 Setting Goals   8 Collaboration   9 Branding
 *
 * Middle row x positions (1000, 600) and bottom row x positions
 * (400, 750, 1100) are evenly spread along the path's straight
 * segments (mid: x ∈ [500, 1100]; bot: x ∈ [300, 1200]) so each node
 * sits roughly on the visible path with breathing room from the
 * loop joins.
 */
const MATERIALS_POSITIONS: ReadonlyArray<NodePos> = [
  { x: 200, y: 100, side: "bottom" }, // 0  Kick of Meeting
  { x: 500, y: 100, side: "bottom" }, // 1  Global Trends
  { x: 800, y: 100, side: "bottom" }, // 2  Technicalities
  { x: 1213, y: 300, side: "right" }, // 3  Circular Materials (right apex)
  { x: 1000, y: 500, side: "bottom" }, // 4  Traceability
  { x: 600, y: 500, side: "bottom" }, // 5  Aligning Suppliers
  { x: 175, y: 700, side: "left" }, // 6  Training (left apex)
  { x: 400, y: 900, side: "bottom" }, // 7  Setting Goals
  { x: 750, y: 900, side: "bottom" }, // 8  Collaboration
  { x: 1100, y: 900, side: "bottom" }, // 9  Branding
];

const LAYOUTS: Record<RoadmapLayout, ReadonlyArray<NodePos>> = {
  esg: ESG_POSITIONS,
  energy: ENERGY_POSITIONS,
  materials: MATERIALS_POSITIONS,
};

const PATH_D =
  "M 200 100 L 800 100 " +
  "C 1300 100 1300 500 1100 500 " +
  "L 500 500 " +
  "C 100 500 100 900 300 900 " +
  "L 1200 900";

const NODE_R = 44;
const ICON_COLOR = "var(--color-green)";

/**
 * Stagger between successive node pop-ins. Tuned to roughly match the
 * 3 s path-draw so each node appears as the "ink" reaches it.
 */
const NODE_STAGGER = 0.22;
const NODE_HEAD_DELAY = 0.15;
const PATH_DURATION = 3.0;

export function ProgramRoadmap({
  steps,
  heading = "Program Roadmap",
  subheading,
  layout = "esg",
}: Props) {
  const reduce = useReducedMotion();
  const POSITIONS = LAYOUTS[layout];

  if (process.env.NODE_ENV !== "production" && steps.length !== POSITIONS.length) {
    console.warn(
      `[ProgramRoadmap] layout="${layout}" expected ${POSITIONS.length} steps, received ${steps.length}. ` +
        "Extra steps are ignored, missing steps will leave empty nodes."
    );
  }

  /*
   * Single in-view trigger for the entire roadmap.
   *
   * Previously each motion element (heading, path, every node, every
   * label, every week caption) had its own `whileInView` + `viewport`
   * config — which meant the bottom-row nodes/labels each waited until
   * THEY personally entered the viewport, forcing the user to scroll
   * far past the section before the choreography completed.
   *
   * Now we observe ONE wrapper. The moment any pixel of it crosses
   * the viewport bottom (`amount: "some"`), the whole sequence kicks
   * off together — the path starts drawing, nodes begin staggering
   * in, labels follow — independent of further scrolling. Each
   * element keeps its own `delay`/`duration`/`type:"spring"` so the
   * staggered feel is preserved; only the trigger gate is unified.
   *
   * `once: true` keeps the animation a one-shot: scrolling back up
   * and down doesn't re-trigger the play-on.
   */
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, {
    once: true,
    amount: "some",
  });
  // `started` fans out across every motion element below. When the
  // user prefers reduced motion we skip straight to the "show" state
  // on mount so the diagram still renders (just without the play-on).
  const started = inView || !!reduce;

  return (
    <div ref={wrapperRef} className="mx-auto w-full max-w-6xl">
      {/* Heading pill — mirrors the boxed "Program Roadmap" label in the source design */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: -10 }}
          animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border-2 border-[var(--color-green)] px-6 py-3 sm:px-8"
        >
          <h2 className="font-heading text-2xl font-bold text-[var(--color-green)] sm:text-3xl">
            {heading}
          </h2>
        </motion.div>
        {subheading && (
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-text-secondary sm:text-base">
            {subheading}
          </p>
        )}
      </div>

      {/* Desktop: serpentine SVG roadmap */}
      <div
        className="relative mx-auto mt-10 hidden w-full lg:block"
        style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
      >
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="absolute inset-0 h-full w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {/* Faint background path so the route is always visible (graceful fallback if JS / motion is disabled) */}
          <path
            d={PATH_D}
            fill="none"
            stroke="var(--color-green)"
            strokeOpacity={0.15}
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Animated draw-on path */}
          <motion.path
            d={PATH_D}
            fill="none"
            stroke="var(--color-green)"
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={started ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: reduce ? 0 : PATH_DURATION, ease: "easeInOut" }}
          />

          {/* Nodes */}
          {POSITIONS.map((pos, i) => {
            const step = steps[i];
            const delay = NODE_HEAD_DELAY + i * NODE_STAGGER;
            return (
              <motion.g
                key={i}
                initial={reduce ? undefined : { scale: 0, opacity: 0 }}
                animate={started ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.45,
                  delay,
                  type: "spring",
                  stiffness: 240,
                  damping: 18,
                }}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                }}
              >
                {/* Soft glow halo */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={NODE_R + 6}
                  fill="var(--color-green)"
                  fillOpacity={0.08}
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={NODE_R}
                  fill="white"
                  stroke="var(--color-green)"
                  strokeWidth={4}
                />
                {step?.icon ? (
                  // Each icon is authored in a 32×32 box around (16, 16),
                  // so translating by (cx − 16, cy − 16) drops the glyph
                  // exactly on the node centre. `style.color` flows down
                  // to elements that use `currentColor`.
                  <g
                    transform={`translate(${pos.x - 16}, ${pos.y - 16})`}
                    style={{ color: ICON_COLOR }}
                  >
                    {iconContent(step.icon)}
                  </g>
                ) : null}
              </motion.g>
            );
          })}
        </svg>

        {/* Labels overlay (HTML over SVG for crisp text rendering) */}
        {steps.map((step, i) => {
          const pos = POSITIONS[i];
          if (!pos) return null;

          const xPct = (pos.x / VIEW_W) * 100;
          const yPct = (pos.y / VIEW_H) * 100;
          // Offsets must be expressed in the same axis they offset, since
          // CSS percentages resolve against the parent's width (for left/
          // right) or height (for top/bottom). Mixing them would shrink the
          // gap on the shorter axis.
          const gap = NODE_R + 16; // node radius + visual breathing room
          const xOffsetPct = (gap / VIEW_W) * 100;
          const yOffsetPct = (gap / VIEW_H) * 100;
          const labelWidth = "11rem";

          let style: CSSProperties;
          let textAlign: "left" | "right" | "center";

          switch (pos.side) {
            case "right":
              style = {
                left: `calc(${xPct}% + ${xOffsetPct}%)`,
                top: `${yPct}%`,
                transform: "translateY(-50%)",
                width: labelWidth,
              };
              textAlign = "left";
              break;
            case "left":
              style = {
                right: `calc(${100 - xPct}% + ${xOffsetPct}%)`,
                top: `${yPct}%`,
                transform: "translateY(-50%)",
                width: labelWidth,
              };
              textAlign = "right";
              break;
            case "top":
              style = {
                left: `${xPct}%`,
                bottom: `calc(${100 - yPct}% + ${yOffsetPct}%)`,
                transform: "translateX(-50%)",
                width: labelWidth,
              };
              textAlign = "center";
              break;
            case "bottom":
            default:
              style = {
                left: `${xPct}%`,
                top: `calc(${yPct}% + ${yOffsetPct}%)`,
                transform: "translateX(-50%)",
                width: labelWidth,
              };
              textAlign = "center";
              break;
          }

          return (
            <motion.div
              key={i}
              className="pointer-events-none absolute"
              style={{ ...style, textAlign }}
              initial={reduce ? undefined : { opacity: 0, y: 6 }}
              animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.4, delay: NODE_HEAD_DELAY + i * NODE_STAGGER + 0.2 }}
            >
              <div className="font-heading text-sm font-bold leading-tight text-text-primary">
                {step.title}
              </div>
              {step.subtitle && (
                <div className="mt-1 text-xs leading-snug text-text-secondary">
                  {step.subtitle}
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Week labels overlay — small italic green caption ABOVE each
            node circle. Rendered as a separate pass (not part of the
            side-label layout) so the position is independent of the
            title's `side` and stays consistently above the node. */}
        {steps.map((step, i) => {
          const pos = POSITIONS[i];
          if (!pos || !step.week) return null;

          const xPct = (pos.x / VIEW_W) * 100;
          const yPct = (pos.y / VIEW_H) * 100;
          // Offset upward by node radius + a small visual gap. Expressed
          // in viewBox-height percentage so it scales with the SVG.
          const yGapPct = ((NODE_R + 8) / VIEW_H) * 100;

          return (
            <motion.div
              key={`week-${i}`}
              className="pointer-events-none absolute font-heading text-[11px] font-semibold italic text-[var(--color-green)] sm:text-xs"
              style={{
                left: `${xPct}%`,
                bottom: `calc(${100 - yPct}% + ${yGapPct}%)`,
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
              initial={reduce ? undefined : { opacity: 0, y: -4 }}
              animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
              transition={{ duration: 0.35, delay: NODE_HEAD_DELAY + i * NODE_STAGGER + 0.05 }}
            >
              {step.week}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <ol
        className="relative mx-auto mt-8 max-w-md space-y-6 lg:hidden"
        aria-label={heading}
      >
        {/* Faint background line */}
        <span
          className="absolute top-2 bottom-2 left-[18px] w-[3px] rounded-full bg-[var(--color-green)]/15"
          aria-hidden="true"
        />
        {/* Animated foreground line */}
        <motion.span
          aria-hidden="true"
          className="absolute top-2 left-[18px] w-[3px] origin-top rounded-full bg-[var(--color-green)]"
          initial={reduce ? undefined : { scaleY: 0 }}
          animate={started ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: reduce ? 0 : 1.4, ease: "easeOut" }}
          style={{ height: "calc(100% - 1rem)" }}
        />

        {steps.map((step, i) => (
          <motion.li
            key={i}
            initial={reduce ? undefined : { opacity: 0, x: -10 }}
            animate={started ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
            className="relative pl-12"
          >
            <span className="absolute top-0.5 left-0 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[var(--color-green)] bg-bg-primary shadow-sm">
              {step.icon ? (
                <svg
                  viewBox="0 0 32 32"
                  className="h-4 w-4 text-[var(--color-green)]"
                  aria-hidden="true"
                >
                  {iconContent(step.icon)}
                </svg>
              ) : (
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-green)]" />
              )}
            </span>
            {step.week && (
              <div className="font-heading text-xs font-semibold italic text-[var(--color-green)]">
                {step.week}
              </div>
            )}
            <div className="font-heading text-base font-bold text-text-primary">
              {step.title}
            </div>
            {step.subtitle && (
              <div className="mt-1 text-sm leading-snug text-text-secondary">
                {step.subtitle}
              </div>
            )}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------ icon registry ------------------------------
 *
 * Every glyph below is authored in a 32×32 design space and uses
 * `currentColor` so the same fragment renders identically in two very
 * different contexts:
 *
 *   – Desktop SVG: wrapped in a translated <g style={{ color: green }}>
 *     that drops the icon directly on the node centre.
 *   – Mobile timeline: rendered inside an inline <svg viewBox="0 0 32 32"
 *     className="h-4 w-4 text-[var(--color-green)]"> next to the title.
 *
 * Stroke widths are tuned to remain readable at the ~16 px mobile size
 * while still looking confident at the desktop size (~32 px on the
 * 1400-wide viewBox).
 */
const STROKE_DEFAULTS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function iconContent(icon: RoadmapIcon): ReactNode {
  switch (icon) {
    case "play":
      // Right-pointing triangle, optically nudged so the visual centre
      // (rather than the geometric centroid) sits on the node centre.
      return (
        <path d="M11 8 L24 16 L11 24 Z" fill="currentColor" />
      );
    case "handshake":
      return (
        <path
          {...STROKE_DEFAULTS}
          d="M4 18 L13 9 L18 14 L23 9 L28 14 M4 18 L8 22 L12 18 M28 14 L24 18 L20 14"
        />
      );
    case "search":
      return (
        <g {...STROKE_DEFAULTS}>
          <circle cx={13} cy={13} r={6} />
          <path d="M18 18 L25 25" />
        </g>
      );
    case "document":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M8 5 H19 L24 10 V27 H8 Z" />
          <path d="M19 5 V10 H24" />
          <path d="M11 15 H21 M11 19 H21 M11 23 H17" />
        </g>
      );
    case "factory":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M4 27 V14 L11 18 V14 L18 18 V14 L25 18 V27 Z" />
          <path d="M9 22 H11 M16 22 H18 M23 22 H25" />
        </g>
      );
    case "training":
      // Graduation mortarboard + base band + tassel.
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M16 8 L4 13 L16 18 L28 13 Z" />
          <path d="M9 16 V21 C9 22.5 12 24 16 24 C20 24 23 22.5 23 21 V16" />
          <path d="M28 13 V20" />
        </g>
      );
    case "users":
      // Two heads + two shoulder arcs, slightly offset so the silhouettes
      // overlap pleasantly without becoming a single blob.
      return (
        <g {...STROKE_DEFAULTS}>
          <circle cx={11} cy={11} r={3} />
          <circle cx={21} cy={11} r={3} />
          <path d="M5 25 C5 20.5 7.5 18 11 18 C13 18 14.5 19 15.5 20.5" />
          <path d="M27 25 C27 20.5 24.5 18 21 18 C19 18 17.5 19 16.5 20.5" />
        </g>
      );
    case "chart":
      // Bar chart with baseline.
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M5 27 H28" />
          <path d="M9 23 V19" />
          <path d="M15 23 V13" />
          <path d="M21 23 V16" />
          <path d="M27 23 V9" />
        </g>
      );
    case "clipboard":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M9 7 H23 V27 H9 Z" />
          <path d="M13 5 H19 V9 H13 Z" />
          <path d="M12 17 L15 20 L20 14" />
        </g>
      );
    case "target":
      return (
        <g {...STROKE_DEFAULTS}>
          <circle cx={16} cy={16} r={10} />
          <circle cx={16} cy={16} r={6} />
          <circle cx={16} cy={16} r={2} fill="currentColor" />
        </g>
      );
    case "pencil":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M5 27 L7 21 L21 7 L25 11 L11 25 Z" />
          <path d="M18 10 L22 14" />
        </g>
      );
    case "eye":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M3 16 C7 9 11 7 16 7 C21 7 25 9 29 16 C25 23 21 25 16 25 C11 25 7 23 3 16 Z" />
          <circle cx={16} cy={16} r={3.5} />
        </g>
      );
    case "palette":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M16 5 C9 5 4 10 4 16 C4 22 9 25 13 25 C14 25 14.5 23.5 13.5 22.5 C12.5 21.5 14 18 17 18 H22 C26 18 28 16 28 13 C28 8 23 5 16 5 Z" />
          <circle cx={11} cy={11} r={1.5} fill="currentColor" stroke="none" />
          <circle cx={16} cy={9} r={1.5} fill="currentColor" stroke="none" />
          <circle cx={22} cy={13} r={1.5} fill="currentColor" stroke="none" />
        </g>
      );
    case "megaphone":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M5 12 V20 H10 L24 26 V6 L10 12 Z" />
          <path d="M10 12 V20" />
        </g>
      );
    case "wrench":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M22 4 L18 8 L20 14 L26 12 L22 4 Z" />
          <path d="M20 14 L7 27 L4 24 L17 11" />
        </g>
      );
    case "globe":
      return (
        <g {...STROKE_DEFAULTS}>
          <circle cx={16} cy={16} r={11} />
          <path d="M5 16 H27" />
          <path d="M16 5 C12 9 11 12 11 16 C11 20 12 23 16 27" />
          <path d="M16 5 C20 9 21 12 21 16 C21 20 20 23 16 27" />
        </g>
      );
    case "recycle":
      // Three rotating arrow segments that together wrap the icon centre,
      // each capped with a small chevron arrowhead — reads as the
      // universal recycling triangle without the spec's tight angles.
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M22 8 A11 11 0 0 1 26 19" />
          <path d="M22 5 L22 8 L25 8" />
          <path d="M21 27 A11 11 0 0 1 9 25" />
          <path d="M22 25 L21 27 L18 27" />
          <path d="M5 18 A11 11 0 0 1 11 7" />
          <path d="M5 14 L5 18 L9 18" />
        </g>
      );
    case "link":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M14 11 L11 14 C8 17 8 21 11 24 C14 27 18 27 21 24 L23 22" />
          <path d="M18 21 L21 18 C24 15 24 11 21 8 C18 5 14 5 11 8 L9 10" />
        </g>
      );
    case "award":
      // Medallion with ribbon tails + small tick inside.
      return (
        <g {...STROKE_DEFAULTS}>
          <circle cx={16} cy={13} r={7} />
          <path d="M11 18 L9 27 L13 24 L16 26 L19 24 L23 27 L21 18" />
          <path d="M13 13 L15 16 L19 11" />
        </g>
      );
    case "check-badge":
      // 12-point starburst (verified-badge silhouette) + check mark.
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M16 4 L20 7 L24 6 L26 10 L29 12 L27 16 L29 20 L26 22 L24 26 L20 25 L16 28 L12 25 L8 26 L6 22 L3 20 L5 16 L3 12 L6 10 L8 6 L12 7 Z" />
          <path d="M11 16 L14 19 L21 12" />
        </g>
      );
    case "heart":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M16 26 C5 18 7 8 13 8 C15 8 16 9 16 11 C16 9 17 8 19 8 C25 8 27 18 16 26 Z" />
        </g>
      );
    case "droplet":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M16 5 C20 12 24 17 24 21 C24 26 20 28 16 28 C12 28 8 26 8 21 C8 17 12 12 16 5 Z" />
        </g>
      );
    case "refresh":
      // Two opposing semi-circular arrows — universal "cycle/repeat"
      // glyph, used here for "Continuous Improvement"-flavoured nodes.
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M27 14 C25 9 21 6 16 6 C12 6 8 8 6 12" />
          <path d="M27 6 V14 H19" />
          <path d="M5 18 C7 23 11 26 16 26 C20 26 24 24 26 20" />
          <path d="M5 26 V18 H13" />
        </g>
      );
    case "chat":
      return (
        <g {...STROKE_DEFAULTS}>
          <path d="M5 9 C5 7 6 6 8 6 H24 C26 6 27 7 27 9 V19 C27 21 26 22 24 22 H14 L9 27 V22 H8 C6 22 5 21 5 19 Z" />
          <path d="M11 14 H21 M11 17 H17" />
        </g>
      );
    default: {
      // Exhaustiveness guard — adding a new RoadmapIcon without a case
      // here is a TS error rather than a silent missing render.
      const exhaustive: never = icon;
      void exhaustive;
      return null;
    }
  }
}
