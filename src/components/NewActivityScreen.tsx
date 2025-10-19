import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';

interface NewActivityScreenProps {
  onNavigate: (screen: string) => void;
}

export function NewActivityScreen({ onNavigate }: NewActivityScreenProps) {
  const [interest, setInterest] = useState([3]);

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
        <h1 className="text-2xl font-semibold text-slate-800">Nueva actividad</h1>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-8 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-slate-700">Título</Label>
          <Input
            id="title"
            placeholder="Ej: Aprender JavaScript"
            className="h-12 bg-slate-50 border-slate-200 rounded-xl"
            bravo-input="title"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-slate-700">Descripción</Label>
          <Textarea
            id="description"
            placeholder="Describe tu actividad..."
            className="min-h-[120px] bg-slate-50 border-slate-200 rounded-xl resize-none"
            bravo-input="description"
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category" className="text-slate-700">Categoría</Label>
          <Select bravo-input="category">
            <SelectTrigger className="h-12 bg-slate-50 border-slate-200 rounded-xl">
              <SelectValue placeholder="Selecciona una categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal</SelectItem>
              <SelectItem value="trabajo">Trabajo</SelectItem>
              <SelectItem value="idioma">Idioma</SelectItem>
              <SelectItem value="deporte">Deporte</SelectItem>
              <SelectItem value="creatividad">Creatividad</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Interest Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-slate-700">Interés</Label>
            <span className="text-sky-600 font-medium">{interest[0]} / 5</span>
          </div>
          <Slider
            value={interest}
            onValueChange={setInterest}
            min={1}
            max={5}
            step={1}
            className="py-4"
            bravo-input="interest"
          />
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <Button
            onClick={() => onNavigate('dashboard')}
            className="w-full h-14 bg-sky-500 hover:bg-sky-600 text-white rounded-xl shadow-md transition-all duration-200"
            bravo-action="save-activity"
          >
            Guardar
          </Button>
        </div>
      </div>
    </div>
  );
}
