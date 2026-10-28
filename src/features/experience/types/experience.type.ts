export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  duration: string;
  period: string;
  projectName: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  location?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  institutionShort?: string;
  degree: string;
  major: string;
  period: string;
  gpa: string;
  graduationClassification: string;
  graduationStatus: string;
  highlights?: string[];
  location?: string;
}

export interface ExperienceData {
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
}

// Backwards-compatible alias if imported elsewhere
export type Experience = WorkExperienceItem;
