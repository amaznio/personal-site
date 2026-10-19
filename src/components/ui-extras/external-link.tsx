import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

type ExternalLinkProps = Omit<ComponentProps<"a">, "href" | "target" | "rel"> & {
  href: string;
};

/** Link to another site: opens in a new tab and shows the ↗ affordance. */
export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <ArrowUpRight aria-hidden className="size-[1em] shrink-0" />
    </a>
  );
}
