import { siteConfig } from "@/config/site";

import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {siteConfig.name}. Built with Next.js & shadcn/ui.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
