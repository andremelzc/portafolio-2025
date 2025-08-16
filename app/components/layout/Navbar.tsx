import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-16   left-0 right-0 z-50 flex justify-center">
      <nav className="rounded-full border">
        <ul className="flex items-center gap-8 px-10 py-4">
          <li>
            <Link href="/"> Home</Link>
          </li>
          <li>
            <Link href="/#proyectos">Proyectos</Link>
          </li>
          <li>
            <Link href="/#habilidades">Habilidades</Link>
          </li>
          <li>
            <Link href="/#contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
