import React from 'react';
import { useI18n } from '../context/I18nContext';
import { MapPin, ArrowRight } from 'lucide-react';

export default function MandiCard({ mandi, index, onSelect }) {
  const { t, language } = useI18n();

  const displayName = language === 'hi' || language === 'mr' ? mandi.mandiNameHindi : mandi.mandiName;

  return (
    <div
      onClick={() => onSelect(mandi)}
      className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-card border border-gray-100/90 hover:border-emerald-500 hover:shadow-card-hover transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
    >
      {/* Left section: Index badge + Name + Location + Distance */}
      <div className="flex items-center gap-3 min-w-[140px]">
        <div className="w-6 h-6 rounded-full bg-[#1E5128] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
          {index}
        </div>

        <div>
          <h3 className="font-extrabold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-emerald-700 transition-colors">
            {displayName}
          </h3>
          <p className="text-[11px] text-gray-400 font-medium truncate max-w-[160px]">
            {mandi.location}
          </p>
          <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
            <MapPin className="w-3 h-3 text-emerald-600" />
            <span>{mandi.distanceKm} km</span>
          </div>
        </div>
      </div>

      {/* Middle section: Rate & Transport Cost */}
      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:gap-1 text-left sm:text-center text-xs border-y sm:border-y-0 sm:border-x border-gray-100 py-2 sm:py-0 sm:px-4 flex-1">
        <div>
          <span className="text-[10px] font-semibold text-gray-400 block">{t('analysis.rate')}</span>
          <span className="font-bold text-gray-800">₹{mandi.ratePerKg.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-[10px] font-semibold text-gray-400 block">{t('analysis.transportCost')}</span>
          <span className="font-bold text-rose-700">₹{mandi.transportCost.toLocaleString()}</span>
        </div>
      </div>

      {/* Right section: Net Return & Choose CTA */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto min-w-[110px]">
        <div className="text-left sm:text-right">
          <span className="text-[9px] font-extrabold tracking-wider text-gray-400 uppercase block">
            NET RETURN
          </span>
          <div className="text-base sm:text-lg font-black text-[#1E5128] leading-tight">
            ₹{mandi.netReturn.toLocaleString()}
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(mandi);
          }}
          className="mt-1 px-3 py-1 bg-[#2E7D32] group-hover:bg-[#1E5128] text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1 transition-all active:scale-95"
        >
          <span>{t('analysis.chooseMandi')}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
