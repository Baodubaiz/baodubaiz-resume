"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Layers,
  Cpu,
  GitBranch,
  Activity,
  Terminal,
  Database,
  Building2,
  ChevronDown,
  Sparkles,
} from "lucide-react";

// Full 1,197 frames extracted from all 4 scenes
const TOTAL_FRAMES = 1197;
const FRAME_PATH = (idx: number) =>
  `/hero-frames/frame-${String(idx + 1).padStart(4, "0")}.webp`;

interface ChapterInfo {
  id: string;
  label: string;
  progressTarget: number;
}

const CHAPTERS: ChapterInfo[] = [
  { id: "desk", label: "01 Setup", progressTarget: 0.05 },
  { id: "frontend", label: "02 Frontend", progressTarget: 0.36 },
  { id: "backend", label: "03 Backend", progressTarget: 0.62 },
  { id: "connect", label: "04 Connect", progressTarget: 0.88 },
];

export function HeroSection() {
  const { t } = useTranslation();
  const chapters: ChapterInfo[] = [
    { id: "desk", label: t.hero.chapters.setup, progressTarget: 0.05 },
    { id: "frontend", label: t.hero.chapters.frontend, progressTarget: 0.36 },
    { id: "backend", label: t.hero.chapters.backend, progressTarget: 0.62 },
    { id: "connect", label: t.hero.chapters.connect, progressTarget: 0.88 },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // High performance references (no React re-render overhead in the 60fps loop)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const lastDrawnFrameRef = useRef(-1);

  // Cached canvas draw dimensions to completely eliminate layout thrashing
  const canvasSizeRef = useRef({
    width: 0,
    height: 0,
    drawW: 0,
    drawH: 0,
    offsetX: 0,
    offsetY: 0,
  });

  // UI state updated only at major scroll milestones or phase changes
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [loadPercent, setLoadPercent] = useState(0);
  const [isInitialReady, setIsInitialReady] = useState(false);

  // Fast O(1) nearest loaded frame lookup
  const getLoadedImage = useCallback((targetIndex: number): HTMLImageElement | null => {
    const list = imagesRef.current;
    if (list[targetIndex]?.complete && list[targetIndex]?.naturalWidth) {
      return list[targetIndex];
    }
    // Outward scan for nearest available frame (up to 25 frames distance)
    for (let offset = 1; offset < 25; offset++) {
      const prev = targetIndex - offset;
      if (prev >= 0 && list[prev]?.complete && list[prev]?.naturalWidth) {
        return list[prev];
      }
      const next = targetIndex + offset;
      if (next < TOTAL_FRAMES && list[next]?.complete && list[next]?.naturalWidth) {
        return list[next];
      }
    }
    return list[0]?.complete ? list[0] : null;
  }, []);

  // Pure GPU draw: zero DOM queries, zero reflow, zero context reallocations
  const renderCanvasFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = getLoadedImage(frameIndex);
      if (!img) return;

      const { drawW, drawH, offsetX, offsetY } = canvasSizeRef.current;
      if (drawW === 0 || drawH === 0) return;

      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    },
    [getLoadedImage]
  );

  // Recalculate canvas buffer and cover scaling ONLY on mount and resize
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (width === 0 || height === 0) return;

    const bufW = Math.floor(width * dpr);
    const bufH = Math.floor(height * dpr);

    if (canvas.width !== bufW || canvas.height !== bufH) {
      canvas.width = bufW;
      canvas.height = bufH;
    }

    const imgW = 1280;
    const imgH = 720;
    const scale = Math.max(bufW / imgW, bufH / imgH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;

    canvasSizeRef.current = {
      width: bufW,
      height: bufH,
      drawW,
      drawH,
      offsetX: (bufW - drawW) / 2,
      offsetY: (bufH - drawH) / 2,
    };
  }, []);

  // Multi-tier preloader with background GPU decode (img.decode)
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);
    updateCanvasDimensions();

    let isCancelled = false;
    let totalLoaded = 0;

    // Helper to load and decode a single frame
    const loadSingleFrame = (idx: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = FRAME_PATH(idx);
        imagesRef.current[idx] = img;

        img.onload = () => {
          totalLoaded++;
          if (totalLoaded % 30 === 0 || totalLoaded === TOTAL_FRAMES) {
            setLoadPercent(Math.round((totalLoaded / TOTAL_FRAMES) * 100));
          }
          // Decode in background thread so drawImage never blocks the main thread
          if ("decode" in img) {
            img.decode().catch(() => { }).finally(() => resolve());
          } else {
            resolve();
          }
        };

        img.onerror = () => {
          totalLoaded++;
          resolve();
        };
      });
    };

    // Tier 1: Frame 0 (instant paint)
    loadSingleFrame(0).then(() => {
      if (isCancelled) return;
      setIsInitialReady(true);
      updateCanvasDimensions();
      renderCanvasFrame(0);
    });

    // Tier 2: Stride 10 Skeleton (~120 frames across the entire journey)
    // Ensures immediate coverage across 100% of the timeline within ~300ms
    async function loadSkeletonAndRemaining() {
      const skeletonIndices: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i += 10) {
        skeletonIndices.push(i);
      }

      // Load skeleton in parallel batches of 16
      const SKELETON_BATCH = 16;
      for (let i = 0; i < skeletonIndices.length; i += SKELETON_BATCH) {
        if (isCancelled) return;
        const slice = skeletonIndices.slice(i, i + SKELETON_BATCH);
        await Promise.all(slice.map((idx) => loadSingleFrame(idx)));
      }

      // Tier 3: Stream in all remaining frames in batches of 16
      const remainingIndices: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!imagesRef.current[i]) {
          remainingIndices.push(i);
        }
      }

      const STREAM_BATCH = 16;
      for (let i = 0; i < remainingIndices.length; i += STREAM_BATCH) {
        if (isCancelled) return;
        const slice = remainingIndices.slice(i, i + STREAM_BATCH);
        await Promise.all(slice.map((idx) => loadSingleFrame(idx)));
      }
    }

    loadSkeletonAndRemaining();

    return () => {
      isCancelled = true;
    };
  }, [renderCanvasFrame, updateCanvasDimensions]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      updateCanvasDimensions();
      renderCanvasFrame(Math.round(currentFrameRef.current));
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [renderCanvasFrame, updateCanvasDimensions]);

  // 60FPS Lerp loop synchronized with scroll position
  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(currentScroll / scrollableHeight, 1));

      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);

      // Chapter thresholds for 1,197 frames
      let chapter = 0;
      if (progress >= 0.74) {
        chapter = 3;
      } else if (progress >= 0.48) {
        chapter = 2;
      } else if (progress >= 0.22) {
        chapter = 1;
      } else {
        chapter = 0;
      }

      setActiveChapter((prev) => (prev !== chapter ? chapter : prev));
      setScrollPercent(Math.round(progress * 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 60FPS/120FPS physics interpolation loop
    const tick = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.01) {
        // 0.14 lerp speed matches Lenis smooth scroll for locked-in 60fps tracking
        currentFrameRef.current += diff * 0.14;
        const frameIndex = Math.round(currentFrameRef.current);
        if (frameIndex !== lastDrawnFrameRef.current) {
          lastDrawnFrameRef.current = frameIndex;
          renderCanvasFrame(frameIndex);
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, [renderCanvasFrame]);

  // Smooth scroll to chapter
  const scrollToChapter = (targetProgress: number) => {
    const container = containerRef.current;
    if (!container) return;
    const containerTop = container.offsetTop;
    const scrollableHeight = container.offsetHeight - window.innerHeight;
    const targetScrollY = containerTop + targetProgress * scrollableHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[550vh] bg-background"
      aria-label="Interactive 3D Hero Scroll Experience"
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none">
        {/* Hardware-accelerated HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isInitialReady ? 1 : 0 }}
        />

        {/* Ambient Vignette & Contrast Gradients (Slightly lighter than original for optimal clarity) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/10 to-zinc-950/40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-radial-[circle_at_center,transparent_35%,rgba(9,9,11,0.45)_100%]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/10"
        />

        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-gradient-to-b from-indigo-500/20 via-violet-500/10 to-transparent blur-[120px]"
        />

        {/* ======================================================== */}
        {/* NARRATIVE CHAPTER 1: INTRO & DESK (0% - 22%)            */}
        {/* ======================================================== */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none ${activeChapter === 0
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-6 scale-95 pointer-events-none"
            }`}
        >
          <Container>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/20 border border-white/10 text-zinc-100 mb-6 backdrop-blur-sm drop-shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {t.hero.status}
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
                {t.hero.greeting}{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-amber-200 bg-clip-text text-transparent">
                  {t.hero.name}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-2xl text-white font-medium mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                {t.hero.role}
              </p>

              <p className="text-sm sm:text-base text-zinc-100 max-w-2xl leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                {t.hero.bio}
              </p>

              {/* Quick Tech Highlights (Metadata specs, not clickable buttons) */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-300 mb-8">
                <span className="text-zinc-400 uppercase tracking-wider text-[11px] mr-1 drop-shadow">{t.hero.stackLabel}</span>
                {["Java", "NestJS", "TypeScript", "React", "NextJS", "Tailwind CSS", "NodeJS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-black/20 border border-white/10 text-zinc-100 text-xs backdrop-blur-sm drop-shadow-sm hover:bg-white/[0.1] transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Ambient Scroll Cue */}
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono tracking-wider drop-shadow">
                <span>{t.hero.scrollCue}</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce text-zinc-300" />
              </div>
            </div>
          </Container>
        </div>

        {/* ======================================================== */}
        {/* NARRATIVE CHAPTER 2: FRONTEND & CRYSTAL (22% - 48%)      */}
        {/* ======================================================== */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none ${activeChapter === 1
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-6 scale-95 pointer-events-none"
            }`}
        >
          <Container>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-200 bg-cyan-950/30 border border-cyan-400/25 mb-5 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <Layers className="w-3.5 h-3.5 text-cyan-300 drop-shadow" />
                <span>{t.hero.chapter2.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                {t.hero.chapter2.title1}{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-indigo-200 to-fuchsia-300 bg-clip-text text-transparent">
                  {t.hero.chapter2.titleHighlight}
                </span>
              </h2>

              <p className="text-base sm:text-xl text-zinc-100 max-w-2xl leading-relaxed mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                {t.hero.chapter2.desc}
              </p>

              {/* Technical Capability Specs (Airy crystal cards seamlessly embedded in 3D space) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full">
                {[
                  {
                    icon: Layers,
                    title: t.hero.chapter2.archTitle,
                    desc: t.hero.chapter2.archDesc,
                  },
                  {
                    icon: Cpu,
                    title: t.hero.chapter2.ssrTitle,
                    desc: t.hero.chapter2.ssrDesc,
                  },
                  {
                    icon: GitBranch,
                    title: t.hero.chapter2.stateTitle,
                    desc: t.hero.chapter2.stateDesc,
                  },
                  {
                    icon: Activity,
                    title: t.hero.chapter2.uxTitle,
                    desc: t.hero.chapter2.uxDesc,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3 rounded-xl bg-black/15 hover:bg-black/30 border border-white/[0.08] hover:border-cyan-400/30 backdrop-blur-[2px] flex flex-col items-center text-center transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 text-cyan-300 mb-1.5 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-zinc-200/90 mt-0.5 font-mono drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                        {item.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>

        {/* ======================================================== */}
        {/* NARRATIVE CHAPTER 3: BACKEND & METROPOLIS (52% - 74%)     */}
        {/* ======================================================== */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none ${activeChapter === 2
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-6 scale-95 pointer-events-none"
            }`}
        >
          <Container>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-amber-200 bg-amber-950/30 border border-amber-400/25 mb-5 backdrop-blur-sm shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <Building2 className="w-3.5 h-3.5 text-amber-300 drop-shadow" />
                <span>{t.hero.chapter3.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                {t.hero.chapter3.title1}{" "}
                <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300 bg-clip-text text-transparent">
                  {t.hero.chapter3.titleHighlight}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-100 max-w-2xl leading-relaxed mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                {t.hero.chapter3.desc}
              </p>

              {/* 3 Cinematic Architecture Capability Panels (Airy glassmorphism integrated into scene) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                <div className="p-4 sm:p-5 rounded-2xl bg-black/15 hover:bg-black/30 border border-white/[0.08] hover:border-amber-400/30 backdrop-blur-[2px] text-left transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300 mb-3 drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {t.hero.chapter3.apiTitle}
                  </h3>
                  <p className="text-xs text-zinc-200/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                    {t.hero.chapter3.apiDesc}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-black/15 hover:bg-black/30 border border-white/[0.08] hover:border-emerald-400/30 backdrop-blur-[2px] text-left transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/25 flex items-center justify-center text-emerald-300 mb-3 drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {t.hero.chapter3.dbTitle}
                  </h3>
                  <p className="text-xs text-zinc-200/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                    {t.hero.chapter3.dbDesc}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-black/15 hover:bg-black/30 border border-white/[0.08] hover:border-sky-400/30 backdrop-blur-[2px] text-left transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-300 mb-3 drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {t.hero.chapter3.infraTitle}
                  </h3>
                  <p className="text-xs text-zinc-200/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                    {t.hero.chapter3.infraDesc}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* ======================================================== */}
        {/* NARRATIVE CHAPTER 4: CALL TO ACTION (78% - 100%)         */}
        {/* ======================================================== */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none ${activeChapter === 3
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-6 scale-95 pointer-events-none"
            }`}
        >
          <Container>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-emerald-200 bg-emerald-950/30 border border-emerald-400/25 mb-5 backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300 drop-shadow" />
                <span>{t.hero.chapter4.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                {t.hero.chapter4.title1}{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300 bg-clip-text text-transparent">
                  {t.hero.chapter4.titleHighlight}
                </span>
              </h2>

              <p className="text-base sm:text-xl text-zinc-100 max-w-2xl leading-relaxed mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                {t.hero.chapter4.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <a
                  href="#about"
                  className="px-6 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 font-semibold text-sm transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t.hero.chapter4.ctaJourney}
                </a>
                <a
                  href="#skills"
                  className="px-6 py-3 rounded-xl bg-black/25 hover:bg-black/40 text-white font-medium text-sm border border-white/20 backdrop-blur-md transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t.hero.chapter4.ctaSkills}
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t.hero.chapter4.ctaContact}
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono mt-2 drop-shadow">
                <span>{t.hero.chapter4.continueScroll}</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </div>
          </Container>
        </div>

        {/* ======================================================== */}
        {/* HUD: CHAPTER NAVIGATION DOTS (RIGHT SIDE DESKTOP)       */}
        {/* ======================================================== */}
        <nav
          aria-label="Story chapters"
          className="hidden md:flex flex-col gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-30 bg-black/25 p-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg"
        >
          {chapters.map((ch, idx) => {
            const isActive = activeChapter === idx;
            return (
              <button
                key={ch.id}
                onClick={() => scrollToChapter(ch.progressTarget)}
                className="group relative flex items-center justify-end p-1.5 focus:outline-none"
                aria-label={`Jump to ${ch.label}`}
              >
                {/* Tooltip on hover */}
                <span className="absolute right-8 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-zinc-200 bg-zinc-900 border border-zinc-700/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  {ch.label}
                </span>
                {/* Dot */}
                <span
                  className={`block rounded-full transition-all duration-300 ${isActive
                    ? "w-2.5 h-6 bg-gradient-to-b from-indigo-400 to-amber-300 shadow-md shadow-indigo-500/50"
                    : "w-2 h-2 bg-zinc-500 group-hover:bg-zinc-300"
                    }`}
                />
              </button>
            );
          })}
        </nav>

        {/* ======================================================== */}
        {/* HUD: BOTTOM AMBIENT SCROLL INDICATOR & PROGRESS BAR     */}
        {/* ======================================================== */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center pointer-events-none px-6">
          {/* Scroll cue (visible mainly in chapter 1) */}
          <div
            className={`flex items-center gap-2 text-xs font-mono text-zinc-200 bg-black/30 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md mb-3 transition-opacity duration-500 ${activeChapter === 0 ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            <span>{t.hero.scrollProgress}</span>
            <span className="text-zinc-400">•</span>
            <span>{scrollPercent}%</span>
            {loadPercent < 100 && (
              <>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-400 font-mono text-[10px]">
                  {t.hero.buffering} {loadPercent}%
                </span>
              </>
            )}
          </div>

          {/* Discreet Skip Button on Bottom Right */}
          <div className="absolute right-6 bottom-0 pointer-events-auto">
            <Link
              href="#about"
              className="text-xs font-mono text-zinc-200 hover:text-white px-3 py-1.5 rounded-lg bg-black/30 hover:bg-black/50 border border-white/10 backdrop-blur-md transition-colors"
            >
              {t.hero.skipIntro}
            </Link>
          </div>

          {/* Bottom Progress Line */}
          <div className="w-full max-w-md h-1 bg-black/30 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-amber-400 to-emerald-400 transition-all duration-100 ease-out"
              style={{ width: `${Math.max(scrollPercent, 2)}%` }}
            />
          </div>
        </div>

        {/* Initial Loading Overlay (Fades out when frame 1 is ready) */}
        {!isInitialReady && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950">
            <div className="relative flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
              <span className="absolute text-xs font-mono text-zinc-300 font-bold">
                BL
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
              Loading 3D Visual Experience...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
