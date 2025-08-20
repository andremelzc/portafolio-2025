"use client";

import React from "react";
import Link from "next/link";
import { useActiveSection } from "@/app/hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection();

  const getLinkClass = (sectionId: string) => {
    return activeSection === sectionId
      ? "bg-foreground text-background px-6 py-2 rounded-lg transition-all"
      : "hover:text-accent transition-colors px-6 py-2 rounded-md";
  };

  return (
    <div className="fixed top-8  left-0 right-0 z-50 flex justify-center">
      <nav className="rounded-full border">
        <ul className="flex items-center gap-2 px-6 py-4">
          <li>
            <Link href="/" className={getLinkClass("home")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#proyectos" className={getLinkClass("proyectos")}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/#habilidades" className={getLinkClass("habilidades")}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="/#contacto" className={getLinkClass("contacto")}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
