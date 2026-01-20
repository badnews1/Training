import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-colors select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        info: "bg-info text-info-foreground",
        outline: "border-2 border-border text-foreground bg-transparent",
        muted: "bg-muted text-muted-foreground",
        // Nutrient badges
        calories: "bg-calories/15 text-calories",
        protein: "bg-protein/15 text-protein",
        fat: "bg-fat/15 text-fat",
        carbs: "bg-carbs/15 text-carbs",
      },
      size: {
        default: "h-6 px-3 text-xs",
        sm: "h-5 px-2 text-2xs",
        lg: "h-8 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };