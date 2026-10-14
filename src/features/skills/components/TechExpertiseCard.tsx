import React from "react";
import type { TechSkillGroup } from "../types/skill.type";
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
    iconBox: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
    skillBg: "bg-cyan-950/20 text-cyan-200 border-cyan-800/30",
  },
  backend: {
    badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    dot: "bg-indigo-400",
    iconBox: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    hoverBorder: "hover:border-indigo-500/40",
    skillBg: "bg-indigo-950/20 text-indigo-200 border-indigo-800/30",
  },
  database: {
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-400",
    iconBox: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    skillBg: "bg-emerald-950/20 text-emerald-200 border-emerald-800/30",
  },
  architecture: {
    badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-400",
    iconBox: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    hoverBorder: "hover:border-purple-500/40",
    skillBg: "bg-purple-950/20 text-purple-200 border-purple-800/30",
  },
  devops: {
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    dot: "bg-amber-400",
    iconBox: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    hoverBorder: "hover:border-amber-500/40",
    skillBg: "bg-amber-950/20 text-amber-200 border-amber-800/30",
  },
};

export function TechExpertiseCard({ group }: TechExpertiseCardProps) {
  const IconComponent =
    GROUP_ICONS[group.id as keyof typeof GROUP_ICONS] || Cpu;
  const styling =
    ACCENT_COLORS[group.id as keyof typeof ACCENT_COLORS] ||
    ACCENT_COLORS.architecture;

  return (
    <div
      className={`group relative h-full flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 transition-all duration-300 hover:-translate-y-1 ${styling.hoverBorder}`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${styling.iconBox}`}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider border ${styling.badge}`}
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

      {/* Skills Pill List */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 hover:border-zinc-600 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
