"use client";

import TechTag from "@/app/components/ui/TechTag";
import { SkillGridProps } from "@/app/types/skills";

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8  p-4 sm:p-6 rounded-2xl sm:rounded-3xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center transition-transform duration-200 hover:scale-110 sm:hover:scale-125"
          >
            <TechTag tech={skill} variant="icon" size="lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
