import * as React from "react";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";

import { cn } from "@/lib/utils";

// InputProps extends the default HTML input attributes
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// Input component with forwardRef to allow external reference handling
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // Radius of the radial gradient hover effect
    const [visible, setVisible] = React.useState(false); // Tracks hover state for gradient visibility

    // Create reactive motion values for mouse X and Y positions
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    // Update mouse position relative to the input's bounding box
    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      // Wrapper div with animated background that responds to mouse movement
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        // Track hover state and mouse movement
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        {/* Styled input field with theme-aware and accessibility features */}
        <input
          type={type}
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
            className,
          )}
          ref={ref} // Connect the forwarded ref to the input element
          {...props} // Spread remaining props onto the input
        />
      </motion.div>
    );
  },
);

Input.displayName = "Input"; // Set display name for debugging and dev tools

export { Input }; // Export the Input component
