"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import SkillGrid from "../skills/SkillGrid";
import SkillGridSkeleton from "../skills/SkillGridSkeleton";
import { Skills } from "@/app/types/skills";

interface SkillsClientProps {
  initialSkills: Skills;
}

export default function SkillsClient({ initialSkills }: SkillsClientProps) {
  const [skills, setSkills] = useState(initialSkills.frontend);
  const [activeFilter, setActiveFilter] = useState<string>("Frontend");
  const [loading, setLoading] = useState(false);

  const handleFilter = (category: string) => {
    setLoading(true);
    setActiveFilter(category);

    try {
      if (category === "Frontend") {
        setSkills(initialSkills.frontend);
      } else if (category === "Backend y DB") {
        setSkills(initialSkills.backend);
      } else if (category === "Herramientas y Gestión") {
        setSkills(initialSkills.tools);
      }
    } catch (error) {
      console.error("Error filtering skills:", error);
      setSkills(initialSkills.frontend);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            <Button
              variant={activeFilter === "Frontend" ? "primary" : "outline"}
              onClick={() => handleFilter("Frontend")}
            >
              Frontend
            </Button>
            <Button
              variant={activeFilter === "Backend y DB" ? "primary" : "outline"}
              onClick={() => handleFilter("Backend y DB")}
            >
              Backend y DB
            </Button>
            <Button
              variant={
                activeFilter === "Herramientas y Gestión"
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilter("Herramientas y Gestión")}
            >
              Herramientas y Gestión
            </Button>
          </div>
        </div>
      </div>
      <div className="group w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-gradient-to-br from-midnight-800 via-midnight-900 to-midnight-800 border border-midnight-600/50 rounded-2xl sm:rounded-3xl p-2 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-accent/30 transform-gpu hover:scale-[1.02] hover:-translate-y-1 relative">
        {/* Efectos internos sutiles */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 rounded-2xl sm:rounded-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-midnight-500/40 to-transparent" />
        {/* Efecto de brillo sutil en hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          {loading ? <SkillGridSkeleton /> : <SkillGrid skills={skills} />}
        </div>
      </div>
    </>
  );
}
