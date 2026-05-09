"use client";

import { useRef, useState, useCallback, useEffect, type ReactNode } from "react";

interface TiltedCardProps {
  children: ReactNode;
  className?: string;
  tiltMax?: number;
  scale?: number;
  perspective?: number;
}

export function TiltedCard({
  children,
  className = "",
  tiltMax = 12,
  scale = 1.03,
  perspective = 800,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "", transition: "transform 0.4s ease" });
  const gyroActive = useRef(false);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * tiltMax;
      const rotateY = (x - 0.5) * tiltMax;
      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: "transform 0.1s ease",
      });
    },
    [tiltMax, scale, perspective],
  );

  const handleLeave = useCallback(() => {
    if (!gyroActive.current) {
      setStyle({ transform: "", transition: "transform 0.4s ease" });
    }
  }, []);

  // Gyroscope tilt for mobile devices
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      const el = ref.current;
      if (!el) return;

      // Check if the card is in the viewport
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) {
        if (gyroActive.current) {
          setStyle({ transform: "", transition: "transform 0.4s ease" });
          gyroActive.current = false;
        }
        return;
      }

      gyroActive.current = true;
      const gamma = e.gamma ?? 0; // left-right: -90..90
      const beta  = e.beta  ?? 0; // front-back: -180..180

      // Normalize to -1..1 range with moderate sensitivity
      const nx = Math.max(-1, Math.min(1, gamma / 30));
      const ny = Math.max(-1, Math.min(1, -(beta - 60) / 30));

      const rotateX = ny * tiltMax * 0.6;
      const rotateY = nx * tiltMax * 0.6;

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      });
    };

    window.addEventListener("deviceorientation", handleOrientation, { passive: true });
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [tiltMax, perspective]);

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
