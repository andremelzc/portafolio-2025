"use client"
import React from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { downloadCV } from "@/app/lib/downloads";

export default function HomeSection() {
  return (
    <section id="home">
      <div className="flex flex-col gap-16 text-center items-center">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-3xl text-accent">Desarrollador Full-Stack</h2>
          <h1 className="text-6xl">Andre Ivan Melendez Cava</h1>
        </div>

        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="/profile.jpg"
            alt="Andre Melendez Cava"
            fill
            className="rounded-full object-cover object-[center_60%]"
            priority
          />
        </div>
        <p className="text-lg">
          Soy Andre Meléndez Cava, estudiante de Ingeniería de Software en la
          Universidad Nacional Mayor de San Marcos enfocado en el desarrollo de
          aplicaciones web. <br />
          Mi objetivo es seguir creciendo como desarrollador, participando en
          proyectos innovadores y colaborando con equipos que buscan crear
          impacto a través de la tecnología.
        </p>
        <div className="flex gap-4">
          <Button variant="primary" size="md" onClick={downloadCV}>
            Descargar CV
          </Button>
          <Button variant="outline" size="md">
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
}
