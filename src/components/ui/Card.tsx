import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Card({ title, description, href, icon, className }: CardProps) {
  const content = (
    <div
      className={cn(
        "neo-surface group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-8 transition-all duration-300",
        href && "hover:border-[var(--color-green)]/40 hover:shadow-lg",
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)]">
          {icon}
        </div>
      )}
      <h3 className="font-heading text-lg font-semibold transition-colors group-hover:text-[var(--color-green)]">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
