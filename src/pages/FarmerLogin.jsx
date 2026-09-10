import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FarmerLogin() {
  const { userType, userPhone, setUserPhone, navigateTo, showToast } = useApp();
  const { t } = useI18n();
  const isBuyer = userType === 'buyer';
  const [phoneInput, setPhoneInput] = useState(userPhone || '9876543210');
  const [buyerName, setBuyerName] = useState('');
  const [marketId, setMarketId] = useState('');
  const [aadhaarId, setAadhaarId] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (isBuyer && !buyerName.trim()) {
      showToast('कृपया खरीदार का नाम दर्ज करें (Please enter Buyer Name)', 'warning');
      return;
    }
    if (phoneInput.length >= 10) {
      setUserPhone(phoneInput);
      showToast('OTP भेजा गया: 247186', 'success');
      navigateTo('otpVerification');
    } else {
      showToast('कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें', 'warning');
    }
  };

  return (
    <AppShell showHeader={true} showBackground={true}>
      <div className="flex-1 flex flex-col justify-between px-5 pt-3 pb-8 max-w-sm mx-auto w-full">
        <div>
          {/* Header Title (Matches Image 2 Screen 4) */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-gray-900">
              {isBuyer ? 'खरीदार विवरण / पंजीकरण' : t('auth.mobileTitle')}
            </h1>
            <p className="text-sm font-medium text-gray-500 mt-1">
              {isBuyer ? 'Buyer Registration & Login' : t('auth.mobileSubtitle')}
            </p>
            <div className="w-12 h-1 bg-[#2E7D32] rounded-full mx-auto mt-2" />
          </div>

          {/* Form */}
          <form onSubmit={handleSendOtp} className="space-y-3.5">
            {isBuyer ? (
              <>
                {/* 1. Buyer Name (Required) */}
                <div className="bg-white rounded-2xl px-4 py-2.5 border-2 border-emerald-600/60 shadow-soft focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 flex items-center gap-3">
                  <input
                    type="text"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="Buyer Name *"
                    required
                    className="w-full py-1 text-base font-bold text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
                    autoFocus
                  />
                </div>

                {/* 2. Phone Number (Required) */}
                <div className="bg-white rounded-2xl p-2 border-2 border-emerald-600/60 shadow-soft focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 flex items-center gap-3">
                  <div className="flex items-center gap-1.5 pl-3 pr-2 py-2 border-r border-gray-200 text-gray-800 font-bold text-base">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>

                  <input
                    type="tel"
                    maxLength={10}
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ''))}
                    placeholder="Phone Number *"
                    required
                    className="w-full py-2 pr-3 text-base font-bold text-gray-900 placeholder-gray-400 focus:outline-none tracking-wider bg-transparent"
                  />
                </div>

                {/* 3. Market ID (Optional) */}
                <div className="bg-white rounded-2xl px-4 py-2.5 border-2 border-gray-200 shadow-soft focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 flex items-center gap-3">
                  <input
                    type="text"
                    value={marketId}
                    onChange={(e) => setMarketId(e.target.value)}
                    placeholder="Market ID (Optional)"
                    className="w-full py-1 text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
                  />
                </div>

                {/* 4. Aadhaar ID (Optional) */}
                <div className="bg-white rounded-2xl px-4 py-2.5 border-2 border-gray-200 shadow-soft focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 flex items-center gap-3">
                  <input
                    type="text"
                    maxLength={14}
                    value={aadhaarId}
                    onChange={(e) => setAadhaarId(e.target.value)}
                    placeholder="Aadhaar ID (Optional)"
                    className="w-full py-1 text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
                  />
                </div>
              </>
            ) : (
              /* Farmer Phone Number Form (Original) */
              <div className="bg-white rounded-2xl p-2 border-2 border-emerald-600/60 shadow-soft focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 flex items-center gap-3">
                <div className="flex items-center gap-1.5 pl-3 pr-2 py-2 border-r border-gray-200 text-gray-800 font-bold text-base">
                  <span>🇮🇳</span>
                  <span>+91</span>
                </div>

                <input
                  type="tel"
                  maxLength={10}
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ''))}
                  placeholder={t('auth.mobilePlaceholder')}
                  className="w-full py-2 pr-3 text-lg font-bold text-gray-900 placeholder-gray-300 focus:outline-none tracking-wider bg-transparent"
                  autoFocus
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#20603D] hover:bg-[#1B5E20] active:scale-[0.99] text-white font-bold text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 transition-all pt-3.5"
            >
              <span>{t('auth.sendOtp')}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Terms and Privacy notice */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
            {t('auth.termsNotice')}
          </p>
        </div>
      </div>
    </AppShell>
  );
}
