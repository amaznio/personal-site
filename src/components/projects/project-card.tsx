import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "@/components/ui-extras/external-link";
import type { Project } from "@/lib/projects";

const linkClassName =
  "inline-flex items-center gap-1 py-3 text-sm font-semibold text-primary underline-offset-4 hover:underline";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-full gap-3 pt-0 ring-border [--card-spacing:--spacing(5)]">
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <CardHeader className="gap-3">
        <CardTitle className="text-xl font-semibold tracking-tight">{project.title}</CardTitle>
        <CardDescription className="text-[15px]">{project.description}</CardDescription>
      </CardHeader>
      {project.tags.length > 0 && (
        <CardContent className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="tag">
              {tag}
            </Badge>
          ))}
        </CardContent>
      )}
      <CardContent className="mt-auto flex gap-5">
        <ExternalLink href={project.url} className={linkClassName}>
          Live site
        </ExternalLink>
        {project.sourceUrl && (
          <ExternalLink href={project.sourceUrl} className={linkClassName}>
            Source
          </ExternalLink>
        )}
      </CardContent>
    </Card>
  );
}
