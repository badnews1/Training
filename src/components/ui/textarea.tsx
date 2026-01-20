import * as React from "react";

import { cn } from "./utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        className={cn(
          // Base styles
          "flex min-h-[120px] w-full rounded-xl border-2 bg-input-background px-4 py-3 text-base text-foreground",
          // Placeholder
          "placeholder:text-input-placeholder",
          // Focus state
          "focus:border-input-border-focus focus:outline-none focus:ring-0",
          // Disabled state
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Default border
          "border-input-border",
          // Error state
          error && "border-destructive focus:border-destructive",
          // Resize
          "resize-none",
          className,
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };