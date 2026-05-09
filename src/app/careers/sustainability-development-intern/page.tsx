import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";

const POSITION = "Sustainability Development Intern";
const LOCATION = "Dhaka, Bangladesh (On-site)";
const EMPLOYMENT_TYPE = "Internship → Full-time";
const EXPERIENCE = "Up to 1 year (freshers welcome)";
const COMPENSATION = "Paid internship";

export const metadata = pageSeo({
  title: `${POSITION} — Careers at SusNex`,
  description:
    "Paid Sustainability Development Internship in Dhaka. Work on ESG reporting, energy audits, and circular-economy projects with a fast-track to a full-time Sustainability Developer/Engineer role at SusNex.",
  path: "/careers/sustainability-development-intern",
});

/**
 * JSON-LD JobPosting so Google Jobs can surface this opening directly.
 * Salary is intentionally not declared (we treat the stipend as
 * confidential), but `employmentType`, `validThrough`, and
 * `directApply: true` are set so the listing reads as an active,
 * apply-on-site role rather than an aggregator scrape.
 */
function jobPostingJsonLd() {
  const today = new Date();
  const sixtyDaysOut = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: POSITION,
    description:
      "Paid internship for early-career graduates passionate about climate, sustainability, and business transparency. Support GRI/ESRS/IFRS reporting, energy audits, and circular-economy projects across the RMG, textile, and consulting industries. Successful interns convert to a full-time Sustainability Developer/Engineer role.",
    datePosted: today.toISOString().slice(0, 10),
    validThrough: sixtyDaysOut.toISOString().slice(0, 10),
    employmentType: ["INTERN", "FULL_TIME"],
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
      monthsOfExperience: 0,
    },
    qualifications:
      "Bachelor in Engineering (BEngg), Bachelor of Science (BSc), or Bachelor of Business Administration (BBA). At most one year of experience. Industry exposure to consulting firms, garments, textiles, or research organisations is a plus. Freshers are encouraged to apply.",
    responsibilities:
      "Support sustainability projects, contribute to GRI/ESRS/IFRS/TCFD reporting, conduct energy audits, advance circular-economy initiatives, run research, track sustainability metrics, and help promote client sustainability achievements.",
    workHours: "Full Time",
  };
}

const sectionBase = "mx-auto max-w-5xl px-6 py-16 lg:py-20";

const responsibilities: { title: string; body: string }[] = [
  {
    title: "Project delivery & client coordination",
    body: "Help design and run sustainability projects across RMG, textile, and corporate clients. Coordinate with internal teams and counterparts at client sites to gather, validate, and analyse the data behind every report we ship.",
  },
  {
    title: "Sustainability report writing",
    body: "Contribute to disclosures aligned with GRI Standards, IFRS Sustainability, ESRS, and TCFD — drafting sections, organising evidence, and helping make complex performance data feel readable.",
  },
  {
    title: "Energy assessments & audits",
    body: "Join factory walk-throughs to study energy consumption, identify quick wins, and co-author audit reports with practical, costed recommendations to cut waste and emissions.",
  },
  {
    title: "Circular-economy initiatives",
    body: "Support our material-circularity workstream — collaborating with senior leaders and external partners to embed circular business models inside client operations.",
  },
  {
    title: "Sustainable solutions design",
    body: "Work with cross-functional teams on solutions that improve energy efficiency, reduce environmental footprint, and integrate sustainability into day-to-day decisions.",
  },
  {
    title: "Research, innovation & integration",
    body: "Track emerging sustainability technologies, regulations, and methodologies, and translate the most useful ones into internal playbooks our consultants can apply on the next engagement.",
  },
  {
    title: "Metrics tracking & analysis",
    body: "Monitor KPIs across active projects — carbon, energy, water, social — and help build the dashboards we use to show clients real, comparable progress quarter on quarter.",
  },
  {
    title: "Branding & impact communication",
    body: "Support the production of case studies, infographics, and stakeholder materials that turn client sustainability achievements into clear, compelling stories.",
  },
];

const lookFor: { title: string; body: string }[] = [
  {
    title: "Education",
    body: "BEngg, BSc, or BBA from a recognised institution. Engineering, environmental science, chemistry, statistics, finance, and management backgrounds all fit.",
  },
  {
    title: "Experience",
    body: "Up to one year of relevant exposure. Freshers are explicitly welcome — this is a learning role and the cohort is built around growth.",
  },
  {
    title: "Industry exposure (preferred)",
    body: "Consulting firms, garments, textile, or research organisations. Project work, internships, capstone studies, and student-led initiatives all count.",
  },
  {
    title: "Core skills",
    body: "Data management, monitoring & reporting, project coordination, structured research, and a willingness to write — a lot — in clear English.",
  },
  {
    title: "Mindset",
    body: "Genuine interest in climate, sustainability, and business transparency. Curious, organised, and comfortable working alongside senior consultants from day one.",
  },
];

const benefits: { title: string; body: string }[] = [
  {
    title: "Paid internship → Full-time conversion",
    body: "On successful completion, the internship rolls into a full-time Sustainability Developer / Engineer position with us.",
  },
  {
    title: "Performance & festival bonuses",
    body: "Performance-based bonus, two festival bonuses a year, and a yearly salary review once you convert.",
  },
  {
    title: "Mobile bill allowance",
    body: "Monthly mobile allowance covered so client coordination never comes out of your own pocket.",
  },
  {
    title: "Lunch facility",
    body: "Partially-subsidised lunch at the Uttara office — because real teams eat together.",
  },
  {
    title: "International standards exposure",
    body: "Hands-on work against GRI, IFRS, ESRS, TCFD, Higg FEM, ZDHC, and SBTi — the same frameworks our senior consultants train under.",
  },
  {
    title: "Senior-leader mentorship",
    body: "You will report directly into senior consultants and directors, with weekly review of your work and your growth plan.",
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

export default function SustainabilityDevInternPage() {
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
              Paid internship
            </span>
            <span className="inline-flex rounded-full border border-border bg-bg-card px-3 py-1 text-xs font-semibold text-text-secondary">
              Full-time conversion
            </span>
            <span className="inline-flex rounded-full border border-border bg-bg-card px-3 py-1 text-xs font-semibold text-text-secondary">
              Early-career
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Sustainability Development Intern
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Build the next decade of sustainability practice in Bangladesh. Join
            SusNex as a paid intern, learn the frameworks the world runs on, and
            convert to a full-time Sustainability Developer / Engineer with us.
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

      {/* About the role */}
      <section className={`bg-bg-primary ${sectionBase}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          About this role
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
          <p>
            We&rsquo;re hiring highly-motivated{" "}
            <strong className="text-text-primary">
              Sustainability Development Interns
            </strong>{" "}
            who care deeply about climate, sustainability, and the rising bar
            for business transparency. This is a{" "}
            <strong className="text-text-primary">paid internship</strong>, and
            you&rsquo;ll be embedded inside live engagements from day one —
            supporting the design and execution of sustainability projects
            across industrial sectors, corporates, and development partners.
          </p>
          <p>
            The role is built as a launchpad. You&rsquo;ll work shoulder-to-shoulder
            with senior consultants and directors on real client deliverables —
            ESG reports, energy audits, circular-economy initiatives — gaining
            hands-on exposure to the international frameworks we live by:{" "}
            <strong className="text-text-primary">
              GRI, IFRS Sustainability, ESRS, TCFD
            </strong>
            , and the operational standards behind them.
          </p>
          <p>
            On successful completion, the internship converts into a{" "}
            <strong className="text-text-primary">
              full-time Sustainability Developer / Engineer
            </strong>{" "}
            position at SusNex.
          </p>
        </div>
      </section>

      {/* Responsibilities */}
      <section className={`bg-bg-secondary ${sectionBase}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          What you&rsquo;ll do
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">
          A typical week mixes desk research, factory site days, and team
          working sessions. Here&rsquo;s the surface area of the role:
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
          You don&rsquo;t need a finished CV of sustainability work — you need
          a sharp mind, a real interest in the subject, and the drive to learn
          fast.
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

      {/* About SusNex */}
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
            We help companies cut through regulatory complexity, gain
            dependable access to supply-chain data, ensure compliance, and
            turn sustainability performance into a measurable competitive edge.
            Our work spans policy advice, strategy, capacity development,
            technical assistance, monitoring &amp; evaluation, and audits across
            a broad range of sectors and themes.
          </p>
          <p className="text-sm text-text-secondary">
            Office: 30 Sonargaon Janapath Avenue, Sector 11, Uttara, Dhaka.
          </p>
        </div>
      </section>

      {/* Application form */}
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
            <JobApplicationForm position={POSITION} />
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
