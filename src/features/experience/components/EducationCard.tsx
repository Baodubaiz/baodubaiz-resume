"use client";

import React from "react";
import type { EducationItem } from "../types/experience.type";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  GraduationCap,
  Calendar,
  Award,
  CheckCircle2,
  FileCheck2,
  MapPin,
  BookOpen,
  Sparkles,
} from "lucide-react";

interface EducationCardProps {
  education: EducationItem;
}

export function EducationCard({ education }: EducationCardProps) {
  const { t } = useTranslation();

  return (
    <SpotlightCard
      className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
      spotlightColor="rgba(99, 102, 241, 0.12)"
    >
      {/* Top Header: Institution & Period */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-5 mb-5 border-b border-zinc-800/70">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {education.institution}
            </h3>
          </div>

          <div className="text-base sm:text-lg font-semibold text-indigo-300">
            {education.degree}
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
            {education.period}
          </span>
          {education.location && (
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>{education.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Verified Academic Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {/* GPA */}
        <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
            {t.experience.gpaLabel}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
              3.2
            </span>
            <span className="text-xs text-zinc-500 font-mono">/ 4.0</span>
          </div>
        </div>

        {/* Classification */}
        <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
            {t.experience.classificationLabel}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              {education.graduationClassification}
            </span>
          </div>
        </div>

        {/* Graduation Status */}
        <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
            {t.experience.statusLabel}
          </span>
          <div className="flex items-start gap-1.5 text-xs text-emerald-400 font-medium leading-snug">
            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            <span>{education.graduationStatus}</span>
          </div>
        </div>
      </div>

      {/* Curriculum Highlights */}
      {education.highlights && (
        <div>
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>{education.major}</span>
          </h4>
          <ul className="space-y-2">
            {education.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </SpotlightCard>
  );
}
