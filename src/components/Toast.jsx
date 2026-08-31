import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useApp();

  if (!toast.visible) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-emerald-700 flex-shrink-0" />,
  };

  const bgs = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    info: 'bg-emerald-50 border-emerald-200 text-emerald-900',
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-md w-11/12 animate-fade-in pointer-events-auto">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-lg ${
          bgs[toast.type] || bgs.info
        }`}
      >
        {icons[toast.type] || icons.info}
        <p className="text-sm font-medium leading-snug flex-1">{toast.message}</p>
      </div>
    </div>
  );
}
