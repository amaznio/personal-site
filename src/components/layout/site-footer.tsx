import { ArrowUp } from "lucide-react";
import Link from "next/link";

import { ExternalLink } from "@/components/ui-extras/external-link";
import { profile } from "@/config/profile";

import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-footer text-footer-foreground">
      <Container className="flex flex-col gap-10 pt-[72px] pb-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-bold tracking-tight">
            Say hello.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="w-fit py-2 text-xl underline underline-offset-4"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-footer-border pt-6 text-sm text-footer-muted">
          <span>© {profile.name}</span>
          <div className="flex flex-wrap gap-x-5">
            {profile.socials.map((social) => (
              <ExternalLink
                key={social.href}
                href={social.href}
                className="inline-flex items-center gap-1 py-3 text-footer-foreground hover:underline"
              >
                {social.label}
              </ExternalLink>
            ))}
            <Link
              href="#top"
              className="inline-flex items-center gap-1 py-3 text-footer-foreground hover:underline"
            >
              Back to top <ArrowUp aria-hidden className="size-[1em]" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
