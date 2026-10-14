export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}
