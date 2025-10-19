import { ArrowLeft, Star, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { Button } from './ui/button';

interface Activity {
  id: number;
  title: string;
  category: string;
  interest: number;
  status: 'pending' | 'done' | 'postponed';
}

interface ActivityDetailScreenProps {
  activity: Activity;
  onNavigate: (screen: string) => void;
}

export function ActivityDetailScreen({ activity, onNavigate }: ActivityDetailScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm flex items-center space-x-4">
        <button
          onClick={() => onNavigate('dashboard')}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-slate-600" />
        </button>
        <h1 className="text-2xl font-semibold text-slate-800">Detalle de actividad</h1>
      </div>

      {/* Activity Details */}
      <div className="flex-1 px-6 py-8 space-y-6">
        {/* Title Card */}
        <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            {activity.title}
          </h2>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-sky-500 text-white rounded-full text-sm">
              {activity.category}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < activity.interest
                    ? 'text-sky-600 fill-sky-600'
                    : 'text-slate-300'
                }`}
              />
            ))}
            <span className="ml-2 text-slate-600">
              ({activity.interest}/5)
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-slate-700">Descripción</h3>
          <p className="text-slate-600 leading-relaxed">
            Esta es una actividad que te ayudará a crecer personal y profesionalmente.
            Mantén el enfoque y disfruta del proceso de aprendizaje.
          </p>
        </div>

        {/* Status Info */}
        <div className="bg-slate-50 rounded-2xl p-5 space-y-3">
          <h3 className="text-lg font-medium text-slate-700">Estado actual</h3>
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${
              activity.status === 'done' ? 'bg-green-500' :
              activity.status === 'postponed' ? 'bg-amber-500' :
              'bg-sky-500'
            }`} />
            <span className="text-slate-600 capitalize">{
              activity.status === 'done' ? 'Completado' :
              activity.status === 'postponed' ? 'Pospuesto' :
              'Pendiente'
            }</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button
            className="w-full h-14 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
            bravo-action="update-status-done"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Marcar como Hecho</span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-14 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center space-x-2"
            bravo-action="update-status-postponed"
          >
            <Clock className="w-5 h-5" />
            <span>Posponer</span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-14 border-red-500 text-red-600 hover:bg-red-50 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center space-x-2"
            bravo-action="update-status-skip"
          >
            <XCircle className="w-5 h-5" />
            <span>Omitir</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
