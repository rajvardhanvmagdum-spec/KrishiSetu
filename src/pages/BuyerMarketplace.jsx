import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import BuyerCard from '../components/BuyerCard';
import { CropImage } from '../components/illustrations/CropIllustrations';
import {
  ChevronLeft,
  MapPin,
  SlidersHorizontal,
  ArrowUpDown,
  SearchX,
  Plus,
  ShieldCheck,
} from 'lucide-react';

export default function BuyerMarketplace() {
  const {
    selectedCrop,
    location,
    setLocation,
    filteredBuyers,
    setSelectedBuyerId,
    navigateTo,
    goBack,
  } = useApp();
  const { t, language } = useI18n();

  const handleSelectBuyer = (buyer) => {
    setSelectedBuyerId(buyer.id);
    navigateTo('buyerDetails');
  };

  const handleExpandRadius = () => {
    setLocation((prev) => ({
      ...prev,
      radiusKm: Math.min(300, prev.radiusKm + 50),
    }));
  };

  return (
    <AppShell showHeader={true} showBackground={true} maxWidth="max-w-4xl">
      <div className="flex-1 flex flex-col px-4 pt-2 pb-12">
        {/* Navigation & Summary Bar */}
        <div className="flex items-center justify-between gap-3 mb-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-emerald-100 shadow-soft">
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-gray-700 hover:text-emerald-800 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t('nav.back')}</span>
          </button>

          {/* Selected Crop & Radius Summary Chip */}
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
            <CropImage cropId={selectedCrop.id} className="w-5 h-5" />
            <span className="text-xs sm:text-sm font-black text-[#1E5128]">
              {selectedCrop.hindiName} ({location.radiusKm} km {t('location.kmRadius')})
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

        {/* Header Title & Sorting Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h1 className="text-lg sm:text-xl font-black text-gray-900 leading-tight flex items-center gap-2">
              <span>🏪</span>
              <span>{t('marketplace.title')}</span>
            </h1>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              {t('marketplace.subtitle')}
            </p>
          </div>

          {/* Sort Info Badge (Requirement 5: price DESC) */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl text-xs font-bold text-[#1E5128] self-start sm:self-auto">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>{t('marketplace.sortedByPrice')}</span>
          </div>
        </div>

        {/* Buyers Count & Active Filters Strip */}
        <div className="flex items-center justify-between text-xs text-gray-600 mb-3 px-1">
          <span className="font-bold text-emerald-900">
            {t('marketplace.buyersFound', { count: filteredBuyers.length })}
          </span>
          <span className="font-medium text-gray-400">
            {location.districtName}, {location.state}
          </span>
        </div>

        {/* Buyers List or Empty State */}
        {filteredBuyers.length > 0 ? (
          <div className="space-y-3">
            {filteredBuyers.map((buyer) => (
              <BuyerCard
                key={buyer.id}
                buyer={buyer}
                onSelect={handleSelectBuyer}
              />
            ))}
          </div>
        ) : (
          /* Empty State (Requirement 13) */
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-card text-center my-6 space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600">
              <SearchX className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-gray-900">
                {t('marketplace.noBuyersTitle')}
              </h3>
              <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                {t('marketplace.noBuyersDesc', {
                  radius: location.radiusKm,
                  crop: selectedCrop.hindiName,
                })}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                type="button"
                onClick={handleExpandRadius}
                className="px-4 py-2.5 bg-[#20603D] hover:bg-[#1B5E20] text-white text-xs font-bold rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>+50 km {t('marketplace.increaseRadius')}</span>
              </button>

              <button
                type="button"
                onClick={() => navigateTo('farmerHome')}
                className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition-all"
              >
                अन्य फसल चुनें (Change Crop)
              </button>
            </div>
          </div>
        )}

        {/* Bottom Trust Badge */}
        <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800">
          <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
          <span>कृषिसितु प्रत्यक्ष मंडी लिंकेज • 100% सत्यापित खरीदार व सुरक्षा</span>
        </div>
      </div>
    </AppShell>
  );
}
