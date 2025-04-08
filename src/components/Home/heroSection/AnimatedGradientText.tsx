import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// Define the props interface for the AnimatedGradientText component.
// It extends standard <div> props and adds optional custom properties for animation speed and gradient colors.
export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"div"> {
  speed?: number; // Optional: Speed factor for the gradient animation (higher = faster).
  colorFrom?: string; // Optional: Starting color of the gradient.
  colorTo?: string; // Optional: Ending color of the gradient.
}

// Functional component that renders animated gradient text using CSS variables and Tailwind classes.
export function AnimatedGradientText({
  children, // Text content to display with the animated gradient effect.
  className, // Optional: Additional custom class names.
  speed = 200, // Default animation speed.
  colorFrom = "#4ade80", // Default start color (green).
  colorTo = "#06b6d4 ", // Default end color (cyan).
  ...props // Spread any remaining props to the root element.
}: AnimatedGradientTextProps) {
  return (
    <span
      // Inline CSS variables for dynamic control of animation size and gradient colors.
      style={
        {
          "--bg-size": `${speed * 300}%`, // Background size scales with speed.
          "--color-from": colorFrom, // Customizable gradient start color.
          "--color-to": colorTo, // Customizable gradient end color.
        } as React.CSSProperties
      }
      // Tailwind utility classes:
      // - animate-gradient: custom animation class for background movement.
      // - bg-gradient-to-r: creates a horizontal gradient.
      // - from/via/to-[var(...)]: uses CSS variables for dynamic coloring.
      // - bg-clip-text & text-transparent: applies gradient to the text only.
      className={cn(
        `animate-gradient inline bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
        className,
      )}
      {...props} // Spread any additional props to the <span> element.
    >
      {children}
    </span>
  );
}
