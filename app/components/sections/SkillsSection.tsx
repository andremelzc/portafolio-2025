import React from "react";
import Button from "@/app/components/ui/Button";
import SkillGrid from "@/app/components/skills/SkillGrid";

export default function SkillsSection() {
  return (
    <section id="habilidades" className="overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 lg:gap-12 xl:gap-10 text-center items-center max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-6">
          {/* Header */}
          <div className="relative flex flex-col gap-3 sm:gap-4 lg:gap-3">
            {/* Resplandor detrás del título */}
            <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-60 sm:w-72 md:w-80 lg:w-72 h-12 sm:h-16 md:h-20 lg:h-16 bg-gradient-to-r from-transparent via-accent/15 to-transparent blur-2xl opacity-80" />
            {/* Título */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-semibold">Habilidades</h1>
            {/* Divisor */}
            <div className="h-px w-16 sm:w-20 md:w-24 lg:w-20 bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto" />
            {/* Subtítulo con efecto de cristal de fondo */}
            <div className="relative inline-block mx-auto">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-transparent via-background/20 to-transparent rounded-lg blur-sm" />
              <h2 className="relative text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl text-foreground/85 font-light tracking-wide px-3 sm:px-4 py-1 backdrop-blur-sm bg-background/10 rounded-lg border border-border/5">
                Explora mis habilidades en las siguientes áreas
              </h2>
            </div>
          </div>
          {/* Filtros con glassmorphism sutil */}
          <div className="relative group">
            {/* Resplandor de fondo para los filtros */}
            <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-accent/5 via-cherry-300/5 to-accent/5 rounded-xl sm:rounded-2xl blur-xl opacity-70" />
            <div className="relative backdrop-blur-md bg-background/20 border border-border/15 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Borde superior brillante */}
              <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" />

              {/* Efecto hover sutil */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-4 lg:gap-4 justify-center">
                <Button variant="outline">Frontend</Button>
                <Button variant="outline">Backend y DB</Button>
                <Button variant="outline">Herramientas y Gestión</Button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-gradient-to-br from-midnight-800 via-midnight-900 to-midnight-800 border border-midnight-600/50 rounded-2xl sm:rounded-3xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <SkillGrid
              skills={["React", "Node.js", "TypeScript", "Tailwind CSS"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
