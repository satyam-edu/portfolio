export type ProjectStatus = "Live" | "GitHub" | "In Progress";

export interface ProjectItem {
  name: string;
  description: string[];
  stack: string[];
  status: ProjectStatus;
  link: string;
}
