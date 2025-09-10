"use client";
import React from "react";

export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Formas geométricas grandes */}
      <div className="absolute -top-1/4 -right-1/4 w-96 h-96 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-accent/40 via-cherry-300/30 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="absolute -bottom-1/4 -left-1/4 w-80 h-96 opacity-25">
        <div className="w-full h-full bg-gradient-to-tr from-cherry-400/35 via-accent/25 to-transparent transform rotate-45 blur-2xl" 
             style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Círculos flotantes medianos */}
      <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-gradient-to-bl from-accent/25 to-cherry-200/15 rounded-full blur-xl opacity-60 animate-float" />
      
      <div className="absolute bottom-1/3 left-1/5 w-56 h-56 bg-gradient-to-tr from-cherry-300/20 to-accent/15 rounded-full blur-2xl opacity-50 animate-float-delayed" />
      
      {/* Elementos geométricos pequeños */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-accent/30 to-transparent rounded-full blur-lg opacity-70 animate-pulse" 
           style={{ animationDelay: '1s' }} />
      
      <div className="absolute top-3/4 right-1/4 w-28 h-28 bg-gradient-to-bl from-cherry-400/25 to-transparent transform rotate-12 blur-md opacity-60" />
      
      {/* Efectos de luz ambiente */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-transparent via-accent/8 to-transparent rounded-full blur-3xl opacity-40" />
      
      {/* Partículas brillantes */}
      <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-accent/60 rounded-full blur-sm animate-twinkle" />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-cherry-300/70 rounded-full blur-sm animate-twinkle" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-accent/50 rounded-full blur-sm animate-twinkle" 
           style={{ animationDelay: '4s' }} />
      
      {/* Gradiente de overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/3 via-transparent to-background/8" />
    </div>
  );
}
