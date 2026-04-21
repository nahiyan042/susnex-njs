import Image from "next/image";
import Link from "next/link";

import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  title: "Sustainable Solutions for RMG & Textile Industry",
  description:
    "Sustainability Fundamentals, Circular Design & Waste Management training for Bangladesh's RMG & Textile industry professionals.",
  path: "/academy/rmg-textile-training",
});

interface Trainer {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

const trainers: Trainer[] = [
  {
    name: "Shamiul Hoque",
    role: "Director - Sustainability Programs & Circular Economy",
    photo: "/images/team/shamiul-hoque.jpg",
    linkedin: "https://www.linkedin.com/in/shamiulhoque/",
  },
];

const learningObjectives = [
  "Understand the core concepts of sustainability and its importance to the RMG and textile industry in Bangladesh",
  "Apply sustainability principles to enhance the environmental, social, and economic performance of RMG & textile operations",
  "Implement circular design principles to minimize waste and optimize resource use in textile production",
  "Develop strategies for effective waste management, including waste reduction and recycling",
  "Align business practices with local and international environmental regulations and standards",
  "Identify opportunities for innovation and improvement in sustainable practices across the textile supply chain",
];

const modules = [
  {
    title: "Module 1: Introduction to Sustainability in the RMG & Textile Industry",
    topics: [
      "Overview of sustainability concepts",
      "Sustainability's role in RMG & textile industries",
      "Global sustainability trends",
    ],
  },
  {
    title: "Module 2: Circular Economy and Eco-Design Principles",
    topics: [
      "Introduction to Circular Economy",
      "Circular design for textiles",
      "Eco-design practices",
      "Global circular economy trends in Textile & RMG",
      "Case Studies",
    ],
  },
  {
    title: "Module 3: Sustainable Waste Management in the RMG & Textile Industry",
    topics: [
      "Types of waste in RMG & textiles",
      "Compliance and regulations",
      "Waste reduction strategies",
      "Recycling and reuse in textile manufacturing",
      "Wastewater management in textiles",
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

export default function RmgTrainingPage() {
  return (
    <main className="bg-bg-primary">
      {/* Parallax Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/academy/rmg-training.jpg"
            alt="RMG & Textile Sustainability Training"
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
              Industry Focus
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Sustainable Solutions for RMG &amp; Textile Industry
            </h1>
            <p className="mt-3 max-w-xl text-lg text-white/80">
              Sustainability Fundamentals, Circular Design &amp; Waste Management
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-[var(--color-green)] px-3 py-1 text-xs font-semibold text-white">
            Industry Focus
          </span>
          <p className="mt-6 leading-relaxed text-text-secondary">
            A comprehensive program designed for professionals in Bangladesh&apos;s
            RMG &amp; Textile industry, covering sustainability fundamentals,
            circular economy principles, eco-design practices, and waste management
            strategies aligned to local and international standards.
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
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
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
              Register for RMG Training
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
