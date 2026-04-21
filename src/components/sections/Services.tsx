"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TiltedCard } from "@/components/ui/TiltedCard";
import { GradualBlur } from "@/components/ui/GradualBlur";
import { SectionBackground } from "@/components/ui/SectionBackground";

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
    title: "amfori Speak for Change",
    description:
      "Supply-chain grievance mechanism setup, guided remediation, and due-diligence reporting support.",
    href: "/services/speak-for-change",
    image: "/images/services/speak-for-change.webp",
  },
  {
    title: "DPP & ESPR Readiness",
    description:
      "Textile data architecture, traceability, and EU-ready sustainability disclosure workflows.",
    href: "/services/dpp-espr",
    image: "/images/services/dpp-espr.webp",
  },
];

export function Services() {
  return (
    <section className="relative bg-bg-secondary py-24 lg:py-32">
      <SectionBackground
        lightSrc="/images/backgrounds/bg-services-light.png"
        darkSrc="/images/backgrounds/bg-services-dark.png"
        opacity={0.3}
      />

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
            <ScrollReveal key={program.href} direction="up" delay={i * 0.08} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <TiltedCard tiltMax={8} scale={1.02} className="h-full">
                <Link
                  href={program.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-300 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/5"
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
              </TiltedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
