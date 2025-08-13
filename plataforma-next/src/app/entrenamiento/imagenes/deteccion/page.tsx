"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DeteccionObjetos() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-2">Detección de Objetos</h1>
      <p className="text-gray-600 mb-4">Carga imágenes para entrenar un modelo detector (bounding boxes).</p>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-10 rounded-xl flex flex-col items-center justify-center cursor-pointer transition ${
          isDragActive ? "border-green-500 bg-green-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="font-medium mb-2">Arrastra imágenes o selecciónalas</p>
        <Button>Seleccionar imágenes</Button>
      </div>

      {files.length > 0 && (
        <>
          <h2 className="font-semibold">Imágenes cargadas:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {files.map((file, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-44"
                />
                <p className="text-xs p-2 truncate">{file.name}</p>
              </div>
            ))}
          </div>

          <Button className="mt-6">Agregar anotaciones (bounding boxes)</Button>
        </>
      )}
      <Button
  variant="secondary"
  className="mt-2"
  onClick={() => alert("Entrenamiento iniciado")}
>
  Iniciar entrenamiento
</Button>
    </div>
  );
}