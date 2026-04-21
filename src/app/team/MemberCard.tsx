"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  badges?: string[];
}

const GRI_BADGE_SRC = "/1688722224043.png";

export function MemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const hasGriBadge = member.badges?.some((b) =>
    b.toLowerCase().includes("gri"),
  );

  const card = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-300 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/5"
    >
      {/* Full-height image with vignette */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* LinkedIn icon */}
        {member.linkedin && (
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
            <svg
              className="h-4.5 w-4.5 text-[#0A66C2]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </span>
        )}

        {/* Name overlay with GRI badge inline */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8">
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-sm font-bold text-white transition-colors duration-300 group-hover:text-[var(--color-green-light)] sm:text-base">
              {member.name}
            </h3>
            {hasGriBadge && (
              <Image
                src={GRI_BADGE_SRC}
                alt="GRI Certified Sustainability Professional"
                width={36}
                height={36}
                className="h-8 w-8 shrink-0 rounded-full ring-2 ring-white/50 sm:h-9 sm:w-9"
              />
            )}
          </div>
          <p className="mt-0.5 text-[11px] leading-snug text-white/80 sm:text-xs">
            {member.role}
          </p>
        </div>
      </div>
    </motion.article>
  );

  if (member.linkedin) {
    return (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {card}
      </a>
    );
  }
  return card;
}
