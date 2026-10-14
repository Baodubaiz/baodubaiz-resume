import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const HIGHLIGHTS = [
  {
    title: "Clean Architecture",
    description: "Designing scalable, maintainable systems with clean separation of concerns and high cohesion.",
    icon: "📐",
  },
  {
    title: "Performance First",
    description: "Optimizing bundle sizes, scroll animations, server rendering, and core web vitals for blazing speed.",
    icon: "⚡",
  },
  {
    title: "Modern UI/UX",
    description: "Translating complex functional requirements into intuitive, accessible, and fluid user interfaces.",
    icon: "🎨",
  },
  {
    title: "Full-Stack Mindset",
    description: "Comfortable navigating the entire stack, from frontend interactions to backend API contracts.",
    icon: "🔗",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-zinc-950/40 relative">
      <Container>
        <SectionHeading
          badge="About Me"
          title="Building with Purpose & Precision"
          subtitle="A passionate developer dedicated to building elegant web applications that combine robust engineering with delightful design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio text */}
          <ScrollReveal
            direction="left"
            className="lg:col-span-6 space-y-5 text-zinc-300 leading-relaxed text-base"
          >
            <p>
              I am a software engineer focused on building high-performance web
              applications. I love turning complex problems into elegant,
              scalable solutions using TypeScript, React, and Next.js.
            </p>
            <p>
              My development philosophy centers around writing readable,
              maintainable code, embracing feature-based architectures, and
              delivering responsive, accessible experiences across all devices.
            </p>
            <p className="text-zinc-400">
              When I&apos;m not writing code, I enjoy exploring new web standards,
              contributing to open-source tools, and experimenting with creative
              interactions.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-sm font-medium">
              <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="block text-2xl font-bold text-indigo-400">3+</span>
                <span className="text-xs text-zinc-400">Years Experience</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="block text-2xl font-bold text-indigo-400">20+</span>
                <span className="text-xs text-zinc-400">Projects Built</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="block text-2xl font-bold text-indigo-400">100%</span>
                <span className="text-xs text-zinc-400">Commitment to Quality</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delayMs={index * 100}
                direction="up"
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 hover:-translate-y-1 shadow-sm"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-normal">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
