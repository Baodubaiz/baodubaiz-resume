"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { NavItem } from "@/types/common.type";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const activeSection = useActiveSection("hero");
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
          {NAV_ITEMS.map((item) => {
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

        {/* Desktop spacer to keep layout balanced */}
        <div className="hidden md:block w-36 pointer-events-none" />

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
        <div className="md:hidden bg-zinc-950/90 border-b border-zinc-800/80 px-4 py-4 space-y-2 backdrop-blur-xl shadow-2xl">
          {NAV_ITEMS.map((item) => {
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
        </div>
      )}
    </header>
  );
}
