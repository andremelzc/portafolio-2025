"use client";

import TechTag from "@/app/components/ui/TechTag";
import { SkillGridProps } from "@/app/types/skills";

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 rounded-3xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center transition-transform duration-200 hover:scale-125"
          >
            <TechTag tech={skill} variant="icon" size="lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
