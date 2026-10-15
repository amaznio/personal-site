import "server-only";

import projectsJson from "@/content/projects.json";

import type { ProjectRepository } from "./repository";
import { projectListSchema, type Project } from "./schema";

export class JsonProjectRepository implements ProjectRepository {
  private readonly projects: Project[];

  constructor(raw: unknown) {
    // Validate once at construction so a malformed JSON entry fails loudly at build time.
    this.projects = projectListSchema.parse(raw);
  }

  async getAll(): Promise<Project[]> {
    return this.projects;
  }
}

export const projectRepository: ProjectRepository = new JsonProjectRepository(
  projectsJson,
);
