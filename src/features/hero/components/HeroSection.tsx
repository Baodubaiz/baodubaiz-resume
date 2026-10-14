"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
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

        {/* Ambient Vignette & Contrast Gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-radial-[circle_at_center,transparent_30%,rgba(9,9,11,0.65)_100%]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/15"
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-zinc-900/80 border border-zinc-800 text-zinc-300 mb-6 backdrop-blur-md shadow-lg shadow-black/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for new opportunities
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-md">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-amber-200 bg-clip-text text-transparent">
                  Bao Lam
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-2xl text-zinc-200 font-medium mb-4 drop-shadow">
                Software Engineer &amp; Full-Stack Developer
              </p>

              <p className="text-sm sm:text-base text-zinc-300/90 max-w-2xl leading-relaxed mb-8 drop-shadow">
                Crafting responsive, performant, and delightful digital experiences
                with Next.js, TypeScript, and modern frontend architecture.
              </p>

              {/* Quick Tech Highlights (Metadata specs, not clickable buttons) */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-400 mb-8">
                <span className="text-zinc-500 uppercase tracking-wider text-[11px] mr-1">Stack //</span>
                {["Java", "NestJS", "TypeScript", "React", "NextJS", "Tailwind CSS", "NodeJS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs shadow-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Ambient Scroll Cue */}
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono tracking-wider">
                <span>SCROLL DOWN TO EXPLORE</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce text-zinc-400" />
              </div>
            </div>
          </Container>
        </div>

        {/* ======================================================== */}
        {/* NARRATIVE CHAPTER 2: THE PORTAL / CANVAS (25% - 48%)     */}
        {/* ======================================================== */}
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 bg-zinc-950/80 border border-cyan-800/40 mb-5 backdrop-blur-md">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>02 / Frontend Architecture • Crystal Precision</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight drop-shadow-md">
                Sculpting Interfaces with{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-indigo-200 to-fuchsia-300 bg-clip-text text-transparent">
                  Crystal Clarity
                </span>
              </h2>

              <p className="text-base sm:text-xl text-zinc-200/90 max-w-2xl leading-relaxed mb-8 drop-shadow">
                Building responsive web interfaces with component-based architecture,
                state management, and Next.js SSR. Focused on UI structure,
                maintainability, and smooth user experiences.
              </p>

              {/* Technical Capability Specs (Clean dark telemetry cards, not buttons) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full">
                {[
                  {
                    icon: Layers,
                    title: "Crystal Architecture",
                    desc: "Component Structure",
                  },
                  {
                    icon: Cpu,
                    title: "Next.js SSR",
                    desc: "Fast Hydration & SEO",
                  },
                  {
                    icon: GitBranch,
                    title: "State Management",
                    desc: "Predictable Reactive Flow",
                  },
                  {
                    icon: Activity,
                    title: "Fluid 60 FPS UX",
                    desc: "Smooth Interactions",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md flex flex-col items-center text-center shadow-lg shadow-black/40"
                    >
                      <Icon className="w-4 h-4 text-cyan-400/90 mb-2" />
                      <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-zinc-400 mt-0.5 font-mono">
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-amber-300 bg-zinc-950/80 border border-amber-800/40 mb-5 backdrop-blur-md">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>03 / Backend Engineering • Metropolis Engine</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight drop-shadow-md">
                Powering the City with{" "}
                <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300 bg-clip-text text-transparent">
                  Resilient Backend
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-200/90 max-w-2xl leading-relaxed mb-8 drop-shadow">
                Designing REST APIs and business logic, implementing authentication and
                authorization, handling transactions and data consistency, and building
                maintainable architectures with database optimization and deployment automation.
              </p>

              {/* 3 Cinematic Architecture Capability Panels (Clean dark glass, not colorful button boxes) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md text-left shadow-xl shadow-black/40">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 mb-3">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                    REST APIs &amp; Logic
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Designing robust REST APIs, business logic, authentication, and authorization.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md text-left shadow-xl shadow-black/40">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-3">
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                    Database &amp; Consistency
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Handling transactions, ACID data consistency, and database query optimization.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md text-left shadow-xl shadow-black/40">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400 mb-3">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                    Metropolis Infrastructure
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Building maintainable architectures, cloud workflows, and deployment automation.
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-emerald-300 bg-zinc-950/80 border border-emerald-800/40 mb-5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>04 / Connect • Let&apos;s Build</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight drop-shadow-md">
                Ready to Create Something{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300 bg-clip-text text-transparent">
                  Extraordinary?
                </span>
              </h2>

              <p className="text-base sm:text-xl text-zinc-200/90 max-w-2xl leading-relaxed mb-8 drop-shadow">
                Explore my technical skill set, detailed case studies, and experience below.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <a
                  href="#about"
                  className="px-6 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-sm transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  About My Journey
                </a>
                <a
                  href="#skills"
                  className="px-6 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-medium text-sm border border-zinc-700/60 backdrop-blur-md transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  Tech Skills
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Start a Conversation
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-2">
                <span>Continue scrolling down to explore</span>
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
          className="hidden md:flex flex-col gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-30 bg-zinc-950/70 p-2.5 rounded-full border border-zinc-800/80 backdrop-blur-md shadow-xl"
        >
          {CHAPTERS.map((ch, idx) => {
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
                    : "w-2 h-2 bg-zinc-600 group-hover:bg-zinc-400"
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
            className={`flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-950/80 px-4 py-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md mb-3 transition-opacity duration-500 ${activeChapter === 0 ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            <span>Scroll down to control 3D animation</span>
            <span className="text-zinc-500">•</span>
            <span>{scrollPercent}%</span>
            {loadPercent < 100 && (
              <>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-500 font-mono text-[10px]">
                  Buffering {loadPercent}%
                </span>
              </>
            )}
          </div>

          {/* Discreet Skip Button on Bottom Right */}
          <div className="absolute right-6 bottom-0 pointer-events-auto">
            <Link
              href="#about"
              className="text-xs font-mono text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 backdrop-blur-md transition-colors"
            >
              Skip Intro ↓
            </Link>
          </div>

          {/* Bottom Progress Line */}
          <div className="w-full max-w-md h-1 bg-zinc-900/80 rounded-full overflow-hidden border border-zinc-800/60">
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
