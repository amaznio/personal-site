import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16", className)}>
      <div className="mb-8 space-y-1">
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
