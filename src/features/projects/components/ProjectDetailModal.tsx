"use client";

import React, { useEffect, useState, useRef } from "react";
import type { ProjectItem } from "../types/project.type";
import { useTranslation } from "@/hooks/useTranslation";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  Server,
  Zap,
  Lock,
  Workflow,
  CheckCircle2,
  AlertTriangle,
  Scale,
  FileCode2,
  Terminal,
  Activity,
  ArrowRight,
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

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

type TabKey =
  | "overview"
  | "challenges"
  | "architecture"
  | "capabilities"
  | "techStack"
  | "contribution"
  | "outcomes";

export function ProjectDetailModal({
  project,
  allProjects,
  onClose,
  onSelectProject,
}: ProjectDetailModalProps) {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabKey>("challenges");
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Reset scroll and set default tab when switching project
  useEffect(() => {
    if (project) {
      setActiveTab("challenges");
      if (modalContentRef.current) {
        modalContentRef.current.scrollTop = 0;
      }
    }
  }, [project?.id]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const tabs: { key: TabKey; label: string; count?: number }[] = [
    { key: "challenges", label: t.projects.tabs.challenges, count: project.challenges.length },
    { key: "overview", label: t.projects.tabs.overview },
    { key: "capabilities", label: t.projects.tabs.capabilities, count: project.capabilities.length },
    { key: "architecture", label: t.projects.tabs.architecture },
    { key: "techStack", label: t.projects.tabs.techStack },
    { key: "contribution", label: t.projects.tabs.contribution },
    { key: "outcomes", label: t.projects.tabs.outcomes },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative flex flex-col w-full max-w-5xl h-[92vh] max-h-[900px] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex-shrink-0 px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              {project.status}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-mono text-zinc-400 bg-zinc-800/60 border border-zinc-700/40">
              {t.projects.roleLabel}: {project.role}
            </span>
          </div>

          {/* Quick Prev / Next & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              title={`${t.projects.prevProject}: ${prevProject.title}`}
              aria-label={t.projects.prevProject}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-zinc-500 px-1">
              {currentIndex + 1} / {allProjects.length}
            </span>
            <button
              onClick={() => onSelectProject(nextProject)}
              title={`${t.projects.nextProject}: ${nextProject.title}`}
              aria-label={t.projects.nextProject}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="w-px h-5 bg-zinc-800 mx-1" />

            <button
              onClick={onClose}
              title={t.projects.closeCaseStudy}
              aria-label={t.projects.closeCaseStudy}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Title & Subtitle banner */}
        <div className="flex-shrink-0 px-6 pt-5 pb-4 bg-zinc-900/30 border-b border-zinc-800/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2
                id="case-study-title"
                className="text-xl sm:text-2xl font-bold text-white tracking-tight"
              >
                {project.title}
              </h2>
              <p className="text-sm text-zinc-400 mt-1 max-w-3xl leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* Links in header */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap flex-shrink-0">
              {project.links.liveUrl && (
                <a
                  href={project.links.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm shadow-indigo-600/30"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t.projects.viewProject}
                </a>
              )}
              {project.links.githubUrl && (
                <a
                  href={project.links.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  {t.projects.sourceCode}
                </a>
              )}
              {project.links.isPrivateRepo && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <Lock className="w-3.5 h-3.5" />
                  {t.projects.privateRepo}
                </span>
              )}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none border-t border-zinc-800/40 pt-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm shadow-indigo-500/10"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border border-transparent"
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? "bg-indigo-500/30 text-indigo-200"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Modal Content with Lenis prevention */}
        <div
          ref={modalContentRef}
          data-lenis-prevent
          className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth overscroll-contain"
        >
          {/* TAB: ENGINEERING CHALLENGES (CENTERPIECE) */}
          {activeTab === "challenges" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-300 leading-relaxed">
                  <span className="font-semibold text-white">
                    {language === "vi" ? "Trọng tâm Kỹ thuật: " : "Engineering Focus: "}
                  </span>
                  {language === "vi"
                    ? "Mỗi bài toán dưới đây được phân tích theo 3 trục: Bản chất vấn đề kỹ thuật, cơ chế giải quyết thực tế trong mã nguồn, và đánh đổi kiến trúc."
                    : "Each technical challenge is analyzed across three dimensions: root technical problem, actual implementation mechanism, and architectural trade-offs."}
                </div>
              </div>

              {project.challenges.map((challenge, idx) => (
                <div
                  key={challenge.id}
                  className="rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-5 sm:p-6 transition-all hover:border-zinc-700/80"
                >
                  {/* Challenge Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-zinc-800/60">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                        CHALLENGE {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {challenge.title}
                      </h3>
                    </div>

                    {/* Engineering Focus Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {challenge.engineeringFocus.map((focus) => (
                        <span
                          key={focus}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
                        >
                          #{focus}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3 Pillars: Problem, Technical Approach, Trade-offs */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* 1. Problem */}
                    <div className="rounded-xl p-4 bg-rose-950/15 border border-rose-900/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
                          <AlertTriangle className="w-4 h-4" />
                          <span>{t.projects.challengeLabels.problem}</span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                          {challenge.problem.description}
                        </p>
                        {challenge.problem.conditions && (
                          <div className="text-[11px] text-zinc-400 mb-2">
                            <span className="font-semibold text-rose-300/80">
                              {language === "vi" ? "Điều kiện xảy ra: " : "Conditions: "}
                            </span>
                            {challenge.problem.conditions}
                          </div>
                        )}
                      </div>
                      <div className="pt-2.5 border-t border-rose-900/30 text-[11px] text-rose-300/90 font-mono">
                        <span className="font-semibold">{language === "vi" ? "Hệ quả: " : "Risk: "}</span>
                        {challenge.problem.risk}
                      </div>
                    </div>

                    {/* 2. Technical Approach */}
                    <div className="rounded-xl p-4 bg-emerald-950/15 border border-emerald-900/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{t.projects.challengeLabels.approach}</span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                          {challenge.approach.description}
                        </p>
                        <ul className="space-y-1.5 text-[11px] text-zinc-300">
                          {challenge.approach.mechanisms.map((mech, mIdx) => (
                            <li key={mIdx} className="flex items-start gap-1.5">
                              <span className="text-emerald-400 mt-0.5">•</span>
                              <span className="leading-snug">{mech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2.5 border-t border-emerald-900/30 text-[11px] text-emerald-400 font-mono">
                        ✓ {language === "vi" ? "Cơ chế bảo vệ kiểm chứng" : "Verified mechanism"}
                      </div>
                    </div>

                    {/* 3. Trade-offs */}
                    <div className="rounded-xl p-4 bg-amber-950/15 border border-amber-900/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
                          <Scale className="w-4 h-4" />
                          <span>{t.projects.challengeLabels.tradeoffs}</span>
                        </div>

                        <div className="mb-2">
                          <span className="text-[11px] font-semibold text-emerald-400 block mb-1">
                            {t.projects.challengeLabels.benefits}:
                          </span>
                          <ul className="space-y-1 text-[11px] text-zinc-300">
                            {challenge.tradeoffs.benefits.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-1">
                                <span className="text-emerald-400">+</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-2">
                          <span className="text-[11px] font-semibold text-amber-400 block mb-1">
                            {t.projects.challengeLabels.complexities}:
                          </span>
                          <ul className="space-y-1 text-[11px] text-zinc-300">
                            {challenge.tradeoffs.complexities.map((c, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-1">
                                <span className="text-amber-400">−</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-amber-900/30 text-[11px] text-zinc-400 italic">
                        &quot;{challenge.tradeoffs.justification}&quot;
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Server className="w-4 h-4" />
                    <span>{language === "vi" ? "Mục tiêu & Bản chất Hệ thống" : "System Purpose"}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.detailedOverview.systemPurpose}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Zap className="w-4 h-4" />
                    <span>{language === "vi" ? "Đối tượng Phục vụ" : "Target Users"}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.detailedOverview.targetUsers}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Workflow className="w-4 h-4" />
                    <span>{language === "vi" ? "Nhu cầu Nghiệp vụ" : "Business Operational Need"}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.detailedOverview.businessNeed}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Cpu className="w-4 h-4" />
                    <span>{language === "vi" ? "Điểm thú vị Kỹ thuật" : "Technical Interest"}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.detailedOverview.technicalInterest}
                  </p>
                </div>
              </div>

              {/* Highlights List */}
              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  {t.projects.highlightsLabel}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-300 leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: CORE CAPABILITIES */}
          {activeTab === "capabilities" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.capabilities.map((mod, idx) => (
                <div
                  key={mod.id}
                  className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-xs font-mono font-bold">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white">{mod.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                      {mod.description}
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {mod.workflows.map((wf, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                          <span className="leading-snug">{wf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: ARCHITECTURE & FLOW */}
          {activeTab === "architecture" && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                  {t.projects.architectureLabels.systemOverview}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.architecture.summary}
                </p>
              </div>

              {/* Execution Data Flow Diagram (Box/Connector Flow) */}
              {project.architecture.workflowSteps && (
                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    <span>{t.projects.architectureLabels.workflowTitle}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
                    {project.architecture.workflowSteps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="relative p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
                              STEP {step.step}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">
                              {step.actor}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-white mb-1.5">
                            {step.action}
                          </div>
                          <p className="text-[11px] text-zinc-400 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architectural Layers & Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.architecture.components.map((comp, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">
                          {comp.layer}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            comp.status === "implemented"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : comp.status === "external"
                              ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                              : "bg-zinc-800 text-zinc-400"
                          }`}
                        >
                          {comp.status === "implemented"
                            ? t.projects.architectureLabels.statusImplemented
                            : comp.status === "external"
                            ? t.projects.architectureLabels.statusExternal
                            : t.projects.architectureLabels.statusPlanned}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-white mb-1.5">{comp.name}</h5>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: TECH STACK */}
          {activeTab === "techStack" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.techStackDetailed.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{cat.category}</span>
                  </h4>
                  <div className="space-y-2.5">
                    {cat.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/60"
                      >
                        <div className="text-xs font-bold text-zinc-100 mb-0.5">
                          {item.name}
                        </div>
                        {item.purpose && (
                          <div className="text-[11px] text-zinc-400 leading-relaxed">
                            {item.purpose}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: ROLE & CONTRIBUTION */}
          {activeTab === "contribution" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {t.projects.roleLabel}
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {project.contribution.roleTitle}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {language === "vi" ? "Phạm vi Thực hiện" : "Verified Scope"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Implemented Features */}
                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    <FileCode2 className="w-4 h-4" />
                    <span>{t.projects.contributionLabels.features}</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {project.contribution.implementedFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-0.5">✓</span>
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Architectural Decisions */}
                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Layers className="w-4 h-4" />
                    <span>{t.projects.contributionLabels.architecture}</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {project.contribution.architecturalDecisions.map((dec, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-0.5">◆</span>
                        <span className="leading-relaxed">{dec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Integration & DevOps */}
                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Server className="w-4 h-4" />
                    <span>{t.projects.contributionLabels.devops}</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {project.contribution.integrationsAndDevOps.map((dev, devIdx) => (
                      <li key={devIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-0.5">⚙</span>
                        <span className="leading-relaxed">{dev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB: OUTCOMES & EVIDENCE */}
          {activeTab === "outcomes" && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.projects.outcomesLabels.status}</span>
                </div>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {project.outcomes.verificationStatus}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
                  {t.projects.outcomesLabels.points}
                </h4>
                <div className="space-y-2.5">
                  {project.outcomes.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.outcomes.confidentialityNote && (
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 flex items-start gap-3 text-xs text-amber-300/90 leading-relaxed">
                  <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-amber-300 block mb-0.5">
                      {t.projects.outcomesLabels.confidentiality}
                    </span>
                    {project.outcomes.confidentialityNote}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex-shrink-0 px-6 py-3.5 border-t border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="text-xs font-medium text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevProject.title}</span>
              <span className="sm:hidden">{t.projects.prevProject}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
            >
              {t.projects.closeCaseStudy}
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="text-xs font-medium text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span className="hidden sm:inline">{nextProject.title}</span>
              <span className="sm:hidden">{t.projects.nextProject}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
