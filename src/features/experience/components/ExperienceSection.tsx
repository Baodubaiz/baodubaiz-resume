"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXPERIENCE_DATA } from "../data/experience.data";
import { ExperienceItem } from "./ExperienceItem";
import { useTranslation } from "@/hooks/useTranslation";

export function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 relative">
      <Container size="default">
        <SectionHeading
          badge={t.experience.badge}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="max-w-3xl mx-auto">
          {EXPERIENCE_DATA.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delayMs={index * 120}
              direction="up"
            >
              <ExperienceItem experience={item} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
