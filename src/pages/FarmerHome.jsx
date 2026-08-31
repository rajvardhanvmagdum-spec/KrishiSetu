import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import FarmerBuyerToggle from '../components/FarmerBuyerToggle';
import LocationFilter from '../components/LocationFilter';
import CropCarousel from '../components/CropCarousel';
import QuantityStepper from '../components/QuantityStepper';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FarmerHome() {
  const { navigateTo } = useApp();
  const { t } = useI18n();

  const handleRunAnalysis = () => {
    navigateTo('marketAnalysis');
  };

  return (
    <AppShell showHeader={true} showBackground={true}>
      <div className="flex-1 flex flex-col pb-8">
        {/* Hero Section (Matches Image 1 Header & Typography) */}
        <div className="px-5 pt-3 pb-4">
          <div className="max-w-xs">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t('home.heroTitle')}
            </h1>
            <p className="text-sm sm:text-base font-bold text-[#1E5128] mt-1">
              {t('home.heroSubtitle')}
            </p>
            {/* Green Underline Accent (Image 1 reference) */}
            <div className="w-16 h-1 bg-[#2E7D32] rounded-full mt-2.5" />
          </div>
        </div>

        {/* Farmer / Buyer Segmented Switch (Change 3) */}
        <FarmerBuyerToggle />

        {/* Compact Location & Radius Row */}
        <LocationFilter />

        {/* Crop Selection Section (Change 1 & Image 1 Reference) */}
        <CropCarousel />

        {/* Quantity Selection Section (Change 1 & Image 1 Reference) */}
        <QuantityStepper />

        {/* Primary Action Button (Matches Image 1 CTA) */}
        <div className="w-full px-4 mb-3">
          <button
            type="button"
            onClick={handleRunAnalysis}
            className="w-full py-4 px-6 bg-[#20603D] hover:bg-[#1B5E20] active:scale-[0.99] text-white font-bold text-base sm:text-lg rounded-2xl shadow-cta flex items-center justify-center gap-2.5 transition-all duration-200"
          >
            <Sparkles className="w-5 h-5 text-emerald-300 animate-pulse" />
            <span>{t('home.ctaAnalysis')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Info Strip below CTA (Matches Image 1 bottom banner) */}
        <div className="w-full px-4">
          <div className="w-full bg-[#EBF7EE] border border-[#D0EBD6] rounded-2xl py-3 px-4 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1B5E20] text-center shadow-sm">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E7D32] flex-shrink-0" />
            <span>{t('home.infoStrip')}</span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
