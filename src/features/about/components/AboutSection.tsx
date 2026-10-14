"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslation } from "@/hooks/useTranslation";
import { Target, Boxes, RefreshCw } from "lucide-react";

const MINDSET_CARDS_CONFIG = [
  {
    icon: Target,
    iconColor: "text-cyan-400",
    iconBoxClass:
      "bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/20",
    borderClass: "border-zinc-800/80",
    hoverClass:
      "hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgba(6,182,212,0.06)]",
  },
  {
    icon: Boxes,
    iconColor: "text-indigo-400",
    iconBoxClass:
      "bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/20",
    borderClass: "border-zinc-800/80",
    hoverClass:
      "hover:border-indigo-500/30 hover:shadow-[0_8px_30px_rgba(99,102,241,0.06)]",
  },
  {
    icon: RefreshCw,
    iconColor: "text-emerald-400",
    iconBoxClass:
      "bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/20",
    borderClass: "border-zinc-800/80",
    hoverClass:
      "hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.06)]",
  },
];

export function AboutSection() {
  const { t } = useTranslation();

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

            {/* 3 nguyên tắc dạng 3 cột phân cách rõ ràng */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {t.about.philosophy.principles.map((principle, idx) => (
                <div
                  key={principle.title}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="text-xs font-mono text-zinc-500 mb-3 flex items-center justify-between">
                    <span>PRINCIPLE // 0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-indigo-400 transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2.5 group-hover:text-indigo-200 transition-colors">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
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

          {/* Ba thẻ tư duy kỹ thuật */}
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
                  <div
                    className={`group relative h-full p-6 sm:p-7 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border transition-all duration-300 hover:-translate-y-1 ${config.borderClass} ${config.hoverClass}`}
                  >
                    {/* Hàng trên: Số thứ tự và Icon kỹ thuật */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
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
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
