import React from "react";
import type { TechSkillGroup } from "../types/skill.type";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Layout, Server, Database, Cpu, Terminal } from "lucide-react";

interface TechExpertiseCardProps {
  group: TechSkillGroup;
  index: number;
}

const GROUP_ICONS = {
  frontend: Layout,
  backend: Server,
  database: Database,
  architecture: Cpu,
  devops: Terminal,
};

const ACCENT_COLORS = {
  frontend: {
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    dot: "bg-cyan-400",
    iconBox: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40 hover:shadow-[0_12px_36px_rgba(6,182,212,0.1)]",
    spotlight: "rgba(6, 182, 212, 0.22)",
    skillHover: "hover:border-cyan-500/40 hover:text-cyan-200 hover:bg-cyan-950/30",
  },
  backend: {
    badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    dot: "bg-indigo-400",
    iconBox: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/20",
    hoverBorder: "hover:border-indigo-500/40 hover:shadow-[0_12px_36px_rgba(99,102,241,0.1)]",
    spotlight: "rgba(99, 102, 241, 0.22)",
    skillHover: "hover:border-indigo-500/40 hover:text-indigo-200 hover:bg-indigo-950/30",
  },
  database: {
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-400",
    iconBox: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40 hover:shadow-[0_12px_36px_rgba(16,185,129,0.1)]",
    spotlight: "rgba(16, 185, 129, 0.22)",
    skillHover: "hover:border-emerald-500/40 hover:text-emerald-200 hover:bg-emerald-950/30",
  },
  architecture: {
    badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-400",
    iconBox: "bg-purple-500/10 text-purple-400 border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-500/20",
    hoverBorder: "hover:border-purple-500/40 hover:shadow-[0_12px_36px_rgba(168,85,247,0.1)]",
    spotlight: "rgba(168, 85, 247, 0.22)",
    skillHover: "hover:border-purple-500/40 hover:text-purple-200 hover:bg-purple-950/30",
  },
  devops: {
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    dot: "bg-amber-400",
    iconBox: "bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:border-amber-500/50 group-hover:bg-amber-500/20",
    hoverBorder: "hover:border-amber-500/40 hover:shadow-[0_12px_36px_rgba(245,158,11,0.1)]",
    spotlight: "rgba(245, 158, 11, 0.22)",
    skillHover: "hover:border-amber-500/40 hover:text-amber-200 hover:bg-amber-950/30",
  },
};

export function TechExpertiseCard({ group }: TechExpertiseCardProps) {
  const IconComponent =
    GROUP_ICONS[group.id as keyof typeof GROUP_ICONS] || Cpu;
  const styling =
    ACCENT_COLORS[group.id as keyof typeof ACCENT_COLORS] ||
    ACCENT_COLORS.architecture;

  return (
    <SpotlightCard
      spotlightColor={styling.spotlight}
      enableTilt={true}
      className={`group relative h-full flex flex-col justify-between p-6 ${styling.hoverBorder}`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${styling.iconBox}`}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider border transition-colors ${styling.badge}`}
          >
            {group.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-zinc-100 transition-colors">
          {group.title}
        </h4>
        <p className="text-xs text-zinc-400 leading-relaxed mb-5">
          {group.description}
        </p>
      </div>

      {/* Skills Pill List with Interactive Hover */}
      <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/60">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 transition-all duration-200 cursor-default hover:scale-105 shadow-sm ${styling.skillHover}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </SpotlightCard>
  );
}
