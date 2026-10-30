"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslation } from "@/hooks/useTranslation";
import { CareerOverview } from "./CareerOverview";
import { EngineeringMindsetCard } from "./EngineeringMindsetCard";
import { DevelopmentFocusCards } from "./DevelopmentFocusCards";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { LongTermGoalCard } from "./LongTermGoalCard";

export function CareerDirectionSection() {
  const { t } = useTranslation();

  return (
    <section id="career" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-[500px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <Container size="default">
        {/* Main Section Heading */}
        <SectionHeading
          badge={t.career.badge}
          title={t.career.title}
          subtitle={t.career.subtitle}
        />

        <div className="max-w-5xl mx-auto space-y-20 sm:space-y-24">
          {/* ======================================================== */}
          {/* SUBSECTION A: CAREER DIRECTION                           */}
          {/* ======================================================== */}
          <ScrollReveal direction="up" delayMs={50}>
            <CareerOverview />
          </ScrollReveal>

          {/* ======================================================== */}
          {/* SUBSECTION B: ENGINEERING MINDSET                        */}
          {/* ======================================================== */}
          <ScrollReveal direction="up" delayMs={100}>
            <EngineeringMindsetCard />
          </ScrollReveal>

          {/* ======================================================== */}
          {/* SUBSECTION C: DEVELOPMENT FOCUS                          */}
          {/* ======================================================== */}
          <ScrollReveal direction="up" delayMs={100}>
            <DevelopmentFocusCards />
          </ScrollReveal>

          {/* ======================================================== */}
          {/* SUBSECTION D: DEVELOPMENT ROADMAP                        */}
          {/* ======================================================== */}
          <ScrollReveal direction="up" delayMs={100}>
            <RoadmapTimeline />
          </ScrollReveal>

          {/* ======================================================== */}
          {/* SUBSECTION E: LONG-TERM GOAL                             */}
          {/* ======================================================== */}
          <ScrollReveal direction="up" delayMs={100}>
            <LongTermGoalCard />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
