import { SectionBackground } from "@/components/ui/SectionBackground";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="neo-surface relative overflow-hidden border-b border-border bg-bg-secondary px-6 pt-32 pb-16 lg:pt-40 lg:pb-20">
      <SectionBackground opacity={0.18} variant="hex-bloom" />
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-green)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[var(--color-green)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
