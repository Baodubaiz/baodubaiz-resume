"use client";

import React from "react";
import type { ProjectItem } from "../types/project.type";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Sparkles,
} from "lucide-react";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface ProjectCardProps {
  project: ProjectItem;
  onExplore: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onExplore }: ProjectCardProps) {
  const { t, language } = useTranslation();

  return (
    <SpotlightCard
      className="group relative flex flex-col justify-between p-6 sm:p-7 h-full border border-zinc-800/80 hover:border-indigo-500/40 bg-zinc-900/40 hover:bg-zinc-900/70 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10"
      spotlightColor="rgba(99, 102, 241, 0.12)"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Top Header: Category & Status */}
          <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-medium">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                {project.status}
              </span>
              {project.featured && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  Featured
                </span>
              )}
            </div>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2 leading-tight">
            {project.title}
          </h3>

          <p className="text-xs font-mono text-zinc-400 mb-4">
            <span className="text-zinc-500">{t.projects.roleLabel}:</span> {project.role}
          </p>

          {/* Concise Brief Overview */}
          <p className="text-sm text-zinc-300/90 leading-relaxed mb-5">
            {project.overviewBrief}
          </p>

          {/* 3-4 Core Highlights */}
          <div className="mb-5 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 block mb-2.5">
              {t.projects.highlightsLabel}
            </span>
            <ul className="space-y-1.5">
              {project.keyHighlights.slice(0, 3).map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-zinc-300 leading-snug"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Focus Tags */}
          <div className="mb-5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500 block mb-2">
              {t.projects.focusLabel}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.engineeringFocusTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-950/40 text-indigo-300 border border-indigo-900/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Tech Stack */}
          <div className="mb-6">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500 block mb-2">
              {t.projects.stackLabel}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.primaryTechStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-800/70 text-zinc-200 border border-zinc-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-zinc-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Primary Explore Action Button */}
          <button
            onClick={() => onExplore(project)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 group/btn"
          >
            <span>{t.projects.exploreCaseStudy}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>

          {/* Secondary External Links */}
          <div className="flex items-center gap-3 text-xs font-medium self-end sm:self-auto">
            {project.links.liveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                title={t.projects.viewProject}
              >
                <span>Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                title={t.projects.sourceCode}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}

            {project.links.isPrivateRepo && (
              <span
                className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500"
                title={t.projects.privateRepo}
              >
                <Lock className="w-3 h-3 text-amber-500/70" />
                <span>Internal</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
