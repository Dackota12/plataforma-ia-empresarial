"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageIcon, ScanSearch, ScanLine } from "lucide-react";

const modes = [
  {
    title: "Clasificación",
    description: "Entrena modelos para reconocer categorías en imágenes.",
    icon: <ImageIcon className="h-10 w-10 icon-images" />,
    href: "/entrenamiento/imagenes/clasificacion",
    color: "blue"
  },
  {
    title: "Detección de Objetos",
    description: "Localiza y clasifica objetos dentro de una imagen.",
    icon: <ScanSearch className="h-10 w-10 icon-numeric" />,
    href: "/entrenamiento/imagenes/deteccion",
    color: "green"
  },
  {
    title: "Segmentación",
    description: "Divide la imagen por regiones o formas relevantes.",
    icon: <ScanLine className="h-10 w-10 icon-history" />,
    href: "/entrenamiento/imagenes/segmentacion",
    color: "purple"
  },
];

export default function EntrenamientoImagenes() {
  return (
    <section className="space-y-10">
      <motion.div
        className="text-center animate-fade-in"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <ImageIcon className="h-10 w-10 icon-images" />
          <h1 className="text-4xl font-bold text-gradient-primary">
            Entrenamiento con Imágenes
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Desarrolla modelos de visión artificial con técnicas avanzadas de deep learning
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modes.map((mode, i) => (
          <motion.div
            key={mode.title}
            className="animate-slide-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <Link href={mode.href}>
              <Card className="feature-card p-8 h-full cursor-pointer group">
                <CardContent className="space-y-6 p-0 text-center">
                  <div className={`p-4 bg-gradient-to-br from-accent-${mode.color}/10 to-accent-${mode.color}/5 rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {mode.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {mode.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                  <div className="pt-4">
                    <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Comenzar entrenamiento →
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Sección informativa */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <Card className="card-gradient p-6 text-center">
          <div className="text-3xl font-bold text-accent-blue mb-2">50+</div>
          <div className="text-muted-foreground">Arquitecturas disponibles</div>
        </Card>
        <Card className="card-gradient p-6 text-center">
          <div className="text-3xl font-bold text-accent-green mb-2">95%</div>
          <div className="text-muted-foreground">Precisión promedio</div>
        </Card>
        <Card className="card-gradient p-6 text-center">
          <div className="text-3xl font-bold text-accent-purple mb-2">24/7</div>
          <div className="text-muted-foreground">Entrenamiento en la nube</div>
        </Card>
      </div>
    </section>
  );
}