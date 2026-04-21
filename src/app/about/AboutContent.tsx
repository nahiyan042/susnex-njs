"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { GradualBlur } from "@/components/ui/GradualBlur";

interface LogoItem {
  src: string;
  alt: string;
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.5 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function VisionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function MissionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="m15.2 8.8 2.8-2.8" />
      <path d="M18 12h4" />
      <path d="m15.2 15.2 2.8 2.8" />
      <path d="M12 18v4" />
      <path d="m8.8 15.2-2.8 2.8" />
      <path d="M2 12h4" />
      <path d="m8.8 8.8-2.8-2.8" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function QualityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2Z" />
    </svg>
  );
}

const sectionClass = "relative mx-auto max-w-6xl px-6 py-16 lg:py-24";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function AboutContent({
  partnerLogos,
  clientLogos,
}: {
  partnerLogos: LogoItem[];
  clientLogos: LogoItem[];
}) {
  return (
    <>
      {/* Bento Grid */}
      <section className="relative bg-bg-primary">
        <SectionBackground
          lightSrc="/images/backgrounds/bg-about-light.png"
          darkSrc="/images/backgrounds/bg-about-dark.png"
          opacity={0.2}
        />
        <div className={sectionClass}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* About text (2 cols) */}
            <motion.div
              {...fadeUp}
              className="flex flex-col justify-center rounded-2xl border border-border bg-bg-card/80 p-8 backdrop-blur-sm lg:col-span-2"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-green)]/10">
                  <LeafIcon className="h-5 w-5 text-[var(--color-green)]" />
                </span>
                <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                  About SusNex
                </h2>
              </div>
              <p className="max-w-prose leading-relaxed text-text-secondary">
                The Sustainability Nexus Ltd &ndash; Your Partner in Sustainability.
                We help companies become more sustainable and resilient through
                better business practices, advisory, and training services to
                enhance their journey towards long-term sustainability.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["ESG Advisory", "Carbon Management", "Social Sustainability", "GRI Training"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-[var(--color-green)]/20 bg-[var(--color-green)]/5 px-3 py-1 text-xs font-medium text-[var(--color-green)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image card */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="relative min-h-[260px] overflow-hidden rounded-2xl border border-border lg:col-span-1"
            >
              <Image
                src="/images/about-hero.webp"
                alt="SusNex team at work"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-[var(--color-green)] p-6 text-center text-white"
            >
              <GlobeIcon className="mb-2 h-8 w-8 text-white/80" />
              <span className="font-heading text-3xl font-bold">60+</span>
              <span className="mt-1 text-sm text-white/80">Star Clients</span>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-bg-card/80 p-6 text-center backdrop-blur-sm"
            >
              <ShieldIcon className="mb-2 h-8 w-8 text-[var(--color-green)]" />
              <span className="font-heading text-3xl font-bold">12+</span>
              <span className="mt-1 text-sm text-text-secondary">Partners</span>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-bg-card/80 p-6 text-center backdrop-blur-sm"
            >
              <LeafIcon className="mb-2 h-8 w-8 text-[var(--color-green)]" />
              <span className="font-heading text-3xl font-bold">8+</span>
              <span className="mt-1 text-sm text-text-secondary">Services</span>
            </motion.div>

            {/* Vision */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="group flex flex-col rounded-2xl border border-border bg-bg-card/80 p-8 backdrop-blur-sm transition-shadow hover:shadow-lg hover:border-[var(--color-green)]/30"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]">
                <VisionIcon className="h-6 w-6 text-white" />
              </span>
              <h3 className="font-heading text-xl font-bold tracking-tight">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                To provide exceptional professional services in Sustainability,
                Ethical Trading &amp; Conformity while maintaining the highest
                levels of integrity and competence.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.35 }}
              className="group flex flex-col rounded-2xl border border-border bg-bg-card/80 p-8 backdrop-blur-sm transition-shadow hover:shadow-lg hover:border-[var(--color-green)]/30"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]">
                <MissionIcon className="h-6 w-6 text-white" />
              </span>
              <h3 className="font-heading text-xl font-bold tracking-tight">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                To provide best quality services with reliable data so clients
                can meet sustainability goals and report performance publicly.
              </p>
            </motion.div>

            {/* Quality */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              className="group flex flex-col rounded-2xl border border-border bg-bg-card/80 p-8 backdrop-blur-sm transition-shadow hover:shadow-lg hover:border-[var(--color-green)]/30"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]">
                <QualityIcon className="h-6 w-6 text-white" />
              </span>
              <h3 className="font-heading text-xl font-bold tracking-tight">Quality Policy</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                SusNex gives best professional services in Sustainability,
                Ethical Trading, and Conformity with the highest integrity and
                commitment to exceeding client requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="relative bg-bg-secondary">
        <div className={sectionClass}>
          <GradualBlur>
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Our Partners
            </h2>
          </GradualBlur>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {partnerLogos.map((logo, i) => (
              <motion.div
                key={logo.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex items-center justify-center rounded-xl border border-border bg-bg-card p-4 transition-shadow hover:shadow-lg hover:border-[var(--color-green)]/30"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={240}
                  className="h-auto max-h-28 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="relative bg-bg-primary">
        <SectionBackground
          lightSrc="/images/backgrounds/bg-services-light.png"
          darkSrc="/images/backgrounds/bg-services-dark.png"
          opacity={0.15}
        />
        <div className={sectionClass}>
          <GradualBlur>
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Our Star Clients
            </h2>
          </GradualBlur>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={logo.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex items-center justify-center rounded-xl border border-border bg-bg-card/80 p-4 backdrop-blur-sm transition-shadow hover:shadow-lg hover:border-[var(--color-green)]/30"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={240}
                  className="h-auto max-h-28 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
