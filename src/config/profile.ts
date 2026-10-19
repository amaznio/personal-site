export type ExternalLinkItem = {
  label: string;
  href: string;
};

export type ProfileFact = {
  label: string;
  value: string;
};

export type Profile = {
  name: string;
  /** Used in the hero greeting ("I'm Adrian."). */
  firstName: string;
  role: string;
  intro: string;
  /** Optional "what I'm up to right now" line shown under the hero buttons. */
  currently?: string;
  email: string;
  socials: ExternalLinkItem[];
  about: {
    lead: string;
    body: string;
  };
  facts: ProfileFact[];
};

export const profile: Profile = {
  name: "Adrian Maznio",
  firstName: "Adrian",
  role: "Software Engineer",
  intro: "I build small, fun things for the web.",
  email: "adrianmaznio@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/amaznio" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adrian-maznio/" },
  ],
  about: {
    lead: "Hi! I'm a software engineer who enjoys turning ideas into simple, delightful products.",
    body: "When I'm not coding you'll probably find me exploring new tools, tinkering with side projects, or looking for the best coffee in town.",
  },
  facts: [{ label: "Works with", value: "React, Next.js, TypeScript, Tailwind" }],
};
