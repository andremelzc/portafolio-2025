import React from "react";

export default function SkillGridSkeleton() {
  return (
    <div className="p-4 sm:p-6 animate-pulse">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-16 sm:h-20 bg-midnight-700/60 rounded-xl border border-midnight-600/40 flex items-cen<ter justify-center"
          >
            <div className="w-16 h-4 sm:w-20 sm:h-5 bg-midnight-600/40 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
