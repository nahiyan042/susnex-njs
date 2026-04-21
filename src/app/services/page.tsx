import Link from "next/link";
import Image from "next/image";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = pageSeo({
  title: "Our Services",
  description:
    "Explore SusNex integrated sustainability services — ESG reporting, energy & carbon management, chemical & wastewater management, sustainable materials, gender equality, and structural engineering.",
  path: "/services",
});

const sectionClass = "mx-auto max-w-6xl px-6 py-16 lg:py-24";

const services = [
  {
    href: "/services/esg-reporting",
    title: "ESG & Sustainability Reporting",
    description:
      "Materiality, data collection, and reporting aligned with GRI, ESRS, TCFD, and CDP so you can disclose with confidence.",
    image: "/images/services/esg-reporting.webp",
  },
  {
    href: "/services/energy-carbon",
    title: "Energy & Carbon Management",
    description:
      "ASHRAE audits, GHG inventories, and science-based targets to cut energy use and emissions across operations.",
    image: "/images/services/energy-carbon.webp",
  },
  {
    href: "/services/chemical-wastewater",
    title: "Chemical & Wastewater Management",
    description:
      "ZDHC compliance, Higg FEM, and treatment optimization for safer chemistry and lower-impact wastewater.",
    image: "/images/services/chemical-wastewater.webp",
  },
  {
    href: "/services/material-smart",
    title: "Sustainable Materials & Circularity",
    description:
      "Circularity, sustainable sourcing, and lifecycle thinking aligned with evolving product regulations.",
    image: "/images/services/material-smart.webp",
  },
  {
    href: "/services/gender-smart",
    title: "Gender Equality and Social Inclusion (GESI)",
    description:
      "Gender-responsive policies, training, and audits for inclusive, harassment-free workplaces.",
    image: "/images/services/gender-smart.webp",
  },
  {
    href: "/services/engineering-assessment",
    title: "Structural Engineering Assessment",
    description:
      "Structural, soil, and foundation analysis with documented calculations for safe, compliant assets.",
    image: "/images/services/engineering-assessment.webp",
  },
  {
    href: "/services/speak-for-change",
    title: "amfori Speak for Change Implementation",
    description:
      "Supply-chain grievance mechanism setup, guided remediation, and due-diligence reporting support.",
    image: "/images/services/speak-for-change.webp",
  },
  {
    href: "/services/dpp-espr",
    title: "Digital Product Passport (DPP) & ESPR Readiness",
    description:
      "Textile data architecture, traceability systems, and EU-ready sustainability disclosure workflows.",
    image: "/images/services/dpp-espr.webp",
  },
] as const;


export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Our Services"
        description="Integrated sustainability programs covering ESG reporting, energy & carbon, social inclusion, grievance mechanisms, digital product passports, and more."
      />

      <section className={`bg-bg-primary ${sectionClass}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Integrated Programs for Sustainable Growth
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-text-secondary">
          SusNex bundles advisory, technical assessment, and capacity building
          into integrated programs covering ESG strategy, energy and climate,
          chemical and wastewater stewardship, circular materials, social
          inclusion, structural engineering, grievance mechanisms, and digital
          product passport readiness — so your organization can improve
          performance, compliance, and trust in one coherent roadmap.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex w-full flex-col overflow-hidden rounded-xl border border-border bg-bg-card transition hover:border-[var(--color-green)] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-bold tracking-tight text-text-primary group-hover:text-[var(--color-green)]">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {s.description}
                </p>
                <span className="mt-4 text-sm font-medium text-[var(--color-green)]">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className={`border-t border-border bg-bg-secondary ${sectionClass} text-center`}
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Ready to start your sustainability journey?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Tell us about your goals and constraints — we will map the right
          program or combination for your team.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-green-dark)]"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}
