import { Home, BarChart3, Calendar, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'inicio' | 'resumen' | 'horario' | 'perfil';
  onNavigate: (screen: string) => void;
}

export function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: Home, screen: 'dashboard' },
    { id: 'resumen', label: 'Resumen', icon: BarChart3, screen: 'summary' },
    { id: 'horario', label: 'Horario', icon: Calendar, screen: 'schedule' },
    { id: 'perfil', label: 'Perfil', icon: User, screen: 'profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
      <div className="flex items-center justify-around h-20 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.screen)}
              className={`flex flex-col items-center justify-center space-y-1 flex-1 h-full transition-colors ${
                isActive ? 'text-sky-500' : 'text-slate-400'
              }`}
              bravo-navigation={tab.id}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'fill-sky-500/20' : ''}`} />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
