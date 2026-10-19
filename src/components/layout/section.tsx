import type { ReactNode } from "react";

import { MonoLabel } from "@/components/ui-extras/mono-label";
import { cn } from "@/lib/utils";

import { Container } from "./container";

type SectionProps = {
  id: string;
  title: string;
  /** Short mono label shown on the right of the heading, e.g. "6 selected". */
  meta?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, meta, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("pb-28", className)}>
      <Container className="flex flex-col gap-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t pt-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight">{title}</h2>
          {meta && <MonoLabel>{meta}</MonoLabel>}
        </div>
        {children}
      </Container>
    </section>
  );
}
