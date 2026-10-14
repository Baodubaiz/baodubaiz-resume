"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PROJECTS_DATA } from "../data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "@/hooks/useTranslation";

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 bg-zinc-950/40 relative">
      <Container>
        <SectionHeading
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delayMs={index * 100}
              direction="up"
              className="h-full"
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
