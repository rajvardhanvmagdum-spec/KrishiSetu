import React from 'react';

export default function KrishiSetuLogo({
  variant = 'header', // 'header' | 'splash' | 'iconOnly'
  className = '',
  onClick,
}) {
  const isSplash = variant === 'splash';
  const isIconOnly = variant === 'iconOnly';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Stylized Vibrant Green Sprout / Dual Leaf Icon */}
      <div
        className={`relative flex items-center justify-center flex-shrink-0 ${
          isSplash ? 'w-16 h-16' : 'w-9 h-9'
        }`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Main Leaf (Upper right) */}
          <path
            d="M24 24 C24 10, 36 6, 44 4 C44 14, 40 26, 24 24 Z"
            fill="#4CAF50"
          />
          <path
            d="M24 24 C30 14, 38 9, 44 4 C37 17, 29 22, 24 24 Z"
            fill="#43A047"
          />
          {/* Second Leaf (Left upward) */}
          <path
            d="M24 24 C14 22, 6 14, 4 4 C14 4, 24 12, 24 24 Z"
            fill="#66BB6A"
          />
          {/* Lower Leaf / Root Sprout */}
          <path
            d="M24 24 C22 34, 12 40, 4 44 C8 32, 16 26, 24 24 Z"
            fill="#2E7D32"
          />
          {/* Small accent leaf */}
          <path
            d="M24 24 C28 32, 36 38, 44 42 C38 34, 32 28, 24 24 Z"
            fill="#81C784"
          />
          {/* Central Stem Node */}
          <circle cx="24" cy="24" r="3" fill="#1B5E20" />
        </svg>
      </div>

      {/* Wordmark & Tagline */}
      {!isIconOnly && (
        <div className="flex flex-col text-left">
          <div className="flex items-baseline">
            <span
              className={`font-black tracking-tight leading-none text-[#1B5E20] ${
                isSplash ? 'text-4xl md:text-5xl' : 'text-xl'
              }`}
            >
              Krishi<span className="text-[#2E7D32]">Setu</span>
            </span>
          </div>
          <span
            className={`font-medium tracking-wide text-[#2E7D32] ${
              isSplash ? 'text-sm md:text-base mt-1.5' : 'text-[10px] leading-tight text-gray-500'
            }`}
          >
            Smart Market Linkage
          </span>
        </div>
      )}
    </div>
  );
}
