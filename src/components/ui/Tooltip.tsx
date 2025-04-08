import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

/**
 * TooltipProvider component
 *
 * Wraps all tooltip components and sets global tooltip behavior.
 * - `delayDuration` determines how long to wait (in ms) before showing the tooltip.
 * - Useful for grouping tooltips and managing consistent timing.
 */
function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

/**
 * Tooltip component
 *
 * Root component that enables tooltip behavior.
 * Automatically wrapped in a `TooltipProvider` to ensure consistent behavior.
 */
function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

/**
 * TooltipTrigger component
 *
 * Element that the user interacts with to trigger the tooltip.
 * Can wrap buttons, icons, text, etc.
 */
function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

/**
 * TooltipContent component
 *
 * The actual content shown inside the tooltip.
 * - `sideOffset` controls spacing between the trigger and content.
 * - Includes animations and styling for dynamic entry/exit and theme-aware visuals.
 */
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          // Styling for tooltip box, including animations and adaptive positioning
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-2 text-xs text-balance",
          className,
        )}
        {...props}
      >
        {children}
        {/* Tooltip arrow indicating origin direction */}
        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

// Export all tooltip components for use in other parts of the application
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
