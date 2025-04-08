import * as React from "react"

import { cn } from "@/lib/utils" // Utility function to merge class names

/**
 * Input component with consistent styling and accessibility.
 *
 * - Accepts all standard input props.
 * - Supports additional styling via `className`.
 * - Provides visual feedback for focus, error, disabled, and file states.
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input" // Markup used for targeting the input in component systems or styling
      className={cn(
        // Base input styles
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        
        // Focus styles
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        
        // Validation styles (e.g., aria-invalid)
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        
        // Allow external className overrides/extensions
        className
      )}
      {...props} // Spread remaining props (e.g., placeholder, value, onChange)
    />
  )
}

// Export the styled Input component
export { Input }
