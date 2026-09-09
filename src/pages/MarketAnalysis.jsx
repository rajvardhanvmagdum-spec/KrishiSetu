import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import AIRecommendation from '../components/AIRecommendation';
import MandiCard from '../components/MandiCard';
import { CropImage } from '../components/illustrations/CropIllustrations';
import {
  ChevronLeft,
  Coins,
  TrendingUp,
  MapPin,
  Sparkles,
  Truck,
  Scale,
  ShieldCheck,
} from 'lucide-react';

export default function MarketAnalysis() {
  const {
    selectedCrop,
    quantity,
    unit,
    location,
    bestMandi,
    otherMandis,
    setSelectedMandiId,
    navigateTo,
    goBack,
  } = useApp();
  const { t, language } = useI18n();
  const [showAllMandis, setShowAllMandis] = useState(false);

  const handleSelectMandi = (mandi) => {
    setSelectedMandiId(mandi.mandiId);
    navigateTo('mandiDetails');
  };

  const displayedMandis = showAllMandis ? otherMandis : otherMandis.slice(0, 4);

  // 4–6 Key KrishiSetu Advantages (Requirements 16 & 17)
  const advantages = [
    { icon: <Coins className="w-4 h-4 text-emerald-700" />, label: t('advantages.betterPrice') },
    { icon: <TrendingUp className="w-4 h-4 text-emerald-700" />, label: t('advantages.higherNetReturn') },
    { icon: <MapPin className="w-4 h-4 text-emerald-700" />, label: t('advantages.nearbyMarkets') },
    { icon: <Sparkles className="w-4 h-4 text-emerald-700" />, label: t('advantages.aiAnalysis') },
    { icon: <Truck className="w-4 h-4 text-emerald-700" />, label: t('advantages.transportEstimate') },
    { icon: <Scale className="w-4 h-4 text-emerald-700" />, label: t('advantages.marketComparison') },
  ];

  return (
    <AppShell showHeader={true} showBackground={true} maxWidth="max-w-5xl">
      <div className="flex-1 flex flex-col px-4 pt-2 pb-12">
        {/* Navigation & Summary Bar */}
        <div className="flex items-center justify-between gap-3 mb-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-emerald-100 shadow-soft">
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-gray-700 hover:text-emerald-800 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t('nav.back')}</span>
          </button>

          {/* Selected Crop & Quantity Summary Chip */}
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
            <CropImage cropId={selectedCrop.id} className="w-5 h-5" />
            <span className="text-xs sm:text-sm font-black text-[#1E5128]">
              {selectedCrop.hindiName} ({quantity} {unit === 'quintal' ? 'क्विंटल' : unit === 'kg' ? 'kg' : 'टन'})
            </span>
          </div>

          <button
            type="button"
            onClick={() => navigateTo('farmerHome')}
            className="text-xs font-semibold text-emerald-700 hover:underline hidden xs:inline"
          >
            बदलें (Change)
          </button>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column: AI Prediction (Requirement 18: Preserved) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
              <h2 className="text-sm font-bold text-[#1E5128] uppercase tracking-wider">
                {t('analysis.title')}
              </h2>
            </div>

            <AIRecommendation
              mandi={bestMandi}
              onSelect={handleSelectMandi}
            />
          </div>

          {/* Right Column: Other Nearby Mandis (Requirement 18: Preserved) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm sm:text-base font-extrabold text-gray-900 flex items-center gap-1.5">
                <span>📍</span>
                <span>{t('analysis.otherMandisCount', { count: otherMandis.length })}</span>
              </h2>
              <span className="text-[11px] font-semibold text-gray-400">
                दूरी अनुसार व्यवस्थित
              </span>
            </div>

            {/* Mandi Cards List */}
            <div className="space-y-2.5">
              {displayedMandis.map((mandi, idx) => (
                <MandiCard
                  key={mandi.mandiId}
                  index={idx + 1}
                  mandi={mandi}
                  onSelect={handleSelectMandi}
                />
              ))}
            </div>

            {/* Load More Button */}
            {otherMandis.length > 4 && (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setShowAllMandis(!showAllMandis)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 text-xs font-bold text-gray-700 rounded-xl shadow-sm transition-all"
                >
                  <span>{showAllMandis ? 'कम देखें ↑' : t('analysis.seeMoreMandis') + ' ↓'}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM SECTION: Horizontal KrishiSetu Advantages Strip (Requirements 16 & 17) */}
        <div className="mt-8 pt-5 border-t border-emerald-100/90">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-extrabold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              {t('advantages.title')}
            </span>
          </div>

          {/* Horizontally Scrollable Compact Advantages Strip */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-2xl border border-emerald-100 shadow-soft text-xs font-bold text-gray-800 flex-shrink-0 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all select-none"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  {adv.icon}
                </div>
                <span className="whitespace-nowrap">{adv.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
