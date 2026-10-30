import type { TranslationDictionary } from "../types";

export const en: TranslationDictionary = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    status: "Available for new opportunities",
    greeting: "Hi, I'm",
    name: "Lam Bao",
    role: "Software Engineer & Full-Stack Developer",
    bio: "Crafting responsive, performant, and delightful digital experiences with Next.js, TypeScript, and modern frontend architecture.",
    stackLabel: "Stack //",
    scrollCue: "SCROLL DOWN TO EXPLORE",
    skipIntro: "Skip Intro ↓",
    buffering: "Buffering",
    scrollProgress: "Scroll down to control 3D animation",
    chapters: {
      setup: "01 Setup",
      frontend: "02 Frontend",
      backend: "03 Backend",
      connect: "04 Connect",
    },
    chapter2: {
      badge: "02 / Frontend Architecture • Crystal Precision",
      title1: "Sculpting Interfaces with",
      titleHighlight: "Crystal Clarity",
      desc: "Building responsive web interfaces with component-based architecture, state management, and Next.js SSR. Focused on UI structure, maintainability, and smooth user experiences.",
      archTitle: "Crystal Architecture",
      archDesc: "Component Structure",
      ssrTitle: "Next.js SSR",
      ssrDesc: "Fast Hydration & SEO",
      stateTitle: "State Management",
      stateDesc: "Predictable Reactive Flow",
      uxTitle: "Fluid 60 FPS UX",
      uxDesc: "Smooth Interactions",
    },
    chapter3: {
      badge: "03 / Backend Engineering • Metropolis Engine",
      title1: "Powering the City with",
      titleHighlight: "Resilient Backend",
      desc: "Designing REST APIs and business logic, implementing authentication and authorization, handling transactions and data consistency, and building maintainable architectures with database optimization and deployment automation.",
      apiTitle: "REST APIs & Logic",
      apiDesc: "Designing robust REST APIs, business logic, authentication, and authorization.",
      dbTitle: "Database & Consistency",
      dbDesc: "Handling transactions, ACID data consistency, and database query optimization.",
      infraTitle: "Metropolis Infrastructure",
      infraDesc: "Building maintainable architectures, cloud workflows, and deployment automation.",
    },
    chapter4: {
      badge: "04 / Connect • Let's Build",
      title1: "Ready to Create Something",
      titleHighlight: "Extraordinary?",
      desc: "Explore my technical skill set, detailed case studies, and experience below.",
      ctaJourney: "About My Journey",
      ctaSkills: "Tech Skills",
      ctaContact: "Start a Conversation",
      continueScroll: "Continue scrolling down to explore",
    },
  },
  about: {
    badge: "ABOUT ME",
    headline: {
      part1: "Engineering software with ",
      highlight1: "technical rigor",
      part2: " and a ",
      highlight2: "problem-solving mindset.",
    },
    description:
      "I am a Software Engineering student at HUTECH focused on Full-stack web development with an emphasis on Backend Engineering. I aim to translate real-world requirements into structured, maintainable software solutions that precisely fulfill user needs.",
    philosophy: {
      badge: "CORE PRINCIPLES",
      title: "Development Philosophy",
      description:
        "I care not only about making features work, but also about how the solution is structured, the integrity of the data, and the long-term scalability of the system.",
      principles: [
        {
          title: "Simplicity & Maintainability",
          description:
            "Prioritizing clear solutions, eliminating unnecessary complexity, and keeping code adaptable to change.",
        },
        {
          title: "Domain & Data Correctness",
          description:
            "Emphasizing data validation and ensuring business rules are strictly and consistently enforced.",
        },
        {
          title: "Structure Before Hotfixes",
          description:
            "Focusing on separation of concerns and clean source organization rather than patching features for quick fixes.",
        },
      ],
    },
    mindset: {
      badge: "TECHNICAL APPROACH",
      title: "Core Technical Mindset",
      cards: [
        {
          number: "01",
          title: "Problem-oriented",
          description:
            "Starting from the real problem and business requirements to determine the right architectural solution.",
        },
        {
          number: "02",
          title: "Structured Thinking",
          description:
            "Systematic problem analysis, disciplined separation of concerns, and coherent solution design.",
        },
        {
          number: "03",
          title: "Continuous Improvement",
          description:
            "Iteratively refining solution quality through hands-on practice, code review, and disciplined adjustments.",
        },
      ],
    },
  },
  skills: {
    badge: "TECHNICAL ECOSYSTEM",
    title: "Technical Skills & Problem-Solving",
    subtitle: "Combining foundational technology expertise with practical engineering problem-solving capabilities.",
    expertise: {
      badge: "TECHNICAL EXPERTISE",
      title: "Core Technologies & Platforms",
      subtitle: "Languages, frameworks, databases, and environments utilized in software delivery.",
    },
    solutions: {
      badge: "PROBLEMS & SOLUTIONS",
      title: "Engineering Problems & Approaches",
      subtitle: "Hands-on experience addressing technical challenges, design patterns, and communication protocols.",
      problemLabel: "Problem",
      approachLabel: "Approach",
      evidenceLabel: "Evidence",
      patternsTitle: "Architectural & Design Patterns",
      patternsSubtitle: "Leveraging structured software principles and schema modeling to ensure maintainability.",
      commTitle: "Communication Protocols",
      commSubtitle: "Designing standardized data exchange protocols and contract boundaries.",
    },
  },
  projects: {
    badge: "ENGINEERING PORTFOLIO",
    title: "Featured Engineering Case Studies",
    subtitle:
      "Deep-dive technical showcases demonstrating real-world problem solving, relational schema modeling, concurrency control, distributed locking, and production architectures.",
    viewProject: "Live Demo",
    sourceCode: "Source Code",
    exploreCaseStudy: "Explore Engineering Case Study",
    closeCaseStudy: "Close Case Study",
    allCategories: "All Domains",
    educationCategory: "Education & Operations",
    ecommerceCategory: "E-Commerce & High Concurrency",
    enterpriseCategory: "Enterprise Platform",
    roleLabel: "Role",
    statusLabel: "Status",
    highlightsLabel: "Core Engineering Highlights",
    focusLabel: "Engineering Focus",
    stackLabel: "Primary Technologies",
    filterLabel: "Filter by Domain",
    privateRepo: "Private Enterprise Repository",
    featuredBadge: "Featured Engineering Case Study",
    prevProject: "Previous Project",
    nextProject: "Next Project",
    tabs: {
      overview: "Overview",
      capabilities: "Core Capabilities",
      challenges: "Engineering Challenges",
      architecture: "Architecture & Data Flow",
      techStack: "Tech Stack",
      contribution: "Role & Contribution",
      outcomes: "Outcomes & Evidence",
    },
    challengeLabels: {
      problem: "The Problem",
      approach: "Technical Approach",
      tradeoffs: "Trade-offs & Rationale",
      benefits: "Key Benefits",
      complexities: "Added Complexities",
      rationale: "Design Rationale",
    },
    architectureLabels: {
      systemOverview: "System Architecture & Component Layers",
      workflowTitle: "Execution Data Flow",
      statusImplemented: "Implemented",
      statusExternal: "External Integration",
      statusPlanned: "Planned Component",
    },
    contributionLabels: {
      features: "Implemented Features",
      architecture: "Architectural Decisions",
      devops: "Integration, Testing & DevOps",
    },
    outcomesLabels: {
      status: "Verification & Delivery Status",
      points: "Verifiable Engineering Outcomes",
      confidentiality: "Data Integrity & Confidentiality Notice",
    },
  },
  experience: {
    badge: "CAREER & ACADEMICS",
    title: "Experience & Education",
    subtitle:
      "Hands-on software development experience combined with verified academic credentials in software engineering.",
    workTitle: "Work Experience",
    workSubtitle: "Professional engineering contribution to real-world software systems.",
    eduTitle: "Education",
    eduSubtitle: "Academic foundations in software engineering and computer science.",
    employmentTypeLabel: "Employment Type",
    durationLabel: "Duration",
    projectLabel: "Project",
    responsibilitiesLabel: "Key Responsibilities & Contributions",
    techStackLabel: "Technologies & Tools",
    degreeLabel: "Degree",
    majorLabel: "Major",
    gpaLabel: "Final GPA",
    classificationLabel: "Graduation Classification",
    statusLabel: "Status",
    periodLabel: "Study Period",
    temporaryCertNotice: "Received a temporary graduation certificate",
  },
  career: {
    badge: "CAREER DIRECTION",
    title: "Career Direction & Growth Roadmap",
    subtitle:
      "Developing dual expertise in DevOps Engineering and Software Architecture, anchored on a strong Backend Engineering foundation.",
    direction: {
      badge: "CAREER DIRECTION",
      title: "Professional Career Path",
      description:
        "I aim to develop my expertise along two complementary paths: DevOps Engineering and Software Architecture, building on my backend engineering foundation. My goal is to gain a deeper understanding of the software lifecycle, from application and data design to deployment, operations, and continuous system improvement.",
      foundationBadge: "SHARED ENGINEERING FOUNDATION",
      foundationTitle: "Backend Engineering Foundation",
      foundationDesc:
        "A grounded core uniting systems thinking, root-cause problem solving, and disciplined trade-off analysis.",
      pillars: {
        backend: "Backend Engineering",
        systems: "Systems Thinking",
        problemSolving: "Problem Solving",
        tradeoffs: "Trade-off Analysis",
      },
      lifecycleTitle: "End-to-End Software System Lifecycle",
      lifecycle: {
        step1: "Application & Data Design",
        step2: "Deployment & Operations",
        step3: "Continuous Improvement",
      },
    },
    mindset: {
      badge: "ENGINEERING MINDSET",
      title: "Problem-First Engineering Mindset",
      description:
        "I follow a problem-first engineering approach, analyzing root causes and system constraints before choosing technologies. I focus on balancing performance, consistency, reliability, scalability, cost, and complexity. I aim to develop solutions that are technically sound, maintainable, and aligned with real-world requirements.",
      tradeoffsTitle: "6 Engineering Trade-off Dimensions",
      tradeoffsSubtitle: "Thoroughly evaluated and balanced before technological adoption",
      dimensions: [
        {
          name: "Performance",
          label: "Performance",
          desc: "Optimizing throughput, execution time, and end-to-end response latency.",
        },
        {
          name: "Consistency",
          label: "Consistency",
          desc: "Guaranteeing data correctness and transaction validity across components.",
        },
        {
          name: "Reliability",
          label: "Reliability",
          desc: "Building fault-tolerant systems with fast recovery and high availability.",
        },
        {
          name: "Scalability",
          label: "Scalability",
          desc: "Accommodating load growth through graceful vertical and horizontal expansion.",
        },
        {
          name: "Cost",
          label: "Cost Efficiency",
          desc: "Rationalizing infrastructure resources, network bandwidth, and maintenance costs.",
        },
        {
          name: "Complexity",
          label: "Complexity Control",
          desc: "Restraining accidental complexity to keep codebases lean and maintainable.",
        },
      ],
    },
    focus: {
      badge: "DEVELOPMENT FOCUS",
      title: "Two Complementary Engineering Paths",
      subtitle:
        "Parallel growth areas bridging structured software design and resilient operational infrastructure.",
      devops: {
        badge: "OPERATIONS & SYSTEM RELIABILITY",
        title: "DevOps Engineering",
        description:
          "Focus on build and deployment automation, infrastructure management, CI/CD, system monitoring, and improving software operational reliability.",
        keyAreas: [
          "Build & deployment automation",
          "Infrastructure management",
          "CI/CD pipeline architecture",
          "System monitoring & observability",
          "Software operational reliability",
        ],
      },
      architecture: {
        badge: "SYSTEM DESIGN & STRUCTURE",
        title: "Software Architecture",
        description:
          "Focus on system design, software structure, data management and consistency, technical trade-off analysis, and building maintainable solutions that can evolve with changing requirements.",
        keyAreas: [
          "System design & structural planning",
          "Modular software architecture",
          "Data management & consistency",
          "Technical trade-off analysis",
          "Maintainable & extensible solutions",
        ],
      },
    },
    roadmap: {
      badge: "DEVELOPMENT ROADMAP",
      title: "Phased Growth Roadmap",
      subtitle:
        "Future developmental milestones progressing from core fundamentals to dual-domain synergy.",
      milestoneStatus: "Future Development Milestone",
      steps: [
        {
          stepNumber: "01",
          stepLabel: "Step 1",
          title: "Foundation",
          description:
            "Strengthen knowledge of backend engineering, databases, networking, Linux, and software design principles.",
          topics: [
            "Backend Engineering",
            "Databases & Persistence",
            "Networking Protocols",
            "Linux Environments",
            "Software Design Principles",
          ],
        },
        {
          stepNumber: "02",
          stepLabel: "Step 2",
          title: "Deployment and Operations",
          description:
            "Practice Docker, CI/CD, server deployment, environment configuration, logging, monitoring, and rollback.",
          topics: [
            "Docker Containerization",
            "CI/CD Pipelines",
            "Server Deployment",
            "Environment Configuration",
            "Logging & Monitoring",
            "Rollback Strategies",
          ],
        },
        {
          stepNumber: "03",
          stepLabel: "Step 3",
          title: "System Design",
          description:
            "Explore system design, concurrency, data consistency, resilience, performance, and scalability in greater depth.",
          topics: [
            "System Design Patterns",
            "Concurrency & Parallelism",
            "Data Consistency Models",
            "System Resilience",
            "Performance Optimization",
            "Scalability Tactics",
          ],
        },
        {
          stepNumber: "04",
          stepLabel: "Step 4",
          title: "Deeper Expertise",
          description:
            "Gain practical experience while continuing to develop capabilities in both DevOps Engineering and Software Architecture.",
          topics: [
            "Real-world Engineering Experience",
            "DevOps Engineering Synergy",
            "Software Architecture Capabilities",
            "End-to-End System Evolution",
          ],
        },
      ],
    },
    longTermGoal: {
      badge: "LONG-TERM GOAL",
      title: "Dual-Layer Systems Engineering Vision",
      description:
        "My long-term goal is to become an engineer who understands systems at both the application and infrastructure levels, makes well-reasoned technical decisions, and contributes to system quality throughout the software lifecycle. I aim to build deep expertise through practical problem-solving, continuous improvement, and a clear understanding of the reasoning behind engineering decisions.",
      pillars: [
        {
          title: "Understanding systems at application & infrastructure levels",
          desc: "Maintaining a comprehensive perspective from high-level business domains down to host machines, network topology, and execution runtime.",
        },
        {
          title: "Making well-reasoned technical decisions",
          desc: "Rooting every engineering choice in empirical evidence, explicit trade-off justification, and genuine architectural necessity.",
        },
        {
          title: "Contributing to system quality throughout the software lifecycle",
          desc: "Driving excellence across the entire continuum—from initial architecture and implementation through deployment and sustained operational health.",
        },
      ],
    },
  },
  contact: {
    badge: "Get in Touch",
    title: "Let's Connect & Collaborate",
    subtitle: "Have a project in mind or want to discuss opportunities? Feel free to reach out directly.",
    emailLabel: "Email Address",
    locationLabel: "Location",
    socialLabel: "Social Profiles",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Crafted with Next.js, React 19 & Tailwind CSS.",
  },
};
