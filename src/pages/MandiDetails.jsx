import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import CostBreakdown from '../components/CostBreakdown';
import { ChevronLeft, MapPin, Clock, ShieldCheck, PhoneCall, Navigation, Truck, Star } from 'lucide-react';

export default function MandiDetails() {
  const { selectedMandiData, goBack, showToast } = useApp();
  const { t, language } = useI18n();

  if (!selectedMandiData) return null;

  const displayName =
    language === 'hi' || language === 'mr'
      ? selectedMandiData.mandiNameHindi
      : selectedMandiData.mandiName;

  const handleAction = (type) => {
    if (type === 'call') {
      showToast('सत्यापित आढ़ती से संपर्क जोड़ा जा रहा है: +91 98230 XXXXX', 'info');
    } else if (type === 'gps') {
      showToast(`${displayName} का GPS मार्ग गूगल मैप्स में खोला जा रहा है`, 'info');
    } else if (type === 'transport') {
      showToast('सस्ता पिकअप वाहन बुक करने की सुविधा जल्द शुरू होगी!', 'success');
    }
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
                <span className="text-xl">🏪</span>
                <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                  {displayName}
                </h1>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{selectedMandiData.location}</span>
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
              <span>{selectedMandiData.traderCount}+ आढ़ती व खरीदार</span>
            </div>
            <div className="text-gray-600 font-medium hidden sm:block">
              श्रेणी: {selectedMandiData.marketType}
            </div>
          </div>
        </div>

        {/* Financial Calculation Breakdown Waterfall */}
        <CostBreakdown mandiData={selectedMandiData} />

        {/* Farmer Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
          <button
            type="button"
            onClick={() => handleAction('call')}
            className="py-3.5 px-4 bg-[#20603D] hover:bg-[#1B5E20] text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{t('details.contactTrader')}</span>
          </button>

          <button
            type="button"
            onClick={() => handleAction('gps')}
            className="py-3.5 px-4 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-bold text-xs sm:text-sm rounded-2xl shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Navigation className="w-4 h-4 text-emerald-700" />
            <span>{t('details.getDirections')}</span>
          </button>

          <button
            type="button"
            onClick={() => handleAction('transport')}
            className="py-3.5 px-4 bg-[#EBF7EE] hover:bg-emerald-100 text-[#1B5E20] border border-[#C8E6C9] font-bold text-xs sm:text-sm rounded-2xl shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Truck className="w-4 h-4 text-[#2E7D32]" />
            <span>{t('details.bookTransport')}</span>
          </button>
        </div>
      </div>
    </AppShell>
  );
}
