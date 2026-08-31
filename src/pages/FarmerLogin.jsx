import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FarmerLogin() {
  const { userPhone, setUserPhone, navigateTo, showToast } = useApp();
  const { t } = useI18n();
  const [phoneInput, setPhoneInput] = useState(userPhone || '9876543210');

  const handleSendOtp = (e) => {
    e.preventDefault();
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
          <div className="text-center mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900">
              {t('auth.mobileTitle')}
            </h1>
            <p className="text-sm font-medium text-gray-500 mt-1">
              {t('auth.mobileSubtitle')}
            </p>
            <div className="w-12 h-1 bg-[#2E7D32] rounded-full mx-auto mt-2" />
          </div>

          {/* Form */}
          <form onSubmit={handleSendOtp} className="space-y-6">
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

            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#20603D] hover:bg-[#1B5E20] active:scale-[0.99] text-white font-bold text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 transition-all"
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
