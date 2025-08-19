import React from "react";
import Button from "@/app/components/ui/Button";

export default function SkillsSection() {
  return (
    <section id="habilidades">
      <div className="flex flex-col gap-16 text-center items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-6xl">Habilidades</h1>
            <h2 className="text-xl">
              Explora mis habilidades en las siguientes áreas
            </h2>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="outline">Frontend</Button>
            <Button variant="outline">Backend y DB</Button>
            <Button variant="outline">Herramientas y Gestión</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
