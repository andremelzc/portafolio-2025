import React from "react";

interface ProjectSkeletonProps {
  featured?: boolean;
}

export default function ProjectSkeleton({ featured = false }: ProjectSkeletonProps) {
  return (
    <div className="group relative h-full">
      <div className="relative bg-gradient-to-br from-midnight-800 via-midnight-900 to-midnight-800 border border-midnight-600/50 rounded-3xl shadow-2xl text-background flex flex-col w-full h-full animate-pulse">
        {/* Efectos internos sutiles */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 rounded-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-midnight-500/40 to-transparent" />

        {/* Header skeleton */}
        <div className="relative flex justify-between items-center p-6 pb-4">
          {/* Skeleton para tecnologías */}
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: featured ? 5 : 3 }).map((_, i) => (
              <div 
                key={i} 
                className="h-7 bg-midnight-700/60 rounded-full"
                style={{ width: `${60 + Math.random() * 40}px` }}
              />
            ))}
          </div>
          {/* Skeleton para teamsize */}
          <div className="w-8 h-7 bg-midnight-700/60 rounded-full" />
        </div>

        {/* Skeleton para texto */}
        <div className="px-6 text-left flex-shrink-0 min-h-[120px] flex flex-col justify-center">
          {/* Título skeleton */}
          <div className="h-8 bg-midnight-700/60 rounded-lg mb-3" style={{ width: '70%' }} />
          {/* Descripción skeleton */}
          <div className="space-y-2">
            {Array.from({ length: featured ? 3 : 2 }).map((_, i) => (
              <div 
                key={i} 
                className="h-4 bg-midnight-700/60 rounded"
                style={{ 
                  width: i === (featured ? 2 : 1) ? '60%' : '100%' 
                }}
              />
            ))}
          </div>
        </div>

        {/* Skeleton para imágenes */}
        <div
          className={`flex justify-center items-center ${
            featured ? "min-h-[200px] max-h-[240px]" : "min-h-[160px] max-h-[200px]"
          } ${featured ? "p-8 pb-6" : "p-4 pb-4"}`}
        >
          <div className={`relative ${featured ? "w-72 h-40" : "w-64 h-32"}`}>
            {/* Imagen principal skeleton */}
            <div
              className={`absolute top-0 w-full h-full bg-midnight-700/60 rounded-lg ${
                featured ? "transform -translate-x-1/4" : ""
              }`}
            />
            
            {/* Imagen secundaria skeleton (solo featured) */}
            {featured && (
              <div className="absolute top-0 transform translate-x-1/4 translate-y-1/4 w-full h-full bg-midnight-700/60 rounded-lg" />
            )}
          </div>
        </div>
        
        {/* Spacer flexible */}
        <div className="flex-grow min-h-[20px]"></div>
        
        {/* Footer skeleton */}
        <div className="relative px-6 pb-6 flex-shrink-0 mt-8">
          {/* Separador */}
          <div className="h-px bg-gradient-to-r from-transparent via-midnight-600/40 to-transparent mb-6" />
          
          {/* Botones e indicador skeleton */}
          <div className="flex justify-between items-center">
            {/* Botones skeleton */}
            <div className="flex gap-3">
              <div className="w-20 h-8 bg-midnight-700/60 rounded-lg" />
              <div className="w-24 h-8 bg-midnight-700/60 rounded-lg" />
            </div>
            
            {/* Role indicator skeleton */}
            <div className="w-16 h-4 bg-midnight-700/60 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
