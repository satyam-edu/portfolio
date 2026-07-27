"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Code2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import type { ProjectItem } from "@/types/project";

const TILT_RANGE = 8;

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [TILT_RANGE, -TILT_RANGE]),
    { stiffness: 300, damping: 30 },
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-TILT_RANGE, TILT_RANGE]),
    { stiffness: 300, damping: 30 },
  );

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set((event.clientX - bounds.left) / bounds.width);
    mouseY.set((event.clientY - bounds.top) / bounds.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        <Card className="flex h-full flex-col">
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-base">{project.name}</CardTitle>
              <Badge
                variant={project.status === "Live" ? "default" : "secondary"}
                className="shrink-0"
              >
                {project.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-3">
            {project.description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            {project.link ? (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.status === "GitHub" ? (
                    <Code2 className="size-4" />
                  ) : (
                    <ArrowUpRight className="size-4" />
                  )}
                  {project.status === "GitHub" ? "View Code" : "View Live"}
                </a>
              </Button>
            ) : (
              <span className="text-sm text-muted-foreground">
                Link coming soon
              </span>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Things I&apos;ve built
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
