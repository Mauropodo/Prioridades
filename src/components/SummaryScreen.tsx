import { BottomNav } from './BottomNav';
import { TrendingUp, Target, Grid3x3 } from 'lucide-react';

interface SummaryScreenProps {
  onNavigate: (screen: string) => void;
}

export function SummaryScreen({ onNavigate }: SummaryScreenProps) {
  const categories = [
    { name: 'Personal', count: 8, color: 'bg-sky-500' },
    { name: 'Trabajo', count: 5, color: 'bg-blue-500' },
    { name: 'Idioma', count: 3, color: 'bg-cyan-500' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-800">Resumen</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6 pb-24">
        {/* Chart Placeholder */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-medium text-slate-700 mb-6">Progreso mensual</h3>
          <div className="flex items-center justify-center">
            <svg className="w-48 h-48" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="20"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="20"
                strokeDasharray="502"
                strokeDashoffset="125"
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
              <text
                x="100"
                y="100"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-3xl font-semibold fill-slate-800"
              >
                75%
              </text>
            </svg>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4">
          {/* Activities Done */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Actividades realizadas</p>
                <p className="text-3xl font-semibold text-slate-800">12</p>
              </div>
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center">
                <Target className="w-7 h-7 text-sky-600" />
              </div>
            </div>
          </div>

          {/* Average Score */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Puntuación promedio</p>
                <p className="text-3xl font-semibold text-slate-800">85 / 100</p>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-green-600" />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Grid3x3 className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-700">Categorías más frecuentes</h3>
            </div>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{category.name}</span>
                    <span className="text-slate-800 font-medium">{category.count}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${category.color} rounded-full transition-all duration-500`}
                      style={{ width: `${(category.count / 16) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="resumen" onNavigate={onNavigate} />
    </div>
  );
}
