"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { downloadCV } from "@/app/lib/downloads";
import { scrollToContact } from "@/app/lib/utils";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden mt-14 lg:-mt-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-6 text-center items-center max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-4">
          {/* Disponible para proyectos */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-3 sm:px-6 py-1.5 sm:py-2 mx-auto">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent font-medium text-[10px] sm:text-sm uppercase tracking-wider">
              Disponible para proyectos
            </span>
          </div>
          {/* Títulos */}
          <div className="flex flex-col gap-1 sm:gap-2 lg:gap-1">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-accent font-semibold">
              Desarrollador Full-Stack
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
              Andre Ivan Melendez Cava
            </h1>
          </div>
        </div>
        {/* Imagen */}
        <div className="relative group">
          <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 lg:-inset-3 bg-gradient-to-r from-accent/10 group-hover:from-accent/15 via-cherry-300/10 group-hover:via-cherry-300/15 to-accent/10 group-hover:to-accent/15 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto">
            <Image
              src="/profile.jpg"
              alt="Andre Melendez Cava"
              fill
              className="rounded-full object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        <div className="relative max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-3xl mx-auto px-2 sm:px-4">
          {/* Efecto de resplandor sutil de fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent rounded-2xl blur-xl" />

          {/* Contenedor glassmorphism */}
          <div className="relative">
            <div className="backdrop-blur-sm bg-background/30 border border-border/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed text-foreground/90">
                Estudiante de{" "}
                <span className="font-semibold text-accent">
                  Ingeniería de Software
                </span>{" "}
                en la Universidad Nacional Mayor de San Marcos, especializado en
                el desarrollo de aplicaciones web modernas.
              </p>
              <div className="h-px w-16 sm:w-20 md:w-24 lg:w-20 bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mt-3 sm:mt-4 lg:mt-3" />
              <p className="mt-3 sm:mt-4 lg:mt-3 text-sm sm:text-base lg:text-sm xl:text-base text-foreground/70">
                Enfocado en crear impacto a través de la tecnología y participar
                en proyectos innovadores.
              </p>
              {/* Botones dentro del contenedor */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-3 justify-center mt-6 sm:mt-8 lg:mt-5">
                <Button
                  variant="primary"
                  size="md"
                  onClick={downloadCV}
                  icon={
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
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
                      className="w-4 h-4 sm:w-5 sm:h-5"
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
