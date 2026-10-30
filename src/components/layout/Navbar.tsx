"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTranslation } from "@/hooks/useTranslation";
import type { NavItem } from "@/types/common.type";
import { cn } from "@/lib/utils";
import { Menu, X, FileDown } from "lucide-react";

export function Navbar() {
  const activeSection = useActiveSection("hero");
  const { language, setLanguage, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { id: "hero", label: t.nav.home, href: "#hero" },
    { id: "about", label: t.nav.about, href: "#about" },
    { id: "skills", label: t.nav.skills, href: "#skills" },
    { id: "projects", label: t.nav.projects, href: "#projects" },
    { id: "experience", label: t.nav.experience, href: "#experience" },
    { id: "contact", label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 bg-transparent">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo (Monochrome cinematic titanium, no flashy purple) */}
        <Link
          href="#hero"
          className="group flex items-center gap-2.5 text-white font-medium text-base tracking-tight z-10"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-900/90 border border-zinc-700/80 flex items-center justify-center text-zinc-100 font-mono font-bold text-xs shadow-md backdrop-blur-sm group-hover:border-zinc-500 transition-colors">
            BL
          </span>
          <span className="font-mono text-xs tracking-wider text-zinc-300 group-hover:text-white transition-colors">
            baodubaiz<span className="text-zinc-500">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation (Cinematic Dark Glass Island - Perfectly Centered) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-zinc-950/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md transition-colors shadow-lg shadow-black/30 z-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                  isActive
                    ? "bg-zinc-800 text-white font-semibold border border-zinc-700/60 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions (PDF Download & Language Switcher) */}
        <div className="hidden md:flex items-center gap-3 justify-end z-10">
          <a
            href="/Lam-Bao-Portfolio.pdf"
            download="Lam-Bao-Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-medium transition-all shadow-sm backdrop-blur-md hover:scale-105"
            title="Tải Portfolio PDF (Tiếng Việt)"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Tải PDF</span>
          </a>

          <div className="flex items-center p-1 rounded-full bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md shadow-md">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2.5 py-1 rounded-full text-[11px] font-mono font-medium transition-all duration-200",
                language === "en"
                  ? "bg-zinc-800 text-white font-semibold shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              )}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-zinc-700 text-xs px-0.5 select-none">/</span>
            <button
              type="button"
              onClick={() => setLanguage("vi")}
              className={cn(
                "px-2.5 py-1 rounded-full text-[11px] font-mono font-medium transition-all duration-200",
                language === "vi"
                  ? "bg-zinc-800 text-white font-semibold shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              )}
              aria-label="Chuyển sang Tiếng Việt"
            >
              VI
            </button>
          </div>
        </div>

        {/* Mobile Menu Button (Lucide vector icon) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-zinc-200" />
          ) : (
            <Menu className="w-5 h-5 text-zinc-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800/80 px-4 py-4 space-y-3 backdrop-blur-xl shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMobileMenu}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-zinc-800 text-white font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </a>
            );
          })}

          {/* Mobile PDF Download Button */}
          <a
            href="/Lam-Bao-Portfolio.pdf"
            download="Lam-Bao-Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 font-medium text-xs shadow-sm hover:bg-blue-600/30 transition-colors"
          >
            <FileDown className="w-4 h-4" />
            <span>Tải Portfolio PDF (Tiếng Việt)</span>
          </a>

          {/* Mobile Language Switcher */}
          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">Language / Ngôn ngữ</span>
            <div className="flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-mono transition-all",
                  language === "en"
                    ? "bg-zinc-800 text-white font-semibold"
                    : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("vi")}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-mono transition-all",
                  language === "vi"
                    ? "bg-zinc-800 text-white font-semibold"
                    : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                VI
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
