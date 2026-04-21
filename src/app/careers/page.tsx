import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = pageSeo({
  title: "Careers",
  description:
    "Join the SusNex team — explore open positions in sustainability consulting and engineering.",
  path: "/careers",
});

const sectionClass = "mx-auto max-w-6xl px-6 py-16 lg:py-24";

const openPositions = [
  {
    title: "Senior Sustainability Engineer",
    dept: "Consulting",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Lead sustainability assessments and ESG reporting projects for RMG and textile industry clients.",
  },
  {
    title: "ESG Analyst",
    dept: "Research",
    location: "Remote",
    type: "Full-time",
    description:
      "Analyze sustainability data, prepare ESG reports, and support client engagement across SMART programs.",
  },
  {
    title: "Sustainability Developer (Web)",
    dept: "Technology",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Build and maintain digital tools for sustainability reporting and data visualization.",
  },
] as const;

const benefits = [
  {
    title: "Impact",
    body: "Work on projects that drive measurable environmental and social change.",
  },
  {
    title: "Growth",
    body: "Continuous learning through our Academy and exposure to international standards.",
  },
  {
    title: "Global Reach",
    body: "Collaborate with experts across Bangladesh, USA, UK, and Canada.",
  },
  {
    title: "Culture",
    body: "A diverse, inclusive workplace committed to the values we preach.",
  },
] as const;

export default function CareersPage() {
  return (
    <main className="bg-bg-primary">
      <PageHeader
        title="Careers at SusNex"
        description="Join our team of sustainability experts making a real impact."
      />

      <section className={sectionClass}>
        <p className="max-w-3xl leading-relaxed text-text-secondary">
          At SusNex, you will work alongside consultants, engineers, and
          researchers who care about outcomes—not just deliverables. We invest
          in learning, share responsibility across projects, and support each
          other in raising the bar for sustainability practice in Bangladesh
          and beyond.
        </p>
      </section>

      <section className={`bg-bg-secondary ${sectionClass}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Why Join SusNex
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-bg-card p-6"
            >
              <h3 className="font-heading text-lg font-bold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={`bg-bg-primary ${sectionClass}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Open Positions
        </h2>
        <div className="mt-10 flex flex-col gap-6">
          {openPositions.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border border-border bg-bg-card p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="font-heading text-xl font-bold">{job.title}</h3>
                <span className="inline-flex rounded-full border border-border bg-bg-secondary px-3 py-1 text-xs font-semibold text-text-secondary">
                  {job.dept}
                </span>
              </div>
              <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
                <div>
                  <dt className="sr-only">Location</dt>
                  <dd>{job.location}</dd>
                </div>
                <div>
                  <dt className="sr-only">Employment type</dt>
                  <dd>{job.type}</dd>
                </div>
              </dl>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {job.description}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-lg bg-[var(--color-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
              >
                Apply Now
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-bg-secondary px-6 py-12 lg:py-16">
        <p className="mx-auto max-w-3xl text-center text-sm text-text-secondary">
          Don&apos;t see a role that fits? Send your CV to{" "}
          <a
            href="mailto:ask@susnex.com"
            className="font-semibold text-[var(--color-green)] underline-offset-4 hover:underline"
          >
            ask@susnex.com
          </a>
        </p>
      </section>
    </main>
  );
}
