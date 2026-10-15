import type { Project } from "@/lib/projects";

import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p className="text-muted-foreground">New projects coming soon.</p>;
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
