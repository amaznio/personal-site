import Link from "next/link";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { profile } from "@/config/profile";
import { siteConfig } from "@/config/site";

import { Container } from "./container";

export function SiteHeader() {
  return (
    <header>
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
        <Link href="#top" className="py-3 text-lg font-bold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-2">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-3 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
