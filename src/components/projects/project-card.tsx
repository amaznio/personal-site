import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Card className="h-full pt-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:ring-primary/40">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2">
            {project.title}
            <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        {project.tags.length > 0 && (
          <CardContent className="mt-auto flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </CardContent>
        )}
      </Card>
    </a>
  );
}
