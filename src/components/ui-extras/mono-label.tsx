import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/** Small monospace text used for eyebrows, meta lines and labels. */
export function MonoLabel({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn("font-mono text-[13px] text-muted-foreground", className)}
      {...props}
    />
  );
}
