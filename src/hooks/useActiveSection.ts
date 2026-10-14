"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/types/common.type";

const SECTIONS: SectionId[] = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

export function useActiveSection(initialSection: SectionId = "hero"): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(initialSection);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. If near top of page, always hero
      if (scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // 2. If near bottom of page, always contact
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // 3. Check section positions
      // Reference line: 180px below top (to account for fixed navbar height of ~80px + margin)
      const targetOffset = 180;

      for (const sectionId of SECTIONS) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetOffset && rect.bottom > targetOffset) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return activeSection;
}
