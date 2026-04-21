"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";

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
    setStyle({ transform: "", transition: "transform 0.4s ease" });
  }, []);

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
