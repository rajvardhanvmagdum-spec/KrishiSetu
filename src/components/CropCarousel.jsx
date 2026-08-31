import React, { useRef, useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import { CROPS } from '../data/crops';
import { CropImage } from './illustrations/CropIllustrations';
import { ChevronLeft, ChevronRight, Check, Sprout } from 'lucide-react';

export default function CropCarousel() {
  const { selectedCrop, setSelectedCrop } = useApp();
  const { t, language } = useI18n();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cropsList = CROPS;

  useEffect(() => {
    const idx = cropsList.findIndex((c) => c.id === selectedCrop.id);
    if (idx !== -1) setActiveIndex(idx);
  }, [selectedCrop]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -180 : 180;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSelectCrop = (crop, idx) => {
    setSelectedCrop(crop);
    setActiveIndex(idx);
  };

  const getCropDisplayName = (crop) => {
    if (language === 'hi') return crop.hindiName;
    if (language === 'mr') return crop.id === 'tomato' ? 'टोमॅटो' : crop.id === 'onion' ? 'कांदा' : crop.id === 'potato' ? 'बटाटा' : crop.id === 'brinjal' ? 'वांगी' : crop.id === 'chilli' ? 'मिरची' : crop.id === 'cucumber' ? 'काकडी' : 'इतर';
    if (language === 'gu') return crop.id === 'tomato' ? 'ટામેટાં' : crop.id === 'onion' ? 'ડુંગળી' : crop.id === 'potato' ? 'બટાકા' : crop.id === 'brinjal' ? 'રીંગણા' : crop.id === 'chilli' ? 'મરચાં' : crop.id === 'cucumber' ? 'કાકડી' : 'અન્ય';
    if (language === 'te') return crop.id === 'tomato' ? 'టమోటా' : crop.id === 'onion' ? 'ఉల్లిపాయ' : crop.id === 'potato' ? 'బంగాళాదుంప' : crop.id === 'brinjal' ? 'వంకాయ' : crop.id === 'chilli' ? 'మిర్చి' : crop.id === 'cucumber' ? 'కీరదోస' : 'ఇతర';
    return crop.englishName;
  };

  return (
    <div className="w-full px-4 mb-4">
      <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-card border border-gray-100/80">
        {/* Card Header (Matches Image 1 exactly) */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
              <Sprout className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg">
              {t('home.chooseCrop')}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs text-gray-400 font-medium hidden xs:inline">
              {t('home.swipeHint')}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
                aria-label="Previous Crop"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('right')}
                className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
                aria-label="Next Crop"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Row */}
        <div
          ref={scrollRef}
          className="flex items-center gap-3.5 sm:gap-5 overflow-x-auto py-2 px-1 no-scrollbar scroll-smooth"
        >
          {cropsList.map((crop, idx) => {
            const isSelected = crop.id === selectedCrop.id;
            return (
              <div
                key={crop.id}
                onClick={() => handleSelectCrop(crop, idx)}
                className="flex flex-col items-center flex-shrink-0 cursor-pointer group select-none transition-transform active:scale-95"
              >
                {/* Circular Crop Container */}
                <div className="relative">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center p-2 transition-all duration-200 ${
                      isSelected
                        ? 'ring-2 ring-[#2E7D32] ring-offset-2 ring-offset-white bg-[#F0FDF4] shadow-sm'
                        : 'bg-[#F8FAFC] border border-gray-100 group-hover:border-gray-300'
                    }`}
                  >
                    <CropImage cropId={crop.id} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                  </div>

                  {/* Green Checkmark Badge for Selected Crop (Image 1 reference) */}
                  {isSelected && (
                    <div className="absolute top-0 right-0 w-5 h-5 bg-[#2E7D32] text-white rounded-full flex items-center justify-center shadow-sm border border-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>

                {/* Crop Name */}
                <span
                  className={`text-xs sm:text-sm mt-2 font-bold tracking-tight text-center transition-colors ${
                    isSelected ? 'text-[#2E7D32]' : 'text-gray-700'
                  }`}
                >
                  {getCropDisplayName(crop)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Dot Pagination Bar (Matches Image 1 exactly) */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {cropsList.map((crop, idx) => (
            <button
              key={crop.id}
              type="button"
              onClick={() => handleSelectCrop(crop, idx)}
              className={`transition-all duration-200 ${
                idx === activeIndex
                  ? 'w-6 h-2 bg-[#2E7D32] rounded-full'
                  : 'w-2 h-2 bg-gray-200 hover:bg-gray-300 rounded-full'
              }`}
              aria-label={`Select ${crop.englishName}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
