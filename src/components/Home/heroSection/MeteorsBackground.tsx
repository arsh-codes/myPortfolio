import React, { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number; // Total number of meteors to render
  minDelay?: number; // Minimum animation delay for a meteor
  maxDelay?: number; // Maximum animation delay for a meteor
  minDuration?: number; // Minimum duration of meteor animation
  maxDuration?: number; // Maximum duration of meteor animation
  angle?: number; // Angle at which meteors fall
  className?: string; // Additional CSS class for styling
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
  const [windowWidth, setWindowWidth] = useState(0); // Track current window width for dynamic positioning

  // Set initial window width and update it on resize
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth(); // Set width on mount
    window.addEventListener("resize", updateWidth); // Listen for window resize
    return () => window.removeEventListener("resize", updateWidth); // Cleanup on unmount
  }, []);

  // Generate an array of style objects for each meteor using memoization for performance
  const meteorStyles = useMemo(() => {
    if (windowWidth === 0) return []; // Avoid generation before window is measured

    return Array.from({ length: number }, () => ({
      "--angle": `${angle}deg`, // Custom CSS property to set meteor fall angle
      top: -5, // Start slightly above the viewport
      left: `${Math.random() * windowWidth}px`, // Random horizontal start position
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`, // Random delay for staggered animation
      animationDuration: `${
        Math.random() * (maxDuration - minDuration) + minDuration
      }s`, // Randomized animation duration for natural variation
    }));
  }, [
    windowWidth,
    number,
    minDelay,
    maxDelay,
    minDuration,
    maxDuration,
    angle,
  ]);

  return (
    <>
      {/* Render each meteor with unique styles and animation settings */}
      {meteorStyles.map((style, idx) => (
        // Outer span represents the meteor "head"
        <span
          key={idx}
          style={style as React.CSSProperties}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-[var(--angle)] rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className,
          )}
        >
          {/* Inner div represents the meteor "tail" with a fading gradient */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  );
};
