"use client";

import React from "react";
import Link from "next/link";
import { useAutoHide } from "@/app/hooks/useAutoHide";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { useIndicatorPosition } from "@/app/hooks/useIndicatorPosition";

export default function Navbar() {
  const activeSection = useActiveSection();
  const isVisible = useAutoHide(100000);
  const { navRef, indicatorStyle, setLinkRef } =
    useIndicatorPosition(activeSection);

  const getLinkClass = (sectionId: string): string => {
    return activeSection === sectionId
      ? "text-background font-medium px-6 py-2.5 rounded-xl transition-all duration-300 relative z-10 text-sm "
      : "text-foreground/80 hover:text-foreground font-medium px-6 py-2.5 rounded-xl transition-all duration-300 relative z-10 text-sm tracking-wide hover:scale-105 hover:bg-white/5";
  };

  return (
    <div
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      <nav
        ref={navRef}
        className="relative rounded-2xl backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden group hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
        style={{
          background: `
          linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%),
          radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)
          `,
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Indicador deslizante */}
        <div
          className="absolute top-2.5 bottom-2.5 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity,
            background: `
            linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%),
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 100%)
            `,
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />
        </div>

        <ul className="flex items-center gap-2 px-4 py-3 relative z-10">
          <li>
            <Link
              href="/"
              className={getLinkClass("home")}
              ref={setLinkRef("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#proyectos"
              className={getLinkClass("proyectos")}
              ref={setLinkRef("proyectos")}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              href="/#habilidades"
              className={getLinkClass("habilidades")}
              ref={setLinkRef("habilidades")}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              href="/#contacto"
              className={getLinkClass("contacto")}
              ref={setLinkRef("contacto")}
            >
              Contacto
            </Link>
          </li>
        </ul>
        
      </nav>
    </div>
  );
}
