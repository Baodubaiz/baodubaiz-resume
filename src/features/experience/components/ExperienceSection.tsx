"use client";

import React, { useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXPERIENCE_DATA } from "../data/experience.data";
import { WorkExperienceCard } from "./WorkExperienceCard";
import { EducationCard } from "./EducationCard";
import { useTranslation } from "@/hooks/useTranslation";
import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceSection() {
  const { t, language } = useTranslation();

  const langKey = language === "vi" ? "vi" : "en";
  const experienceData = useMemo(() => EXPERIENCE_DATA[langKey], [langKey]);

  return (
    <section id="experience" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <Container size="default">
        {/* Main Section Heading */}
        <SectionHeading
          badge={t.experience.badge}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="max-w-4xl mx-auto space-y-16 sm:space-y-20">
          {/* ======================================================== */}
          {/* SUBSECTION 1: WORK EXPERIENCE                            */}
          {/* ======================================================== */}
          <div id="work-experience" className="space-y-6">
            <ScrollReveal direction="up" delayMs={50}>
              <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {t.experience.workTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {t.experience.workSubtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {experienceData.workExperience.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delayMs={100 + index * 100}
                  direction="up"
                >
                  <WorkExperienceCard experience={item} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ======================================================== */}
          {/* SUBSECTION 2: EDUCATION                                  */}
          {/* ======================================================== */}
          <div id="education" className="space-y-6">
            <ScrollReveal direction="up" delayMs={50}>
              <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {t.experience.eduTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {t.experience.eduSubtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {experienceData.education.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delayMs={100 + index * 100}
                  direction="up"
                >
                  <EducationCard education={item} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
