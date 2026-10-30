"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Sparkles,
  Layers,
  Scale,
  RefreshCw,
  Target,
  CheckCircle,
} from "lucide-react";

export function LongTermGoalCard() {
  const { t } = useTranslation();
  const goalData = t.career.longTermGoal;

  return (
    <div className="space-y-6">
      {/* Subheading header */}
      <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
            E. {goalData.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {goalData.title}
          </h3>
        </div>
      </div>

      <SpotlightCard
        spotlightColor="rgba(16, 185, 129, 0.15)"
        className="p-6 sm:p-8 bg-zinc-900/60 border-zinc-800/90 relative overflow-hidden"
      >
        <div className="space-y-6">
          {/* Main Statement */}
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal">
              {goalData.description}
            </p>
          </div>

          {/* Core Vision Pillars */}
          <div className="pt-6 border-t border-zinc-800/80">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {goalData.pillars.map((pillar, idx) => {
                const icons = [Layers, Scale, RefreshCw];
                const IconComponent = icons[idx % icons.length];
                const colors = [
                  "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
                  "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
                  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                ];

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`w-8 h-8 rounded-lg ${colors[idx]} flex items-center justify-center shrink-0 mb-3`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
