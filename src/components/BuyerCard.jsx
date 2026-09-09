import React from 'react';
import { useI18n } from '../context/I18nContext';
import { useApp } from '../context/AppContext';
import { MapPin, Star, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function BuyerCard({ buyer, onSelect }) {
  const { t, language } = useI18n();
  const { handleApplyBuyer } = useApp();

  const displayName =
    language === 'hi' || language === 'mr'
      ? buyer.nameHindi || buyer.name
      : buyer.name;

  const displayLocation =
    language === 'hi' || language === 'mr'
      ? buyer.locationNameHindi || buyer.locationName
      : buyer.locationName;

  return (
    <div
      onClick={() => onSelect(buyer)}
      className="bg-white rounded-2xl p-4 shadow-card border border-gray-100 hover:border-emerald-500 hover:shadow-card-hover transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
    >
      {/* LEFT: Buyer Name + Rating / Stars based on previous buyer history */}
      <div className="flex items-start gap-3 min-w-[160px]">
        <div className="w-9 h-9 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5 text-[#2E7D32]" />
        </div>

        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-extrabold text-gray-900 text-base leading-tight group-hover:text-emerald-700 transition-colors">
              {displayName}
            </h3>
            {buyer.verified && (
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded-full" title="Verified Buyer">
                ✓
              </span>
            )}
          </div>

          {/* Rating / Stars based on previous buyer history */}
          <div className="flex items-center gap-1 mt-1">
            <div className="flex items-center text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3.5 h-3.5 ${
                    star <= Math.round(buyer.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-700 ml-0.5">{buyer.rating}</span>
            <span className="text-[10px] text-gray-400">({buyer.ratingCount})</span>
          </div>

          {/* Location & Distance */}
          <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-bold text-gray-600 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
            <MapPin className="w-3 h-3 text-emerald-600" />
            <span>{displayLocation} • {buyer.roundedDistance} km</span>
          </div>
        </div>
      </div>

      {/* RIGHT: Offered Price/kg + Required Quantity */}
      <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-100 sm:text-right gap-1 flex-1 sm:px-3">
        <div>
          <span className="text-[10px] font-semibold text-gray-400 block sm:hidden">
            {t('marketplace.offeredPrice')}
          </span>
          <span className="text-base sm:text-lg font-black text-[#1E5128] tracking-tight">
            ₹{buyer.offeredPrice.toFixed(0)}/kg
          </span>
        </div>

        <div className="text-right">
          <span className="text-xs font-bold text-gray-700">
            {language === 'hi' || language === 'mr' ? 'मांग' : 'Required'}: {buyer.requiredQty} kg
          </span>
        </div>
      </div>

      {/* BOTTOM-RIGHT: Apply Button */}
      <div className="flex items-center justify-end w-full sm:w-auto mt-1 sm:mt-0">
        <button
          type="button"
          onClick={(e) => handleApplyBuyer(buyer, e)}
          className="px-5 py-2 bg-[#20603D] hover:bg-[#1B5E20] text-white text-xs font-bold rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-all active:scale-95 w-full sm:w-auto"
        >
          <span>{t('marketplace.apply')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
