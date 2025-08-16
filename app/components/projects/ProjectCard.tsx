import React from "react";
import Image from "next/image";
import { ProjectCardProps } from "@/app/types/projects";
import TechTag from "@/app/components/ui/TechTag";

export default function ProjectCard({
  project: {
    title,
    description,
    primaryImage,
    secondaryImage,
    featured,
    technologies,
    demoUrl,
    codeUrl,
    category,
  },
}: ProjectCardProps) {
  
  return (
    <div className="bg-foreground rounded-lg text-background flex flex-col w-full">
      {/* Tecnologías siempre arriba */}
      <div className="relative flex gap-2 p-4 flex-wrap">
        {(featured ? technologies : technologies.slice(0, 3)).map((tech) => (
          <TechTag key={tech} tech={tech} variant="badge" />
        ))}
        {!featured && technologies.length > 3 && (
          <div className="absolute top-4 right-4 bg-cherry-100 text-cherry-600 text-xs font-medium px-2 py-1 rounded-full border border-cherry-200">
            +{technologies.length - 3}
          </div>
        )}
      </div>

      {/* Texto siempre en la misma posición */}
      <div className="px-4 text-left">
        <h3 className="text-xl">{title}</h3>
        <p className={`${featured ? 'text-md' : 'text-sm opacity-80'}`}>{description}</p>
      </div>

      {/* Contenedor de imágenes - misma estructura, diferente intensidad */}
      <div className={`flex justify-center items-center ${featured ? 'p-8 pb-16' : 'p-4 pb-8'}`}>
        <div className={`relative ${featured ? 'w-72 h-40' : 'w-64 h-32'}`}>
          
          {/* Imagen principal - siempre presente */}
          <div className={`absolute top-0 w-full h-full hover:scale-105 transition-transform duration-300 ${
            featured ? 'transform -translate-x-1/4' : ''
          }`}>
            <Image
              src="/test.png"
              alt="Imagen principal"
              fill
              className="object-cover rounded-lg"
            />
            {/* Overlay solo en featured */}
            {featured && (
              <div className="absolute inset-0 bg-background opacity-70 rounded-lg pointer-events-none"></div>
            )}
          </div>

          {/* Imagen secundaria - solo en featured */}
          {featured && (
            <div className="absolute top-0 transform translate-x-1/4 translate-y-1/4 w-full h-full hover:scale-105 transition-transform duration-300">
              <Image
                src="/test.png"
                alt="Imagen secundaria"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
