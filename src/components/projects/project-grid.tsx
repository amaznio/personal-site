import type { Project } from "@/lib/projects";

import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p className="text-muted-foreground">New projects coming soon.</p>;
  }

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-6">
      {projects.map((project) => (
        <li key={project.slug} className="flex">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
