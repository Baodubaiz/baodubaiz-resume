"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslation } from "@/hooks/useTranslation";
import {
  TECH_EXPERTISE_DATA,
  PROBLEMS_SOLUTIONS_DATA,
  PATTERNS_DATA,
  COMMUNICATION_DATA,
} from "../data/skills.data";
import { TechExpertiseCard } from "./TechExpertiseCard";
import { ProblemSolutionCard } from "./ProblemSolutionCard";
import { Check, Network, Database, Layers, ArrowUpRight } from "lucide-react";

export function SkillsSection() {
  const { t, language } = useTranslation();

  const langKey = language === "vi" ? "vi" : "en";
  const expertiseGroups = TECH_EXPERTISE_DATA[langKey];
  const problemSolutions = PROBLEMS_SOLUTIONS_DATA[langKey];
  const patternsList = PATTERNS_DATA[langKey];
  const commData = COMMUNICATION_DATA[langKey];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <Container>
        {/* Main Section Heading */}
        <SectionHeading
          badge={t.skills.badge}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        {/* ======================================================== */}
        {/* BRANCH A: TECHNICAL EXPERTISE                            */}
        {/* ======================================================== */}
        <div className="mb-24">
          <ScrollReveal direction="up" delayMs={50}>
            <div className="max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{t.skills.expertise.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                {t.skills.expertise.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {t.skills.expertise.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* 5 Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseGroups.map((group, index) => (
              <ScrollReveal
                key={group.id}
                direction="up"
                delayMs={index * 80}
                className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <TechExpertiseCard group={group} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* BRANCH B: PROBLEMS & SOLUTIONS                           */}
        {/* ======================================================== */}
        <div className="pt-16 border-t border-zinc-800/80">
          <ScrollReveal direction="up" delayMs={50}>
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span>{t.skills.solutions.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                {t.skills.solutions.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {t.skills.solutions.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* B1. Technical Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {problemSolutions.map((item, index) => (
              <ScrollReveal key={item.id} direction="up" delayMs={index * 70}>
                <ProblemSolutionCard
                  item={item}
                  problemLabel={t.skills.solutions.problemLabel}
                  approachLabel={t.skills.solutions.approachLabel}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* B2. Patterns (Database Design & Software Architecture) */}
          <div className="mb-20">
            <ScrollReveal direction="up" delayMs={50}>
              <div className="mb-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-400" />
                  {t.skills.solutions.patternsTitle}
                </h4>
                <p className="text-sm text-zinc-400">
                  {t.skills.solutions.patternsSubtitle}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {patternsList.map((pattern, index) => (
                <ScrollReveal
                  key={pattern.id}
                  direction="up"
                  delayMs={index * 100}
                >
                  <div className="h-full p-6 sm:p-7 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 mb-2">
                        {pattern.category}
                      </div>
                      <h5 className="text-base font-bold text-white mb-2">
                        {pattern.title}
                      </h5>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                        {pattern.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-zinc-800/60">
                      {pattern.practices.map((practice) => (
                        <div
                          key={practice}
                          className="flex items-start gap-2 text-xs text-zinc-300"
                        >
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* B3. Communication Protocols */}
          <div>
            <ScrollReveal direction="up" delayMs={50}>
              <div className="mb-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 flex items-center gap-2">
                  <Network className="w-5 h-5 text-cyan-400" />
                  {t.skills.solutions.commTitle}
                </h4>
                <p className="text-sm text-zinc-400">
                  {t.skills.solutions.commSubtitle}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={100}>
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-zinc-800/60">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{language === "vi" ? "GIAO THỨC CỐT LÕI" : "CORE PROTOCOL"}</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {commData.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                      {commData.description}
                    </p>
                  </div>

                  <div className="px-4 py-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs font-mono text-zinc-400 space-y-1 shrink-0">
                    <div className="text-zinc-500">// Scope & Research</div>
                    <div>WebSocket: <span className="text-amber-400/90">{language === "vi" ? "Định hướng tiếp theo" : "Planned Roadmap"}</span></div>
                    <div>gRPC / GraphQL: <span className="text-zinc-500">{language === "vi" ? "Nghiên cứu kiến trúc" : "Architectural Research"}</span></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {commData.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/60 flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
