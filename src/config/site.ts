import { profile } from "./profile";

export type NavItem = {
  label: string;
  href: string;
};

/** Canonical origin. Override with NEXT_PUBLIC_SITE_URL (e.g. for local dev) (no trailing slash). */
const url = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://adrianmaznio.com").replace(/\/$/, "");

export const siteConfig = {
  url,
  name: profile.name,
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name} is a ${profile.role.toLowerCase()} who builds small, fun things for the web. Browse projects and get in touch.`,
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
} as const;
