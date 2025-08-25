import React from "react";
import ProjectSkeleton from "./ProjectSkeleton";

interface ProjectGridSkeletonProps {
  count?: number;
  featuredCount?: number;
}

export default function ProjectGridSkeleton({ 
  count = 4, 
  featuredCount = 2 
}: ProjectGridSkeletonProps) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-6 w-full">
      {/* Proyectos destacados skeleton */}
      {featuredCount > 0 && (
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-6">
          {Array.from({ length: featuredCount }).map((_, index) => (
            <ProjectSkeleton key={`featured-${index}`} featured={true} />
          ))}
        </div>
      )}

      {/* Proyectos regulares skeleton */}
      {count > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-6">
          {Array.from({ length: count }).map((_, index) => (
            <ProjectSkeleton key={`regular-${index}`} featured={false} />
          ))}
        </div>
      )}
    </div>
  );
}
