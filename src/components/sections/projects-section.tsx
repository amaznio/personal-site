import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import type { ProjectRepository } from "@/lib/projects";

export async function ProjectsSection({ repository }: { repository: ProjectRepository }) {
  const projects = await repository.getAll();

  return (
    <Section id="projects" title="Projects" subtitle="A few things I've built and shipped.">
      <ProjectGrid projects={projects} />
    </Section>
  );
}
