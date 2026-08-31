import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import AIRecommendation from '../components/AIRecommendation';
import MandiCard from '../components/MandiCard';
import { CropImage } from '../components/illustrations/CropIllustrations';
import { FarmerAvatar } from '../components/illustrations/OnboardingIllustrations';
import { ChevronLeft, ChevronDown, Store, Truck, IndianRupee, Wheat, CheckCircle2 } from 'lucide-react';

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
          {/* Left Column: AI Prediction (Matches Image 2 Screen 11) */}
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

          {/* Right Column: Other Nearby Mandis (Matches Image 2 Screen 12) */}
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

        {/* Bottom Workflow & Happy Farmer Banner (Matches Image 2 Screen 11/12 Footer) */}
        <div className="mt-8 pt-6 border-t border-emerald-100">
          <div className="mb-3 text-left">
            <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
              {t('steps.nextStepTitle')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* 4-Step Pipeline Flow */}
            <div className="md:col-span-7 bg-white rounded-2xl p-3 sm:p-4 border border-gray-100 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-emerald-50/60 border border-emerald-100 flex flex-col items-center">
                  <span className="text-lg mb-1">🏪</span>
                  <span className="font-extrabold text-gray-900 leading-tight">1. {t('steps.step1')}</span>
                </div>
                <div className="p-2 rounded-xl bg-gray-50 flex flex-col items-center">
                  <span className="text-lg mb-1">🚚</span>
                  <span className="font-semibold text-gray-700 leading-tight">2. {t('steps.step2')}</span>
                </div>
                <div className="p-2 rounded-xl bg-gray-50 flex flex-col items-center">
                  <span className="text-lg mb-1">🌾</span>
                  <span className="font-semibold text-gray-700 leading-tight">3. {t('steps.step3')}</span>
                </div>
                <div className="p-2 rounded-xl bg-gray-50 flex flex-col items-center">
                  <span className="text-lg mb-1">💵</span>
                  <span className="font-semibold text-gray-700 leading-tight">4. {t('steps.step4')}</span>
                </div>
              </div>
            </div>

            {/* Farmer Quote Green Card (Matches Image 2) */}
            <div className="md:col-span-5 bg-[#1B5E20] text-white rounded-2xl p-4 shadow-card flex items-center justify-between gap-3">
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold leading-snug">
                  {t('steps.quote')}
                </p>
                <span className="text-[10px] text-emerald-200 block mt-1">
                  KrishiSetu AI Market Engine
                </span>
              </div>
              <FarmerAvatar className="w-14 h-14 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
