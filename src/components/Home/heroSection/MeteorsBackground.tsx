"use client";

import React, { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const MeteorsBackground = ({
  number = 10,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 6,
  maxDuration = 12,
  angle = 110,
  className,
}: MeteorsProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Update width on mount & resize
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth(); // Set initial value
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const meteorStyles = useMemo(() => {
    if (windowWidth === 0) return []; // Avoid unnecessary calculations

    return Array.from({ length: number }, () => ({
      "--angle": `${angle}deg`,
      top: -5,
      left: `${Math.random() * windowWidth}px`, // Ensure full-width coverage
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
      animationDuration: `${
        Math.random() * (maxDuration - minDuration) + minDuration
      }s`,
    }));
  }, [windowWidth, number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={style as React.CSSProperties}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-[var(--angle)] rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  );
};
