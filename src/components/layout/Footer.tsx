import React from "react";
import type { SocialLink } from "@/types/common.type";

const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Baodubaiz", label: "GitHub Profile" },
  { name: "LinkedIn", url: "https://linkedin.com", label: "LinkedIn Profile" },
  { name: "Email", url: "mailto:baolam12122004@gmail.com", label: "Send Email" },
];

const CURRENT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-zinc-400 font-medium">
            © {CURRENT_YEAR} Bao Lam (Baodubaiz). All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built with Next.js, React 19, and Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-indigo-400 transition-colors"
              aria-label={link.label}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#hero"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
