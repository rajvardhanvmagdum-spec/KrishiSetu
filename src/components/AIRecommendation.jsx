import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import { Bot, MapPin, CheckCircle2, Award, TrendingUp, Truck, Scale, IndianRupee } from 'lucide-react';

export default function AIRecommendation({ mandi, onSelect }) {
  const { selectedCrop } = useApp();
  const { t, language } = useI18n();

  if (!mandi) return null;

  const displayName = language === 'hi' || language === 'mr' ? mandi.mandiNameHindi : mandi.mandiName;

  return (
    <div className="bg-white rounded-3xl p-5 shadow-card border-2 border-emerald-500/40 relative overflow-hidden">
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-800 shadow-sm">
            <Bot className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base">🏆</span>
              <h2 className="text-lg sm:text-xl font-black text-gray-900 leading-tight">
                {displayName}
              </h2>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>{mandi.location}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#EBF7EE] text-[#1E5128] text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200 shadow-xs flex items-center gap-1 flex-shrink-0">
          <Award className="w-3.5 h-3.5 text-emerald-700" />
          <span>{t('analysis.bestOption')}</span>
        </div>
      </div>

      {/* Primary 3-Metric Row (Matches Image 2 Screen 11) */}
      <div className="grid grid-cols-3 gap-2 bg-[#F8FAFC] p-3 rounded-2xl border border-gray-100 text-center my-3">
        <div>
          <span className="text-[11px] font-semibold text-gray-500 block">{t('analysis.distance')}</span>
          <span className="text-sm sm:text-base font-extrabold text-gray-900">{mandi.distanceKm} km</span>
        </div>
        <div className="border-x border-gray-200">
          <span className="text-[11px] font-semibold text-gray-500 block">{t('analysis.rate')}</span>
          <span className="text-sm sm:text-base font-extrabold text-emerald-700">₹{mandi.ratePerKg.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-[11px] font-semibold text-gray-500 block">{t('analysis.totalQty')}</span>
          <span className="text-sm sm:text-base font-extrabold text-gray-900">{mandi.quantityKg} kg</span>
        </div>
      </div>

      {/* 2-Metric Financial Sub-Row */}
      <div className="grid grid-cols-2 gap-2 text-center mb-3 px-1">
        <div className="bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
          <span className="text-[11px] font-semibold text-gray-500 block">{t('analysis.grossValue')}</span>
          <span className="text-base font-black text-gray-900">₹{mandi.grossRevenue.toLocaleString()}</span>
        </div>
        <div className="bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
          <span className="text-[11px] font-semibold text-gray-500 block">{t('analysis.transportCost')}</span>
          <span className="text-base font-black text-rose-700">₹{mandi.transportCost.toLocaleString()}</span>
        </div>
      </div>

      {/* Net Return Highlight Box (Matches Image 2 Screen 11) */}
      <div className="bg-gradient-to-br from-[#EBF7EE] to-[#D9F2DE] border-2 border-[#2E7D32]/50 rounded-2xl p-4 text-center my-4 shadow-sm">
        <span className="text-xs font-bold text-[#1E5128] uppercase tracking-wider block mb-1">
          {t('analysis.netReturn')}
        </span>
        <div className="text-3xl sm:text-4xl font-black text-[#1B5E20] tracking-tight">
          ₹ {mandi.netReturn.toLocaleString()}
        </div>
      </div>

      {/* CTA Button */}
      <button
        type="button"
        onClick={() => onSelect(mandi)}
        className="w-full py-3.5 px-5 bg-[#20603D] hover:bg-[#1B5E20] active:scale-[0.99] text-white font-bold text-sm sm:text-base rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all mb-4"
      >
        <span>{t('analysis.selectThisMandi')}</span>
      </button>

      {/* Calculation Formula Summary ("हिसाब कैसे किया गया?") */}
      <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-100 text-xs mb-3 space-y-2">
        <h4 className="font-bold text-gray-900 flex items-center gap-1.5 text-xs">
          <span>📊</span> {t('analysis.howCalculated')}
        </h4>
        <div className="space-y-1.5 text-gray-600 font-medium">
          <div className="flex justify-between">
            <span className="flex items-center gap-1">🌾 {t('analysis.ratePerKgLabel')}</span>
            <span className="font-bold text-gray-900">₹{mandi.ratePerKg.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-1">⚖️ {t('analysis.qtyKgLabel')}</span>
            <span className="font-bold text-gray-900">{mandi.quantityKg}</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-1">💵 {t('analysis.grossValueLabel')}</span>
            <span className="font-bold text-gray-900">₹{mandi.grossRevenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-rose-700">
            <span className="flex items-center gap-1">🚚 {t('analysis.transportCostLabel')}</span>
            <span className="font-bold">- ₹{mandi.transportCost.toLocaleString()}</span>
          </div>
          <div className="pt-1.5 border-t border-gray-200 flex justify-between font-extrabold text-[#1B5E20]">
            <span>{t('analysis.netReturnLabel')}</span>
            <span className="text-sm">₹{mandi.netReturn.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Why is this the best choice ("क्यों यह सबसे अच्छा है?") */}
      <div className="bg-[#F0FDF4] rounded-2xl p-3.5 border border-emerald-100 text-xs space-y-1.5">
        <h4 className="font-bold text-[#1E5128] text-xs">
          {t('analysis.whyBest')}
        </h4>
        <ul className="space-y-1 text-emerald-900 font-semibold">
          {(language === 'hi' || language === 'mr' ? mandi.bestTags : mandi.bestTagsEn).map((tag, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] flex-shrink-0" />
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
