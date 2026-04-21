"use client";

import { useSyncExternalStore } from "react";

export type PerformanceTier = "high" | "low";

const emptySubscribe = () => () => {};

function getSnapshot(): PerformanceTier {
  const nav = navigator as Navigator & {
    hardwareConcurrency?: number;
    deviceMemory?: number;
    connection?: { effectiveType?: string };
  };

  const cores = nav.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 4;
  const connection = nav.connection?.effectiveType;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    prefersReduced ||
    cores <= 2 ||
    memory <= 2 ||
    connection === "slow-2g" ||
    connection === "2g" ||
    (isMobile && (cores <= 4 || memory <= 4))
  ) {
    return "low";
  }

  return "high";
}

function getServerSnapshot(): PerformanceTier {
  return "high";
}

export function usePerformance(): PerformanceTier {
  return useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
}
