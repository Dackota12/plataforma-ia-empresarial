// src/app/configuracion/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ConfiguracionPage() {
  const [autoSave, setAutoSave] = useState(true);
  const [epochs, setEpochs] = useState(10);
  const [batchSize, setBatchSize] = useState(32);
  const [lr, setLr] = useState(0.001);
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState('');
  const [language, setLanguage] = useState('es');

  // Cargar configuración desde localStorage (sin cambios en la lógica)
  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('config') || '{}');
    if (config.autoSave !== undefined) setAutoSave(config.autoSave);
    if (config.epochs !== undefined) setEpochs(config.epochs);
    if (config.batchSize !== undefined) setBatchSize(config.batchSize);
    if (config.lr !== undefined) setLr(config.lr);
    if (config.darkMode !== undefined) setDarkMode(config.darkMode);
    if (config.username) setUsername(config.username);
    if (config.language) setLanguage(config.language);
  }, []);

  useEffect(() => {
    const config = { autoSave, epochs, batchSize, lr, darkMode, username, language };
    localStorage.setItem('config', JSON.stringify(config));

    // Aplicar tema oscuro/claro
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [autoSave, epochs, batchSize, lr, darkMode, username, language]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-4xl font-bold text-gradient-primary mb-2">Configuración</h1>
        <p className="text-muted-foreground text-lg">Personaliza tu experiencia de entrenamiento</p>
      </div>

      {/* Parámetros del entrenamiento */}
      <div className="card-gradient p-8 rounded-xl space-y-6">
        <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
          <div className="w-2 h-8 bg-accent-blue rounded-full"></div>
          Parámetros de entrenamiento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="form-group">
            <Label className="form-label">Épocas</Label>
            <Input
              className="form-input"
              type="number"
              value={epochs}
              onChange={(e) => setEpochs(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <Label className="form-label">Tamaño de batch</Label>
            <Input
              className="form-input"
              type="number"
              value={batchSize}
              onChange={(e) => setBatchSize(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <Label className="form-label">Learning rate</Label>
            <Input
              className="form-input"
              type="number"
              step="0.0001"
              value={lr}
              onChange={(e) => setLr(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* Preferencias */}
      <div className="card-gradient p-8 rounded-xl space-y-6">
        <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
          <div className="w-2 h-8 bg-accent-green rounded-full"></div>
          Preferencias
        </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <Label className="font-medium">Guardar automáticamente</Label>
              <p className="text-sm text-muted-foreground">Los cambios se guardan automáticamente</p>
            </div>
            <Switch checked={autoSave} onCheckedChange={setAutoSave} />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <Label htmlFor="dark-mode" className="font-medium">Modo Oscuro</Label>
              <p className="text-sm text-muted-foreground">Cambia el tema de la interfaz</p>
            </div>
            <Switch
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
        </div>
      </div>

      {/* Usuario e idioma */}
      <div className="card-gradient p-8 rounded-xl space-y-6">
        <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
          <div className="w-2 h-8 bg-accent-purple rounded-full"></div>
          Perfil
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <Label htmlFor="username" className="form-label">Nombre de usuario</Label>
            <Input
              id="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ej. admin123"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="language" className="form-label">Idioma preferido</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language" className="form-input">
                <SelectValue placeholder="Idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">🇪🇸 Español</SelectItem>
                <SelectItem value="en">🇺🇸 Inglés</SelectItem>
                <SelectItem value="pt">🇧🇷 Portugués</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="btn-primary-gradient px-8 py-3">
          Guardar Configuración
        </Button>
      </div>
    </div>
  );
}