import type { ExperienceData } from "../types/experience.type";

export const EXPERIENCE_DATA: Record<"vi" | "en", ExperienceData> = {
  vi: {
    workExperience: [
      {
        id: "repo-technology",
        company: "Repo Technology",
        role: "Software Engineer (Part-time)",
        employmentType: "Part-time",
        duration: "6 tháng",
        period: "6 tháng",
        projectName: "Dự án: Hệ thống quản lý ký túc xá sinh viên (QLKTX)",
        summary:
          "Tham gia phát triển hệ thống quản lý ký túc xá, tập trung vào các chức năng quản lý dữ liệu và nghiệp vụ liên quan đến tòa nhà, tầng, phòng, giường và sinh viên.",
        highlights: [
          "Phát triển backend bằng NestJS và frontend bằng React, Vite, TypeScript.",
          "Làm việc với PostgreSQL thông qua Prisma ORM.",
          "Xây dựng và xử lý các nghiệp vụ liên quan đến thông tin sinh viên, phân bổ chỗ ở, chuyển phòng và đổi chỗ ở.",
          "Hỗ trợ theo dõi lịch sử thay đổi thông qua nhật ký hệ thống.",
          "Tham gia tích hợp và triển khai ứng dụng theo phạm vi công việc thực tế.",
        ],
        technologies: [
          "NestJS",
          "TypeScript",
          "React",
          "Vite",
          "PostgreSQL",
          "Prisma ORM",
          "REST API",
          "Git",
        ],
        location: "TP. Hồ Chí Minh",
      },
    ],
    education: [
      {
        id: "hutech-university",
        institution: "Trường Đại học Công nghệ TP.HCM (HUTECH)",
        institutionShort: "HUTECH",
        degree: "Cử nhân Kỹ thuật phần mềm",
        major: "Kỹ thuật phần mềm",
        period: "10/2022 – 10/2026",
        gpa: "3.2 / 4.0",
        graduationClassification: "Giỏi",
        graduationStatus: "Đã nhận bằng tốt nghiệp tạm thời.",
        highlights: [
          "Chương trình đào tạo chuyên sâu về Kỹ thuật phần mềm, Kiến trúc hệ thống, Cơ sở dữ liệu và Cấu trúc dữ liệu & Giải thuật.",
          "Thực hiện đồ án capstone chuyên ngành mô phỏng quy trình quản trị thực tế với kết quả nghiệm thu xuất sắc.",
        ],
        location: "TP. Hồ Chí Minh",
      },
    ],
  },

  en: {
    workExperience: [
      {
        id: "repo-technology",
        company: "Repo Technology",
        role: "Software Engineer (Part-time)",
        employmentType: "Part-time",
        duration: "6 months",
        period: "6 months",
        projectName: "Project: Student Dormitory Management System (QLKTX)",
        summary:
          "Contributed to the development of a student dormitory management system, focusing on data management and business workflows involving buildings, floors, rooms, beds, and students.",
        highlights: [
          "Developed backend functionality using NestJS and frontend functionality using React, Vite, and TypeScript.",
          "Worked with PostgreSQL through Prisma ORM.",
          "Contributed to student management, accommodation allocation, room transfers, and accommodation changes.",
          "Worked with system audit logs to support change tracking.",
          "Participated in application integration and deployment within the scope of my actual responsibilities.",
        ],
        technologies: [
          "NestJS",
          "TypeScript",
          "React",
          "Vite",
          "PostgreSQL",
          "Prisma ORM",
          "REST API",
          "Git",
        ],
        location: "Ho Chi Minh City",
      },
    ],
    education: [
      {
        id: "hutech-university",
        institution: "Ho Chi Minh City University of Technology (HUTECH)",
        institutionShort: "HUTECH",
        degree: "Bachelor's Degree in Software Engineering",
        major: "Software Engineering",
        period: "Oct 2022 – Oct 2026",
        gpa: "3.2 / 4.0",
        graduationClassification: "Excellent",
        graduationStatus: "Received a temporary graduation certificate.",
        highlights: [
          "Rigorous academic curriculum focused on Software Engineering, Software Architecture, Database Systems, and Data Structures & Algorithms.",
          "Completed capstone engineering project modeling real-world operational workflows with top academic evaluation.",
        ],
        location: "Ho Chi Minh City",
      },
    ],
  },
};
