import React from "react";
import { cn } from "@/lib/utils"; // Utility function for conditional class name merging
import { motion } from "motion/react"; // Motion library for handling animations

// BackgroundGradient Component
// Creates a vibrant, animated gradient background with optional animation
export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  // Animation variants for motion elements — animates background position
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    // Outer container with padding and relative positioning
    <div className={cn("group relative p-[4px]", containerClassName)}>
      
      {/* First animated background layer with blur and opacity transitions */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          // Styling for blur, opacity, hover effect
          "absolute inset-0 z-[1] rounded-lg opacity-60 blur-sm transition duration-500 will-change-transform group-hover:opacity-100",
          // Radial gradient background composed of multiple color stops
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
        )}
      />

      {/* Second animated background layer for enhanced gradient depth */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          // Positioned below content with no blur, contributes to layered effect
          "absolute inset-0 z-[1] rounded-lg will-change-transform",
          // Alternate radial gradient pattern for visual variety
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#4ade80,transparent),radial-gradient(circle_farthest-side_at_100%_0,#06b6d4,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#4ade80,transparent),radial-gradient(circle_farthest-side_at_0_0,#06b6d4,#141316)]",
        )}
      />

      {/* Foreground content container — children are rendered above animated backgrounds */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
