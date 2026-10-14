"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Language, TranslationDictionary } from "./types";
import { en } from "./dictionaries/en";
import { vi } from "./dictionaries/vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

const STORAGE_KEY = "baodubaiz_preferred_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "en" || saved === "vi") {
      setLanguageState(saved);
    } else {
      // Auto detect user browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("vi")) {
        setLanguageState("vi");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // LocalStorage error handling for privacy mode
    }
  };

  const t = language === "vi" ? vi : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
