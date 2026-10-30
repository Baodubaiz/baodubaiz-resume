"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Boxes,
  Terminal,
  GitBranch,
  Layers,
  CheckCircle2,
  Server,
  Activity,
  Workflow,
  Sparkles,
} from "lucide-react";

export function DevelopmentFocusCards() {
  const { t } = useTranslation();
  const focusData = t.career.focus;

  return (
    <div className="space-y-6">
      {/* Subheading header */}
      <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
        <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-semibold block">
            C. {focusData.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {focusData.title}
          </h3>
        </div>
      </div>

      <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
        {focusData.subtitle}
      </p>

      {/* Two Visually Distinct but Equally Balanced Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: DevOps Engineering */}
        <SpotlightCard
          spotlightColor="rgba(245, 158, 11, 0.15)"
          className="p-6 sm:p-7 bg-zinc-900/60 border-zinc-800/90 hover:border-amber-500/40 hover:shadow-[0_12px_36px_rgba(245,158,11,0.08)] transition-all flex flex-col justify-between"
        >
          <div className="space-y-5">
            {/* Card Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                    {focusData.devops.badge}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {focusData.devops.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Exact Required Description */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {focusData.devops.description}
            </p>

            {/* Key Capability Focus Areas */}
            <div className="pt-4 border-t border-zinc-800/80 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-2">
                Core Competency Pillars //
              </span>
              {focusData.devops.keyAreas.map((area, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom subtle tag */}
          <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Domain Focus</span>
            <span className="text-amber-400 font-semibold">Infrastructure & Operations</span>
          </div>
        </SpotlightCard>

        {/* Card 2: Software Architecture */}
        <SpotlightCard
          spotlightColor="rgba(99, 102, 241, 0.15)"
          className="p-6 sm:p-7 bg-zinc-900/60 border-zinc-800/90 hover:border-indigo-500/40 hover:shadow-[0_12px_36px_rgba(99,102,241,0.08)] transition-all flex flex-col justify-between"
        >
          <div className="space-y-5">
            {/* Card Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
                  <Boxes className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
                    {focusData.architecture.badge}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {focusData.architecture.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Exact Required Description */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {focusData.architecture.description}
            </p>

            {/* Key Capability Focus Areas */}
            <div className="pt-4 border-t border-zinc-800/80 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-2">
                Core Competency Pillars //
              </span>
              {focusData.architecture.keyAreas.map((area, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom subtle tag */}
          <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Domain Focus</span>
            <span className="text-indigo-400 font-semibold">System Design & Structure</span>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
