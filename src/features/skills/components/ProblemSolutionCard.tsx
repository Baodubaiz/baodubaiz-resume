import React from "react";
import type { ProblemSolutionItem } from "../types/skill.type";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ShieldAlert, Cpu } from "lucide-react";

interface ProblemSolutionCardProps {
  item: ProblemSolutionItem;
  problemLabel: string;
  approachLabel: string;
}

export function ProblemSolutionCard({
  item,
  problemLabel,
  approachLabel,
}: ProblemSolutionCardProps) {
  return (
    <SpotlightCard
      spotlightColor="rgba(6, 182, 212, 0.18)"
      enableTilt={true}
      className="group relative flex flex-col justify-between p-6 hover:border-cyan-500/40 hover:shadow-[0_12px_36px_rgba(6,182,212,0.08)]"
    >
      <div>
        {/* Header with Title and Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <h4 className="text-base font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-cyan-200 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-all duration-300" />
            {item.title}
          </h4>
          {item.tags && (
            <div className="flex gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 group-hover:border-zinc-600 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Problem definition */}
        <div className="mb-3.5 pb-3.5 border-b border-zinc-800/60">
          <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 mb-1.5 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
            <span>{problemLabel}</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
            {item.problem}
          </p>
        </div>

        {/* Approach / Solution */}
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-1.5 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
            <span>{approachLabel}</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors">
            {item.approach}
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
}
