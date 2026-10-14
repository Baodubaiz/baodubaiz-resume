export type Language = "en" | "vi";

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    status: string;
    greeting: string;
    name: string;
    role: string;
    bio: string;
    stackLabel: string;
    scrollCue: string;
    skipIntro: string;
    buffering: string;
    scrollProgress: string;
    chapters: {
      setup: string;
      frontend: string;
      backend: string;
      connect: string;
    };
    chapter2: {
      badge: string;
      title1: string;
      titleHighlight: string;
      desc: string;
      archTitle: string;
      archDesc: string;
      ssrTitle: string;
      ssrDesc: string;
      stateTitle: string;
      stateDesc: string;
      uxTitle: string;
      uxDesc: string;
    };
    chapter3: {
      badge: string;
      title1: string;
      titleHighlight: string;
      desc: string;
      apiTitle: string;
      apiDesc: string;
      dbTitle: string;
      dbDesc: string;
      infraTitle: string;
      infraDesc: string;
    };
    chapter4: {
      badge: string;
      title1: string;
      titleHighlight: string;
      desc: string;
      ctaJourney: string;
      ctaSkills: string;
      ctaContact: string;
      continueScroll: string;
    };
  };
  about: {
    badge: string;
    headline: {
      part1: string;
      highlight1: string;
      part2: string;
      highlight2: string;
    };
    description: string;
    philosophy: {
      badge: string;
      title: string;
      description: string;
      principles: {
        title: string;
        description: string;
      }[];
    };
    mindset: {
      badge: string;
      title: string;
      cards: {
        number: string;
        title: string;
        description: string;
      }[];
    };
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    expertise: {
      badge: string;
      title: string;
      subtitle: string;
    };
    solutions: {
      badge: string;
      title: string;
      subtitle: string;
      problemLabel: string;
      approachLabel: string;
      evidenceLabel: string;
      patternsTitle: string;
      patternsSubtitle: string;
      commTitle: string;
      commSubtitle: string;
    };
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    viewProject: string;
    sourceCode: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    locationLabel: string;
    socialLabel: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}
