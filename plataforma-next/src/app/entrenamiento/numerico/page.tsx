"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, FileText, Database } from "lucide-react";
import { useState } from "react";

export default function EntrenamientoNumerico() {
  const [archivo, setArchivo] = useState<File | null>(null);

  const manejarCarga = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setArchivo(e.target.files[0]);
    }
  };

  const manejarEntrenamiento = () => {
    if (archivo) {
      alert(`Entrenando modelo con archivo: ${archivo.name}`);
    } else {
      alert("Por favor carga un archivo primero.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center animate-slide-up">
        <div className="inline-flex items-center gap-3 mb-4">
          <Database className="h-8 w-8 icon-numeric" />
          <h1 className="text-4xl font-bold text-foreground">Entrenamiento Numérico</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Transforma tus datos en modelos inteligentes de predicción
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Área de carga */}
        <Card className="feature-card p-8">
          <CardContent className="space-y-6 p-0">
            <div className="text-center">
              <FileText className="h-12 w-12 icon-numeric mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cargar Datos</h3>
              <p className="text-muted-foreground mb-6">
                Sube archivos CSV, Excel o JSON con tus datos de entrenamiento
              </p>
            </div>

            <div className="dropzone p-8 text-center">
              <Input 
                type="file" 
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .json"
                onChange={manejarCarga}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                <p className="font-medium mb-2">Haz clic o arrastra archivos aquí</p>
                <p className="text-sm text-muted-foreground">CSV, Excel o JSON</p>
              </label>
            </div>

            {archivo && (
              <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-4 animate-scale-in">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 icon-numeric" />
                  <div>
                    <p className="font-medium text-foreground">{archivo.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(archivo.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Button 
              onClick={manejarEntrenamiento}
              className="btn-primary-gradient w-full py-4 text-lg font-semibold"
              disabled={!archivo}
            >
              <Upload className="w-5 h-5 mr-2" />
              Iniciar Entrenamiento
            </Button>
          </CardContent>
        </Card>

        {/* Información adicional */}
        <div className="space-y-6">
          <Card className="card-gradient p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-accent-blue rounded-full"></div>
              Tipos de Datos Soportados
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                Datos numéricos (regresión, clasificación)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                Series de tiempo y pronósticos
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-purple rounded-full"></div>
                Análisis de clustering
              </li>
            </ul>
          </Card>

          <Card className="card-gradient p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-accent-green rounded-full"></div>
              Requisitos del Archivo
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                Máximo 50MB por archivo
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                Headers en la primera fila
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                Sin valores faltantes críticos
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}