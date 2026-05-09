"use client";

import { useEffect, useRef } from "react";

export function GlobalParallaxBackground() {
  const layerOneRef = useRef<HTMLDivElement>(null);
  const layerTwoRef = useRef<HTMLDivElement>(null);
  const layerThreeRef = useRef<HTMLDivElement>(null);
  const layerFourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const applyParallax = () => {
      const scrollY = window.scrollY;

      if (layerOneRef.current) {
        layerOneRef.current.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0) scale(1.05)`;
      }
      if (layerTwoRef.current) {
        layerTwoRef.current.style.transform = `translate3d(0, ${scrollY * 0.14}px, 0) scale(1.08)`;
      }
      if (layerThreeRef.current) {
        layerThreeRef.current.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0) scale(1.12)`;
      }
      if (layerFourRef.current) {
        layerFourRef.current.style.transform = `translate3d(0, ${scrollY * 0.26}px, 0) scale(1.15)`;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(applyParallax);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="global-parallax-bg" aria-hidden="true">
      <div ref={layerOneRef} className="global-parallax-layer global-parallax-layer--base" />
      <div ref={layerTwoRef} className="global-parallax-layer global-parallax-layer--grid" />
      <div ref={layerThreeRef} className="global-parallax-layer global-parallax-layer--motif" />
      <div ref={layerFourRef} className="global-parallax-layer global-parallax-layer--ecoicons" />
    </div>
  );
}
