import Image from "next/image";
import Link from "next/link";

import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  title: "ETP Operation, Performance Analysis & Improvement",
  description:
    "Advanced technical training on wastewater treatment, activated sludge, ZLD systems, ETP performance mathematics, and troubleshooting for industrial compliance.",
  path: "/academy/etp-training",
});

interface Trainer {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

const trainers: Trainer[] = [
  {
    name: "Rajib Ul Haque",
    role: "Director & Chief Environmental Expert",
    photo: "/images/team/rajib-ul-haque.jpg",
    linkedin: "https://www.linkedin.com/in/rajib-ul-haque-a10b0081/",
  },
];

const learningObjectives = [
  "Understand the fundamental science behind wastewater treatment and ETP operations",
  "Analyze and optimize activated sludge process performance for industrial effluents",
  "Evaluate water recycling strategies and design Zero Liquid Discharge (ZLD) systems",
  "Apply mathematical models to determine, analyze, and benchmark ETP performance",
  "Diagnose and resolve common operational issues in activated sludge systems",
  "Ensure compliance with national and international environmental discharge standards",
];

const modules = [
  {
    title: "Module 1: Context and Science of Wastewater Treatment",
    topics: [
      "Fundamentals of wastewater chemistry and biology",
      "Characterization of industrial effluents (BOD, COD, TSS, pH, color)",
      "Overview of physical, chemical, and biological treatment methods",
      "Bangladesh DoE discharge standards and international benchmarks",
      "ETP design considerations for textile and tannery industries",
    ],
  },
  {
    title: "Module 2: Activated Sludge Process",
    topics: [
      "Process design principles and operating parameters",
      "Microbiology of activated sludge — floc formation and settling",
      "Aeration systems and oxygen transfer efficiency",
      "Sludge age, F/M ratio, and MLSS management",
      "Sequencing Batch Reactor (SBR) and extended aeration variants",
    ],
  },
  {
    title: "Module 3: Partial Water Recycling and Zero Liquid Discharge (ZLD)",
    topics: [
      "Recycling strategies for industrial wastewater streams",
      "Membrane technologies — UF, NF, and RO applications",
      "ZLD system design, implementation, and economics",
      "Brine management and evaporation-crystallization",
      "Cost-benefit analysis and ROI of water reuse projects",
    ],
  },
  {
    title: "Module 4: Mathematics to Determine and Analyze ETP Performance",
    topics: [
      "Key performance calculations — BOD, COD, TSS removal efficiency",
      "Hydraulic retention time (HRT) and sludge retention time (SRT)",
      "Mass balance and loading rate calculations",
      "Data interpretation, trend analysis, and KPI dashboards",
      "Benchmarking against DoE standards and industry best practices",
    ],
  },
  {
    title: "Module 5: Troubleshooting of Activated Sludge System",
    topics: [
      "Common operational issues — bulking, foaming, pin floc, rising sludge",
      "Root cause analysis using microscopy and settleability tests",
      "Nutrient deficiency and toxic shock diagnosis",
      "Corrective actions and preventive maintenance protocols",
      "Case studies from RMG, textile, and tannery ETPs in Bangladesh",
    ],
  },
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-green)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <a
      href={trainer.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center rounded-2xl border border-border bg-bg-card p-8 text-center transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
    >
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-border transition-all group-hover:ring-[var(--color-green)]/40">
        <Image src={trainer.photo} alt={trainer.name} fill className="object-cover object-top" sizes="112px" />
      </div>
      <p className="mt-5 font-heading text-lg font-bold">{trainer.name}</p>
      <p className="mt-1 text-sm text-text-secondary">{trainer.role}</p>
    </a>
  );
}

export default function EtpTrainingPage() {
  return (
    <main className="bg-bg-primary">
      {/* Parallax Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/academy/etp-training.jpg"
            alt="ETP Operation Training"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            style={{ transform: "translateZ(0)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="relative flex h-full items-end pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <span className="inline-flex rounded-full bg-[var(--color-green)] px-3 py-1 text-xs font-semibold text-white">
              Technical
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              ETP Operation, Performance Analysis &amp; Improvement
            </h1>
            <p className="mt-3 max-w-xl text-lg text-white/80">
              Wastewater Treatment &amp; Environmental Compliance
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-[var(--color-green)] px-3 py-1 text-xs font-semibold text-white">
            Technical
          </span>
          <p className="mt-6 leading-relaxed text-text-secondary">
            An advanced technical program for environmental engineers, ETP operators,
            and compliance managers in Bangladesh&apos;s industrial sector. This training
            covers the complete ETP lifecycle — from wastewater science and activated
            sludge design to performance analytics, water recycling, ZLD systems,
            and hands-on troubleshooting of real-world operational challenges.
          </p>
        </div>
      </section>

      {/* Trainer */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Trainer
          </h2>
          <div className="mt-8 grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((t) => (
              <TrainerCard key={t.name} trainer={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Learning Objectives
          </h2>
          <div className="mt-8 rounded-2xl border border-border bg-bg-card p-8">
            <ul className="space-y-3">
              {learningObjectives.map((obj) => (
                <li key={obj} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                  <CheckIcon />
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Course Outline */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Course Outline
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.title}
                className="rounded-2xl border border-border bg-bg-card p-6"
              >
                <h3 className="font-heading text-base font-bold">{mod.title}</h3>
                <ul className="mt-4 space-y-2">
                  {mod.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-green)]" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
