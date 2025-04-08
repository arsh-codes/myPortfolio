/**
 * Imports the Radix UI Label primitives for accessible form labeling
 */
import * as LabelPrimitive from "@radix-ui/react-label";
/**
 * Imports React and related types
 */
import * as React from "react";

/**
 * Utility function to conditionally merge class names
 */
import { cn } from "@/lib/utils";

/**
 * Label component
 *
 * A styled wrapper around Radix UI's LabelPrimitive.Root with forwardRef support.
 * This ensures the label is accessible, customizable via className,
 * and styled consistently with both light and dark themes.
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>, // Ref type based on the Radix Label element
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> // Prop types excluding 'ref'
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      // Base styles for the label: small text, proper line height, and medium font weight
      // Styled for accessibility when associated input is disabled
      // Supports light and dark mode text color
      "text-sm leading-none font-medium text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white",
      className, // Allow user-defined classes to be merged
    )}
    {...props} // Spread remaining props for flexibility
  />
));

// Set a display name for debugging and DevTools support
Label.displayName = LabelPrimitive.Root.displayName;

/**
 * Exports the Label component for external use
 */
export { Label };
