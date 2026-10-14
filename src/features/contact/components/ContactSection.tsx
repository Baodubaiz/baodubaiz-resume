import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-950/60 relative">
      <Container size="sm">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Great"
          subtitle="Interested in collaborating, hiring, or discussing engineering challenges? My inbox is always open."
        />

        <ScrollReveal
          direction="up"
          className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 shadow-2xl text-center flex flex-col items-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl mb-6 shadow-inner">
            ✉️
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            baolam12122004@gmail.com
          </h3>

          <p className="text-sm text-zinc-400 max-w-md mb-8 leading-relaxed">
            I am currently open to full-time engineering roles, freelance
            engagements, and open-source collaborations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:baolam12122004@gmail.com"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5"
            >
              Send an Email
            </a>
            <a
              href="https://github.com/Baodubaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-medium text-sm border border-zinc-700/60 transition-all duration-200 hover:-translate-y-0.5"
            >
              GitHub Profile
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-zinc-800/70 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Available for immediate start
            </span>
            <span>Location: Vietnam (UTC+7) • Remote Worldwide</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
