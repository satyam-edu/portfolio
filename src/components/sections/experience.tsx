"use client";

import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Where I&apos;ve worked
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience
        </h2>
      </div>

      <ol className="relative ml-3 border-l border-border">
        {experience.map((item, index) => (
          <motion.li
            key={item.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative mb-12 ml-6 last:mb-0"
          >
            <span className="absolute -left-[1.875rem] top-1.5 size-3 rounded-full bg-primary ring-4 ring-background" />

            <p className="text-sm font-medium text-muted-foreground">
              {item.duration}
            </p>
            <h3 className="mt-1 text-lg font-semibold">
              {item.role} ·{" "}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {item.company}
                </a>
              ) : (
                item.company
              )}
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground/60">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {item.technologies && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
