export type ProjectCategoryKey = "all" | "education" | "ecommerce" | "enterprise";

export interface ProjectChallenge {
  id: string;
  title: string;
  engineeringFocus: string[];
  problem: {
    description: string;
    conditions?: string;
    risk: string;
  };
  approach: {
    description: string;
    mechanisms: string[];
  };
  tradeoffs: {
    benefits: string[];
    complexities: string[];
    justification: string;
  };
}

export interface ProjectCapabilityModule {
  id: string;
  title: string;
  description: string;
  workflows: string[];
}

export interface TechStackCategory {
  category: string;
  items: {
    name: string;
    purpose?: string;
  }[];
}

export interface ArchitectureComponent {
  layer: string;
  name: string;
  description: string;
  status: "implemented" | "external" | "planned";
}

export interface ArchitectureWorkflowStep {
  step: string;
  actor: string;
  action: string;
  detail: string;
}

export interface ProjectRoleContribution {
  roleTitle: string;
  implementedFeatures: string[];
  architecturalDecisions: string[];
  integrationsAndDevOps: string[];
}

export interface ProjectOutcome {
  verificationStatus: string;
  points: string[];
  confidentialityNote?: string;
}

export interface ProjectLinks {
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  isPrivateRepo?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryKey: "education" | "ecommerce" | "enterprise";
  status: string;
  featured: boolean;
  role: string;

  // Level A overview
  overviewBrief: string;
  keyHighlights: string[];
  engineeringFocusTags: string[];
  primaryTechStack: string[];

  // Level B detail case study
  detailedOverview: {
    systemPurpose: string;
    targetUsers: string;
    businessNeed: string;
    technicalInterest: string;
  };
  capabilities: ProjectCapabilityModule[];
  challenges: ProjectChallenge[];
  architecture: {
    summary: string;
    components: ArchitectureComponent[];
    workflowSteps?: ArchitectureWorkflowStep[];
  };
  techStackDetailed: TechStackCategory[];
  contribution: ProjectRoleContribution;
  outcomes: ProjectOutcome;
  links: ProjectLinks;
}

// Backwards compatibility alias if needed
export type Project = ProjectItem;
