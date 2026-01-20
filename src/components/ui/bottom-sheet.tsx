"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "./utils";

const BottomSheet = ({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root data-slot="bottom-sheet" {...props} />
);
BottomSheet.displayName = "BottomSheet";

const BottomSheetTrigger = DrawerPrimitive.Trigger;

const BottomSheetPortal = DrawerPrimitive.Portal;

const BottomSheetClose = DrawerPrimitive.Close;

const BottomSheetOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    data-slot="bottom-sheet-overlay"
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
      className,
    )}
    {...props}
  />
));
BottomSheetOverlay.displayName = "BottomSheetOverlay";

const BottomSheetContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <BottomSheetPortal>
    <BottomSheetOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      data-slot="bottom-sheet-content"
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-3xl bg-background",
        className,
      )}
      {...props}
    >
      {/* Handle */}
      <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-border-strong" />
      {children}
    </DrawerPrimitive.Content>
  </BottomSheetPortal>
));
BottomSheetContent.displayName = "BottomSheetContent";

const BottomSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="bottom-sheet-header"
    className={cn("flex flex-col gap-1.5 px-4 pt-4 pb-2", className)}
    {...props}
  />
);
BottomSheetHeader.displayName = "BottomSheetHeader";

const BottomSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="bottom-sheet-footer"
    className={cn("mt-auto flex flex-col gap-2 p-4 safe-bottom", className)}
    {...props}
  />
);
BottomSheetFooter.displayName = "BottomSheetFooter";

const BottomSheetTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    data-slot="bottom-sheet-title"
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
BottomSheetTitle.displayName = "BottomSheetTitle";

const BottomSheetDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    data-slot="bottom-sheet-description"
    className={cn("text-sm text-text-secondary", className)}
    {...props}
  />
));
BottomSheetDescription.displayName = "BottomSheetDescription";

const BottomSheetBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="bottom-sheet-body"
    className={cn("flex-1 overflow-auto px-4 py-2", className)}
    {...props}
  />
);
BottomSheetBody.displayName = "BottomSheetBody";

export {
  BottomSheet,
  BottomSheetPortal,
  BottomSheetOverlay,
  BottomSheetTrigger,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetDescription,
  BottomSheetBody,
};
