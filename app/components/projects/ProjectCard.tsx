import React from "react";
import Image from "next/image";
import { ProjectCardProps } from "@/app/types/projects";
import {
  HiOutlineExternalLink,
  HiOutlineCode,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";
import TechTag from "@/app/components/ui/TechTag";
import Button from "../ui/Button";
import Tooltip from "../ui/Tooltip";

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
    role,
    teamSize,
  },
}: ProjectCardProps) {
  return (
    <div className="group relative h-full">
      <div className="relative bg-gradient-to-br from-midnight-800 via-midnight-900 to-midnight-800 border border-midnight-600/50 rounded-3xl shadow-2xl text-background flex flex-col w-full h-full hover:shadow-3xl transition-all duration-300">
        {/* Efectos internos sutiles */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 rounded-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-midnight-500/40 to-transparent" />

        {/* Header */}
        <div className="relative flex justify-between items-center p-6 pb-4">
          {/* Tecnologías */}
          <div className="flex gap-2 flex-wrap">
            {(featured ? technologies : technologies.slice(0, 3)).map(
              (tech) => (
                <TechTag key={tech} tech={tech} variant="badge" />
              )
            )}
            {!featured && technologies.length > 3 && (
              <div className="bg-midnight-700/60 backdrop-blur-sm text-midnight-200 text-xs font-medium px-3 py-1.5 rounded-full border border-midnight-600/50">
                +{technologies.length - 3}
              </div>
            )}
          </div>
          {/* Teamsize Badge */}
          <div className="bg-midnight-700/60 backdrop-blur-sm border border-midnight-600/50 text-midnight-200 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
            <Tooltip content={teamSize}>
              <span className="inline-flex">
                {teamSize === "Solo" ? (
                  <>
                    <HiOutlineUser size={16} />
                  </>
                ) : (
                  <>
                    <HiOutlineUserGroup size={16} />
                  </>
                )}
              </span>
            </Tooltip>
          </div>
        </div>

        {/* Texto siempre en la misma posición */}
        <div className="px-6 text-left flex-shrink-0 min-h-[120px] flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-foreground line-clamp-2">
            {title}
          </h3>
          <p
            className={`${
              featured
                ? "text-lg line-clamp-4"
                : "text-base opacity-80 line-clamp-3"
            } leading-relaxed text-foreground/80 mt-2`}
          >
            {description}
          </p>
        </div>

        {/* Contenedor de imágenes - con altura controlada */}
        <div
          className={`flex justify-center items-center ${
            featured ? "min-h-[200px] max-h-[240px]" : "min-h-[160px] max-h-[200px]"
          } ${featured ? "p-8 pb-6" : "p-4 pb-4"}`}
        >
          <div className={`relative ${featured ? "w-72 h-40" : "w-64 h-32"}`}>
            {/* Imagen principal - siempre presente */}
            <div
              className={`absolute top-0 w-full h-full hover:scale-105 transition-transform duration-300 ${
                featured ? "transform -translate-x-1/4" : ""
              }`}
            >
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
        
        {/* Spacer flexible para distribuir espacio restante */}
        <div className="flex-grow min-h-[20px]"></div>
        
        {/* Footer */}
        <div className="relative px-6 pb-6 flex-shrink-0 mt-8">
          {/* Separador */}
          <div className="h-px bg-gradient-to-r from-transparent via-midnight-600/40 to-transparent mb-6" />
          {/* Botones e Indicador */}
          <div className="flex justify-between items-center">
            {/* Botones a la izquierda */}
            <div className="flex gap-3">
              {demoUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<HiOutlineExternalLink />}
                  iconPosition="left"
                >
                  Ver Demo
                </Button>
              )}
              {codeUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<HiOutlineCode />}
                  iconPosition="left"
                >
                  Ver Código
                </Button>
              )}
            </div>

            {/* Indicador de role a la derecha */}
            {role ? (
              <div className="flex items-center gap-2 text-xs text-midnight-400">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                <span className="font-medium">{role}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
