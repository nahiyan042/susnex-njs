import Image from "next/image";
import Link from "next/link";

import { courseJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  title: "GRI Certified Training Course",
  description:
    "Professional GRI certified sustainability reporting training with 4 courses, mock tests, exam preparation workshop, and 3 GRI-nominated trainers.",
  path: "/academy/gri-certified-training",
});

interface Trainer {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

const trainers: Trainer[] = [
  {
    name: "Montasir Nahid",
    role: "Director - ESG",
    photo: "/images/team/montasir-nahid.jpg",
    linkedin: "https://www.linkedin.com/in/montasir-nahid-918b7319/",
  },
  {
    name: "Rajib Ul Haque",
    role: "Director & Chief Environmental Expert",
    photo: "/images/team/rajib-ul-haque.jpg",
    linkedin: "https://www.linkedin.com/in/rajib-ul-haque-a10b0081/",
  },
  {
    name: "Nishat Anzum",
    role: "ESG Specialist & GRI Trainer",
    photo: "/images/team/nishat-anzum.jpg",
    linkedin: "https://www.linkedin.com/in/nishat-anzum-shova-b07147174/",
  },
];

const courses = [
  "Course 1: Reporting with GRI Standards 2021 Update",
  "Course 2: Navigating the GRI Sector Standards",
  "Course 3: Reporting on Human Rights with GRI Standards 2021 Update",
  "Course 4: Transparency for Tomorrow: Decoding the Sustainability Reporting Landscape",
];

const includes = [
  "4 certificates issued by the Global Reporting Initiative (GRI)",
  "Complementary Exam Preparation Workshop",
  "Complementary Mock Tests",
  "25% discount on the certification exam fee",
  "3 GRI-nominated trainers with proven track records in ESG/Sustainability reports",
];

const benefits = [
  "Become a globally recognized sustainability professional",
  "Learn from GRI Certified Sustainability Professionals",
  "Gain extensive knowledge in writing sustainability reports",
  "Eligibility to sit for the GRI Certified Sustainability Professional Exam",
  "Elevate yourself to leadership roles within your organization",
  "Boost employability in the sustainability job market",
  "Widen your network for career growth",
  "Develop problem-solving skills for complex sustainability challenges",
];

interface TrainingDay {
  day: number;
  weekday: string;
}

interface TrainingDate {
  month: string;
  year: string;
  days: TrainingDay[];
  format: "Face to Face" | "Online";
  location: string;
}

const upcomingDates: TrainingDate[] = [
  { month: "Apr", year: "2026", days: [{ day: 10, weekday: "Fri" }, { day: 11, weekday: "Sat" }, { day: 17, weekday: "Fri" }], format: "Face to Face", location: "Dhaka" },
  { month: "May", year: "2026", days: [{ day: 8, weekday: "Fri" }, { day: 9, weekday: "Sat" }, { day: 10, weekday: "Sun" }], format: "Online", location: "Global" },
  { month: "Jul", year: "2026", days: [{ day: 8, weekday: "Wed" }, { day: 9, weekday: "Thu" }, { day: 10, weekday: "Fri" }], format: "Face to Face", location: "Dhaka" },
  { month: "Aug", year: "2026", days: [{ day: 24, weekday: "Mon" }, { day: 25, weekday: "Tue" }, { day: 26, weekday: "Wed" }], format: "Online", location: "Global" },
  { month: "Sep", year: "2026", days: [{ day: 11, weekday: "Fri" }, { day: 12, weekday: "Sat" }, { day: 18, weekday: "Fri" }], format: "Face to Face", location: "Dhaka" },
  { month: "Nov", year: "2026", days: [{ day: 11, weekday: "Wed" }, { day: 12, weekday: "Thu" }, { day: 13, weekday: "Fri" }], format: "Online", location: "Global" },
  { month: "Dec", year: "2026", days: [{ day: 20, weekday: "Sun" }, { day: 21, weekday: "Mon" }, { day: 22, weekday: "Tue" }], format: "Face to Face", location: "Dhaka" },
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-green)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function CircleCheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-green)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      <div className="mt-4 flex items-center gap-2.5 rounded-full border border-[var(--color-green)]/20 bg-[var(--color-green)]/5 px-4 py-2">
        <Image
          src="/images/gri-certified-badge.png"
          alt="GRI Certified Sustainability Professional"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span className="text-xs font-semibold text-[var(--color-green)]">
          GRI Nominated Trainer
        </span>
      </div>
    </a>
  );
}

function CalendarCard({ date }: { date: TrainingDate }) {
  const isOnline = date.format === "Online";
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg">
      <div className={`px-5 py-3 text-center ${isOnline ? "bg-blue-600" : "bg-[var(--color-green)]"}`}>
        <p className="text-lg font-bold text-white">{date.month}</p>
        <p className="text-xs font-medium text-white/80">{date.year}</p>
      </div>
      <div className="flex items-center justify-center gap-3 px-4 py-5">
        {date.days.map((d) => (
          <div key={d.day} className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
              {d.weekday}
            </span>
            <span className={`flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold ${isOnline ? "bg-blue-50 text-blue-700" : "bg-[var(--color-green)]/10 text-[var(--color-green)]"}`}>
              {d.day}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-2">
          {isOnline ? (
            <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          ) : (
            <svg className="h-4 w-4 text-[var(--color-green)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          )}
          <span className="text-xs font-medium text-text-secondary">
            {date.format} · {date.location}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GriTrainingPage() {
  return (
    <main className="bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseJsonLd(
              "GRI Certified Training Course",
              "Professional GRI certified sustainability reporting training with 4 courses, mock tests, and exam preparation workshop.",
            ),
          ),
        }}
      />
      {/* Parallax Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/academy/gri-training.jpg"
            alt="GRI Certified Training"
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
              Flagship Program
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              GRI Certified Training Course
            </h1>
            <p className="mt-3 max-w-xl text-lg text-white/80">
              With Mock Tests &amp; Exam Prep Workshop
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-[var(--color-green)] px-3 py-1 text-xs font-semibold text-white">
            Flagship Program
          </span>
          <p className="mt-6 leading-relaxed text-text-secondary">
            Designed to equip participants with the essential knowledge and
            skills required to meet new sustainability and ESG reporting
            requirements of brands, buyers, and clients. Join us and stay ahead
            of the curve in sustainability reporting.
          </p>
          <p className="mt-4 leading-relaxed text-text-secondary">
            SusNex Ltd is the <strong>GRI Certified Training Partner (CTP)</strong> for
            the entire Globe with three GRI-nominated trainers. We specialize in
            sustainability reporting, ESG due diligence, circularity, and climate
            change services. With over 50 successful sustainability reports under
            our belt, we have proven our expertise.
          </p>
        </div>
      </section>

      {/* Trainers */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Our Trainers
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((t) => (
              <TrainerCard key={t.name} trainer={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Courses + Includes */}
      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-bg-card p-8">
              <h3 className="font-heading text-lg font-bold">Training Courses</h3>
              <ul className="mt-4 space-y-3">
                {courses.map((course) => (
                  <li key={course} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                    <CheckIcon />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-8">
              <h3 className="font-heading text-lg font-bold">What&apos;s Included</h3>
              <ul className="mt-4 space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                    <CircleCheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Professional Benefits
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-border bg-bg-card p-5 text-sm leading-relaxed text-text-secondary"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Dates — Calendar */}
      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Upcoming Training Dates
          </h2>
          <p className="mt-4 text-text-secondary">
            Both face-to-face (Dhaka) and online (global) sessions available.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {upcomingDates.map((d) => (
              <CalendarCard key={`${d.month}-${d.year}`} date={d} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
            >
              Register for GRI Training
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
