"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useTranslation } from "@/hooks/useTranslation";
import { Target, Boxes, RefreshCw } from "lucide-react";

const MINDSET_CARDS_CONFIG = [
  {
    icon: Target,
    iconColor: "text-cyan-400",
    spotlight: "rgba(6, 182, 212, 0.22)",
    iconBoxClass:
      "bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/25 group-hover:scale-110",
    borderClass: "border-zinc-800/80",
    hoverClass:
      "hover:border-cyan-500/40 hover:shadow-[0_12px_36px_rgba(6,182,212,0.1)]",
  },
  {
    icon: Boxes,
    iconColor: "text-indigo-400",
    spotlight: "rgba(99, 102, 241, 0.22)",
    iconBoxClass:
      "bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/25 group-hover:scale-110",
    borderClass: "border-zinc-800/80",
    hoverClass:
      "hover:border-indigo-500/40 hover:shadow-[0_12px_36px_rgba(99,102,241,0.1)]",
  },
  {
    icon: RefreshCw,
    iconColor: "text-emerald-400",
    spotlight: "rgba(16, 185, 129, 0.22)",
    iconBoxClass:
      "bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/25 group-hover:scale-110",
    borderClass: "border-zinc-800/80",
    hoverClass:
      "hover:border-emerald-500/40 hover:shadow-[0_12px_36px_rgba(16,185,129,0.1)]",
  },
];

export function AboutSection() {
  const { t, language } = useTranslation();

  return (
    <section id="about" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <Container>
        {/* ======================================================== */}
        {/* KHU VỰC 1: GIỚI THIỆU BẢN THÂN                          */}
        {/* ======================================================== */}
        <ScrollReveal direction="up" delayMs={0} className="max-w-4xl mb-20 md:mb-24">
          {/* Nhãn nhỏ phía trên */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span>{t.about.badge}</span>
          </div>

          {/* Tiêu đề chính */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
            {t.about.headline.part1}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-400 bg-clip-text text-transparent">
              {t.about.headline.highlight1}
            </span>
            {t.about.headline.part2}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-300 bg-clip-text text-transparent">
              {t.about.headline.highlight2}
            </span>
          </h2>

          {/* Đoạn mô tả */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300/90 leading-relaxed font-normal max-w-3xl">
            {t.about.description}
          </p>

          {/* Interactive Core Attributes / Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-zinc-800/60">
            {[
              {
                label: language === "vi" ? "Đào tạo" : "Education",
                val: "HUTECH",
                sub: language === "vi" ? "Kỹ thuật phần mềm" : "Software Engineering",
              },
              {
                label: language === "vi" ? "Định hướng" : "Core Focus",
                val: "Full-Stack",
                sub: language === "vi" ? "Trọng tâm Backend" : "Backend-driven",
              },
              {
                label: language === "vi" ? "Kiến trúc" : "Philosophy",
                val: "Clean Code",
                sub: language === "vi" ? "Module & Bền vững" : "Modular & Scalable",
              },
              {
                label: language === "vi" ? "Trạng thái" : "Status",
                val: "Available",
                sub: language === "vi" ? "Sẵn sàng đón nhận" : "Open for Opportunities",
              },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="group p-3.5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 hover:bg-zinc-900/50 hover:-translate-y-0.5"
              >
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>{stat.label}</span>
                  {i === 3 && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  )}
                </div>
                <div className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {stat.val}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* KHU VỰC 2: TRIẾT LÝ PHÁT TRIỂN                          */}
        {/* ======================================================== */}
        <div className="pt-12 sm:pt-16 border-t border-zinc-800/70 mb-20 md:mb-24">
          <ScrollReveal direction="up" delayMs={150}>
            {/* Header của khu vực 2 */}
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-zinc-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{t.about.philosophy.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                {t.about.philosophy.title}
              </h3>
              <p className="text-zinc-300/90 text-base sm:text-lg leading-relaxed">
                {t.about.philosophy.description}
              </p>
            </div>

            {/* 3 nguyên tắc với Spotlight và 3D Tilt tương tác */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {t.about.philosophy.principles.map((principle, idx) => (
                <SpotlightCard
                  key={principle.title}
                  spotlightColor="rgba(99, 102, 241, 0.2)"
                  enableTilt={true}
                  className="group relative p-6 sm:p-7 hover:border-indigo-500/40 hover:shadow-[0_12px_36px_rgba(99,102,241,0.08)]"
                >
                  <div className="text-xs font-mono text-zinc-500 mb-3 flex items-center justify-between">
                    <span className="group-hover:text-indigo-300 transition-colors">PRINCIPLE // 0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-indigo-400 group-hover:scale-125 transition-all" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2.5 group-hover:text-indigo-200 transition-colors">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ======================================================== */}
        {/* KHU VỰC 3: TƯ DUY KỸ THUẬT NỔI BẬT                      */}
        {/* ======================================================== */}
        <div className="pt-12 sm:pt-16 border-t border-zinc-800/70">
          <ScrollReveal direction="up" delayMs={100}>
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-zinc-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>{t.about.mindset.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t.about.mindset.title}
              </h3>
            </div>
          </ScrollReveal>

          {/* Ba thẻ tư duy kỹ thuật với Spotlight Color riêng biệt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.mindset.cards.map((card, idx) => {
              const config = MINDSET_CARDS_CONFIG[idx] || MINDSET_CARDS_CONFIG[0];
              const Icon = config.icon;
              return (
                <ScrollReveal
                  key={card.number}
                  direction="up"
                  delayMs={150 + idx * 100}
                >
                  <SpotlightCard
                    spotlightColor={config.spotlight}
                    enableTilt={true}
                    className={`group relative h-full p-6 sm:p-7 ${config.borderClass} ${config.hoverClass}`}
                  >
                    {/* Hàng trên: Số thứ tự và Icon kỹ thuật */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold tracking-widest text-zinc-500 group-hover:text-zinc-200 transition-colors">
                        {card.number}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 ${config.iconBoxClass}`}
                      >
                        <Icon className={`w-4 h-4 ${config.iconColor}`} />
                      </div>
                    </div>

                    {/* Tiêu đề & Mô tả */}
                    <h4 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-zinc-100 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {card.description}
                    </p>
                  </SpotlightCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
