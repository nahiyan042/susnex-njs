"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { usePerformance } from "@/hooks/usePerformance";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  alphaDir: number;
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const { resolvedTheme } = useTheme();
  const tier = usePerformance();

  const isDark = resolvedTheme === "dark";
  const particleCount = tier === "low" ? 15 : 50;
  const targetFps = tier === "low" ? 20 : 30;
  const frameInterval = 1000 / targetFps;

  const initParticles = useCallback(
    (width: number, height: number) => {
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 2.5 + 1,
          alpha: Math.random() * 0.4 + 0.1,
          alphaDir: (Math.random() - 0.5) * 0.004,
        });
      }
      particlesRef.current = particles;
    },
    [particleCount]
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      initParticles(w, h);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    let lastFrame = 0;

    const draw = (timestamp: number) => {
      if (timestamp - lastFrame < frameInterval) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;

      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const color = isDark ? [137, 181, 79] : [92, 124, 53];

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;

        if (p.alpha <= 0.05 || p.alpha >= 0.5) p.alphaDir *= -1;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},${p.alpha})`;
        ctx.fill();
      }

      if (tier === "high" && particles.length <= 60) {
        const maxDist = 100;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSq = dx * dx + dy * dy;
            if (distSq < maxDist * maxDist) {
              const dist = Math.sqrt(distSq);
              const lineAlpha =
                (1 - dist / maxDist) *
                0.12 *
                Math.min(particles[i].alpha, particles[j].alpha);
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(${color[0]},${color[1]},${color[2]},${lineAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [isDark, tier, initParticles, frameInterval]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
