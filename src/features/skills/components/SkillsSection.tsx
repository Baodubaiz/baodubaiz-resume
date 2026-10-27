"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  TECH_EXPERTISE_DATA,
  PROBLEMS_SOLUTIONS_DATA,
  PATTERNS_DATA,
  COMMUNICATION_DATA,
} from "../data/skills.data";
import { TechExpertiseCard } from "./TechExpertiseCard";
import { ProblemSolutionCard } from "./ProblemSolutionCard";
import { Check, Network, Database, Layers, ArrowUpRight, Activity } from "lucide-react";

export function SkillsSection() {
  const { t, language } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const langKey = language === "vi" ? "vi" : "en";
  const expertiseGroups = TECH_EXPERTISE_DATA[langKey];
  const problemSolutions = PROBLEMS_SOLUTIONS_DATA[langKey];
  const patternsList = PATTERNS_DATA[langKey];
  const commData = COMMUNICATION_DATA[langKey];

  const categoryFilters = [
    { id: "all", label: language === "vi" ? "Tất cả lĩnh vực" : "All Domains" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: language === "vi" ? "Cơ sở dữ liệu" : "Database" },
    { id: "architecture", label: language === "vi" ? "Kiến trúc hệ thống" : "Architecture" },
    { id: "devops", label: "DevOps & Cloud" },
  ];

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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{t.skills.expertise.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {t.skills.expertise.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {t.skills.expertise.subtitle}
                </p>
              </div>

              {/* Interactive Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 self-start md:self-end">
                {categoryFilters.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${isActive
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                          : "bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:text-white hover:border-zinc-700"
                        }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* 5 Category Cards Grid with Interactive Focus Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseGroups.map((group, index) => {
              const isDimmed = activeCategory !== "all" && activeCategory !== group.id;
              const isSelected = activeCategory === group.id;

              return (
                <ScrollReveal
                  key={group.id}
                  direction="up"
                  delayMs={index * 80}
                  className={`${index === 4 ? "md:col-span-2 lg:col-span-1" : ""} transition-all duration-300 ${isDimmed
                      ? "opacity-35 grayscale-[40%] scale-[0.98] hover:opacity-90 hover:scale-100 hover:grayscale-0"
                      : isSelected
                        ? "scale-[1.02] ring-2 ring-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] rounded-2xl"
                        : "opacity-100"
                    }`}
                >
                  <TechExpertiseCard group={group} index={index} />
                </ScrollReveal>
              );
            })}
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
                  <SpotlightCard
                    spotlightColor="rgba(99, 102, 241, 0.2)"
                    enableTilt={true}
                    className="h-full p-6 sm:p-7 hover:border-indigo-500/40 hover:shadow-[0_12px_36px_rgba(99,102,241,0.08)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 mb-2">
                        {pattern.category}
                      </div>
                      <h5 className="text-base font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
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
                  </SpotlightCard>
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
              <SpotlightCard
                spotlightColor="rgba(16, 185, 129, 0.18)"
                enableTilt={false}
                className="p-6 sm:p-8 hover:border-emerald-500/40 hover:shadow-[0_12px_36px_rgba(16,185,129,0.08)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-zinc-800/60">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>{language === "vi" ? "GIAO THỨC CỐT LÕI" : "CORE PROTOCOL"}</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {commData.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                      {commData.description}
                    </p>
                  </div>

                  <div className="px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-xs font-mono text-zinc-400 space-y-1.5 shrink-0 shadow-sm">
                    <div className="text-zinc-500 text-[11px]">// Scope & Research</div>
                    <div className="flex items-center justify-between gap-4">
                      <span>WebSocket:</span>
                      <span className="text-amber-400/90 font-semibold">{language === "vi" ? "Định hướng tiếp theo" : "Planned Roadmap"}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>gRPC / GraphQL:</span>
                      <span className="text-zinc-400">{language === "vi" ? "Nghiên cứu kiến trúc" : "Architectural Research"}</span>
                    </div>
                  </div>
                </div>

                {/* Animated Visual Data Flow Stream */}
                <div className="mb-6 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
                    <div className="flex items-center gap-2 text-cyan-300 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/30 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>Client (Next.js SSR)</span>
                    </div>

                    <div className="relative flex-1 w-full sm:w-auto h-7 flex items-center justify-center">
                      <div className="w-full h-px bg-gradient-to-r from-cyan-500/40 via-emerald-500/50 to-indigo-500/40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="px-3 py-0.5 rounded-full text-[10px] bg-zinc-900 border border-emerald-500/30 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)] flex items-center gap-1.5 animate-pulse">
                          <Activity className="w-3 h-3 text-emerald-400 animate-spin" />
                          <span>RESTful JSON Payloads • HTTP/2</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-indigo-300 bg-indigo-950/40 px-3 py-1.5 rounded-lg border border-indigo-500/30 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span>Server Core (NestJS / Java)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {commData.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/60 flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed hover:border-zinc-700/80 hover:bg-zinc-950/60 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
