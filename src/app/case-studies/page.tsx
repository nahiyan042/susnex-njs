import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { caseStudies } from "@/lib/content/case-studies";

export const metadata = pageSeo({
  title: "Case Studies",
  description:
    "Real-world sustainability projects, client outcomes, and measurable impact by SusNex.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <main className="bg-bg-primary">
      <PageHeader
        title="Case Studies"
        description="Real projects. Measurable impact. Proven results."
      />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
            >
              <div className="flex-1 p-6">
                <span className="inline-block rounded-full border border-border bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary">
                  {study.industry}
                </span>
                <h2 className="mt-4 font-heading text-lg font-bold tracking-tight transition-colors group-hover:text-[var(--color-green)]">
                  <Link href={`/case-studies/${study.slug}`}>
                    {study.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
                  {study.result[0]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-secondary px-3 py-1 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-border p-4">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-[var(--color-green)] transition-colors hover:text-[var(--color-green-dark)]"
                >
                  Read Case Study
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
    </main>
  );
}
