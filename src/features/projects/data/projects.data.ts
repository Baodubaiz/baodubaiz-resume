import type { Project } from "../types/project.type";

export const PROJECTS_DATA: Project[] = [
  {
    id: "portfolio-resume",
    title: "Feature-Based Portfolio Architecture",
    description:
      "A high-performance personal portfolio built with Next.js 16, React 19, and Tailwind CSS v4 featuring feature encapsulation and scroll animations.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://baodubaiz-resume.vercel.app",
    githubUrl: "https://github.com/Baodubaiz/baodubaiz-resume",
    featured: true,
  },
  {
    id: "task-flow-saas",
    title: "TaskFlow: Collaborative Kanban",
    description:
      "Real-time task and sprint management tool with drag-and-drop workflow, optimistic UI updates, and team activity feeds.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://github.com/Baodubaiz",
    githubUrl: "https://github.com/Baodubaiz",
    featured: true,
  },
  {
    id: "dev-dashboard",
    title: "DevPulse Analytics Dashboard",
    description:
      "Developer metrics tracking dashboard aggregating repository statistics, build health, and deployment velocity.",
    tags: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://github.com/Baodubaiz",
    githubUrl: "https://github.com/Baodubaiz",
    featured: false,
  },
  {
    id: "ecommerce-storefront",
    title: "Apex Modern Storefront",
    description:
      "Headless e-commerce storefront with instantaneous client navigation, responsive product filtering, and persistent cart state.",
    tags: ["React", "Next.js", "Prisma", "Tailwind CSS"],
    liveUrl: "https://github.com/Baodubaiz",
    githubUrl: "https://github.com/Baodubaiz",
    featured: false,
  },
];
