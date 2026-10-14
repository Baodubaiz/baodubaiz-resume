import React from "react";
import type { Project } from "../types/project.type";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-indigo-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/80" />
            <span className="text-xs font-mono text-zinc-500">Project</span>
          </div>

          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/60 text-xs font-medium">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 transition-colors"
            >
              Live Demo
              <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 inline-flex items-center gap-1 transition-colors"
            >
              Source Code
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
