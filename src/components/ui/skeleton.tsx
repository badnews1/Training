import { cn } from "./utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "circular" | "text";
}

function Skeleton({ className, variant = "default", ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-shimmer bg-skeleton",
        {
          "rounded-lg": variant === "default",
          "rounded-full": variant === "circular",
          "rounded h-4": variant === "text",
        },
        className,
      )}
      {...props}
    />
  );
}

// Pre-built skeleton components for common patterns
function SkeletonText({ className, lines = 3 }: { className?: string; lines?: number }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={cn("h-4", i === lines - 1 && "w-3/4")}
        />
      ))}
    </div>
  );
}

function SkeletonAvatar({ className, size = "default" }: { className?: string; size?: "sm" | "default" | "lg" }) {
  const sizeStyles = {
    sm: "size-8",
    default: "size-10",
    lg: "size-12",
  };

  return (
    <Skeleton
      variant="circular"
      className={cn(sizeStyles[size], className)}
    />
  );
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl bg-card p-4 space-y-4", className)}>
      <div className="flex items-center gap-3">
        <SkeletonAvatar />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <SkeletonText lines={2} />
    </div>
  );
}

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard };