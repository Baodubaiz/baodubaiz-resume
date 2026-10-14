import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXPERIENCE_DATA } from "../data/experience.data";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <Container size="default">
        <SectionHeading
          badge="Journey"
          title="Experience & Education"
          subtitle="My professional milestones, engineering contributions, and academic background."
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
