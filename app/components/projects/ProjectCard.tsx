import React from "react";
import { ProjectCardProps } from "@/app/types/projects";
import TechTag from "@/app/components/ui/TechTag";

export default function ProjectCard({
  project: { title, description, primaryImage, secondaryImage, featured },
}: ProjectCardProps) {
  return (
    <div className="bg-foreground rounded-lg text-background">
      <img src={primaryImage} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {secondaryImage && <img src={secondaryImage} alt={title} />}
      <TechTag tech="React" variant="badge" /> 
      <TechTag tech="Figma" variant="badge" /> 
      <TechTag tech="React" variant="logo" /> 
      <TechTag tech="React" variant="icon" /> 
    </div>
  );
}
