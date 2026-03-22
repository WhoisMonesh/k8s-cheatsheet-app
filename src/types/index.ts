export type ViewMode =
  | "commands"
  | "versions"
  | "favorites"
  | "templates"
  | "troubleshooting"
  | "best-practices"
  | "quick-ref"
  | "aliases"
  | "scenarios"
  | "quiz"
  | "console-practice"
  | "yaml-builder"
  | "exam"
  | "about"
  | "settings";

export interface K8sCommand {
  id: number;
  category: string;
  subcategory: string;
  command: string;
  description: string;
  example: string;
  versionIntroduced: string;
  difficultyLevel: "beginner" | "intermediate" | "advanced" | "expert";
  tags: string;
  flags?: string;
  output?: string;
}

export interface K8sVersion {
  id: number;
  version: string;
  releaseDate: string;
  majorFeatures: string;
  deprecated: string;
  breaking: string;
  eolDate?: string;
  cves?: string[];
  projected?: boolean;
  description?: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
  order: number;
}

export interface UserFavorite {
  id: number;
  commandId: number;
  addedAt: string;
}

export interface CommandNote {
  id: number;
  commandId: number;
  note: string;
  createdAt: string;
}

export interface YamlTemplate {
  id: number;
  name: string;
  category: string;
  description: string;
  yaml: string;
}

export interface TroubleshootingGuide {
  id: number;
  issue: string;
  category: string;
  description: string;
  symptoms: string;
  causes: string;
  diagnosis: string;
  solutions: string;
}

export interface BestPractice {
  id: number;
  category: string;
  title: string;
  description: string;
  example: string;
  impact: string;
  tags: string;
}
