import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Button from "@/app/components/ui/Button";

export default function ContactSection() {
  return (
    <section id="contacto" className="">
      <div className="flex flex-col gap-16 text-center items-center">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="relative flex flex-col gap-4">
            {/* Resplandor detrás del título */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-80 h-20 bg-gradient-to-r from-transparent via-accent/15 to-transparent blur-2xl opacity-80" />
            {/* Título */}
            <h1 className="text-6xl font-semibold">Contacto</h1>
            {/* Divisor */}
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto" />
            {/* Subtítulo con efecto de cristal de fondo */}
            <div className="relative inline-block mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-background/20 to-transparent rounded-lg blur-sm" />
              <h2 className="relative text-xl text-foreground/85 font-light tracking-wide px-4 py-1 backdrop-blur-sm bg-background/10 rounded-lg border border-border/5">
                Escríbeme si quieres trabajar conmigo
              </h2>
            </div>
          </div>
          {/* Botones de contacto - sin contenedor glassmorphism */}
          <div className="flex flex-col gap-8 justify-center">
            <Button
              variant="primary"
              icon={<BsLinkedin size={40} />}
              iconPosition="top"
              rounded="full"
            >
              Linkedin
            </Button>
            <Button
              variant="primary"
              icon={<BsGithub size={40} />}
              iconPosition="top"
              rounded="full"
            >
              Github
            </Button>
            <Button
              variant="primary"
              icon={<FiMail size={40} />}
              iconPosition="top"
              rounded="full"
            >
              andre050719mc@gmail.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
