import React from "react";
import type { SkillItem } from "../types/skill.type";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  skill: SkillItem;
}

export function SkillCard({ skill }: SkillCardProps) {
  const proficiencyStyles = {
    Advanced: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    Proficient: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };

  return (
    <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/90 transition-all duration-200">
      <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
      <span
        className={cn(
          "px-2 py-0.5 rounded-full text-[11px] font-medium border",
          proficiencyStyles[skill.proficiency]
        )}
      >
        {skill.proficiency}
      </span>
    </div>
  );
}
