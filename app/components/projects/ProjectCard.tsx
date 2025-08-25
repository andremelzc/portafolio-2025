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
import Button from "@/app/components/ui/Button";
import Tooltip from "@/app/components/ui/Tooltip";
import { goToUrl } from "@/app/lib/utils";

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
    role,
    teamSize,
  },
}: ProjectCardProps) {
  // Intercambiar imágenes si es featured
  const mainImage = featured ? secondaryImage : primaryImage;
  const secondary = featured ? primaryImage : secondaryImage;

  return (
    <div className="group relative h-full">
      <div className="relative bg-gradient-to-br from-midnight-800 via-midnight-900 to-midnight-800 border border-midnight-600/50 rounded-3xl shadow-2xl text-background flex flex-col w-full h-full hover:shadow-3xl transition-all duration-500 hover:border-accent/30 transform-gpu group-hover:scale-[1.02] group-hover:-translate-y-1">
        {/* Efectos internos sutiles */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 rounded-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-midnight-500/40 to-transparent" />
        {/* Efecto de brillo sutil en hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
            featured
              ? "min-h-[200px] max-h-[240px]"
              : "min-h-[160px] max-h-[200px]"
          } ${featured ? "p-8 pb-6" : "p-4 pb-4"}`}
        >
          <div className={`relative ${featured ? "w-72 h-40" : "w-64 h-32"}`}>
            {/* Imagen principal - siempre presente */}
            <div
              className={`absolute top-0 w-full h-full hover:scale-105 transition-transform duration-300 ${
                featured ? "transform -translate-x-1/4" : ""
              }`}
            >
              {mainImage ? (
                <Image
                  src={mainImage}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={featured}
                  placeholder="empty"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-midnight-700/60 rounded-lg border-2 border-dashed border-midnight-600">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="8"
                      y="16"
                      width="48"
                      height="32"
                      rx="6"
                      fill="#23283a"
                      stroke="#3b4252"
                      strokeWidth="2"
                    />
                    <circle cx="20" cy="28" r="4" fill="#3b4252" />
                    <path
                      d="M12 44L24 32L36 44L44 36L52 44"
                      stroke="#4f5668"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              {/* Overlay solo en featured */}
              {featured && (
                <div className="absolute inset-0 bg-background opacity-70 rounded-lg pointer-events-none"></div>
              )}
            </div>

            {/* Imagen secundaria - solo en featured */}
            {featured && (
              <div className="absolute top-0 transform translate-x-1/4 translate-y-1/4 w-full h-full hover:scale-105 transition-transform duration-300">
                {secondary ? (
                  <Image
                    src={secondary}
                    alt={title + " secundaria"}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    sizes="(max-width: 768px) 100vw, 600px"
                    placeholder="empty"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-midnight-700/60 rounded-lg border-2 border-dashed border-midnight-600">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="8"
                        y="16"
                        width="48"
                        height="32"
                        rx="6"
                        fill="#23283a"
                        stroke="#3b4252"
                        strokeWidth="2"
                      />
                      <circle cx="20" cy="28" r="4" fill="#3b4252" />
                      <path
                        d="M12 44L24 32L36 44L44 36L52 44"
                        stroke="#4f5668"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Spacer flexible CONDICIONAL - solo en featured para mejor distribución */}
        {featured && <div className="flex-grow min-h-[20px]"></div>}

        {/* Footer */}
        <div
          className={`relative px-6 pb-6 flex-shrink-0 ${!featured ? "mt-4" : "mt-8"}`}
        >
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
                  onClick={() => goToUrl(demoUrl)}
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
                  onClick={() => goToUrl(codeUrl)}
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
