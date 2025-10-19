import { Plus, Star } from 'lucide-react';
import { Button } from './ui/button';
import { BottomNav } from './BottomNav';

interface Activity {
  id: number;
  title: string;
  category: string;
  interest: number;
  status: 'pending' | 'done' | 'postponed';
}

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
  onActivitySelect: (activity: Activity) => void;
}

export function DashboardScreen({ onNavigate, onActivitySelect }: DashboardScreenProps) {
  const activities: Activity[] = [
    { id: 1, title: 'Learn Spanish', category: 'Idioma', interest: 2, status: 'pending' },
    { id: 2, title: 'Read a book', category: 'Personal', interest: 3, status: 'pending' },
    { id: 3, title: 'Build a website', category: 'Trabajo', interest: 3, status: 'pending' },
    { id: 4, title: 'Sketch ideas', category: 'Personal', interest: 2, status: 'pending' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-800">Mis actividades</h1>
      </div>

      {/* Activities List */}
      <div className="flex-1 px-6 py-6 space-y-4 pb-24">
        {activities.map((activity) => (
          <div
            key={activity.id}
            onClick={() => onActivitySelect(activity)}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow"
            bravo-list-item="activities"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-medium text-slate-800">
                {activity.title}
              </h3>
              <p className="text-sm text-sky-600">{activity.category}</p>
              <div className="flex items-center space-x-1 pt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < activity.interest
                        ? 'text-sky-500 fill-sky-500'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => onNavigate('new-activity')}
        className="fixed bottom-24 right-6 w-16 h-16 bg-sky-500 hover:bg-sky-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95"
        bravo-action="navigate-new-activity"
      >
        <Plus className="w-8 h-8 text-white" />
      </button>

      {/* Bottom Navigation */}
      <BottomNav activeTab="inicio" onNavigate={onNavigate} />
    </div>
  );
}
