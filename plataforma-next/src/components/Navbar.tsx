// src/components/Navbar.tsx
"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Plataforma IA
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Inicio
          </Link>
          <Link href="/entrenamientos" className="text-gray-700 hover:text-blue-600">
            Entrenamientos
          </Link>
          <Link href="/modelos" className="text-gray-700 hover:text-blue-600">
            Modelos
          </Link>
          <Link href="/configuracion" className="text-gray-700 hover:text-blue-600">
            Configuración
          </Link>
        </div>
      </div>
    </nav>
  );
}
