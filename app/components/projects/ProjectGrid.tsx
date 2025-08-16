import React from "react";
import { ProjectGridProps } from "@/app/types/projects";
import ProjectCard from "@/app/components/projects/ProjectCard";

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const regularProjects = projects.filter((project) => !project.featured);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        {regularProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
