"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"], // Defines when the scroll animation starts and ends
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]); // Controls height animation
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]); // Controls opacity animation

  return (
    // Outer container holding the timeline
    <div className="w-full px-10" ref={containerRef}>
      {/* Timeline wrapper */}
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          // Individual timeline entry
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-20"
          >
            {/* Left section containing the year/title */}
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              {/* Circular marker on the timeline */}
              <div className="bg-muted-foreground absolute left-3 flex size-10 items-center justify-center rounded-full md:left-3">
                {/* Inner dot within the circular marker */}
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>

              {/* Title (Visible only on larger screens) */}
              <h3 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Right section containing the content */}
            <div className="relative w-full pr-4 pl-20 md:pl-4">
              {/* Title (Visible only on small screens) */}
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}

        {/* Vertical timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
        >
          {/* Animated gradient moving along the timeline */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#4ade80] from-[0%] via-[#06b6d4] via-[20%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
