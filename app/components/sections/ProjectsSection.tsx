import React from "react";
import Button from "@/app/components/ui/Button";
import ProjectGrid from "@/app/components/projects/ProjectGrid";
import { sampleProjects } from "@/app/data/projects";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="min-h-screen overflow-hidden">
      <div className="flex flex-col gap-16 text-center items-center">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="relative flex flex-col gap-4">
            {/* Resplandor detrás del título */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-80 h-20 bg-gradient-to-r from-transparent via-accent/15 to-transparent blur-2xl opacity-80" />
            {/* Título */}
            <h1 className="text-6xl font-semibold">Proyectos</h1>
            {/* Divisor */}
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto" />
            {/* Subtítulo con efecto de cristal de fondo */}
            <div className="relative inline-block mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-background/20 to-transparent rounded-lg blur-sm" />
              <h2 className="relative text-xl text-foreground/85 font-light tracking-wide px-4 py-1 backdrop-blur-sm bg-background/10 rounded-lg border border-border/5">
                Descubre lo que he construído
              </h2>
            </div>
          </div>
          {/* Filtros con glassmorphism sutil */}
          <div className="relative">
            {/* Resplandor de fondo para los filtros */}
            <div className="absolute -inset-3 bg-gradient-to-r from-accent/5 via-cherry-300/5 to-accent/5 rounded-2xl blur-xl opacity-70" />

            <div className="relative backdrop-blur-md bg-background/20 border border-border/15 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Borde superior brillante */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" />

              {/* Efecto hover sutil */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex gap-4 justify-center">
                <Button variant="outline">Desarrollo web</Button>
                <Button variant="outline">Desarrollo móvil</Button>
                <Button variant="outline">Otros</Button>
              </div>
            </div>
          </div>
          <ProjectGrid projects={sampleProjects} />
        </div>
      </div>
    </section>
  );
}
