export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Adrian",
  title: "Adrian — Developer",
  description: "Personal site and project showcase.",
  tagline: "I build small, fun things for the web.",
  about: [
    "Hi! I'm a developer who enjoys turning ideas into simple, delightful products.",
    "When I'm not coding you'll probably find me exploring new tools, tinkering with side projects, or looking for the best coffee in town.",
  ],
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ] satisfies NavItem[],
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "Email", href: "mailto:adrianmaznio@gmail.com" },
  ] satisfies SocialLink[],
} as const;
