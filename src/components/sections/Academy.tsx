"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StarBorderCard } from "@/components/ui/StarBorderCard";
import { GradualBlur } from "@/components/ui/GradualBlur";
import { SectionBackground } from "@/components/ui/SectionBackground";

const programs = [
  {
    badge: "Flagship",
    title: "GRI Certified Training Course",
    description:
      "Professional GRI certified training with 4 courses, mock tests, exam prep workshop, and 3 GRI-nominated trainers. Both face-to-face and online sessions available.",
    highlights: ["4 GRI Courses", "Exam Prep & Mock Tests", "GRI Certificates"],
    href: "/academy/gri-certified-training",
    image: "/images/academy/gri-training.jpg",
  },
  {
    badge: "Industry",
    title: "RMG & Textile Sustainability",
    description:
      "Sustainability fundamentals, circular design, and waste management for Bangladesh's RMG & Textile industry professionals.",
    highlights: ["3 Modules", "Circular Economy", "Waste Management"],
    href: "/academy/rmg-textile-training",
    image: "/images/academy/rmg-training.jpg",
  },
  {
    badge: "Technical",
    title: "ETP Operation & Performance",
    description:
      "Advanced wastewater treatment, activated sludge, ZLD systems, performance analytics, and troubleshooting for environmental engineers.",
    highlights: ["5 Modules", "ZLD Systems", "Case Studies"],
    href: "/academy/etp-training",
    image: "/images/academy/etp-training.jpg",
  },
];

export function Academy() {
  return (
    <section className="relative bg-bg-primary py-24 lg:py-32">
      <SectionBackground
        lightSrc="/images/backgrounds/bg-academy-light.png"
        darkSrc="/images/backgrounds/bg-academy-dark.png"
        opacity={0.25}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <GradualBlur>
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-green)]">
                SusNex Academy
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Training Programs
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                Professional sustainability education and certification programs
                for the next generation of sustainability leaders.
              </p>
            </div>
          </ScrollReveal>
        </GradualBlur>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {programs.map((program, i) => (
            <ScrollReveal key={program.href} direction="up" delay={i * 0.1} className="w-full lg:w-[calc(33.333%-16px)]">
              <StarBorderCard speed={6.5} className="h-full">
                <Link
                  href={program.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[inherit] bg-bg-card"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span
                      className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold text-white ${
                        program.badge === "Flagship"
                          ? "bg-[var(--color-green)]"
                          : program.badge === "Industry"
                            ? "bg-amber-600"
                            : "bg-blue-600"
                      }`}
                    >
                      {program.badge}
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-bold tracking-tight transition-colors group-hover:text-[var(--color-green)]">
                      {program.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                      {program.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {program.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-border bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border px-8 py-5">
                    <span className="flex items-center text-sm font-semibold text-[var(--color-green)]">
                      View Program
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
                    </span>
                  </div>
                </Link>
              </StarBorderCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.35}>
          <div className="mt-12 text-center">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
            >
              Explore All Programs
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
