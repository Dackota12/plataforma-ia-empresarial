"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, Upload, Play, Trash2 } from "lucide-react";

export default function ClasificacionPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isTraining, setIsTraining] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
  });

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleTraining = () => {
    setIsTraining(true);
    // Simular entrenamiento
    setTimeout(() => {
      setIsTraining(false);
      alert("¡Entrenamiento completado con éxito!");
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center animate-slide-up">
        <div className="inline-flex items-center gap-3 mb-4">
          <ImageIcon className="h-8 w-8 icon-images" />
          <h1 className="text-4xl font-bold text-foreground">Clasificación de Imágenes</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Crea modelos que identifiquen y categoricen objetos en imágenes con precisión profesional
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Área principal de carga */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="card-gradient p-8">
            <div
              {...getRootProps()}
              className={`dropzone p-12 text-center cursor-pointer ${
                isDragActive ? 'active' : ''
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
              {isDragActive ? (
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-accent-blue">
                    ¡Suelta las imágenes aquí!
                  </p>
                  <p className="text-muted-foreground">
                    Las procesaremos automáticamente
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xl font-semibold text-foreground">
                    Arrastra y suelta imágenes aquí
                  </p>
                  <p className="text-muted-foreground">
                    O haz clic para seleccionar desde tu dispositivo
                  </p>
                  <Button className="btn-primary-gradient mt-4">
                    Seleccionar Imágenes
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {/* Grid de imágenes cargadas */}
          {files.length > 0 && (
            <Card className="card-gradient p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">
                  Imágenes cargadas ({files.length})
                </h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setFiles([])}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                  Eliminar todas
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {files.map((file, idx) => (
                  <div key={idx} className="relative group">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Imagen ${idx + 1}`}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full h-40"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      className="absolute top-2 right-2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                      aria-label="Eliminar imagen"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Botón de entrenamiento */}
          <div className="flex justify-end">
            <Button
              className="btn-primary-gradient"
              size="lg"
              disabled={files.length === 0 || isTraining}
              onClick={handleTraining}
            >
              <Play className="w-5 h-5 mr-2" />
              {isTraining ? "Entrenando..." : "Entrenar Modelo"}
            </Button>
          </div>
        </div>

        {/* Panel lateral de ayuda o instrucciones */}
        <div>
          <Card className="card-gradient p-6 sticky top-24">
            <CardContent className="space-y-4 p-0">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                ¿Cómo funciona?
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Sube imágenes de las diferentes categorías que deseas clasificar.</li>
                <li>Puedes cargar varias imágenes a la vez.</li>
                <li>Haz clic en "Entrenar Modelo" para iniciar el proceso.</li>
                <li>Recibirás una notificación al finalizar el entrenamiento.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}