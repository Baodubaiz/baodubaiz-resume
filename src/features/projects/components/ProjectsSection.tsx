"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PROJECTS_DATA } from "../data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { useTranslation } from "@/hooks/useTranslation";
import type { ProjectItem, ProjectCategoryKey } from "../types/project.type";
import { Sparkles, Filter } from "lucide-react";

export function ProjectsSection() {
  const { t, language } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryKey>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const langKey = language === "vi" ? "vi" : "en";
  const allProjects = useMemo(() => PROJECTS_DATA[langKey], [langKey]);

  // Keep selectedProject in sync when switching languages while modal is open
  const currentSelectedProject = useMemo(() => {
    if (!selectedProject) return null;
    return allProjects.find((p) => p.id === selectedProject.id) || allProjects[0];
  }, [selectedProject, allProjects]);

  const categories: { key: ProjectCategoryKey; label: string; count: number }[] = [
    {
      key: "all",
      label: t.projects.allCategories,
      count: allProjects.length,
    },
    {
      key: "education",
      label: t.projects.educationCategory,
      count: allProjects.filter((p) => p.categoryKey === "education").length,
    },
    {
      key: "ecommerce",
      label: t.projects.ecommerceCategory,
      count: allProjects.filter((p) => p.categoryKey === "ecommerce").length,
    },
    {
      key: "enterprise",
      label: t.projects.enterpriseCategory,
      count: allProjects.filter((p) => p.categoryKey === "enterprise").length,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return allProjects;
    return allProjects.filter((p) => p.categoryKey === selectedCategory);
  }, [allProjects, selectedCategory]);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-zinc-950/60 relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <Container>
        <SectionHeading
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Filter Navigation Tabs */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="flex items-center justify-center gap-2 mb-10 sm:mb-12 flex-wrap">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-sm">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-indigo-800/80 text-white"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Level A: Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delayMs={index * 120}
              direction="up"
              className="h-full"
            >
              <ProjectCard
                project={project}
                onExplore={(p) => setSelectedProject(p)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Level B: Deep-Dive Case Study Modal */}
        <ProjectDetailModal
          project={currentSelectedProject}
          allProjects={allProjects}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      </Container>
    </section>
  );
}
