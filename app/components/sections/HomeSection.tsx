"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { downloadCV } from "@/app/lib/downloads";

export default function HomeSection() {
  // Función para scroll suave hacia contacto
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden -mt-10">
      <div className="flex flex-col gap-12 text-center items-center">
        {/* Header */}
        <div className="flex flex-col gap-8">
          {/* Disponible para proyectos */}
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2 mx-auto">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Disponible para proyectos
            </span>
          </div>
          {/* Títulos */}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl text-accent font-semibold">
              Desarrollador Full-Stack
            </h2>
            <h1 className="text-5xl font-bold">Andre Ivan Melendez Cava</h1>
          </div>
        </div>
        {/* Imagen */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 group-hover:from-accent/15 via-cherry-300/10 group-hover:via-cherry-300/15 to-accent/10 group-hover:to-accent/15 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/profile.jpg"
              alt="Andre Melendez Cava"
              fill
              className="rounded-full object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Efecto de resplandor sutil de fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent rounded-2xl blur-xl" />

          {/* Contenedor glassmorphism */}
          <div className="relative max-w-3xl mx-auto">
            <div className="backdrop-blur-sm bg-background/30 border border-border/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                Estudiante de{" "}
                <span className="font-semibold text-accent">
                  Ingeniería de Software
                </span>{" "}
                en la Universidad Nacional Mayor de San Marcos, especializado en
                el desarrollo de aplicaciones web modernas.
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mt-4" />
              <p className="mt-4 text-foreground/70">
                Enfocado en crear impacto a través de la tecnología y participar
                en proyectos innovadores.
              </p>
              {/* Botones dentro del contenedor */}
              <div className="flex gap-4 justify-center mt-8">
                <Button 
                  variant="primary" 
                  size="md" 
                  onClick={downloadCV}
                  icon={
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                  }
                  iconPosition="left"
                >
                  Descargar CV
                </Button>
                <Button 
                  variant="outline" 
                  size="md"
                  onClick={scrollToContact}
                  icon={
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  }
                  iconPosition="left"
                >
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
