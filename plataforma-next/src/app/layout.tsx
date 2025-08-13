// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}


