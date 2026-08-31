import React from 'react';
import { useApp } from '../context/AppContext';
import KrishiSetuLogo from './illustrations/KrishiSetuLogo';
import { HeaderLanguageDropdown } from './LanguageSelector';
import { Bell } from 'lucide-react';

export default function Header({ showLogo = true, showLanguage = true, showNotifications = true }) {
  const { navigateTo, showToast } = useApp();

  return (
    <header className="relative z-30 w-full max-w-xl mx-auto px-4 pt-3 pb-2 flex items-center justify-between">
      {/* Brand Logo (Change 4: Persistent across screens) */}
      <div className="flex items-center">
        {showLogo && (
          <KrishiSetuLogo
            variant="header"
            onClick={() => navigateTo('farmerHome')}
          />
        )}
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-2.5">
        {showLanguage && <HeaderLanguageDropdown />}

        {showNotifications && (
          <button
            type="button"
            onClick={() => showToast('नई सूचनाएं: आज प्याज और टमाटर के भाव में उछाल!', 'info')}
            className="relative w-9 h-9 flex items-center justify-center bg-white/95 backdrop-blur-sm border border-gray-200/90 rounded-full shadow-sm hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-gray-700 active:scale-95"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 text-gray-700" />
            {/* Red Notification Badge */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-pulse" />
          </button>
        )}
      </div>
    </header>
  );
}
