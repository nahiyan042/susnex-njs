import Image from "next/image";
import Link from "next/link";
import type { TrainingCourse } from "@/lib/content/training";

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

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const GRI_CERTIFIED_NAMES = [
  "Montasir Nahid",
  "Rajib Ul Haque",
  "Nishat Anzum",
];

function TrainerCard({
  trainer,
}: {
  trainer: TrainingCourse["trainers"][number];
}) {
  const isGriCertified = GRI_CERTIFIED_NAMES.includes(trainer.name);

  const inner = (
    <>
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-border transition-all group-hover:ring-[var(--color-green)]/40">
        <Image
          src={trainer.photo}
          alt={trainer.name}
          fill
          className="object-cover object-top"
          sizes="112px"
        />
      </div>
      <p className="mt-5 font-heading text-lg font-bold">{trainer.name}</p>
      <p className="mt-1 text-sm text-text-secondary">{trainer.role}</p>
      {isGriCertified && (
        <div className="mt-3 flex items-center gap-2 rounded-full border border-[var(--color-green)]/20 bg-[var(--color-green)]/5 px-3 py-1.5">
          <Image
            src="/images/gri-certified-badge.png"
            alt="GRI Certified Sustainability Professional"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-[10px] font-semibold text-[var(--color-green)]">
            GRI Certified Professional
          </span>
        </div>
      )}
      {trainer.linkedin && (
        <span className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[var(--color-green)] transition-colors group-hover:text-[var(--color-green-dark)]">
          <LinkedInIcon />
          View Profile
        </span>
      )}
    </>
  );

  if (trainer.linkedin) {
    return (
      <a
        href={trainer.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center rounded-2xl border border-border bg-bg-card p-8 text-center transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="group flex flex-col items-center rounded-2xl border border-border bg-bg-card p-8 text-center">
      {inner}
    </div>
  );
}

export function CoursePageTemplate({ course }: { course: TrainingCourse }) {
  return (
    <main className="bg-bg-primary">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={course.coverImage}
            alt={course.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="relative flex h-full items-end pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            {course.badge && (
              <span className="inline-flex rounded-full bg-[var(--color-green)] px-3 py-1 text-xs font-semibold text-white">
                {course.badge}
              </span>
            )}
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {course.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {course.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
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
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
                {course.level}
              </span>
              <span className="inline-flex items-center gap-1.5">
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
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
                {course.format}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Course Overview
          </h2>
          <p className="mt-6 leading-relaxed text-text-secondary">
            {course.description}
          </p>
        </div>
      </section>

      {/* Course Structure — sequenced learning journey */}
      {course.courseStructure && course.courseStructure.length > 0 && (
        <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Course Structure
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              A guided learning journey that takes you from fundamentals to
              applied workshop practice.
            </p>

            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {course.courseStructure.map((phase, i) => (
                <li
                  key={phase}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-green)]/30 hover:shadow-lg"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 font-heading text-5xl font-black text-[var(--color-green)]/10 transition-colors group-hover:text-[var(--color-green)]/20"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-green)]/10 text-xs font-bold text-[var(--color-green)]">
                    {i + 1}
                  </span>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-text-primary">
                    {phase}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* What's Included — curriculum topic chips */}
      {course.whatsIncluded && course.whatsIncluded.length > 0 && (
        <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              What&apos;s Included
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              Curriculum topics covered across the program — built around what
              participants actually use on the job.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {course.whatsIncluded.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-primary transition-all hover:-translate-y-0.5 hover:border-[var(--color-green)]/40 hover:text-[var(--color-green)] hover:shadow-md"
                >
                  <svg
                    className="h-4 w-4 text-[var(--color-green)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.25}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trainers */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            {course.trainers.length === 1 ? "Your Trainer" : "Your Trainers"}
          </h2>
          <div
            className={`mt-8 grid gap-4 ${
              course.trainers.length === 1
                ? "max-w-sm"
                : course.trainers.length === 2
                  ? "sm:grid-cols-2 max-w-2xl"
                  : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {course.trainers.map((t) => (
              <TrainerCard key={t.name} trainer={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Key Learning Outcomes
          </h2>
          <div className="mt-8 rounded-2xl border border-border bg-bg-card p-8">
            <ul className="space-y-3">
              {course.keyOutcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
                >
                  <CheckIcon />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Benefits — career-focused callout */}
      {course.professionalBenefits && (
        <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Professional Benefits
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              What you take away as a practitioner — beyond the certificate.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-[var(--color-green)]/30 bg-gradient-to-br from-[var(--color-green)]/10 via-bg-card to-bg-card p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--color-green)]/10 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[var(--color-green)]/10 blur-3xl"
              />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-green)] text-white shadow-lg shadow-[var(--color-green)]/25">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.75}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8.689c0-.864.933-1.405 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811V8.69zM12.75 8.689c0-.864.933-1.405 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061a1.125 1.125 0 01-1.683-.977V8.69z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-heading text-lg leading-relaxed text-text-primary sm:text-xl">
                    {course.professionalBenefits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Program Benefits
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-border bg-bg-card p-5 text-sm leading-relaxed text-text-secondary transition-all hover:border-[var(--color-green)]/30 hover:shadow-md"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Who Should Attend
          </h2>
          <ul className="mt-8 space-y-3">
            {course.whoShouldAttend.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
              >
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Get in touch with our team to learn more about this course, upcoming
            dates, and how to enroll.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </main>
  );
}
