import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import kisanLogo from '../assets/kisan.png';
import vyapariLogo from '../assets/vyapari.png';

export default function FarmerBuyerToggle() {
  const { userType, setUserType, navigateTo, currentScreen } = useApp();
  const { t } = useI18n();

  const activeType =
    currentScreen === 'buyerMarketplace'
      ? 'buyer'
      : currentScreen === 'farmerHome'
      ? 'farmer'
      : userType;

  const handleToggle = (type) => {
    setUserType(type);
    if (type === 'buyer') {
      navigateTo('buyerMarketplace');
    } else {
      navigateTo('farmerHome');
    }
  };

  return (
    <div className="w-full px-4 mb-3">
      <div className="bg-[#E9F3EB] p-1 rounded-2xl flex items-center shadow-inner border border-[#D5E8D8]">
        {/* Farmer Tab */}
        <button
          type="button"
          onClick={() => handleToggle('farmer')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all duration-200 ${
            activeType === 'farmer'
              ? 'bg-[#1E5128] text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'
          }`}
        >
          <img
            src={kisanLogo}
            alt="किसान"
            className="w-5 h-5 object-contain flex-shrink-0"
          />
          <span>{t('home.farmerPill')}</span>
        </button>

        {/* Buyer Tab (Requirement 1: Opens Buyer Marketplace) */}
        <button
          type="button"
          onClick={() => handleToggle('buyer')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 relative ${
            activeType === 'buyer'
              ? 'bg-[#1E5128] text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'
          }`}
        >
          <img
            src={vyapariLogo}
            alt="व्यापारी"
            className="w-5 h-5 object-contain flex-shrink-0"
          />
          <span className="truncate">{t('home.buyerPill')}</span>
          <span className="text-[10px] px-1.5 py-0.2 bg-emerald-200 text-emerald-900 rounded font-bold ml-1">
            New
          </span>
        </button>
      </div>
    </div>
  );
}
