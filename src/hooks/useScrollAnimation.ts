"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    // TODO: Implement GSAP ScrollTrigger animation
    // Will be configured in Phase 1
  }, []);

  return ref;
}
