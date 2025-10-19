import { BottomNav } from './BottomNav';
import { Button } from './ui/button';
import { LogOut, User, Mail, Settings, Shield, HelpCircle } from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

export function ProfileScreen({ onNavigate, onLogout }: ProfileScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-800">Perfil</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6 pb-24">
        {/* User Info Card */}
        <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white">Usuario Demo</h2>
              <div className="flex items-center space-x-2 mt-1">
                <Mail className="w-4 h-4 text-sky-100" />
                <p className="text-sky-100">usuario@ejemplo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 text-center">
            <p className="text-2xl font-semibold text-slate-800">12</p>
            <p className="text-xs text-slate-500 mt-1">Completadas</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 text-center">
            <p className="text-2xl font-semibold text-slate-800">8</p>
            <p className="text-xs text-slate-500 mt-1">Pendientes</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 text-center">
            <p className="text-2xl font-semibold text-slate-800">85</p>
            <p className="text-xs text-slate-500 mt-1">Puntuación</p>
          </div>
        </div>

        {/* Settings Options */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <button className="w-full flex items-center space-x-4 px-5 py-4 hover:bg-slate-50 transition-colors border-b border-slate-100">
            <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-sky-600" />
            </div>
            <span className="flex-1 text-left text-slate-700">Configuración</span>
            <span className="text-slate-400">›</span>
          </button>

          <button className="w-full flex items-center space-x-4 px-5 py-4 hover:bg-slate-50 transition-colors border-b border-slate-100">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <span className="flex-1 text-left text-slate-700">Privacidad</span>
            <span className="text-slate-400">›</span>
          </button>

          <button className="w-full flex items-center space-x-4 px-5 py-4 hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-amber-600" />
            </div>
            <span className="flex-1 text-left text-slate-700">Ayuda y soporte</span>
            <span className="text-slate-400">›</span>
          </button>
        </div>

        {/* Logout Button */}
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full h-14 border-red-500 text-red-600 hover:bg-red-50 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center space-x-2"
          bravo-auth-logout="true"
        >
          <LogOut className="w-5 h-5" />
          <span>Cerrar sesión</span>
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="perfil" onNavigate={onNavigate} />
    </div>
  );
}
