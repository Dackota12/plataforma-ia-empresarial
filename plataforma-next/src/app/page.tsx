// src/app/page.tsx
"use client";

import react from "react";
import './globals.css';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, ImageIcon, BarChart3, Settings2 } from "lucide-react";


const features = [
  {
    title: "Datos Numéricos",
    description: "Carga y entrena modelos con archivos CSV, Excel y JSON.",
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    href: "/entrenamiento/numerico",
  },
  {
    title: "Imágenes",
    description: "Entrena modelos de visión con conjuntos de imágenes.",
    icon: <ImageIcon className="h-6 w-6 text-green-600" />,
    href: "entrenamiento/imagenes",
  },
  {
    title: "Historial de Modelos",
    description: "Consulta y analiza entrenamientos previos.",
    icon: <Brain className="h-6 w-6 text-purple-600" />,
    href: "/historial",
  },
  {
    title: "Configuración",
    description: "Administra parámetros, cuentas y preferencias.",
    icon: <Settings2 className="h-6 w-6 text-gray-600" />,
    href: "/configuracion",
  },
];

export default function HomePage() {
  return (
    <section className="space-y-10">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">
          Plataforma IA Empresarial
        </h1>
        <p className="mt-2 text-gray-600">
          Entrena modelos inteligentes usando tus propios datos en minutos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={item.href}>
              <Card className="rounded-2xl shadow hover:shadow-lg transition p-4 h-full">
                <CardContent className="space-y-3">
                  <div>{item.icon}</div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

