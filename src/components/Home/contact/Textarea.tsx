import * as React from "react";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";

import { cn } from "@/lib/utils";

// Define the prop types for the Textarea component,
// extending the default HTML textarea attributes.
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// ForwardRef component to allow parent components to access the underlying DOM element.
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    // Radius of the radial gradient effect on hover
    const radius = 100;

    // State to track whether the gradient effect should be visible
    const [visible, setVisible] = React.useState(false);

    // Motion values to track the current mouse position relative to the component
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    // Updates the mouse position values when the mouse moves within the container
    function handleMouseMove(
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) {
      const { left, top } = event.currentTarget.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    }

    return (
      // Outer container with animated radial gradient background on hover
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove} // Track mouse movement
        onMouseEnter={() => setVisible(true)} // Show gradient on hover
        onMouseLeave={() => setVisible(false)} // Hide gradient on mouse leave
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        {/* 
          Styled textarea element with responsive design, 
          dark/light theme support, hover effects, and accessibility features.
        */}
        <textarea
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex w-full resize-none rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
            className,
          )}
          ref={ref} // Attach forwarded ref
          {...props} // Spread remaining props (e.g., placeholder, value, onChange)
        />
      </motion.div>
    );
  },
);

// Set a display name for debugging and React DevTools
Textarea.displayName = "Textarea";

// Export the component for use in other parts of the app
export { Textarea };
