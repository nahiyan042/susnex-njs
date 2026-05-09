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

/**
 * Open positions are intentionally light: every entry links out to its own
 * detail page where the rewritten posting + an in-page application form live.
 * Adding a new role is a two-step exercise — drop a card here, mirror it as
 * a `src/app/careers/<slug>/page.tsx` route — so we never have to rebuild
 * the listing UI when hiring picks up.
 */
const openPositions = [
  {
    title: "Sustainability Developer",
    href: "/careers/sustainability-developer",
    dept: "Consulting",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    badge: "Open backgrounds · Non-engineering welcome",
    description:
      "For graduates from Environmental Science, Disaster Management, Climate Studies, Public Policy, Sociology, Sustainability Sciences, and similar disciplines. Lead GRI / ESRS / IFRS reporting, materiality assessments, and policy work for RMG and corporate clients.",
  },
  {
    title: "Sustainability Engineer",
    href: "/careers/sustainability-engineer",
    dept: "Engineering",
    location: "Dhaka, Bangladesh + factory travel",
    type: "Full-time",
    badge: "Engineering required · Factory floor",
    description:
      "For engineers from Civil, Environmental, Chemical, Mechanical, Industrial, or Textile Engineering backgrounds. Lead energy audits, ETP/STP reviews, ZDHC chemical management, structural assessments, GHG inventories, and ISO 14001 / 45001 / 50001 implementation.",
  },
  {
    title: "Sustainability Development Intern",
    href: "/careers/sustainability-development-intern",
    dept: "Consulting",
    location: "Dhaka, Bangladesh",
    type: "Internship → Full-time",
    badge: "Paid · Apply on site",
    description:
      "Paid early-career role for graduates passionate about climate, ESG reporting, and circular economy. Successful interns convert to a full-time Sustainability Developer / Engineer position.",
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
          researchers who care about outcomes — not just deliverables. We invest
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
            // `relative` is REQUIRED here so the title Link's
            // `after:absolute after:inset-0` overlay scopes to THIS card
            // only. Without it, the overlay climbs to the nearest
            // positioned ancestor and every card's overlay stacks on top
            // of each other — the last one in DOM order then captures
            // every click on the page (which made every job link route
            // to the Intern role).
            <article
              key={job.title}
              className="group relative rounded-2xl border border-border bg-bg-card p-8 transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-[var(--color-green)]/30 bg-[var(--color-green)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-green)]">
                    {job.badge}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold transition-colors group-hover:text-[var(--color-green)]">
                    <Link href={job.href} className="after:absolute after:inset-0">
                      {job.title}
                    </Link>
                  </h3>
                </div>
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

              {/*
                `relative z-10` lifts the explicit CTA above the title Link's
                ::after overlay so this button remains independently clickable
                (and gets its own pointer cursor / focus ring) instead of
                being intercepted by the card-wide stretched-link area.
              */}
              <Link
                href={job.href}
                className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
              >
                View role &amp; apply
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-bg-secondary px-6 py-12 lg:py-16">
        <p className="mx-auto max-w-3xl text-center text-sm text-text-secondary">
          Don&apos;t see a role that fits? Send your CV to{" "}
          <a
            href="mailto:hr@susnex.com"
            className="font-semibold text-[var(--color-green)] underline-offset-4 hover:underline"
          >
            hr@susnex.com
          </a>
          {" "}with a short note about how you&apos;d like to contribute.
        </p>
      </section>
    </main>
  );
}
