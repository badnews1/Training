import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground active:bg-primary-active",
        destructive:
          "bg-destructive text-destructive-foreground active:bg-destructive-hover",
        outline:
          "border-2 border-border bg-background text-foreground active:bg-secondary",
        secondary:
          "bg-secondary text-secondary-foreground active:bg-secondary-active",
        ghost:
          "text-foreground active:bg-secondary",
        link: 
          "text-primary underline-offset-4 underline",
        success:
          "bg-success text-success-foreground active:bg-success-hover",
        warning:
          "bg-warning text-warning-foreground active:bg-warning-hover",
      },
      size: {
        default: "h-12 px-5 py-3 text-base rounded-xl",
        sm: "h-10 px-4 py-2 text-sm rounded-lg",
        lg: "h-14 px-6 py-4 text-lg rounded-xl",
        icon: "size-12 rounded-xl",
        "icon-sm": "size-10 rounded-lg",
        "icon-lg": "size-14 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };