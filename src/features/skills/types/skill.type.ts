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
