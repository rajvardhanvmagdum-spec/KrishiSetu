import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import { Store, UserCheck } from 'lucide-react';

export default function FarmerBuyerToggle() {
  const { userType, setUserType, showToast } = useApp();
  const { t } = useI18n();

  const handleToggle = (type) => {
    setUserType(type);
    if (type === 'buyer') {
      showToast(t('userType.comingSoonTitle') + ' - ' + t('userType.comingSoonDesc'), 'info', 4000);
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
            userType === 'farmer'
              ? 'bg-[#1E5128] text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>{t('home.farmerPill')}</span>
        </button>

        {/* Buyer Tab */}
        <button
          type="button"
          onClick={() => handleToggle('buyer')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 relative ${
            userType === 'buyer'
              ? 'bg-[#1E5128] text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'
          }`}
        >
          <Store className="w-4 h-4" />
          <span className="truncate">{t('home.buyerPill')}</span>
          {userType !== 'buyer' && (
            <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.2 bg-amber-200 text-amber-900 rounded font-bold">
              Soon
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
