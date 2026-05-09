import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";

const POSITION = "Sustainability Developer";
const LOCATION = "Dhaka, Bangladesh (On-site)";
const EMPLOYMENT_TYPE = "Full-time";
const EXPERIENCE = "1–3 years (open backgrounds)";
const COMPENSATION = "Salaried + bonuses";

export const metadata = pageSeo({
  title: `${POSITION} — Careers at SusNex`,
  description:
    "Full-time Sustainability Developer role at SusNex — open to graduates from Environmental Science, Disaster Management, Climate Studies, Public Policy, Sociology, Sustainability Sciences, and other non-engineering backgrounds. Lead GRI / ESRS / IFRS reporting, materiality assessments, and policy development for RMG and corporate clients in Dhaka.",
  path: "/careers/sustainability-developer",
});

function jobPostingJsonLd() {
  const today = new Date();
  const sixtyDaysOut = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: POSITION,
    description:
      "Full-time consulting role for sustainability practitioners from non-engineering backgrounds — environmental science, disaster management, climate studies, public policy, sociology, sustainability sciences, and similar disciplines. Lead pieces of live engagements end-to-end across GRI / ESRS / IFRS reporting, materiality, and policy work for RMG and corporate clients.",
    datePosted: today.toISOString().slice(0, 10),
    validThrough: sixtyDaysOut.toISOString().slice(0, 10),
    employmentType: "FULL_TIME",
    industry: "Sustainability Consulting",
    directApply: true,
    hiringOrganization: {
      "@type": "Organization",
      name: "The Sustainability Nexus Ltd",
      sameAs: "https://www.susnex.com",
      logo: "https://www.susnex.com/images/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "4th Floor, Bank Asia Building, 30 Sonargaon Janapath Ave, Sector 11, Uttara",
        addressLocality: "Dhaka",
        postalCode: "1230",
        addressCountry: "BD",
      },
    },
    educationRequirements: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Bachelor degree",
    },
    experienceRequirements: {
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: 12,
    },
    qualifications:
      "BSc, MSc, BBA, or MBA in Environmental Science, Disaster Management, Climate Studies, Sustainability Sciences, Geography, Public Policy, Sociology, Statistics, Development Studies, or related disciplines. Engineering graduates more drawn to consulting than to factory-floor audits are also welcome to apply.",
    responsibilities:
      "Own discrete workstreams within larger client engagements. Author GRI / ESRS / IFRS report sections, run materiality assessments, design sustainability policies, validate factory-level data, facilitate stakeholder workshops, and translate emerging regulation (CSRD, ESPR, etc.) into client-ready guidance.",
    workHours: "Full Time",
  };
}

const sectionBase = "mx-auto max-w-5xl px-6 py-16 lg:py-20";

const responsibilities: { title: string; body: string }[] = [
  {
    title: "Own a workstream end-to-end",
    body: "Lead discrete pieces of larger engagements — set the cadence with the client, manage the risk log, and keep your deliverable on track without senior babysitting.",
  },
  {
    title: "Materiality & stakeholder engagement",
    body: "Design and facilitate materiality assessments. Run interviews with workers, suppliers, and management to surface what actually matters for the report and the business.",
  },
  {
    title: "Sustainability report writing",
    body: "Author full sections of GRI / ESRS / IFRS Sustainability — disclosures, KPI tables, and the narrative that ties numbers to context. Manage the back-and-forth with assurance providers.",
  },
  {
    title: "Policy & framework development",
    body: "Translate international standards into client-specific policies and procedures — environmental management, supplier code of conduct, grievance mechanism, human-rights due diligence.",
  },
  {
    title: "Data validation & quality control",
    body: "Coordinate factory-level data collection, validate submissions against source documents, and build the reconciliation models that make sure the numbers tell a coherent story.",
  },
  {
    title: "Workshop facilitation & training",
    body: "Run client capacity-building sessions on disclosure, materiality, and SDG alignment. Train factory teams to own the data they’re reporting next year without our help.",
  },
  {
    title: "Cross-functional collaboration",
    body: "Work with our engineering, ESG, and design colleagues on integrated proposals — the deliverable is rarely a single discipline’s output.",
  },
  {
    title: "Knowledge stewardship",
    body: "Track regulatory developments — CSRD, ESPR, ESRS sector standards, IFRS S1/S2 — and turn them into briefing notes for the team and the clients we already serve.",
  },
];

const lookFor: { title: string; body: string }[] = [
  {
    title: "Education",
    body: "BSc, MSc, BBA, or MBA in Environmental Science, Disaster Management, Climate Studies, Sustainability Sciences, Geography, Public Policy, Sociology, Statistics, Development Studies, or related fields. Engineering grads who want the consulting rather than audit side are welcome too.",
  },
  {
    title: "Experience",
    body: "1–3 years of relevant work — sustainability consulting, NGO programs, internal CSR / ESG, applied research, or a strong internship from a rigorous program.",
  },
  {
    title: "Frameworks",
    body: "Working familiarity with at least one of GRI, ESRS, IFRS Sustainability, CDP, TCFD, UN SDGs, ZDHC, or Higg FEM. We don’t expect mastery of all of them — we expect curiosity and the ability to learn the next one quickly.",
  },
  {
    title: "Craft",
    body: "Strong written English, comfort building structured analyses in Excel or Sheets, and a track record of getting things across the finish line under real deadlines.",
  },
  {
    title: "Mindset",
    body: "Curious, methodical, comfortable with ambiguity, and willing to ask the obvious question in a roomful of senior people. We hire for slope, not intercept.",
  },
];

const benefits: { title: string; body: string }[] = [
  {
    title: "Competitive salary",
    body: "Benchmarked against the Bangladeshi sustainability consulting market and reviewed yearly.",
  },
  {
    title: "Performance & festival bonuses",
    body: "Performance-based bonus and two festival bonuses a year on top of base salary.",
  },
  {
    title: "Mobile bill allowance",
    body: "Monthly mobile allowance covered — client coordination shouldn’t come out of your pocket.",
  },
  {
    title: "Lunch facility",
    body: "Partially-subsidised lunch at the Uttara office. Real teams eat together.",
  },
  {
    title: "International standards exposure",
    body: "Hands-on with GRI, ESRS, IFRS, CDP, TCFD, Higg FEM, ZDHC, and the UN SDGs — the same frameworks our senior consultants train under.",
  },
  {
    title: "Clear progression",
    body: "Defined path from Sustainability Developer → Senior Developer → Project Lead → Account Lead, tied to scope and reviewed every cycle.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-green)]"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function FactPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-bg-card px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-text-primary">{value}</p>
    </div>
  );
}

const educationOptions = [
  "Bachelor of Science (BSc)",
  "Master of Science (MSc)",
  "Bachelor of Business Administration (BBA)",
  "Master of Business Administration (MBA)",
  "Bachelor in Engineering (BEngg)",
  "Master in Engineering (MEngg)",
  "Other",
];

const experienceOptions = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
];

const businessAreaOptions = [
  "Sustainability Consulting",
  "Garments / Textile",
  "Research / NGO",
  "Corporate ESG / CSR",
  "Public Sector",
  "Other",
];

export default function SustainabilityDeveloperPage() {
  return (
    <main className="bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd()) }}
      />

      {/* Hero */}
      <section className="neo-surface relative overflow-hidden border-b border-border bg-bg-secondary px-6 pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-green)]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[var(--color-green)]/8 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-green)] hover:underline"
          >
            <span aria-hidden="true">&larr;</span> Back to all careers
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full border border-[var(--color-green)]/30 bg-[var(--color-green)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-green)]">
              Full-time
            </span>
            <span className="inline-flex rounded-full border border-border bg-bg-card px-3 py-1 text-xs font-semibold text-text-secondary">
              Open backgrounds
            </span>
            <span className="inline-flex rounded-full border border-border bg-bg-card px-3 py-1 text-xs font-semibold text-text-secondary">
              Consulting bench
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Sustainability Developer
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Sustainability isn&rsquo;t only an engineering problem. We&rsquo;re
            hiring developers from environmental science, disaster management,
            climate studies, public policy, sociology, and sustainability
            sciences to lead the consulting side of our practice.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <FactPill label="Location" value={LOCATION} />
            <FactPill label="Type" value={EMPLOYMENT_TYPE} />
            <FactPill label="Experience" value={EXPERIENCE} />
            <FactPill label="Compensation" value={COMPENSATION} />
          </div>

          <div className="mt-8">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
            >
              Apply for this role
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Who this role is for */}
      <section className={`bg-bg-primary ${sectionBase}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Who this role is for
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
          <p>
            The frameworks that govern modern sustainability reporting —{" "}
            <strong className="text-text-primary">
              GRI, ESRS, IFRS Sustainability, TCFD, UN SDGs
            </strong>{" "}
            — were built to capture environmental, social, and governance
            performance. The people best placed to translate field reality
            into structured disclosure aren&rsquo;t always engineers. Often
            they&rsquo;re graduates of environmental science, disaster
            management, climate studies, social sciences, statistics, public
            policy, or sustainability sciences.
          </p>
          <p>
            We&rsquo;re hiring{" "}
            <strong className="text-text-primary">
              Sustainability Developers
            </strong>{" "}
            from these backgrounds onto our consulting bench. You will own
            pieces of live engagements end-to-end — design materiality
            assessments, build out reporting structures, coordinate
            factory-level data collection, draft narrative sections, and
            present findings to client leadership.
          </p>
          <p>
            This is not a junior shadow role. From week one you&rsquo;ll be
            embedded in named accounts, working directly with senior
            consultants and directors with exposure to the full reporting
            lifecycle and the regulatory backdrop driving it.
          </p>
        </div>
      </section>

      {/* Responsibilities */}
      <section className={`bg-bg-secondary ${sectionBase}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          What you&rsquo;ll do
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">
          A typical week mixes desk research, client calls, on-site stakeholder
          work, and team writing sessions. The surface area:
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {responsibilities.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:border-[var(--color-green)]/30"
            >
              <div className="flex items-start gap-3">
                <CheckIcon />
                <div>
                  <h3 className="font-heading text-base font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What we look for */}
      <section className={`bg-bg-primary ${sectionBase}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          What we look for
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">
          Background diversity is the point of this role. The non-negotiables
          are below — everything else is on the table.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lookFor.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-bg-card p-6"
            >
              <h3 className="font-heading text-base font-bold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What you'll get */}
      <section className={`bg-bg-secondary ${sectionBase}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          What you&rsquo;ll get
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">
          Compensation, benefits, and the things that don&rsquo;t fit on a
          comp sheet but make the work worth doing.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-bg-card p-6"
            >
              <h3 className="font-heading text-base font-bold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className={`bg-bg-primary ${sectionBase}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          About SusNex
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
          <p>
            <strong className="text-text-primary">
              The Sustainability Nexus Ltd (SusNex)
            </strong>{" "}
            is a global network of sustainability and CSR experts. The thread
            running through everything we do is the{" "}
            <em>management of change</em> — helping businesses, communities,
            and ecosystems navigate transition with the best technology,
            knowledge, and partnerships available.
          </p>
          <p>
            Our work spans policy advice, strategy, capacity development,
            technical assistance, monitoring &amp; evaluation, and audits across
            a broad range of sectors and themes — from RMG and textiles to
            financial services and the public sector.
          </p>
          <p className="text-sm text-text-secondary">
            Office: 30 Sonargaon Janapath Avenue, Sector 11, Uttara, Dhaka.
          </p>
        </div>
      </section>

      {/* Apply */}
      <section
        id="apply"
        className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-[var(--color-green)]/30 bg-[var(--color-green)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-green)]">
              Apply now
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Submit your application
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Fill in the form below and attach your CV. Submissions go straight
              to{" "}
              <a
                href="mailto:hr@susnex.com"
                className="font-medium text-[var(--color-green)] underline-offset-4 hover:underline"
              >
                hr@susnex.com
              </a>
              . If there&rsquo;s a fit, our HR team will be in touch within
              7&ndash;10 working days.
            </p>
          </div>

          <div className="neo-surface mt-10 rounded-3xl border border-border bg-bg-card p-6 sm:p-8 lg:p-10">
            <JobApplicationForm
              position={POSITION}
              educationOptions={educationOptions}
              experienceOptions={experienceOptions}
              businessAreaOptions={businessAreaOptions}
              experienceHelperText="This is a full-time consulting role. We’re looking for 1–3 years of relevant experience, but a strong portfolio from research or program work can stand in for years."
              fieldOfStudyPlaceholder="e.g. Environmental Science, Disaster Management, Public Policy"
              motivationPlaceholder="Tell us what draws you to sustainability consulting and a project (academic, professional, or personal) that shows how you think."
            />
          </div>

          <p className="mt-6 text-center text-xs text-text-secondary">
            Prefer email? You can also send your CV to{" "}
            <a
              href="mailto:hr@susnex.com"
              className="font-medium text-[var(--color-green)] underline-offset-4 hover:underline"
            >
              hr@susnex.com
            </a>{" "}
            with the subject line{" "}
            <code className="rounded bg-bg-secondary px-1.5 py-0.5 text-[11px]">
              Application — {POSITION}
            </code>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
