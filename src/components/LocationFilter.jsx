import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import { LOCATIONS } from '../data/locations';
import { MapPin, Sliders, ChevronDown } from 'lucide-react';

export default function LocationFilter() {
  const { location, setLocation } = useApp();
  const { t, language } = useI18n();

  const selectedStateObj = LOCATIONS.find((l) => l.state === location.state) || LOCATIONS[0];

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

  return (
    <div className="w-full px-4 mb-3">
      {/* Directly Visible Location & Radius Card (Requirement 3) */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-card border border-emerald-100/90 space-y-3.5">
        {/* Header Label: State → District → Radius */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
              <MapPin className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
              {t('location.selectRegion')}
            </h3>
          </div>

          {/* Quick Indicator Badge */}
          <div className="bg-emerald-50 border border-emerald-200 text-[#1E5128] text-[11px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
            <span>{location.state}</span>
            <span>→</span>
            <span>{location.districtName}</span>
            <span>•</span>
            <span>{location.radiusKm} km</span>
          </div>
        </div>

        {/* State and District Dropdowns Directly Visible */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* State Dropdown */}
          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">
              {t('location.state')}
            </label>
            <div className="relative">
              <select
                value={location.state}
                onChange={handleStateChange}
                className="w-full appearance-none bg-gray-50 hover:bg-gray-100/80 border border-gray-200 rounded-xl px-3 py-2 pr-8 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600 cursor-pointer shadow-inner"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.state} value={loc.state}>
                    {language === 'hi' || language === 'mr' ? loc.stateHindi : loc.state}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* District Dropdown */}
          <div>
            <label className="block text-[11px] font-bold text-gray-600 mb-1">
              {t('location.district')}
            </label>
            <div className="relative">
              <select
                value={location.district}
                onChange={handleDistrictChange}
                className="w-full appearance-none bg-gray-50 hover:bg-gray-100/80 border border-gray-200 rounded-xl px-3 py-2 pr-8 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600 cursor-pointer shadow-inner"
              >
                {selectedStateObj.districts.map((dist) => (
                  <option key={dist.id} value={dist.id}>
                    {language === 'hi' || language === 'mr' ? dist.nameHindi : dist.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Radius Slider Directly Visible */}
        <div className="pt-1">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-gray-700 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-emerald-600" />
              {t('location.radius')}
            </span>
            <span className="font-black text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200 text-xs">
              {location.radiusKm} km
            </span>
          </div>

          <input
            type="range"
            min="10"
            max="300"
            step="10"
            value={location.radiusKm}
            onChange={handleRadiusChange}
            className="w-full h-2.5 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-[#20603D]"
          />

          <div className="flex justify-between text-[10px] font-semibold text-gray-400 mt-1">
            <span>10 km</span>
            <span className="text-[#20603D] font-bold">120 km (डिफ़ॉल्ट / Default)</span>
            <span>300 km</span>
          </div>
        </div>
      </div>
    </div>
  );
}
