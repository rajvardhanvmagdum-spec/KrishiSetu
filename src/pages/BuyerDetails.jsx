import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import { CropImage } from '../components/illustrations/CropIllustrations';
import {
  ChevronLeft,
  MapPin,
  Star,
  ShieldCheck,
  Phone,
  Navigation,
  CheckCircle2,
  Coins,
  Package,
  Calendar,
  CreditCard,
  Building2,
} from 'lucide-react';

export default function BuyerDetails() {
  const { selectedBuyerData, goBack, handleApplyBuyer } = useApp();
  const { t, language } = useI18n();

  if (!selectedBuyerData) {
    return (
      <AppShell showHeader={true} showBackground={true} maxWidth="max-w-3xl">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-gray-500 font-bold mb-4">कोई खरीदार चयनित नहीं है</p>
          <button
            onClick={goBack}
            className="px-4 py-2 bg-[#20603D] text-white rounded-xl font-bold text-sm"
          >
            {t('nav.back')}
          </button>
        </div>
      </AppShell>
    );
  }

  const buyer = selectedBuyerData;

  const displayName =
    language === 'hi' || language === 'mr'
      ? buyer.nameHindi || buyer.name
      : buyer.name;

  const displayLocation =
    language === 'hi' || language === 'mr'
      ? buyer.locationNameHindi || buyer.locationName
      : buyer.locationName;

  const handleOpenGps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${buyer.lat},${buyer.lng}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AppShell showHeader={true} showBackground={true} maxWidth="max-w-3xl">
      <div className="flex-1 flex flex-col px-4 pt-2 pb-12">
        {/* Top Header Bar with Back Button & TOP-RIGHT Contact Button */}
        <div className="flex items-center justify-between gap-3 mb-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-emerald-100 shadow-soft">
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-gray-700 hover:text-emerald-800 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t('nav.back')}</span>
          </button>

          <span className="text-sm font-extrabold text-gray-900 hidden xs:inline">
            {t('marketplace.dealOverview')}
          </span>

          {/* Top-Right Contact Buyer Button (Requirement 10: Opens phone dialer tel:<phone>) */}
          <a
            href={`tel:${buyer.phone}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#20603D] hover:bg-[#1B5E20] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all active:scale-95"
            aria-label="Contact Buyer"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{t('marketplace.contactBuyer')}</span>
          </a>
        </div>

        {/* Buyer Profile Overview Card */}
        <div className="bg-white rounded-3xl p-5 shadow-card border border-emerald-100 mb-4 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                  <Building2 className="w-6 h-6 text-[#2E7D32]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                      {displayName}
                    </h1>
                    {buyer.verified && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                        सत्यापित (Verified)
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    {displayLocation} • {buyer.companyType}
                  </p>
                </div>
              </div>
            </div>

            {/* Rating / Stars */}
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-amber-900 font-extrabold text-xs flex-shrink-0">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>{buyer.rating}</span>
              <span className="text-[10px] text-gray-400">({buyer.ratingCount})</span>
            </div>
          </div>

          {/* Top Key Parameters: Location, Crop, Price/kg, Required Quantity, Distance */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-3 border-t border-gray-100">
            {/* Location */}
            <div className="bg-gray-50 p-2.5 rounded-2xl border border-gray-100">
              <span className="text-[10px] font-semibold text-gray-400 block flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600" />
                स्थान (Location)
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-900 block truncate mt-0.5">
                {displayLocation}
              </span>
            </div>

            {/* Crop */}
            <div className="bg-gray-50 p-2.5 rounded-2xl border border-gray-100">
              <span className="text-[10px] font-semibold text-gray-400 block flex items-center gap-1">
                <span className="text-xs">🌾</span>
                फसल (Crop)
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <CropImage cropId={buyer.cropId} className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-bold text-gray-900">
                  {buyer.cropName}
                </span>
              </div>
            </div>

            {/* Price/kg */}
            <div className="bg-emerald-50/70 p-2.5 rounded-2xl border border-emerald-100">
              <span className="text-[10px] font-semibold text-emerald-800 block flex items-center gap-1">
                <Coins className="w-3 h-3 text-emerald-600" />
                {t('marketplace.offeredPrice')}
              </span>
              <span className="text-xs sm:text-sm font-black text-[#1E5128] block mt-0.5">
                ₹{buyer.offeredPrice.toFixed(0)}/kg
              </span>
            </div>

            {/* Required Quantity */}
            <div className="bg-gray-50 p-2.5 rounded-2xl border border-gray-100">
              <span className="text-[10px] font-semibold text-gray-400 block flex items-center gap-1">
                <Package className="w-3 h-3 text-emerald-600" />
                मांग (Required)
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-900 block mt-0.5">
                {buyer.requiredQty} kg
              </span>
            </div>

            {/* Actual Distance */}
            <div className="col-span-2 sm:col-span-1 bg-gray-50 p-2.5 rounded-2xl border border-gray-100">
              <span className="text-[10px] font-semibold text-gray-400 block flex items-center gap-1">
                <Navigation className="w-3 h-3 text-emerald-600" />
                {t('marketplace.distance')}
              </span>
              <span className="text-xs sm:text-sm font-black text-gray-900 block mt-0.5">
                Distance: {buyer.roundedDistance} km
              </span>
            </div>
          </div>
        </div>

        {/* PROMINENT TOTAL AMOUNT SECTION (Requirement 6: Prominently display amount, green style, ZERO loss) */}
        <div className="bg-gradient-to-br from-[#EBF7EE] via-[#E2F4E6] to-[#C8E6C9] border-2 border-[#2E7D32] rounded-3xl p-6 text-center shadow-card mb-4 relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xs sm:text-sm font-black text-[#1E5128] uppercase tracking-wider">
              {t('marketplace.totalAmount')}
            </span>
          </div>

          <div className="text-4xl sm:text-6xl font-black text-[#1B5E20] tracking-tight my-2">
            ₹{buyer.totalAmount.toLocaleString()}
          </div>

          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-emerald-300/80 text-xs font-bold text-emerald-900 shadow-xs">
            <span>{buyer.requiredQty} kg</span>
            <span>×</span>
            <span>₹{buyer.offeredPrice.toFixed(0)}/kg</span>
            <span>=</span>
            <span className="text-[#1E5128] font-black">₹{buyer.totalAmount.toLocaleString()}</span>
          </div>
        </div>

        {/* Action Buttons directly below Total Amount (Requirement 7: View Buyer Location; Requirement 9: Apply) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {/* View Buyer Location Button (opens buyer coordinates in Google Maps) */}
          <button
            type="button"
            onClick={handleOpenGps}
            className="py-4 px-5 bg-white hover:bg-gray-50 text-gray-800 border-2 border-emerald-600/60 font-bold text-sm sm:text-base rounded-2xl shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Navigation className="w-5 h-5 text-emerald-700" />
            <span>{t('marketplace.viewBuyerLocation')}</span>
          </button>

          {/* Primary Apply Button */}
          <button
            type="button"
            onClick={(e) => handleApplyBuyer(buyer, e)}
            className="py-4 px-5 bg-[#20603D] hover:bg-[#1B5E20] text-white font-bold text-sm sm:text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-300" />
            <span>{t('marketplace.apply')}</span>
          </button>
        </div>

        {/* Deal Terms & Verified Buyer Guarantee */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-card border border-gray-100 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-gray-500 flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-gray-400" />
              {t('marketplace.paymentTerms')}
            </span>
            <span className="font-bold text-gray-800 bg-gray-50 px-2.5 py-1 rounded-xl border border-gray-100">
              {buyer.paymentTerms}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-100">
            <span className="font-semibold text-gray-500 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-gray-400" />
              कुल आवश्यक मात्रा
            </span>
            <span className="font-bold text-gray-800">
              {buyer.requiredQty} kg ({buyer.cropName})
            </span>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-gray-100 text-xs font-semibold text-emerald-800 bg-emerald-50/50 p-2.5 rounded-2xl">
            <ShieldCheck className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
            <span>कृषिसितु सत्यापित खरीदार • प्रत्यक्ष भुगतान गारंटी</span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
