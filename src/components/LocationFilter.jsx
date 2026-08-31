import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import { LOCATIONS } from '../data/locations';
import { MapPin, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

export default function LocationFilter() {
  const { location, setLocation, showToast } = useApp();
  const { t, language } = useI18n();
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedStateObj = LOCATIONS.find((l) => l.state === location.state) || LOCATIONS[0];
  const selectedDistrictObj =
    selectedStateObj.districts.find((d) => d.id === location.district) ||
    selectedStateObj.districts[0];

  const handleStateChange = (e) => {
    const newState = e.target.value;
    const stateObj = LOCATIONS.find((l) => l.state === newState) || LOCATIONS[0];
    const defaultDistrict = stateObj.districts[0];
    setLocation((prev) => ({
      ...prev,
      state: newState,
      district: defaultDistrict.id,
      districtName: defaultDistrict.name,
    }));
  };

  const handleDistrictChange = (e) => {
    const newDistrictId = e.target.value;
    const distObj = selectedStateObj.districts.find((d) => d.id === newDistrictId);
    setLocation((prev) => ({
      ...prev,
      district: newDistrictId,
      districtName: distObj ? distObj.name : newDistrictId,
    }));
  };

  const handleRadiusChange = (e) => {
    const radius = Number(e.target.value);
    setLocation((prev) => ({ ...prev, radiusKm: radius }));
  };

  const districtDisplayName =
    language === 'hi' || language === 'mr'
      ? selectedDistrictObj.nameHindi
      : selectedDistrictObj.name;
  const stateDisplayName =
    language === 'hi' || language === 'mr'
      ? selectedStateObj.stateHindi
      : selectedStateObj.state;

  return (
    <div className="w-full px-4 mb-3">
      <div className="bg-white/90 backdrop-blur-sm border border-emerald-100 rounded-2xl p-3 shadow-soft transition-all">
        {/* Compact Bar Header */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between cursor-pointer select-none"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
            <div className="w-7 h-7 rounded-full bg-emerald-100/80 flex items-center justify-center text-emerald-800">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-gray-900">
              {districtDisplayName}, {stateDisplayName}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[11px] font-bold">
              {location.radiusKm} {t('location.km')}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs font-medium text-emerald-700">
            <span className="hidden sm:inline">{isExpanded ? 'कम करें' : t('home.locationBar')}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </div>

        {/* Collapsible Full Controls */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-gray-100 space-y-3 animate-fade-in">
            <div className="grid grid-cols-2 gap-2.5">
              {/* State Selector */}
              <div>
                <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                  {t('location.state')}
                </label>
                <select
                  value={location.state}
                  onChange={handleStateChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-gray-800 focus:outline-none focus:border-emerald-600"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc.state} value={loc.state}>
                      {language === 'hi' || language === 'mr' ? loc.stateHindi : loc.state}
                    </option>
                  ))}
                </select>
              </div>

              {/* District Selector */}
              <div>
                <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                  {t('location.district')}
                </label>
                <select
                  value={location.district}
                  onChange={handleDistrictChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-gray-800 focus:outline-none focus:border-emerald-600"
                >
                  {selectedStateObj.districts.map((dist) => (
                    <option key={dist.id} value={dist.id}>
                      {language === 'hi' || language === 'mr' ? dist.nameHindi : dist.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Radius Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-gray-600">{t('location.radius')}</span>
                <span className="font-bold text-emerald-800">{location.radiusKm} km</span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="10"
                value={location.radiusKm}
                onChange={handleRadiusChange}
                className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-700"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>10 km</span>
                <span>120 km (अनुशंसित)</span>
                <span>300 km</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
