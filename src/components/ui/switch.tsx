"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "./utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot="switch"
    className={cn(
      // Base styles - larger for touch
      "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full",
      // Transition
      "transition-colors duration-200",
      // Unchecked state
      "bg-switch-background",
      // Checked state
      "data-[state=checked]:bg-primary",
      // Focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      // Disabled
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        // Base styles
        "pointer-events-none block size-6 rounded-full bg-white shadow-md",
        // Transition
        "transition-transform duration-200",
        // Position based on state
        "data-[state=unchecked]:translate-x-0.5",
        "data-[state=checked]:translate-x-[22px]",
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };