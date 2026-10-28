"use client";

import React from "react";
import type { WorkExperienceItem } from "../types/experience.type";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Briefcase,
  Building2,
  Calendar,
  Clock,
  Layers,
  MapPin,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

interface WorkExperienceCardProps {
  experience: WorkExperienceItem;
}

export function WorkExperienceCard({ experience }: WorkExperienceCardProps) {
  const { t } = useTranslation();

  return (
    <SpotlightCard
      className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
      spotlightColor="rgba(99, 102, 241, 0.12)"
    >
      {/* Top Header: Company, Role, Badges */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-5 mb-5 border-b border-zinc-800/70">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Building2 className="w-4 h-4" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {experience.company}
            </h3>
          </div>

          <div className="text-base sm:text-lg font-semibold text-indigo-300">
            {experience.role}
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
            {experience.employmentType} · {experience.duration}
          </span>
          {experience.location && (
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>{experience.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Project Callout Banner */}
      <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 mb-5 flex items-start gap-3">
        <FolderGit2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-300 mb-1">
            {t.experience.projectLabel}
          </div>
          <div className="text-sm font-bold text-white mb-1.5">
            {experience.projectName}
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {experience.summary}
          </p>
        </div>
      </div>

      {/* Technical Highlights / Responsibilities */}
      <div className="mb-6">
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>{t.experience.responsibilitiesLabel}</span>
        </h4>
        <ul className="space-y-2.5">
          {experience.highlights.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Pills */}
      <div>
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-2.5">
          {t.experience.techStackLabel}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800/70 text-zinc-300 border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}
