"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "./utils";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  variant?: "default" | "success" | "warning" | "calories" | "protein" | "fat" | "carbs";
  size?: "sm" | "default" | "lg";
  showValue?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant = "default", size = "default", showValue = false, ...props }, ref) => {
  const variantStyles = {
    default: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    calories: "bg-calories",
    protein: "bg-protein",
    fat: "bg-fat",
    carbs: "bg-carbs",
  };

  const sizeStyles = {
    sm: "h-1.5",
    default: "h-2.5",
    lg: "h-4",
  };

  return (
    <div className="relative w-full">
      <ProgressPrimitive.Root
        ref={ref}
        data-slot="progress"
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-muted",
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn(
            "h-full rounded-full transition-all duration-300 ease-out",
            variantStyles[variant],
          )}
          style={{ width: `${value || 0}%` }}
        />
      </ProgressPrimitive.Root>
      {showValue && (
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-medium text-text-secondary ml-2">
          {value}%
        </span>
      )}
    </div>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };