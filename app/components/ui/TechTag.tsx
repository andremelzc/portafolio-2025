import React from "react";
import { getTechIcon } from "@/app/data/techIcons";
import Tooltip from "@/app/components/ui/Tooltip";

interface TechTagProps {
  tech: string;
  variant?: "badge" | "logo" | "icon";
  size?: "sm" | "md" | "lg";
}

export default function TechTag({ tech, variant, size = "md" }: TechTagProps) {
  const Icon = getTechIcon(tech);
  if (Icon === null) return null;

  // Tamaños
  const iconSize =
    size === "sm" ? "w-4 h-4" : size === "lg" ? "w-8 h-8" : "w-6 h-6";
  const textSize =
    size === "sm" ? "text-xs" : size === "lg" ? "text-lg" : "text-sm";
  const px = size === "sm" ? "px-2" : size === "lg" ? "px-5" : "px-3";
  const py = size === "sm" ? "py-0.5" : size === "lg" ? "py-2" : "py-1";

  if (variant === "badge") {
    return (
      <span
        className={`inline-flex items-center gap-2 bg-cherry-100 text-cherry-700 rounded-full font-medium ${px} ${py} ${textSize}`}
      >
        <Icon className={iconSize} />
        {tech}
      </span>
    );
  }
  if (variant === "logo") {
    return (
      <div className={`inline-flex items-center gap-2 text-cherry-700`}>
        <Icon className={iconSize} />
        <span className={`font-medium ${textSize}`}>{tech}</span>
      </div>
    );
  }
  // icon
  return (
    <Tooltip content={tech}>
      <span className="inline-flex">
        <Icon className={`${iconSize} text-cherry-700`} />
      </span>
    </Tooltip>
  );
}
