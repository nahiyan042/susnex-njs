"use client";

import { SectionBackground } from "@/components/ui/SectionBackground";

export function TeamBackground() {
  return (
    <SectionBackground
      lightSrc="/images/backgrounds/bg-team-light.png"
      darkSrc="/images/backgrounds/bg-team-dark.png"
      opacity={0.2}
    />
  );
}
