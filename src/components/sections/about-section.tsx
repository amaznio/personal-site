import { Section } from "@/components/layout/section";
import { SocialLinks } from "@/components/layout/social-links";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <Section id="about" title="About me">
      <div className="max-w-2xl space-y-4 text-muted-foreground">
        {siteConfig.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <SocialLinks className="mt-6 font-medium text-foreground" />
    </Section>
  );
}
