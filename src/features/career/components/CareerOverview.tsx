"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Compass,
  Server,
  Layers,
  Terminal,
  ArrowRight,
  RefreshCw,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export function CareerOverview() {
  const { t, language } = useTranslation();
  const careerData = t.career.direction;

  return (
    <div className="space-y-6">
      {/* Subheading header */}
      <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
          <Compass className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
            A. {careerData.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {careerData.title}
          </h3>
        </div>
      </div>

      {/* Main Narrative Card */}
      <SpotlightCard
        spotlightColor="rgba(6, 182, 212, 0.15)"
        className="p-6 sm:p-8 bg-zinc-900/60 border-zinc-800/90"
      >
        <div className="space-y-6">
          {/* Main Statement Quote */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal">
            {careerData.description}
          </p>

          {/* Shared Bedrock Foundation Banner */}
          <div className="pt-6 border-t border-zinc-800/80">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-0.5">
                    {careerData.foundationBadge}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {careerData.foundationTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                    {careerData.foundationDesc}
                  </p>
                </div>
              </div>

              {/* 4 Pillars Chips */}
              <div className="flex flex-wrap gap-2 pt-2 lg:pt-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-900/90 text-zinc-300 border border-zinc-700/60">
                  <Server className="w-3.5 h-3.5 text-indigo-400" />
                  {careerData.pillars.backend}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-900/90 text-zinc-300 border border-zinc-700/60">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  {careerData.pillars.systems}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-900/90 text-zinc-300 border border-zinc-700/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {careerData.pillars.problemSolving}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-900/90 text-zinc-300 border border-zinc-700/60">
                  <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
                  {careerData.pillars.tradeoffs}
                </span>
              </div>
            </div>
          </div>

          {/* Software Lifecycle Visual Pathway */}
          <div className="pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-3">
              {careerData.lifecycleTitle}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Stage 1 */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">
                    {careerData.lifecycle.step1}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 hidden md:block" />
              </div>

              {/* Stage 2 */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">
                    {careerData.lifecycle.step2}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 hidden md:block" />
              </div>

              {/* Stage 3 */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">
                    {careerData.lifecycle.step3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
