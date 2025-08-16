import React from "react";
import { getTechIcon } from "@/app/data/techIcons";

interface TechTagProps {
  tech: string;
  variant?: "badge" | "logo" | "icon";
}

export default function TechTag({ tech, variant }: TechTagProps) {
  const Icon = getTechIcon(tech);

  if (Icon === null) {
    return null;
  }

  return variant === "badge" ? (
    <span className="inline-flex items-center gap-2 bg-cherry-100 text-cherry-700 rounded-full px-3 py-1 text-sm font-medium">
      {Icon && <Icon className="w-4 h-4" />}
      {tech}
    </span>
  ) : variant === "logo" ? (
    <div className="inline-flex items-center gap-2 text-cherry-700">
      {Icon && <Icon className="w-5 h-5" />}
      <span className="text-sm font-medium">{tech}</span>
    </div>
  ) : (
    <span className="inline-flex">
      {Icon && <Icon className="w-5 h-5 text-cherry-700" />}
    </span>
  );
}
