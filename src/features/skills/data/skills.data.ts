import type {
  TechSkillGroup,
  ProblemSolutionItem,
  PatternItem,
  CommunicationPatternItem,
} from "../types/skill.type";

export const TECH_EXPERTISE_DATA: Record<"vi" | "en", TechSkillGroup[]> = {
  vi: [
    {
      id: "frontend",
      title: "Frontend Development",
      badge: "CLIENT-SIDE",
      description:
        "Xây dựng giao diện responsive, tối ưu SSR và quản lý state chặt chẽ.",
      skills: [
        "Next.js (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "State Management",
        "SSR & Static Rendering",
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      badge: "SERVER-SIDE",
      description:
        "Thiết kế REST API chuẩn mực, xử lý business logic và bảo mật xác thực.",
      skills: [
        "Node.js",
        "RESTful API Design",
        "Authentication (JWT / Session)",
        "NestJS (Orientation)",
        "Java / Spring Boot (Core)",
        "Role-based Access Control",
      ],
    },
    {
      id: "database",
      title: "Database & Data",
      badge: "STORAGE & ORM",
      description:
        "Mô hình hóa quan hệ, bảo đảm toàn vẹn dữ liệu và tối ưu truy vấn.",
      skills: [
        "PostgreSQL",
        "Prisma ORM",
        "Database Schema Design",
        "Entity Relationships (1-N, N-N)",
        "Database Constraints & Indexes",
        "SQL Querying",
      ],
    },
    {
      id: "architecture",
      title: "Architecture & Engineering",
      badge: "SYSTEM DESIGN",
      description:
        "Tổ chức mã nguồn module hóa, áp dụng nguyên lý SOLID và phân tách trách nhiệm.",
      skills: [
        "Modular Architecture",
        "Separation of Concerns",
        "SOLID Principles",
        "Clean API Contracts",
        "Design Patterns (Provider, Observer)",
      ],
    },
    {
      id: "devops",
      title: "DevOps & Infrastructure",
      badge: "DEPLOY & OPS",
      description:
        "Đóng gói môi trường container, tự động hóa quy trình build và triển khai.",
      skills: [
        "Docker (Containerization)",
        "CI/CD Workflows",
        "Git & GitHub",
        "Linux Server Environment",
        "Vercel Deployment",
        "Jenkins",
      ],
    },
  ],
  en: [
    {
      id: "frontend",
      title: "Frontend Development",
      badge: "CLIENT-SIDE",
      description:
        "Building responsive interfaces, SSR performance, and clean state management.",
      skills: [
        "Next.js (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "State Management",
        "SSR & Static Rendering",
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      badge: "SERVER-SIDE",
      description:
        "Architecting REST APIs, business logic orchestration, and secure authentication.",
      skills: [
        "Node.js",
        "RESTful API Design",
        "Authentication (JWT / Session)",
        "NestJS (Orientation)",
        "Java / Spring Boot (Core)",
        "Role-based Access Control",
      ],
    },
    {
      id: "database",
      title: "Database & Data",
      badge: "STORAGE & ORM",
      description:
        "Relational schema modeling, data integrity guarantees, and query optimization.",
      skills: [
        "PostgreSQL",
        "Prisma ORM",
        "Database Schema Design",
        "Entity Relationships (1-N, N-N)",
        "Database Constraints & Indexes",
        "SQL Querying",
      ],
    },
    {
      id: "architecture",
      title: "Architecture & Engineering",
      badge: "SYSTEM DESIGN",
      description:
        "Modular code organization, SOLID design principles, and clear boundaries.",
      skills: [
        "Modular Architecture",
        "Separation of Concerns",
        "SOLID Principles",
        "Clean API Contracts",
        "Design Patterns (Provider, Observer)",
      ],
    },
    {
      id: "devops",
      title: "DevOps & Infrastructure",
      badge: "DEPLOY & OPS",
      description:
        "Containerizing runtimes, automated CI/CD checks, and cloud deployments.",
      skills: [
        "Docker (Containerization)",
        "CI/CD Workflows",
        "Git & GitHub",
        "Linux Server Environment",
        "Vercel Deployment",
        "Jenkins",
      ],
    },
  ],
};

export const PROBLEMS_SOLUTIONS_DATA: Record<"vi" | "en", ProblemSolutionItem[]> = {
  vi: [
    {
      id: "auth",
      title: "Authentication / Authorization",
      problem:
        "Quản lý phiên đăng nhập an toàn, bảo vệ dữ liệu người dùng và kiểm soát phân quyền trên từng endpoint.",
      approach:
        "Sử dụng Token-based (JWT) kết hợp HTTP-only cookie, middleware xác thực tập trung và Role-based Access Control (RBAC).",
      evidence: "TaskFlow SaaS & Backend API Contracts",
      tags: ["Security", "JWT", "RBAC"],
    },
    {
      id: "performance",
      title: "Performance & Asset Optimization",
      problem:
        "Hiện tượng giật lag khung hình khi tải trang và nghẽn tài nguyên khi xử lý dữ liệu hoạt họa lớn (960 frames Canvas 3D).",
      approach:
        "Bộ đệm bộ nhớ (in-memory buffer virtualizer), lerp easing mượt mà, lazy-load tài nguyên và tối ưu Core Web Vitals.",
      evidence: "Personal Portfolio & Apex Modern Storefront",
      tags: ["Optimization", "60 FPS", "Virtualizer"],
    },
    {
      id: "db-locking",
      title: "Database Integrity & Concurrency",
      problem:
        "Xung đột dữ liệu khi nhiều thao tác đồng thời tác động lên cùng bản ghi hoặc trạng thái tác vụ.",
      approach:
        "Áp dụng Database Transactions đảm bảo ACID, kiểm soát ràng buộc khóa ngoại (Foreign Keys) và Unique Constraints.",
      evidence: "TaskFlow Kanban & E-commerce Storefront (PostgreSQL / Prisma)",
      tags: ["PostgreSQL", "ACID", "Constraints"],
    },
    {
      id: "security",
      title: "Security & Input Sanitization",
      problem:
        "Nguy cơ tấn công injection, dữ liệu đầu vào không hợp lệ làm sập quy trình xử lý và lộ thông tin nhạy cảm.",
      approach:
        "Kiểm thực schema đầu vào (payload validation), tham số hóa truy vấn ORM để chống SQL Injection và thiết lập CORS nghiêm ngặt.",
      evidence: "Full-stack Web Applications & API Layer",
      tags: ["Validation", "OWASP", "CORS"],
    },
    {
      id: "deployment",
      title: "Deployment & CI/CD Automation",
      problem:
        "Sai lệch môi trường giữa máy phát triển và máy chủ thực tế, rủi ro lỗi cú pháp khi deploy thủ công.",
      approach:
        "Tự động hóa quy trình kiểm thử kiểu (TypeScript), build check qua GitHub/Jenkins/Vercel pipelines và đóng gói container Docker.",
      evidence: "Automated Production Pipelines & Git workflows",
      tags: ["CI/CD", "Docker", "Turbopack"],
    },
    {
      id: "idempotency",
      title: "Idempotency & Duplicate Request",
      problem:
        "Người dùng bấm nút nhiều lần liên tiếp hoặc mạng chập chờn dẫn đến duplicate bản ghi khi tạo tác vụ/đơn hàng.",
      approach:
        "Vô hiệu hóa nút tức thì (client-side lock state), kết hợp request deduplication và kiểm tra tính duy nhất ở tầng dữ liệu.",
      evidence: "TaskFlow Task Creation & UI Optimistic Flow",
      tags: ["Deduplication", "Optimistic UI"],
    },
  ],
  en: [
    {
      id: "auth",
      title: "Authentication / Authorization",
      problem:
        "Securing user sessions, protecting confidential data, and enforcing granular access control per endpoint.",
      approach:
        "Implemented token-based auth (JWT) with HTTP-only cookies, centralized auth middleware, and Role-based Access Control (RBAC).",
      evidence: "TaskFlow SaaS & Backend API Contracts",
      tags: ["Security", "JWT", "RBAC"],
    },
    {
      id: "performance",
      title: "Performance & Asset Optimization",
      problem:
        "Frame stutter during initial load and bottlenecking when sequencing heavy interactive visual data (960 Canvas frames).",
      approach:
        "In-memory frame buffer virtualization, progressive preloading, lerp easing, and Core Web Vitals bundle optimization.",
      evidence: "Personal Portfolio & Apex Modern Storefront",
      tags: ["Optimization", "60 FPS", "Virtualizer"],
    },
    {
      id: "db-locking",
      title: "Database Integrity & Concurrency",
      problem:
        "Data anomalies when concurrent updates modify shared task states or entity records simultaneously.",
      approach:
        "Leveraged ACID Database Transactions, strict foreign key constraints, and uniqueness integrity checks.",
      evidence: "TaskFlow Kanban & E-commerce Storefront (PostgreSQL / Prisma)",
      tags: ["PostgreSQL", "ACID", "Constraints"],
    },
    {
      id: "security",
      title: "Security & Input Sanitization",
      problem:
        "Risk of injection vulnerabilities, malformed payload crashes, and environment secret leaks.",
      approach:
        "Strict input schema validation, parameterized ORM queries preventing SQL injection, and defensive CORS policies.",
      evidence: "Full-stack Web Applications & API Layer",
      tags: ["Validation", "OWASP", "CORS"],
    },
    {
      id: "deployment",
      title: "Deployment & CI/CD Automation",
      problem:
        "Discrepancies across dev/prod environments and manual deployment human errors.",
      approach:
        "Automated CI pipelines verifying TypeScript, linting, and production builds with Docker containerization.",
      evidence: "Automated Production Pipelines & Git workflows",
      tags: ["CI/CD", "Docker", "Turbopack"],
    },
    {
      id: "idempotency",
      title: "Idempotency & Duplicate Request",
      problem:
        "Rapid duplicate submissions from network retries or repeated user clicks causing duplicate database records.",
      approach:
        "Client-side pending state locks, request deduplication, and database unique constraint validation.",
      evidence: "TaskFlow Task Creation & UI Optimistic Flow",
      tags: ["Deduplication", "Optimistic UI"],
    },
  ],
};

export const PATTERNS_DATA: Record<"vi" | "en", PatternItem[]> = {
  vi: [
    {
      id: "database-design",
      category: "CƠ SỞ DỮ LIỆU",
      title: "Database Design Patterns",
      description:
        "Thiết kế cơ sở dữ liệu quan hệ chuẩn mực, bảo đảm toàn vẹn thực thể và hiệu quả truy vấn.",
      practices: [
        "Relational Schema Design & Normalization",
        "Entity Relationships (1-1, 1-N, N-N)",
        "Foreign Key Constraints & Cascade Rules",
        "B-Tree Indexing trên các trường truy vấn chính",
      ],
    },
    {
      id: "software-architecture",
      category: "KIẾN TRÚC PHẦN MỀM",
      title: "Software Architecture Patterns",
      description:
        "Tổ chức mã nguồn theo hướng mô-đun hóa, tách bạch rõ ràng giữa các tầng trách nhiệm.",
      practices: [
        "Feature-Based Architecture (Đóng gói theo tính năng)",
        "Separation of Concerns (UI, Data, Hooks, Types)",
        "Layered Application Boundaries",
        "Single Responsibility & Dependency Inversion (SOLID)",
      ],
    },
    {
      id: "design-patterns",
      category: "MẪU THIẾT KẾ",
      title: "Design Patterns in Code",
      description:
        "Ứng dụng thực tiễn các pattern giải quyết bài toán chia sẻ dữ liệu và theo dõi sự kiện.",
      practices: [
        "Provider / Context Pattern (Truyền state toàn cục không prop drilling)",
        "Observer Pattern (Xử lý lắng nghe và phản ứng theo luồng scroll/event)",
        "Dictionary / Lookup Pattern (Ánh xạ dữ liệu i18n đa ngôn ngữ 0ms)",
      ],
    },
  ],
  en: [
    {
      id: "database-design",
      category: "DATABASE",
      title: "Database Design Patterns",
      description:
        "Standardized relational database design ensuring entity integrity and query efficiency.",
      practices: [
        "Relational Schema Design & Normalization",
        "Entity Relationships (1-1, 1-N, N-N)",
        "Foreign Key Constraints & Cascade Rules",
        "B-Tree Indexing on high-frequency query fields",
      ],
    },
    {
      id: "software-architecture",
      category: "SOFTWARE ARCHITECTURE",
      title: "Software Architecture Patterns",
      description:
        "Structuring codebases modularly with strict separation of concerns across layers.",
      practices: [
        "Feature-Based Architecture (Encapsulated feature modules)",
        "Separation of Concerns (UI, Data, Hooks, Types)",
        "Layered Application Boundaries",
        "Single Responsibility & Dependency Inversion (SOLID)",
      ],
    },
    {
      id: "design-patterns",
      category: "DESIGN PATTERNS",
      title: "Design Patterns in Code",
      description:
        "Real-world application of architectural patterns for state sharing and reactive flows.",
      practices: [
        "Provider / Context Pattern (Global state distribution without prop drilling)",
        "Observer Pattern (Reactive listeners for scroll timelines & viewport events)",
        "Dictionary / Lookup Pattern (Instant 0ms i18n translation dispatching)",
      ],
    },
  ],
};

export const COMMUNICATION_DATA: Record<"vi" | "en", CommunicationPatternItem> = {
  vi: {
    id: "rest-api",
    title: "RESTful API Architecture",
    description:
      "Giao thức truyền thông chính được triển khai qua các ứng dụng backend, tuân thủ chặt chẽ các quy chuẩn thiết kế RESTful.",
    highlights: [
      "Chuẩn hóa HTTP Methods (GET, POST, PUT, PATCH, DELETE) theo đúng ngữ nghĩa",
      "Resource-oriented endpoint URLs phân cấp rõ ràng (/api/v1/resources/:id)",
      "Chuẩn hóa HTTP Status Codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Error)",
      "Định dạng payload JSON nhất quán với cấu trúc response chuẩn và phân trang (pagination)",
    ],
  },
  en: {
    id: "rest-api",
    title: "RESTful API Architecture",
    description:
      "Core communication protocol implemented across backend applications, strictly adhering to RESTful conventions.",
    highlights: [
      "Strict semantic HTTP Methods (GET, POST, PUT, PATCH, DELETE)",
      "Resource-oriented, hierarchically structured endpoints (/api/v1/resources/:id)",
      "Standardized HTTP Status Codes (200, 201, 400, 401, 403, 404, 409, 500)",
      "Consistent JSON payloads with uniform envelope schemas and cursor/offset pagination",
    ],
  },
};
