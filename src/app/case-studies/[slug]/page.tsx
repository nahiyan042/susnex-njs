import type { Metadata } from "next";
import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { caseStudies } from "@/lib/content/case-studies";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) {
    return { title: "Case Study Not Found" };
  }
  return pageSeo({
    title: study.title,
    description: `${study.title} — ${study.industry}. ${study.result[0]}`,
    path: `/case-studies/${slug}`,
  });
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-green)]"
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

function SectionCard({
  title,
  items,
  accentColor,
}: {
  title: string;
  items: string[];
  accentColor: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-bg-card p-8">
      <h2 className="font-heading text-xl font-bold tracking-tight">
        <span className={`mr-2 inline-block h-3 w-3 rounded-full ${accentColor}`} />
        {title}
      </h2>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
          >
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-heading text-3xl font-bold">Case Study Not Found</h1>
        <Link
          href="/case-studies"
          className="mt-6 inline-block text-sm font-medium text-[var(--color-green)] hover:underline"
        >
          &larr; Back to Case Studies
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-bg-primary">
      {/* Hero */}
      <section className="border-b border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-border bg-bg-card px-3 py-1 text-xs font-medium text-text-secondary">
            {study.industry}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>
          {study.client && (
            <p className="mt-4 text-lg text-text-secondary">
              Client: <strong>{study.client}</strong>
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--color-green)]/10 px-3 py-1 text-xs font-medium text-[var(--color-green)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Approach / Result */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <div className="space-y-8">
          <SectionCard
            title="The Challenge"
            items={study.challenge}
            accentColor="bg-red-500"
          />
          <SectionCard
            title="The Approach"
            items={study.approach}
            accentColor="bg-blue-500"
          />
          <SectionCard
            title="The Result"
            items={study.result}
            accentColor="bg-[var(--color-green)]"
          />
        </div>

        {study.referenceLinks && study.referenceLinks.length > 0 && (
          <div className="mt-10 rounded-2xl border border-border bg-bg-card p-8">
            <h3 className="font-heading text-lg font-bold">References</h3>
            <ul className="mt-4 space-y-2">
              {study.referenceLinks.map((link) => (
                <li key={link}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-green)] underline-offset-4 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 border-t border-border pt-8">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-[var(--color-green)] hover:underline"
          >
            &larr; Back to Case Studies
          </Link>
        </div>
      </section>
    </main>
  );
}
