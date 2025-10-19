import { useState } from 'react';
import { BottomNav } from './BottomNav';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Clock } from 'lucide-react';

interface ScheduleScreenProps {
  onNavigate: (screen: string) => void;
}

interface DaySchedule {
  day: string;
  start: string;
  end: string;
  enabled: boolean;
}

export function ScheduleScreen({ onNavigate }: ScheduleScreenProps) {
  const [schedule, setSchedule] = useState<DaySchedule[]>([
    { day: 'Lunes', start: '09:00', end: '18:00', enabled: true },
    { day: 'Martes', start: '09:00', end: '18:00', enabled: true },
    { day: 'Miércoles', start: '09:00', end: '18:00', enabled: true },
    { day: 'Jueves', start: '09:00', end: '18:00', enabled: true },
    { day: 'Viernes', start: '09:00', end: '18:00', enabled: true },
    { day: 'Sábado', start: '10:00', end: '14:00', enabled: false },
    { day: 'Domingo', start: '10:00', end: '14:00', enabled: false },
  ]);

  const toggleDay = (index: number) => {
    const newSchedule = [...schedule];
    newSchedule[index].enabled = !newSchedule[index].enabled;
    setSchedule(newSchedule);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-800">Horario</h1>
        <p className="text-slate-500 mt-2">Define tu disponibilidad semanal</p>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-4 pb-24">
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-5 shadow-sm border transition-all duration-200 ${
              item.enabled
                ? 'border-sky-200'
                : 'border-slate-100 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-slate-800">{item.day}</h3>
              <button
                onClick={() => toggleDay(index)}
                className={`w-12 h-7 rounded-full transition-colors duration-200 relative ${
                  item.enabled ? 'bg-sky-500' : 'bg-slate-300'
                }`}
                bravo-input={`schedule-${item.day.toLowerCase()}-enabled`}
              >
                <span
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                    item.enabled ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {item.enabled && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm text-slate-600">Inicio</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      type="time"
                      value={item.start}
                      className="h-11 bg-slate-50 border-slate-200 rounded-xl pl-10"
                      bravo-input={`schedule-${item.day.toLowerCase()}-start`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-slate-600">Fin</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      type="time"
                      value={item.end}
                      className="h-11 bg-slate-50 border-slate-200 rounded-xl pl-10"
                      bravo-input={`schedule-${item.day.toLowerCase()}-end`}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <Button
          className="w-full h-14 bg-sky-500 hover:bg-sky-600 text-white rounded-xl shadow-md transition-all duration-200 mt-6"
          bravo-action="save-schedule"
        >
          Guardar horario
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="horario" onNavigate={onNavigate} />
    </div>
  );
}
