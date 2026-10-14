import type { Experience } from "../types/experience.type";

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "full-stack-engineer",
    role: "Full-Stack Software Engineer",
    company: "Freelance & Independent Projects",
    period: "2023 - Present",
    location: "Remote",
    description: [
      "Architected and deployed responsive web applications utilizing Next.js App Router, React 19, and TypeScript.",
      "Engineered feature-based modular codebases ensuring maintainability, separation of concerns, and clean testing boundaries.",
      "Optimized client performance, asset loading, and Lighthouse Core Web Vitals to achieve top speed scores.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js"],
  },
  {
    id: "frontend-developer",
    role: "Frontend Developer",
    company: "Web Development Labs",
    period: "2022 - 2023",
    location: "Remote / Hybrid",
    description: [
      "Built interactive user interfaces with modern React hooks, modular styling, and state management patterns.",
      "Collaborated closely with designers to implement pixel-perfect Figma designs with responsive layouts and scroll animations.",
      "Integrated RESTful APIs and ensured robust client-side validation and error resilience.",
    ],
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    id: "computer-science-education",
    role: "B.S. in Computer Science / Software Engineering",
    company: "University Education",
    period: "2021 - 2025",
    location: "Vietnam",
    description: [
      "Comprehensive coursework in Data Structures, Algorithms, Software Architecture, and Database Systems.",
      "Participated in software engineering capstone projects implementing modern web development workflows.",
    ],
    technologies: ["Algorithms", "Data Structures", "OOP", "SQL", "Git"],
  },
];
