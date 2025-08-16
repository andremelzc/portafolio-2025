import React from "react";
import Button from "@/app/components/ui/Button";
import ProjectGrid from "@/app/components/projects/ProjectGrid";
import { sampleProjects } from "@/app/data/projects";

export default function ProjectsSection() {
  return (
    <section id="proyectos">
      <div className="flex flex-col gap-16 text-center items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-6xl">Proyectos</h1>
            <h2 className="text-xl">Descubre lo que he construído</h2>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="outline">Desarrollo web</Button>
            <Button variant="outline">Desarrollo móvil</Button>
            <Button variant="outline">Otros</Button>
          </div>
          <ProjectGrid projects={sampleProjects} />
        </div>
      </div>
    </section>
  );
}
