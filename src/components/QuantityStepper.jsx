import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import { Minus, Plus, ChevronDown, Package } from 'lucide-react';

export default function QuantityStepper() {
  const { quantity, setQuantity, unit, setUnit } = useApp();
  const { t, language } = useI18n();
  const [isEditing, setIsEditing] = useState(false);

  const step = unit === 'ton' ? 1 : unit === 'quintal' ? 50 : 50;
  const minQty = unit === 'ton' ? 1 : 10;

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(minQty, prev - step));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + step);
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 0) {
      setQuantity(val);
    } else if (e.target.value === '') {
      setQuantity(0);
    }
  };

  const handleUnitChange = (e) => {
    const newUnit = e.target.value;
    setUnit(newUnit);
    // Sensible defaults when switching units
    if (newUnit === 'ton' && quantity > 50) {
      setQuantity(Math.max(1, Math.round(quantity / 1000)));
    } else if (newUnit === 'quintal' && quantity < 10) {
      setQuantity(500);
    } else if (newUnit === 'kg' && quantity < 50) {
      setQuantity(500);
    }
  };

  return (
    <div className="w-full px-4 mb-4">
      <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-card border border-gray-100/80">
        {/* Card Header (Matches Image 1 exactly) */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
              <Package className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg">
              {t('home.chooseQuantity')}
            </h3>
          </div>

          {/* Right Question Chip */}
          <div className="bg-[#EBF7EE] text-[#1E5128] text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full text-right leading-tight">
            {t('home.quantityQuestion')}
          </div>
        </div>

        {/* Stepper Pill Container (Matches Image 1 exactly) */}
        <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-full flex items-center justify-between p-1.5 sm:p-2 mb-4 shadow-inner">
          {/* Minus Button */}
          <button
            type="button"
            onClick={handleDecrement}
            className="w-14 sm:w-16 h-12 sm:h-14 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-100 active:scale-95 transition-all shadow-sm"
            aria-label="Decrease Quantity"
          >
            <Minus className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Number Display / Input */}
          <div className="flex-1 flex items-center justify-center px-4">
            {isEditing ? (
              <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                onBlur={() => setIsEditing(false)}
                autoFocus
                className="w-32 text-center text-3xl sm:text-4xl font-extrabold text-gray-900 bg-transparent focus:outline-none border-b-2 border-emerald-600"
              />
            ) : (
              <div
                onClick={() => setIsEditing(true)}
                className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight cursor-pointer select-none"
              >
                {quantity.toLocaleString()}
              </div>
            )}
          </div>

          {/* Plus Button */}
          <button
            type="button"
            onClick={handleIncrement}
            className="w-14 sm:w-16 h-12 sm:h-14 rounded-full bg-white flex items-center justify-center text-[#1E5128] hover:bg-gray-100 active:scale-95 transition-all shadow-sm"
            aria-label="Increase Quantity"
          >
            <Plus className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Unit Dropdown Row (Matches Image 1 exactly) */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-semibold text-gray-700">
            {t('home.unitLabel')}
          </span>

          <div className="relative">
            <select
              value={unit}
              onChange={handleUnitChange}
              className="appearance-none bg-white border border-gray-200 hover:border-gray-300 rounded-2xl px-4 py-2.5 pr-10 text-xs sm:text-sm font-bold text-gray-800 shadow-sm focus:outline-none focus:border-emerald-600 cursor-pointer min-w-[170px]"
            >
              <option value="quintal">{t('home.unitQuintal')}</option>
              <option value="kg">{t('home.unitKg')}</option>
              <option value="ton">{t('home.unitTon')}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
