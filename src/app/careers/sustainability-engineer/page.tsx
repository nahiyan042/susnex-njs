import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";

const POSITION = "Sustainability Engineer";
const LOCATION = "Dhaka, Bangladesh (On-site + factory travel)";
const EMPLOYMENT_TYPE = "Full-time";
const EXPERIENCE = "1–3+ years (engineering)";
const COMPENSATION = "Salaried + bonuses";

export const metadata = pageSeo({
  title: `${POSITION} — Careers at SusNex`,
  description:
    "Full-time Sustainability Engineer role at SusNex — for engineers from Civil, Environmental, Chemical, Mechanical, Industrial, or Textile Engineering backgrounds. Lead energy audits, ETP/STP reviews, ZDHC chemical management, structural assessments, GHG inventories, and ISO 14001/45001/50001 implementation across Bangladesh’s RMG and textile factories.",
  path: "/careers/sustainability-engineer",
});

function jobPostingJsonLd() {
  const today = new Date();
  const sixtyDaysOut = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: POSITION,
    description:
      "Full-time engineering role for Civil, Environmental, Chemical, Mechanical, Industrial, and Textile Engineers. Lead energy audits, ETP/STP reviews, ZDHC chemical management, structural and fire-safety assessments, GHG inventories, ISO 14001/45001/50001 implementation, and Higg FEM verifications across RMG and textile factories in Bangladesh.",
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
      "BEngg or MEngg in Civil, Environmental, Chemical, Mechanical, Industrial, or Textile Engineering. Diploma engineers with strong field experience also welcome. Working familiarity with at least one of ZDHC, Higg FEM, GHG Protocol, ISO 14001 / 45001 / 50001, or Bangladesh Environment Conservation Rules.",
    responsibilities:
      "Lead energy audits, ETP/STP reviews, ZDHC chemical management programs, DIFE/Accord-style structural and fire-safety assessments, Scope 1/2/3 GHG inventories, ISO 14001/45001/50001 implementation, and Higg FEM 4.0 verification on factory floors across the RMG and textile sectors.",
    workHours: "Full Time",
  };
}

const sectionBase = "mx-auto max-w-5xl px-6 py-16 lg:py-20";

const responsibilities: { title: string; body: string }[] = [
  {
    title: "Energy audits",
    body: "Lead detailed energy assessments — walk every line, instrument key consumers, identify waste and recovery opportunities, and write a costed report the client can act on this quarter.",
  },
  {
    title: "Water & wastewater",
    body: "Review ETP and STP design and operation. Sample, sense-check the lab data, recommend upgrades that meet local discharge limits, brand requirements, and ZDHC wastewater guidelines.",
  },
  {
    title: "Chemical management",
    body: "Run chemical inventories. Audit handling, storage, and substitution practices against ZDHC MRSL and brand RSLs. Build remediation plans where gaps surface.",
  },
  {
    title: "Structural & fire-safety assessments",
    body: "Conduct DIFE / Accord / RSC-aligned structural, fire, and electrical assessments against the Bangladesh National Building Code and brand standards. Document findings clearly enough that engineers and non-engineers can act on them.",
  },
  {
    title: "GHG inventory & SBTi",
    body: "Build Scope 1, 2, and 3 GHG inventories per the GHG Protocol Corporate Standard. Help clients set, validate, and track Science Based Targets (SBTi).",
  },
  {
    title: "ISO 14001 / 45001 / 50001 implementation",
    body: "Lead ISO 14001 (environmental), ISO 45001 (occupational health & safety), and ISO 50001 (energy) implementation projects from gap assessment through certification audit.",
  },
  {
    title: "Higg FEM verification",
    body: "Support Higg FEM 4.0 self-assessment, on-site verification, scoring, and corrective action plans for tier-1 and tier-2 factories.",
  },
  {
    title: "Technical due diligence",
    body: "Support buyer-led factory assessments, audit response cycles, and corrective action management. Translate technical findings into language sourcing teams and brand sustainability leads can act on.",
  },
];

const lookFor: { title: string; body: string }[] = [
  {
    title: "Education",
    body: "BEngg or MEngg in Civil, Environmental, Chemical, Mechanical, Industrial, or Textile Engineering. Diploma engineers with strong field experience are encouraged to apply too.",
  },
  {
    title: "Experience",
    body: "1–3+ years in factory environments — audits, plant operations, EHS roles, or sustainability consulting. Fresh graduates with strong undergraduate research in energy, water, or sustainability are welcome.",
  },
  {
    title: "Frameworks",
    body: "Working familiarity with at least one of ZDHC, Higg FEM, GHG Protocol, ISO 14001 / 45001 / 50001, IFC Performance Standards, Bangladesh Environment Conservation Rules, or BNBC.",
  },
  {
    title: "Craft",
    body: "Comfortable on a factory floor in PPE, fluent in technical drawings and instrumentation reports, able to write a tight, defensible recommendation that survives a buyer’s engineering review.",
  },
  {
    title: "Mindset",
    body: "Practical, safety-aware, and unafraid to push back on a number that doesn’t add up. We want engineers who treat sustainability as an engineering problem, not a paperwork exercise.",
  },
];

const benefits: { title: string; body: string }[] = [
  {
    title: "Competitive salary",
    body: "Benchmarked against the Bangladeshi sustainability engineering market and reviewed yearly.",
  },
  {
    title: "Performance & festival bonuses",
    body: "Performance-based bonus and two festival bonuses a year on top of base salary.",
  },
  {
    title: "Mobile & travel allowance",
    body: "Monthly mobile allowance plus reimbursed factory-travel days. Field work shouldn’t cost you out of pocket.",
  },
  {
    title: "Lunch facility",
    body: "Partially-subsidised lunch at the Uttara office between site days.",
  },
  {
    title: "Standards & tooling exposure",
    body: "Hands-on with ZDHC, Higg FEM, GHG Protocol, ISO 14001 / 45001 / 50001, plus the instrumentation and assessment tooling we run on every audit.",
  },
  {
    title: "Clear progression",
    body: "Defined path from Sustainability Engineer → Senior Engineer → Lead Engineer → Practice Lead, tied to delivery scope and certification milestones.",
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
  "Bachelor in Engineering (BEngg)",
  "Master in Engineering (MEngg)",
  "Diploma in Engineering",
  "Other",
];

const experienceOptions = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
];

const businessAreaOptions = [
  "Garments / Textile",
  "Manufacturing / Industrial",
  "Sustainability Consulting",
  "EHS / Plant Operations",
  "Construction / Infrastructure",
  "Other",
];

export default function SustainabilityEngineerPage() {
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
              Engineering required
            </span>
            <span className="inline-flex rounded-full border border-border bg-bg-card px-3 py-1 text-xs font-semibold text-text-secondary">
              Factory floor
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Sustainability Engineer
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Sustainability begins on the factory floor. We&rsquo;re hiring
            engineers from civil, environmental, chemical, mechanical,
            industrial, and textile backgrounds to lead the technical side of
            our practice across Bangladesh&rsquo;s RMG and textile sector.
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
            Sustainability begins on the factory floor — at the boilers, the
            ETP, the chemical store, and the structure of the building itself.
            The engineers who diagnose those systems are the difference
            between a report that sounds good and a report that&rsquo;s true.
          </p>
          <p>
            We&rsquo;re hiring{" "}
            <strong className="text-text-primary">
              Sustainability Engineers
            </strong>{" "}
            from{" "}
            <strong className="text-text-primary">
              Civil, Environmental, Chemical, Mechanical, Industrial,
            </strong>{" "}
            and{" "}
            <strong className="text-text-primary">Textile Engineering</strong>{" "}
            backgrounds to lead the technical side of our practice. You&rsquo;ll
            spend your weeks moving between client sites and our Uttara office
            — running audits, instrumenting consumers, and turning observations
            into actionable, costed recommendations.
          </p>
          <p>
            This is a full-time position with deep technical exposure across
            Bangladesh&rsquo;s RMG and textile industries. You will own the
            engineering view inside multi-discipline engagements and will work
            shoulder-to-shoulder with directors, ESG specialists, and
            consultants from non-engineering backgrounds.
          </p>
        </div>
      </section>

      {/* Responsibilities */}
      <section className={`bg-bg-secondary ${sectionBase}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          What you&rsquo;ll do
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">
          A typical week mixes factory site days, instrumentation work, audit
          write-ups, and team review sessions. The surface area:
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
          Engineering rigor is the non-negotiable. Everything else can be
          built on top.
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
            On the engineering side, our work spans energy audits, water and
            wastewater systems, chemical management, structural and fire
            assessments, GHG accounting, ISO management systems, and Higg FEM
            verification — primarily across Bangladesh&rsquo;s RMG and textile
            sector.
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
              experienceHelperText="This is a full-time engineering role. We’re looking for 1–3+ years of relevant experience; strong undergraduate research in energy, water, chemical, or sustainability counts."
              fieldOfStudyPlaceholder="e.g. Civil, Environmental, Chemical, Mechanical, Industrial, Textile"
              motivationPlaceholder="Tell us about a project you owned the engineering on — what you measured, what you changed, and what the outcome was."
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
