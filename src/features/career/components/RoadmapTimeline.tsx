"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Milestone,
  Check,
  CircleDot,
  Server,
  Terminal,
  Cpu,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
} from "lucide-react";

const STEP_ICONS = [Server, Terminal, Cpu, Sparkles];
const STEP_COLORS = [
  {
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    dot: "bg-cyan-400",
    numBorder: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    spotlight: "rgba(6, 182, 212, 0.12)",
  },
  {
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    dot: "bg-amber-400",
    numBorder: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    spotlight: "rgba(245, 158, 11, 0.12)",
  },
  {
    badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    dot: "bg-indigo-400",
    numBorder: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10",
    spotlight: "rgba(99, 102, 241, 0.12)",
  },
  {
    badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-400",
    numBorder: "border-purple-500/30 text-purple-400 bg-purple-500/10",
    spotlight: "rgba(168, 85, 247, 0.12)",
  },
];

export function RoadmapTimeline() {
  const { t } = useTranslation();
  const roadmapData = t.career.roadmap;

  return (
    <div className="space-y-6">
      {/* Subheading header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Milestone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
              D. {roadmapData.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {roadmapData.title}
            </h3>
          </div>
        </div>

        {/* Status indicator: Future developmental milestone */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900/80 border border-zinc-700/80 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{roadmapData.milestoneStatus}</span>
        </div>
      </div>

      <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
        {roadmapData.subtitle}
      </p>

      {/* Structured Phased Timeline */}
      <div className="relative pt-4">
        {/* Continuous timeline vertical line on md+ screens */}
        <div
          className="hidden md:block absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500/40 via-indigo-500/40 to-purple-500/40"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {roadmapData.steps.map((step, idx) => {
            const color = STEP_COLORS[idx % STEP_COLORS.length];
            const StepIcon = STEP_ICONS[idx % STEP_ICONS.length];

            return (
              <div key={step.stepNumber} className="relative flex flex-col md:flex-row gap-5 md:gap-6 items-start">
                {/* Step indicator node on timeline */}
                <div className="hidden md:flex relative z-10 w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 items-center justify-center shrink-0 shadow-lg">
                  <div
                    className={`w-10 h-10 rounded-xl border ${color.numBorder} flex items-center justify-center font-mono font-bold text-sm`}
                  >
                    {step.stepNumber}
                  </div>
                </div>

                {/* Card Content */}
                <SpotlightCard
                  spotlightColor={color.spotlight}
                  className="flex-1 w-full p-5 sm:p-7 bg-zinc-900/60 border-zinc-800/90"
                >
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        {/* Mobile Step Badge */}
                        <span
                          className={`md:hidden font-mono font-bold text-xs px-2 py-0.5 rounded-md border ${color.numBorder}`}
                        >
                          {step.stepNumber}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold uppercase ${color.badge}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
                          {step.stepLabel}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {step.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1 text-zinc-500 text-xs font-mono">
                        <StepIcon className="w-4 h-4 text-zinc-400" />
                      </div>
                    </div>

                    {/* Exact Required Description */}
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {step.description}
                    </p>

                    {/* Focus Topics Chips */}
                    <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-2">
                      {step.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
