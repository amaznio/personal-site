import { AboutSection } from "@/components/sections/about-section";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { projectRepository } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection repository={projectRepository} />
      <AboutSection />
    </>
  );
}
