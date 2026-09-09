import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import CostBreakdown from '../components/CostBreakdown';
import { ChevronLeft, MapPin, Clock, ShieldCheck, Navigation, Star, Store, Building2 } from 'lucide-react';

export default function MandiDetails() {
  const { selectedMandiData, goBack, showToast } = useApp();
  const { t, language } = useI18n();

  if (!selectedMandiData) return null;

  const displayName =
    language === 'hi' || language === 'mr'
      ? selectedMandiData.mandiNameHindi
      : selectedMandiData.mandiName;

  const handleOpenMandiGps = () => {
    // Requirement 15: Open selected mandi's actual location using mandi coordinates
    const lat = selectedMandiData.lat || 18.4967;
    const lng = selectedMandiData.lng || 73.8643;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AppShell showHeader={true} showBackground={true} maxWidth="max-w-3xl">
      <div className="flex-1 flex flex-col px-4 pt-2 pb-12">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-gray-700 hover:text-emerald-800 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t('nav.back')}</span>
          </button>

          <span className="text-sm font-extrabold text-gray-900">
            {t('details.title')}
          </span>

          <div className="w-16" />
        </div>

        {/* Mandi Profile Overview Header Card */}
        <div className="bg-white rounded-3xl p-5 shadow-card border border-emerald-100 mb-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏪</span>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                    {displayName}
                  </h1>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-0.5">
                    {selectedMandiData.marketType}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mt-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{selectedMandiData.location}</span>
                <span className="text-gray-300">•</span>
                <span className="font-bold text-gray-700">{selectedMandiData.distanceKm} km</span>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-xl text-amber-900 font-extrabold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>{selectedMandiData.rating}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100 text-xs">
            <div className="flex items-center gap-1.5 text-gray-700 font-medium">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{selectedMandiData.timings}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              <span>{selectedMandiData.traderCount}+ आढ़ती व व्यापारी</span>
            </div>
            <div className="text-gray-600 font-medium hidden sm:block">
              दूरी: {selectedMandiData.distanceKm} km
            </div>
          </div>
        </div>

        {/* Financial Calculation Breakdown Waterfall (Mandi price, Gross, Selling costs, Net return) */}
        <CostBreakdown mandiData={selectedMandiData} />

        {/* Requirement 14 & 15: Removed Buyer Contact & Vehicle options. Retained Mandi GPS button. */}
        <div className="mt-5">
          <button
            type="button"
            onClick={handleOpenMandiGps}
            className="w-full py-4 px-6 bg-[#20603D] hover:bg-[#1B5E20] text-white font-bold text-sm sm:text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Navigation className="w-5 h-5 text-emerald-300" />
            <span>{t('details.mandiLocation')}</span>
          </button>
        </div>
      </div>
    </AppShell>
  );
}
