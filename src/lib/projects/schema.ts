import { z } from "zod";

export const projectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  url: z.url(),
  sourceUrl: z.url().optional(),
  tags: z.array(z.string()).default([]),
});

export const projectListSchema = z.array(projectSchema);

export type Project = z.infer<typeof projectSchema>;
