"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TiltedImageCard } from "@/components/ui/TiltedImageCard";
import { StarBorder } from "@/components/ui/StarBorder";

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  badges?: string[];
}

const GRI_BADGE_SRC = "/1688722224043.png";
const STAR_BORDER_COLOR = "#83a63a";

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

  const [isHovered, setIsHovered] = useState(false);

  const captionText = member.linkedin
    ? `View ${member.name.split(" ")[0]} on LinkedIn`
    : member.role;

  const overlay = (
    <>
      {/* Vignette gradient — sits flat on the image plane */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      {/* LinkedIn icon — appears on hover, top-right */}
      {member.linkedin && (
        <span
          data-interactive
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
        >
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

      {/* Name / role — anchored to bottom of card */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8">
        <h3 className="font-heading text-sm font-bold text-white transition-colors duration-300 group-hover:text-[var(--color-green-light)] sm:text-base">
          {member.name}
        </h3>
        <p className="mt-0.5 text-[11px] leading-snug text-white/85 sm:text-xs">
          {member.role}
        </p>
      </div>
    </>
  );

  const card = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerCancel={() => setIsHovered(false)}
      className="group relative aspect-[3/4] w-full"
    >
      <StarBorder
        as="div"
        color={STAR_BORDER_COLOR}
        speed="2s"
        thickness={6}
        active={isHovered}
        className="h-full w-full"
        innerClassName="block h-full w-full overflow-hidden rounded-[16px]"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          borderRadius: "20px",
        }}
      >
        <TiltedImageCard
          imageSrc={member.photo}
          altText={member.name}
          captionText={captionText}
          containerWidth="100%"
          containerHeight="100%"
          imageWidth="100%"
          imageHeight="100%"
          rotateAmplitude={9}
          scaleOnHover={1.03}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
          overlayContent={overlay}
          imageSizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
          imageObjectPosition="center top"
          className="h-full w-full"
        />
      </StarBorder>

      {/* GRI badge — placed OUTSIDE the StarBorder + TiltedImageCard so
          its native circular artwork is never clipped by the rounded
          corner / overflow:hidden of any inner container. */}
      {hasGriBadge && (
        <Image
          src={GRI_BADGE_SRC}
          alt="GRI Certified Sustainability Professional"
          width={64}
          height={64}
          className="pointer-events-none absolute left-2 top-2 z-30 h-11 w-11 select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] sm:left-3 sm:top-3 sm:h-14 sm:w-14"
          aria-label="GRI Certified Sustainability Professional"
        />
      )}
    </motion.article>
  );

  if (member.linkedin) {
    return (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`View ${member.name} on LinkedIn`}
      >
        {card}
      </a>
    );
  }
  return card;
}
