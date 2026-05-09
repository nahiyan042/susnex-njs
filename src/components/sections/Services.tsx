"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TiltedCard } from "@/components/ui/TiltedCard";
import { GradualBlur } from "@/components/ui/GradualBlur";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { StarBorder } from "@/components/ui/StarBorder";

// Same accent + animation tuning as the team member cards on /team —
// keeps the comet-trail effect visually consistent across the site.
const STAR_BORDER_COLOR = "#83a63a";
const STAR_BORDER_SPEED = "2s";

interface Program {
  title: string;
  description: string;
  href: string;
  image: string;
}

function ProgramCard({ program }: { program: Program }) {
  // Per-card hover state — each card animates its border independently.
  // We feed this into <StarBorder active={...}> rather than relying on
  // CSS :hover so that pointer enter/leave on the specific card body is
  // the only thing that triggers the comet, and so the animation always
  // restarts cleanly from frame 0 on each fresh hover.
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StarBorder
      as="div"
      color={STAR_BORDER_COLOR}
      speed={STAR_BORDER_SPEED}
      thickness={6}
      active={isHovered}
      className="block h-full w-full"
      innerClassName="block h-full w-full"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "20px",
      }}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerCancel={() => setIsHovered(false)}
    >
      <Link
        href={program.href}
        className="neo-surface group flex h-full flex-col overflow-hidden rounded-[16px] border border-border bg-bg-card transition-all duration-300 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/5"
      >
        {/* Full-width image with vignette overlay */}
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-heading text-lg font-semibold transition-colors group-hover:text-[var(--color-green)]">
            {program.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
            {program.description}
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-[var(--color-green)] opacity-0 transition-opacity group-hover:opacity-100">
            Learn more
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </div>
        </div>
      </Link>
    </StarBorder>
  );
}

const programs = [
  {
    title: "ESG & Sustainability Reporting",
    description:
      "Improve due diligence, risk management, brand reputation, and regulatory preparedness through comprehensive ESG reporting frameworks.",
    href: "/services/esg-reporting",
    image: "/images/services/esg-reporting.webp",
  },
  {
    title: "Energy & Carbon Management",
    description:
      "Energy audits, carbon footprint measurement, reduction strategies, and climate action planning to meet global standards.",
    href: "/services/energy-carbon",
    image: "/images/services/energy-carbon.webp",
  },
  {
    title: "Chemical & Wastewater Management",
    description:
      "Chemical management, wastewater treatment optimization, and environmental compliance to protect ecosystems and communities.",
    href: "/services/chemical-wastewater",
    image: "/images/services/chemical-wastewater.webp",
  },
  {
    title: "Sustainable Materials & Circularity",
    description:
      "Circularity-focused material management, sustainable supply chain design, and waste reduction through innovative material strategies.",
    href: "/services/material-smart",
    image: "/images/services/material-smart.webp",
  },
  {
    title: "Gender Equality & Social Inclusion (GESI)",
    description:
      "Workplace equality, gender-responsive policies, and social sustainability programs that drive inclusive organizational transformation.",
    href: "/services/gender-smart",
    image: "/images/services/gender-smart.webp",
  },
  {
    title: "Structural Engineering Assessment",
    description:
      "Technical evaluation, compliance auditing, and engineering solutions for sustainable infrastructure and operational excellence.",
    href: "/services/engineering-assessment",
    image: "/images/services/engineering-assessment.webp",
  },
  {
    title: "Worker Voice & Grievance Mechanism Implementation",
    description:
      "Trusted worker grievance channels, supplier onboarding, guided remediation, and due-diligence reporting for responsible supply chains.",
    href: "/services/speak-for-change",
    image: "/images/services/speak-for-change.webp",
  },
  {
    title: "Digital Product Passport (DPP) & ESPR Readiness",
    description:
      "Textile product data architecture, supplier traceability, and EU-ready sustainability disclosure for ESPR and Digital Product Passport compliance.",
    href: "/services/dpp-espr",
    image: "/images/services/dpp-espr.webp",
  },
];

export function Services() {
  return (
    <section className="relative bg-bg-secondary py-24 lg:py-32">
      <SectionBackground opacity={0.3} variant="solar-grid" />

      <div className="relative mx-auto max-w-7xl px-6">
        <GradualBlur>
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Our Programs
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                Integrated sustainability programs designed to drive measurable
                outcomes for organizations committed to responsible growth.
              </p>
            </div>
          </ScrollReveal>
        </GradualBlur>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {programs.map((program, i) => (
            <ScrollReveal
              key={program.href}
              direction="up"
              delay={i * 0.08}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <TiltedCard tiltMax={8} scale={1.02} className="h-full">
                <ProgramCard program={program} />
              </TiltedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
