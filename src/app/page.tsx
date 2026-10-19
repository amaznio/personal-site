import { AboutSection } from "@/components/sections/about-section";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { profile } from "@/config/profile";
import { siteConfig } from "@/config/site";
import { projectRepository } from "@/lib/projects";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteConfig.url,
    sameAs: profile.socials.map((social) => social.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <ProjectsSection repository={projectRepository} />
      <AboutSection />
    </>
  );
}
