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
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id") as SectionId | null;
          if (id && SECTIONS.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
}
