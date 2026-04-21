"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceInquiryForm } from "@/components/forms/ServiceInquiryForm";

export interface Expert {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
}

export interface Outcome {
  title: string;
  description: string;
}

export interface WhyUs {
  title: string;
  description?: string;
}

export interface StandardLogo {
  src: string;
  name: string;
  url?: string;
}

export interface ServicePageData {
  title: string;
  subtitle: string;
  description: string[];
  heroImage: string;
  experts: Expert[];
  outcomes: Outcome[];
  whyChooseUs: WhyUs[];
  standards?: string[];
  standardsImage?: string;
  standardLogos?: StandardLogo[];
  formService: string;
  accentColor?: string;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const outcomeIcons = [
  <svg key="i0" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="i1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>,
  <svg key="i2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  <svg key="i3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  <svg key="i4" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
  <svg key="i5" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>,
  <svg key="i6" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H20.25" /></svg>,
  <svg key="i7" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  <svg key="i8" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  <svg key="i9" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  <svg key="i10" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
  <svg key="i11" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
];

function getIcon(index: number) {
  return outcomeIcons[index % outcomeIcons.length];
}

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <div>
      {/* Hero Image */}
      <div className="relative mx-auto h-64 max-w-6xl overflow-hidden sm:h-80 lg:h-96">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Overview */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            {data.subtitle}
          </h2>
        </ScrollReveal>
        {data.description.map((para, i) => (
          <ScrollReveal key={i} delay={0.1 * (i + 1)}>
            <p className="mt-4 leading-relaxed text-text-secondary">{para}</p>
          </ScrollReveal>
        ))}
      </section>

      {/* Meet Our Experts */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Meet Our Experts
            </h2>
          </ScrollReveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={`mx-auto mt-12 grid max-w-4xl gap-6 ${
              data.experts.length === 1
                ? "max-w-xs"
                : data.experts.length === 2
                  ? "sm:grid-cols-2"
                  : data.experts.length <= 3
                    ? "sm:grid-cols-2 lg:grid-cols-3"
                    : "sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {data.experts.map((expert) => (
              <motion.div key={expert.name} variants={fadeUp}>
                {expert.linkedin ? (
                  <Link
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center rounded-2xl border border-border bg-bg-card p-8 text-center transition-all hover:border-[var(--color-green)]/30 hover:shadow-xl"
                  >
                    <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-border transition-all group-hover:ring-[var(--color-green)]/40">
                      <Image
                        src={expert.photo}
                        alt={expert.name}
                        fill
                        className="object-cover object-top"
                        sizes="112px"
                      />
                    </div>
                    <p className="mt-5 font-heading text-lg font-bold transition-colors group-hover:text-[var(--color-green)]">
                      {expert.name}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">{expert.role}</p>
                  </Link>
                ) : (
                  <div className="group flex flex-col items-center rounded-2xl border border-border bg-bg-card p-8 text-center transition-all hover:border-[var(--color-green)]/30 hover:shadow-xl">
                    <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-border">
                      <Image
                        src={expert.photo}
                        alt={expert.name}
                        fill
                        className="object-cover object-top"
                        sizes="112px"
                      />
                    </div>
                    <p className="mt-5 font-heading text-lg font-bold">
                      {expert.name}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">{expert.role}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Expected Outcomes
            </h2>
          </ScrollReveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.outcomes.map((outcome, i) => (
              <motion.div
                key={outcome.title}
                variants={fadeUp}
                className="group rounded-2xl border border-border bg-bg-card p-6 transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] transition-colors group-hover:bg-[var(--color-green)] group-hover:text-white">
                  {getIcon(i)}
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-text-primary">
                  {outcome.title}
                </h3>
                {outcome.description && (
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {outcome.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Standards & Frameworks */}
      {(data.standards || data.standardsImage || data.standardLogos) && (
        <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Standards & Frameworks
              </h2>
            </ScrollReveal>

            {data.standardLogos && (
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
              >
                {data.standardLogos.map((logo) => {
                  const inner = (
                    <>
                      <div className="relative flex h-20 w-full items-center justify-center">
                        {logo.src.endsWith(".svg") ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={logo.src}
                            alt={logo.name}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            className="object-contain"
                            sizes="200px"
                          />
                        )}
                      </div>
                      <p className="text-center text-xs font-medium text-text-secondary">
                        {logo.name}
                      </p>
                    </>
                  );

                  return logo.url ? (
                    <motion.a
                      key={logo.name}
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeUp}
                      className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-card p-6 transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={logo.name}
                      variants={fadeUp}
                      className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-card p-6 transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
                    >
                      {inner}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {data.standardsImage && !data.standardLogos && (
              <ScrollReveal delay={0.15}>
                <div className="relative mx-auto mt-10 aspect-[16/5] max-w-4xl overflow-hidden rounded-2xl border border-border bg-white">
                  <Image
                    src={data.standardsImage}
                    alt="Standards & Frameworks"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
              </ScrollReveal>
            )}

            {data.standards && !data.standardLogos && (
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              >
                {data.standards.map((std) => (
                  <motion.div
                    key={std}
                    variants={fadeUp}
                    className="flex items-center gap-3 rounded-xl border border-border bg-bg-card p-4"
                  >
                    <svg className="h-5 w-5 shrink-0 text-[var(--color-green)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-text-secondary">{std}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Why Choose Us?
            </h2>
          </ScrollReveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-border bg-bg-card p-6"
              >
                <span className="absolute top-4 right-4 font-heading text-4xl font-black text-[var(--color-green)]/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-base font-bold text-text-primary">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Get Started with {data.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Tell us about your requirements and timeline — we&apos;ll propose a practical workplan tailored to your needs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-8 max-w-lg">
              <ServiceInquiryForm preselectedService={data.formService} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
