import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SKILLS_DATA } from "../data/skills.data";
import { SkillCard } from "./SkillCard";
import type { SkillCategory } from "../types/skill.type";

const CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend & APIs",
  "Database & Cloud",
  "DevOps & Tools",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <Container>
        <SectionHeading
          badge="Expertise"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit focused on type safety, modular architecture, and modern web standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((category, catIndex) => {
            const categorySkills = SKILLS_DATA.filter(
              (skill) => skill.category === category
            );

            return (
              <ScrollReveal
                key={category}
                delayMs={catIndex * 80}
                direction="up"
                className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800/60">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <h3 className="text-base font-semibold text-zinc-100">
                    {category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
