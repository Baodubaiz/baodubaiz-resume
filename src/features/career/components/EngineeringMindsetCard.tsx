"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Scale,
  Zap,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Coins,
  Sliders,
  Check,
} from "lucide-react";

const DIMENSION_ICONS = [
  { icon: Zap, color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/10" },
  { icon: CheckCircle2, color: "text-cyan-400", border: "border-cyan-500/20", bg: "bg-cyan-500/10" },
  { icon: ShieldCheck, color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/10" },
  { icon: TrendingUp, color: "text-indigo-400", border: "border-indigo-500/20", bg: "bg-indigo-500/10" },
  { icon: Coins, color: "text-rose-400", border: "border-rose-500/20", bg: "bg-rose-500/10" },
  { icon: Sliders, color: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/10" },
];

export function EngineeringMindsetCard() {
  const { t } = useTranslation();
  const mindsetData = t.career.mindset;

  return (
    <div className="space-y-6">
      {/* Subheading header */}
      <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
          <Scale className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-semibold block">
            B. {mindsetData.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {mindsetData.title}
          </h3>
        </div>
      </div>

      <SpotlightCard
        spotlightColor="rgba(99, 102, 241, 0.15)"
        className="p-6 sm:p-8 bg-zinc-900/60 border-zinc-800/90"
      >
        <div className="space-y-6">
          {/* Main Statement */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal">
            {mindsetData.description}
          </p>

          {/* 6 Trade-off Balancing Dimensions */}
          <div className="pt-6 border-t border-zinc-800/80">
            <div className="mb-4">
              <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {mindsetData.tradeoffsTitle}
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                {mindsetData.tradeoffsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {mindsetData.dimensions.map((dim, idx) => {
                const iconConfig = DIMENSION_ICONS[idx % DIMENSION_ICONS.length];
                const IconComponent = iconConfig.icon;

                return (
                  <div
                    key={dim.name}
                    className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className={`w-7 h-7 rounded-lg ${iconConfig.bg} border ${iconConfig.border} flex items-center justify-center ${iconConfig.color} shrink-0`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-white block">
                          {dim.name}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                          {dim.label}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {dim.desc}
                    </p>
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
