import React from "react";
import { ProjectCardProps } from "@/app/types/projects";

export default function ProjectCard({
  project: { title, description, primaryImage, secondaryImage, featured },
}: ProjectCardProps) {
  return (
    <div className="bg-foreground rounded-lg text-background">
      <img src={primaryImage} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {secondaryImage && <img src={secondaryImage} alt={title} />}
    </div>
  );
}
