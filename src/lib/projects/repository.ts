import type { Project } from "./schema";

/**
 * Read-only access to projects. UI depends on this abstraction, not on where
 * the data lives, so the JSON source can be swapped for a CMS or DB later.
 */
export interface ProjectRepository {
  getAll(): Promise<Project[]>;
}
