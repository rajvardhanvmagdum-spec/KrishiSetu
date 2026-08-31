import React from 'react';

export function CropImage({ cropId, className = 'w-16 h-16' }) {
  switch (cropId) {
    case 'tomato':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="tomGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="45%" stopColor="#E53935" />
              <stop offset="90%" stopColor="#C62828" />
              <stop offset="100%" stopColor="#B71C1C" />
            </radialGradient>
            <radialGradient id="tomHighlight" cx="30%" cy="25%" r="35%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Shadow */}
          <ellipse cx="50" cy="86" rx="34" ry="7" fill="#000000" fillOpacity="0.12" />
          {/* Main Body */}
          <circle cx="50" cy="54" r="34" fill="url(#tomGrad)" />
          {/* Highlight */}
          <ellipse cx="40" cy="44" rx="14" ry="9" fill="url(#tomHighlight)" transform="rotate(-20 40 44)" />
          {/* Green Calyx / Stem */}
          <path d="M50 26 C50 18, 54 12, 56 8 C53 10, 50 12, 48 18 Z" fill="#2E7D32" />
          <path d="M50 24 L58 16 L53 26 L64 22 L54 29 L62 34 L51 32 L46 38 L47 30 L36 34 L44 27 L34 22 L45 25 L40 16 Z" fill="#4CAF50" />
          <circle cx="50" cy="26" r="3.5" fill="#2E7D32" />
        </svg>
      );

    case 'onion':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="onionGrad" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#CE93D8" />
              <stop offset="35%" stopColor="#AB47BC" />
              <stop offset="80%" stopColor="#7B1FA2" />
              <stop offset="100%" stopColor="#4A148C" />
            </radialGradient>
            <linearGradient id="onionSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8E24AA" />
              <stop offset="100%" stopColor="#4A148C" />
            </linearGradient>
          </defs>
          {/* Shadow */}
          <ellipse cx="50" cy="87" rx="30" ry="6" fill="#000000" fillOpacity="0.12" />
          {/* Onion Body */}
          <path
            d="M50 22 C32 22, 20 38, 20 56 C20 74, 34 84, 50 84 C66 84, 80 74, 80 56 C80 38, 68 22, 50 22 Z"
            fill="url(#onionGrad)"
          />
          {/* Onion Vertical Texture Lines */}
          <path d="M50 22 Q34 50 40 83" stroke="#BA68C8" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M50 22 Q66 50 60 83" stroke="#BA68C8" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M50 22 Q24 54 30 76" stroke="#CE93D8" strokeWidth="1.2" fill="none" opacity="0.4" />
          <path d="M50 22 Q76 54 70 76" stroke="#CE93D8" strokeWidth="1.2" fill="none" opacity="0.4" />
          {/* Sprout tip & Roots */}
          <path d="M47 22 L49 10 L51 10 L53 22 Z" fill="#689F38" />
          <path d="M49 12 L56 6 L53 14 Z" fill="#8BC34A" />
          <path d="M46 84 L48 90 M50 84 L50 92 M54 84 L52 90" stroke="#BCAAA4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'potato':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="potGrad1" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="50%" stopColor="#FFB300" />
              <stop offset="90%" stopColor="#C97D10" />
              <stop offset="100%" stopColor="#8D5B04" />
            </radialGradient>
            <radialGradient id="potGrad2" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFD54F" />
              <stop offset="60%" stopColor="#FFA000" />
              <stop offset="100%" stopColor="#7E4E03" />
            </radialGradient>
          </defs>
          {/* Shadow */}
          <ellipse cx="50" cy="85" rx="36" ry="7" fill="#000000" fillOpacity="0.12" />
          {/* Back Potato */}
          <path
            d="M30 45 C30 30, 48 24, 66 28 C82 32, 88 48, 84 64 C80 78, 60 82, 44 78 C28 74, 30 58, 30 45 Z"
            fill="url(#potGrad2)"
          />
          {/* Front Potato */}
          <path
            d="M18 58 C18 42, 32 36, 50 38 C66 40, 74 54, 70 68 C66 80, 48 84, 34 82 C20 80, 18 70, 18 58 Z"
            fill="url(#potGrad1)"
          />
          {/* Potato Eyes / Dots */}
          <circle cx="34" cy="52" r="1.5" fill="#6D4C41" />
          <path d="M32 53 Q34 51 36 53" stroke="#5D4037" strokeWidth="1" fill="none" />
          <circle cx="52" cy="60" r="1.5" fill="#6D4C41" />
          <circle cx="42" cy="70" r="1.5" fill="#6D4C41" />
          <circle cx="70" cy="48" r="1.5" fill="#5D4037" />
          <circle cx="60" cy="38" r="1.2" fill="#5D4037" />
        </svg>
      );

    case 'brinjal':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="brinGrad" cx="30%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#7E57C2" />
              <stop offset="35%" stopColor="#4A148C" />
              <stop offset="80%" stopColor="#311B92" />
              <stop offset="100%" stopColor="#1A0038" />
            </radialGradient>
            <radialGradient id="brinHighlight" cx="30%" cy="35%" r="40%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Shadow */}
          <ellipse cx="50" cy="88" rx="26" ry="6" fill="#000000" fillOpacity="0.12" />
          {/* Glossy Eggplant Body */}
          <path
            d="M48 30 C38 32, 24 50, 26 68 C28 82, 40 88, 54 88 C68 88, 76 78, 74 62 C72 46, 56 30, 48 30 Z"
            fill="url(#brinGrad)"
          />
          {/* Gloss Reflection */}
          <ellipse cx="38" cy="58" rx="6" ry="16" fill="url(#brinHighlight)" transform="rotate(-15 38 58)" />
          {/* Green Calyx / Cap & Stem */}
          <path d="M48 30 L46 14 C46 10, 52 10, 52 14 L50 30 Z" fill="#2E7D32" />
          <path d="M48 30 C44 26, 36 28, 32 34 C38 36, 42 38, 48 32 C52 38, 58 38, 64 32 C60 38, 66 40, 68 34 C64 28, 54 26, 48 30 Z" fill="#43A047" />
        </svg>
      );

    case 'chilli':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chilliGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#81C784" />
              <stop offset="40%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
          </defs>
          {/* Shadow */}
          <ellipse cx="50" cy="86" rx="34" ry="6" fill="#000000" fillOpacity="0.12" />
          {/* Chilli 1 (Left) */}
          <path
            d="M28 32 Q22 55 35 78 Q30 78 22 52 Q22 36 28 32 Z"
            fill="#43A047"
            transform="rotate(-10 28 32)"
          />
          {/* Chilli 2 (Main Center) */}
          <path
            d="M48 24 Q36 50 44 82 Q54 84 56 60 Q58 38 48 24 Z"
            fill="url(#chilliGrad)"
          />
          {/* Chilli 3 (Right) */}
          <path
            d="M62 30 Q74 54 68 76 Q62 76 56 56 Q56 36 62 30 Z"
            fill="#388E3C"
          />
          {/* Green Caps & Stems */}
          <path d="M48 24 L48 14 C48 10, 52 10, 52 14 L50 24 Z" stroke="#1B5E20" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="48" cy="24" r="5" fill="#2E7D32" />
          <circle cx="34" cy="30" r="4" fill="#1B5E20" />
          <circle cx="62" cy="28" r="4" fill="#1B5E20" />
        </svg>
      );

    case 'cucumber':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cucGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#66BB6A" />
              <stop offset="60%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
            <radialGradient id="sliceGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F1F8E9" />
              <stop offset="70%" stopColor="#DCEDC8" />
              <stop offset="90%" stopColor="#81C784" />
              <stop offset="100%" stopColor="#2E7D32" />
            </radialGradient>
          </defs>
          {/* Shadow */}
          <ellipse cx="50" cy="86" rx="36" ry="6" fill="#000000" fillOpacity="0.12" />
          {/* Whole Cucumber Body */}
          <path
            d="M20 34 Q38 30 76 52 Q82 56 78 66 Q72 74 60 70 Q28 56 18 46 Q14 40 20 34 Z"
            fill="url(#cucGrad)"
          />
          {/* Cucumber Slices (Foreground right) */}
          <g transform="translate(62, 52)">
            <ellipse cx="14" cy="18" rx="14" ry="14" fill="url(#sliceGrad)" />
            <ellipse cx="14" cy="18" rx="10" ry="10" fill="#E8F5E9" />
            {/* Seeds */}
            <ellipse cx="11" cy="15" rx="1" ry="2.5" fill="#C5E1A5" transform="rotate(-30 11 15)" />
            <ellipse cx="17" cy="15" rx="1" ry="2.5" fill="#C5E1A5" transform="rotate(30 17 15)" />
            <ellipse cx="14" cy="21" rx="1" ry="2.5" fill="#C5E1A5" />
          </g>
        </svg>
      );

    case 'other':
    default:
      return (
        <div className={`flex items-center justify-center bg-gray-50 rounded-full text-gray-400 font-bold text-2xl tracking-widest ${className}`}>
          •••
        </div>
      );
  }
}
