import React from "react";
import type { Experience } from "../types/experience.type";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-12 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-0 w-px bg-zinc-800 group-last:hidden" />

      {/* Timeline node */}
      <div className="absolute left-1 sm:left-2 top-2 w-5 h-5 rounded-full bg-zinc-900 border-2 border-indigo-500/80 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-400 transition-all">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
      </div>

      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/70 hover:border-zinc-700/80 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {experience.role}
            </h3>
            <p className="text-sm font-medium text-indigo-400">
              {experience.company}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <span>{experience.period}</span>
            <span>•</span>
            <span>{experience.location}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-4 text-xs sm:text-sm text-zinc-300">
          {experience.description.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">›</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
