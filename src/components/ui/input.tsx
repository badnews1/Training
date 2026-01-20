import * as React from "react";

import { cn } from "./utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-muted pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          data-slot="input"
          className={cn(
            // Base styles
            "flex h-12 w-full rounded-xl border-2 bg-input-background px-4 py-3 text-base text-foreground transition-colors",
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
            // Icon padding
            leftIcon && "pl-12",
            rightIcon && "pr-12",
            className,
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-icon-muted">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };