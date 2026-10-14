export interface TechSkillGroup {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export interface ProblemSolutionItem {
  id: string;
  title: string;
  problem: string;
  approach: string;
  evidence?: string;
  tags?: string[];
}

export interface PatternItem {
  id: string;
  title: string;
  category: string;
  description: string;
  practices: string[];
}

export interface CommunicationPatternItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export type SkillCategory =
  | "Frontend"
  | "Backend & APIs"
  | "Database & Cloud"
  | "DevOps & Tools";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiency: "Proficient" | "Advanced" | "Intermediate";
  description?: string;
}
