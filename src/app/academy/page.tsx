import Image from "next/image";
import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { additionalTrainingCourses } from "@/lib/content/training";

export const metadata = pageSeo({
  title: "SusNex Academy",
  description:
    "Professional sustainability education: GRI Certified Training, RMG & Textile sustainability, ETP operations, and 14+ specialized programs.",
  path: "/academy",
});

const flagshipPrograms = [
  {
    badge: "Flagship Program",
    title: "GRI Certified Training Course",
    subtitle: "With Mock Tests & Exam Prep Workshop",
    description:
      "Equip yourself with the essential knowledge and skills required to meet new sustainability and ESG reporting requirements. Includes 4 GRI courses, exam prep, mock tests, and 3 GRI-nominated trainers.",
    highlights: [
      "4 GRI-certified courses",
      "Exam preparation workshop",
      "25% discount on certification exam",
      "Face-to-face & online sessions",
    ],
    href: "/academy/gri-certified-training",
    cta: "View GRI Training",
    image: "/images/academy/gri-training.jpg",
  },
  {
    badge: "Industry Focus",
    title: "Sustainable Solutions for RMG & Textile Industry",
    subtitle: "Sustainability Fundamentals, Circular Design & Waste Management",
    description:
      "A comprehensive program for professionals in Bangladesh's RMG & Textile industry covering sustainability fundamentals, circular economy principles, eco-design practices, and waste management strategies.",
    highlights: [
      "3 specialized modules",
      "Circular economy & eco-design",
      "Waste management strategies",
      "International standards alignment",
    ],
    href: "/academy/rmg-textile-training",
    cta: "View RMG Training",
    image: "/images/academy/rmg-training.jpg",
  },
  {
    badge: "Technical",
    title: "ETP Operation, Performance Analysis & Improvement",
    subtitle: "Wastewater Treatment & Environmental Compliance",
    description:
      "An advanced technical program covering wastewater treatment science, activated sludge design, ZLD systems, performance mathematics, and troubleshooting for environmental engineers and ETP operators.",
    highlights: [
      "5 in-depth modules",
      "Activated sludge & ZLD systems",
      "Performance analytics & KPIs",
      "Real-world case studies",
    ],
    href: "/academy/etp-training",
    cta: "View ETP Training",
    image: "/images/academy/etp-training.jpg",
  },
];

function CheckSvg() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-[var(--color-green)]"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function AcademyPage() {
  return (
    <main className="bg-bg-primary">
      <PageHeader
        title="SusNex Academy"
        description="Professional sustainability education and certification programs for the next generation of sustainability leaders."
      />

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Empowering Sustainability Professionals
          </h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            SusNex is a <strong>GRI Certified Training Partner (CTP)</strong> for
            the entire globe with three GRI-nominated trainers. With over 50
            successful sustainability reports, SusNex Academy equips
            professionals with practical skills aligned to global standards.
          </p>
        </div>

        <div className="mt-12 grid gap-4 text-center sm:grid-cols-3">
          {[
            { value: "50+", label: "Sustainability Reports" },
            { value: "500+", label: "Trained Professionals" },
            { value: "10+", label: "Years Experienced Trainers" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-bg-card p-6"
            >
              <p className="font-heading text-3xl font-bold text-[var(--color-green)]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Flagship Training Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
            Our cornerstone programs designed for sustainability professionals at every level.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {flagshipPrograms.map((program) => (
              <article
                key={program.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex-1 p-8">
                  <span className="inline-flex rounded-full bg-[var(--color-green)] px-3 py-1 text-xs font-semibold text-white">
                    {program.badge}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold tracking-tight">
                    {program.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--color-green)]">
                    {program.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {program.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {program.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <CheckSvg />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border p-6">
                  <Link
                    href={program.href}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
                  >
                    {program.cta}
                    <svg
                      className="h-4 w-4"
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
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Training Programs */}
      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Specialized Training Programs
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-text-secondary">
            Advance your team&apos;s sustainability performance with
            specialized training programs designed for factories, brands,
            suppliers, and corporate professionals. SusNex delivers practical,
            expert-led training in ESG reporting, environmental compliance,
            climate action, energy management, chemical safety, social
            responsibility, and operational excellence.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center leading-relaxed text-text-secondary">
            Our programs combine global standards with real factory and
            supply-chain experience — turning complex sustainability
            requirements into clear, actionable workplace practice.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {additionalTrainingCourses.map((course) => (
              <article
                key={course.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-bg-secondary">
                  <Image
                    src={course.coverImage}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  {course.badge && (
                    <span className="absolute left-3 top-3 z-10 inline-flex rounded-full bg-[var(--color-green)] px-2.5 py-0.5 text-xs font-semibold text-white shadow-md shadow-black/20">
                      {course.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-base font-bold tracking-tight transition-colors group-hover:text-[var(--color-green)]">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-text-secondary line-clamp-3">
                    {course.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-full border border-border bg-bg-secondary px-2 py-0.5 text-[10px] font-medium text-text-secondary">
                      {course.duration}
                    </span>
                    <span className="rounded-full border border-border bg-bg-secondary px-2 py-0.5 text-[10px] font-medium text-text-secondary">
                      {course.level}
                    </span>
                  </div>
                  {course.trainers.length > 0 && (
                    <p className="mt-2 text-[10px] text-text-secondary">
                      <span className="font-medium">Trainer{course.trainers.length > 1 ? "s" : ""}:</span>{" "}
                      {course.trainers.map((t) => t.name).join(", ")}
                    </p>
                  )}
                </div>
                <div className="border-t border-border p-4">
                  <Link
                    href={`/academy/${course.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Plan Your Next Cohort
          </h2>
          <p className="mt-4 text-text-secondary">
            Talk to us about corporate packages, custom delivery, and
            certification pathways.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[var(--color-green)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
          >
            Contact SusNex Academy
          </Link>
        </div>
      </section>
    </main>
  );
}
