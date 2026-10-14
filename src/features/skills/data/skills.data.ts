import type { SkillItem } from "../types/skill.type";

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { name: "TypeScript", category: "Frontend", proficiency: "Advanced" },
  { name: "React 19", category: "Frontend", proficiency: "Advanced" },
  { name: "Next.js (App Router)", category: "Frontend", proficiency: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", proficiency: "Advanced" },
  { name: "HTML5 & Modern CSS", category: "Frontend", proficiency: "Advanced" },
  { name: "State Management", category: "Frontend", proficiency: "Proficient" },

  // Backend & APIs
  { name: "Node.js", category: "Backend & APIs", proficiency: "Advanced" },
  { name: "Express.js", category: "Backend & APIs", proficiency: "Advanced" },
  { name: "RESTful APIs", category: "Backend & APIs", proficiency: "Advanced" },
  { name: "GraphQL", category: "Backend & APIs", proficiency: "Intermediate" },

  // Database & Cloud
  { name: "PostgreSQL", category: "Database & Cloud", proficiency: "Proficient" },
  { name: "MongoDB", category: "Database & Cloud", proficiency: "Proficient" },
  { name: "Prisma ORM", category: "Database & Cloud", proficiency: "Proficient" },
  { name: "Redis", category: "Database & Cloud", proficiency: "Intermediate" },

  // DevOps & Tools
  { name: "Git & GitHub", category: "DevOps & Tools", proficiency: "Advanced" },
  { name: "Docker", category: "DevOps & Tools", proficiency: "Intermediate" },
  { name: "Vercel / CI/CD", category: "DevOps & Tools", proficiency: "Proficient" },
  { name: "Vitest / Jest", category: "DevOps & Tools", proficiency: "Intermediate" },
];
