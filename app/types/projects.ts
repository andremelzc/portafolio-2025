export interface Project {
  id: string;
  title: string;
  description: string;
  primaryImage: string;
  secondaryImage?: string;
  featured: boolean;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  category: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectGridProps {
  projects: Project[];
}
