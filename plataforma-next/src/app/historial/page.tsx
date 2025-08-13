import { Badge } from '@/components/ui/badge';

const historial = [
  {
    modelo: 'Clasificador A',
    tipo: 'Imágenes',
    fecha: '2025-08-01',
    precision: '91.2%',
    estado: 'Completado',
  },
  {
    modelo: 'Regresión B',
    tipo: 'Numéricos',
    fecha: '2025-07-30',
    precision: '85.3%',
    estado: 'En proceso',
  },
];

export default function HistorialTabla() {
  return (
    <section className="space-y-6">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-foreground mb-2">Historial de Modelos</h1>
        <p className="text-muted-foreground">Consulta el rendimiento de tus entrenamientos anteriores</p>
      </div>
      
      <div className="card-gradient p-6 rounded-xl">
        <div className="overflow-x-auto">
          <table className="table-enhanced w-full">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left">Modelo</th>
                <th className="px-6 py-4 text-left">Tipo</th>
                <th className="px-6 py-4 text-left">Fecha</th>
                <th className="px-6 py-4 text-left">Precisión</th>
                <th className="px-6 py-4 text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              {historial.map((h, i) => (
                <tr key={i} className="hover:bg-accent/50 transition-colors">
                  <td className="px-6 py-4 font-medium">{h.modelo}</td>
                  <td className="px-6 py-4">{h.tipo}</td>
                  <td className="px-6 py-4">{h.fecha}</td>
                  <td className="px-6 py-4 font-semibold text-accent-blue">{h.precision}</td>
                  <td className="px-6 py-4">
                    <Badge className={
                      h.estado === 'Completado'
                        ? 'badge-success'
                        : h.estado === 'En proceso'
                        ? 'badge-warning'
                        : 'badge-info'
                    }>
                      {h.estado}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}