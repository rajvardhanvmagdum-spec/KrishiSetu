import React from 'react';

export function CropImage({ cropId, className = 'w-16 h-16' }) {
  switch (cropId) {
    case 'tomato':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="tomBodyGrad" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#FF5252" />
              <stop offset="35%" stopColor="#E53935" />
              <stop offset="75%" stopColor="#C62828" />
              <stop offset="100%" stopColor="#8E0000" />
            </radialGradient>
            <radialGradient id="tomBackGrad" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#EF5350" />
              <stop offset="60%" stopColor="#C62828" />
              <stop offset="100%" stopColor="#7F0000" />
            </radialGradient>
            <radialGradient id="tomHighlight" cx="30%" cy="26%" r="28%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#FFCDD2" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#81C784" />
              <stop offset="50%" stopColor="#388E3C" />
              <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="88" rx="36" ry="6.5" fill="#000000" fillOpacity="0.14" />
          <circle cx="68" cy="48" r="22" fill="url(#tomBackGrad)" />
          <ellipse cx="64" cy="42" rx="7" ry="4" fill="#FFFFFF" fillOpacity="0.3" transform="rotate(-15 64 42)" />
          <path d="M68 28 C67 22, 69 18, 72 16" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M68 28 L72 23 L69 29 L75 27 L70 31 L73 34 L68 31 Z" fill="#388E3C" />
          <path
            d="M48 24 C31 24, 18 36, 18 55 C18 73, 31 85, 48 85 C65 85, 78 73, 78 55 C78 36, 65 24, 48 24 Z"
            fill="url(#tomBodyGrad)"
          />
          <ellipse cx="37" cy="42" rx="13" ry="8" fill="url(#tomHighlight)" transform="rotate(-22 37 42)" />
          <path d="M48 24 C44 14, 30 10, 22 14 C22 22, 34 26, 46 24 Z" fill="url(#leafGrad)" />
          <path d="M25 15 Q36 18 46 24" stroke="#A5D6A7" strokeWidth="1" fill="none" opacity="0.8" />
          <path d="M48 24 C49 16, 52 10, 56 6" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 24 L56 16 L51 25 L61 21 L53 28 L60 33 L50 31 L45 37 L46 29 L36 32 L43 26 L34 21 L44 24 L40 16 Z" fill="#43A047" stroke="#2E7D32" strokeWidth="0.5" />
          <circle cx="48.5" cy="24.5" r="3" fill="#2E7D32" />
        </svg>
      );

    case 'onion':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="onionBody" cx="42%" cy="40%" r="62%">
              <stop offset="0%" stopColor="#E1BEE7" />
              <stop offset="25%" stopColor="#BA68C8" />
              <stop offset="60%" stopColor="#8E24AA" />
              <stop offset="85%" stopColor="#6A1B9A" />
              <stop offset="100%" stopColor="#4A148C" />
            </radialGradient>
            <linearGradient id="dryPeel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D7CCC8" />
              <stop offset="40%" stopColor="#A1887F" />
              <stop offset="80%" stopColor="#8D6E63" />
              <stop offset="100%" stopColor="#5D4037" />
            </linearGradient>
            <linearGradient id="sproutGrad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#558B2F" />
              <stop offset="60%" stopColor="#7CB342" />
              <stop offset="100%" stopColor="#9CCC65" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="88" rx="32" ry="6" fill="#000000" fillOpacity="0.13" />
          <path d="M47 22 Q46 10 44 4 Q48 9 49 22 Z" fill="url(#sproutGrad)" />
          <path d="M49 20 Q53 11 56 6 Q53 13 51 22 Z" fill="url(#sproutGrad)" />
          <path
            d="M50 20 C34 20, 18 36, 18 56 C18 75, 33 85, 50 85 C67 85, 82 75, 82 56 C82 36, 66 20, 50 20 Z"
            fill="url(#onionBody)"
          />
          <path
            d="M50 20 C62 26, 78 38, 80 58 C78 72, 68 82, 54 85 C70 82, 82 70, 82 56 C82 36, 66 20, 50 20 Z"
            fill="url(#dryPeel)"
            opacity="0.85"
          />
          <path d="M50 20 Q32 48 38 84" stroke="#CE93D8" strokeWidth="1.2" fill="none" opacity="0.75" />
          <path d="M50 20 Q24 50 28 78" stroke="#E1BEE7" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M50 20 Q44 52 46 85" stroke="#BA68C8" strokeWidth="1" fill="none" opacity="0.7" />
          <path d="M50 20 Q56 52 54 85" stroke="#BA68C8" strokeWidth="1" fill="none" opacity="0.7" />
          <path d="M50 20 Q68 48 62 84" stroke="#AB47BC" strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M50 20 Q76 50 72 78" stroke="#8E24AA" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M46 22 Q50 24 54 22" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
          <path d="M47 25 Q50 27 53 25" stroke="#8D6E63" strokeWidth="1.2" fill="none" />
          <path d="M45 85 L44 93 M48 85 L47 95 M50 85 L50 96 M52 85 L53 95 M55 85 L56 93 M43 85 L41 91 M57 85 L59 91" stroke="#BCAAA4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'potato':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="potFront" cx="38%" cy="35%" r="62%">
              <stop offset="0%" stopColor="#F5D089" />
              <stop offset="35%" stopColor="#E2AC56" />
              <stop offset="70%" stopColor="#B87D2E" />
              <stop offset="100%" stopColor="#7E4E10" />
            </radialGradient>
            <radialGradient id="potBack" cx="42%" cy="38%" r="60%">
              <stop offset="0%" stopColor="#E2AC56" />
              <stop offset="50%" stopColor="#B87D2E" />
              <stop offset="100%" stopColor="#6D3F08" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="87" rx="38" ry="7" fill="#000000" fillOpacity="0.14" />
          <path
            d="M36 40 C36 26, 52 22, 68 25 C84 28, 90 44, 88 58 C86 72, 72 78, 56 75 C42 72, 36 54, 36 40 Z"
            fill="url(#potBack)"
          />
          <circle cx="70" cy="38" r="1.5" fill="#5D3A0A" />
          <circle cx="80" cy="50" r="1.3" fill="#5D3A0A" />
          <path d="M54 30 Q57 32 60 30" stroke="#5D3A0A" strokeWidth="1" fill="none" />
          <path
            d="M16 58 C16 42, 30 34, 48 35 C66 36, 76 48, 74 65 C72 79, 56 85, 38 84 C20 83, 16 72, 16 58 Z"
            fill="url(#potFront)"
          />
          <ellipse cx="40" cy="46" rx="16" ry="7" fill="#FFF3E0" fillOpacity="0.35" transform="rotate(-8 40 46)" />
          <path d="M28 50 Q31 53 35 50" stroke="#5D3A0A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M28 51 Q31 54 35 51" stroke="#FFE082" strokeWidth="0.8" strokeLinecap="round" fill="none" />
          <circle cx="31" cy="49" r="1.2" fill="#4E2E06" />

          <path d="M46 60 Q50 63 54 60" stroke="#5D3A0A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M46 61 Q50 64 54 61" stroke="#FFE082" strokeWidth="0.8" strokeLinecap="round" fill="none" />
          <circle cx="50" cy="59" r="1.2" fill="#4E2E06" />

          <path d="M36 70 Q39 72 42 70" stroke="#5D3A0A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <circle cx="39" cy="69" r="1" fill="#4E2E06" />

          <path d="M60 52 Q63 54 65 52" stroke="#5D3A0A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <circle cx="62" cy="51" r="1" fill="#4E2E06" />

          <circle cx="24" cy="62" r="0.8" fill="#5D3A0A" opacity="0.6" />
          <circle cx="42" cy="42" r="0.8" fill="#5D3A0A" opacity="0.6" />
          <circle cx="56" cy="72" r="0.8" fill="#5D3A0A" opacity="0.6" />
        </svg>
      );

    case 'brinjal':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="brinBody" cx="36%" cy="40%" r="68%">
              <stop offset="0%" stopColor="#9C27B0" />
              <stop offset="25%" stopColor="#6A1B9A" />
              <stop offset="65%" stopColor="#4A148C" />
              <stop offset="90%" stopColor="#2A0845" />
              <stop offset="100%" stopColor="#140224" />
            </radialGradient>
            <linearGradient id="brinCalyx" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#66BB6A" />
              <stop offset="50%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
            <linearGradient id="brinSheen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="89" rx="28" ry="6" fill="#000000" fillOpacity="0.14" />
          <path
            d="M48 28 C36 30, 22 48, 24 68 C26 84, 40 88, 54 88 C68 88, 78 80, 76 62 C74 44, 58 28, 48 28 Z"
            fill="url(#brinBody)"
          />
          <path
            d="M32 48 C30 58, 32 72, 38 78 C36 74, 34 62, 36 50 C37 44, 38 40, 36 38 C34 40, 33 44, 32 48 Z"
            fill="url(#brinSheen)"
          />
          <path d="M48 28 C47 20, 48 14, 51 8 C53 8, 54 12, 53 20" stroke="#1B5E20" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="51" cy="8" rx="2.5" ry="1.5" fill="#4CAF50" />
          <path
            d="M48 27 C42 25, 34 26, 28 32 C33 35, 38 38, 42 34 C44 42, 49 43, 53 36 C57 42, 64 41, 66 35 C68 39, 72 38, 74 32 C68 28, 58 25, 48 27 Z"
            fill="url(#brinCalyx)"
          />
          <path d="M48 27 L48 35 M42 34 L40 28 M53 36 L52 28 M66 35 L62 28" stroke="#1B5E20" strokeWidth="1" />
        </svg>
      );

    case 'chilli':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chilliMain" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4CAF50" />
              <stop offset="30%" stopColor="#2E7D32" />
              <stop offset="70%" stopColor="#1B5E20" />
              <stop offset="100%" stopColor="#0B3D0B" />
            </linearGradient>
            <linearGradient id="chilliSec" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#66BB6A" />
              <stop offset="50%" stopColor="#388E3C" />
              <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
            <linearGradient id="chilliThird" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#81C784" />
              <stop offset="60%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="87" rx="36" ry="6" fill="#000000" fillOpacity="0.13" />
          <path
            d="M34 32 C26 44, 20 60, 26 78 C27 80, 30 78, 30 75 C31 62, 34 46, 38 34 Z"
            fill="url(#chilliSec)"
          />
          <path d="M36 32 L34 26 C33 24, 37 24, 37 26 L38 32 Z" fill="#1B5E20" />
          <path
            d="M58 34 C64 46, 76 60, 74 76 C73 78, 70 78, 68 75 C64 62, 58 48, 54 34 Z"
            fill="url(#chilliThird)"
          />
          <path d="M56 34 L58 26 C57 24, 61 24, 60 26 L56 34 Z" fill="#1B5E20" />
          <path
            d="M46 26 C38 42, 36 64, 48 85 C50 87, 52 86, 52 83 C57 66, 60 44, 52 26 Z"
            fill="url(#chilliMain)"
          />
          <path
            d="M44 38 Q41 54 46 72"
            stroke="#A5D6A7"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
          <path d="M49 26 L49 14 C48 10, 52 10, 52 14 L50 26" stroke="#1B5E20" strokeWidth="3" strokeLinecap="round" />
          <path d="M46 26 L49 22 L52 26 L56 24 L52 28 L54 30 L49 28 L45 30 L47 28 Z" fill="#2E7D32" />
        </svg>
      );

    case 'cucumber':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cucSkin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#43A047" />
              <stop offset="35%" stopColor="#2E7D32" />
              <stop offset="70%" stopColor="#1B5E20" />
              <stop offset="100%" stopColor="#0D3810" />
            </linearGradient>
            <radialGradient id="sliceFlesh" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F9FBE7" />
              <stop offset="60%" stopColor="#E8F5E9" />
              <stop offset="85%" stopColor="#A5D6A7" />
              <stop offset="100%" stopColor="#2E7D32" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="87" rx="38" ry="6.5" fill="#000000" fillOpacity="0.13" />
          <path
            d="M16 38 C32 30, 68 46, 78 54 C84 59, 82 70, 74 72 C64 74, 30 58, 18 52 C12 48, 12 40, 16 38 Z"
            fill="url(#cucSkin)"
          />
          <path d="M18 42 Q46 40 76 60" stroke="#81C784" strokeWidth="1.2" strokeDasharray="6 3" fill="none" opacity="0.6" />
          <path d="M22 47 Q48 46 72 66" stroke="#81C784" strokeWidth="1.2" strokeDasharray="5 4" fill="none" opacity="0.5" />
          <path d="M16 38 L11 36 C9 35, 9 38, 12 39 L15 41" stroke="#1B5E20" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="34" cy="38" r="0.8" fill="#A5D6A7" />
          <circle cx="48" cy="44" r="0.8" fill="#A5D6A7" />
          <circle cx="62" cy="52" r="0.8" fill="#A5D6A7" />
          <g transform="translate(60, 48)">
            <ellipse cx="16" cy="18" rx="16" ry="16" fill="#1B5E20" />
            <ellipse cx="16" cy="18" rx="14" ry="14" fill="url(#sliceFlesh)" />
            <ellipse cx="16" cy="18" rx="9" ry="9" stroke="#C5E1A5" strokeWidth="1" fill="#F1F8E9" fillOpacity="0.8" />
            <ellipse cx="13" cy="15" rx="1.2" ry="3" fill="#AED581" transform="rotate(-35 13 15)" />
            <ellipse cx="19" cy="15" rx="1.2" ry="3" fill="#AED581" transform="rotate(35 19 15)" />
            <ellipse cx="16" cy="22" rx="1.2" ry="3" fill="#AED581" />
          </g>
        </svg>
      );

    case 'wheat':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grainGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFF176" />
              <stop offset="40%" stopColor="#FBC02D" />
              <stop offset="85%" stopColor="#F57F17" />
              <stop offset="100%" stopColor="#E65100" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="88" rx="30" ry="5.5" fill="#000000" fillOpacity="0.12" />
          <path d="M38 90 Q48 55 52 14" stroke="#F57F17" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M42 90 Q58 60 64 26" stroke="#E65100" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          <path d="M52 14 L50 4 M52 14 L55 3 M52 18 L42 8 M52 24 L38 15 M52 30 L36 22 M52 36 L36 29 M52 42 L38 36 M52 48 L40 43" stroke="#FBC02D" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M52 18 L62 8 M52 24 L66 15 M52 30 L68 22 M52 36 L68 29 M52 42 L66 36 M52 48 L64 43" stroke="#FBC02D" strokeWidth="1.2" strokeLinecap="round" />
          <ellipse cx="50" cy="16" rx="3.5" ry="5.5" fill="url(#grainGrad)" transform="rotate(-15 50 16)" />
          <ellipse cx="54" cy="18" rx="3.5" ry="5.5" fill="url(#grainGrad)" transform="rotate(15 54 18)" />
          <ellipse cx="49" cy="23" rx="3.8" ry="6" fill="url(#grainGrad)" transform="rotate(-25 49 23)" />
          <ellipse cx="55" cy="25" rx="3.8" ry="6" fill="url(#grainGrad)" transform="rotate(25 55 25)" />
          <ellipse cx="48" cy="31" rx="4" ry="6" fill="url(#grainGrad)" transform="rotate(-28 48 31)" />
          <ellipse cx="56" cy="33" rx="4" ry="6" fill="url(#grainGrad)" transform="rotate(28 56 33)" />
          <ellipse cx="48" cy="39" rx="4" ry="6" fill="url(#grainGrad)" transform="rotate(-28 48 39)" />
          <ellipse cx="56" cy="41" rx="4" ry="6" fill="url(#grainGrad)" transform="rotate(28 56 41)" />
          <ellipse cx="49" cy="47" rx="3.8" ry="5.5" fill="url(#grainGrad)" transform="rotate(-25 49 47)" />
          <ellipse cx="55" cy="49" rx="3.8" ry="5.5" fill="url(#grainGrad)" transform="rotate(25 55 49)" />
          <ellipse cx="52" cy="12" rx="2.5" ry="4" fill="url(#grainGrad)" />
        </svg>
      );

    case 'rice':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="riceGrain" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFF9C4" />
              <stop offset="45%" stopColor="#FBC02D" />
              <stop offset="100%" stopColor="#C0CA33" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="88" rx="30" ry="5" fill="#000000" fillOpacity="0.12" />
          <path d="M28 88 Q40 50 64 24 Q76 14 84 22" stroke="#8BC34A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <ellipse cx="44" cy="44" rx="2.8" ry="6" fill="url(#riceGrain)" transform="rotate(-30 44 44)" />
          <ellipse cx="50" cy="38" rx="2.8" ry="6" fill="url(#riceGrain)" transform="rotate(-25 50 38)" />
          <ellipse cx="56" cy="32" rx="2.8" ry="6" fill="url(#riceGrain)" transform="rotate(-20 56 32)" />
          <ellipse cx="64" cy="26" rx="2.8" ry="6" fill="url(#riceGrain)" transform="rotate(5 64 26)" />
          <ellipse cx="72" cy="23" rx="2.8" ry="6" fill="url(#riceGrain)" transform="rotate(25 72 23)" />
          <ellipse cx="80" cy="25" rx="2.8" ry="6" fill="url(#riceGrain)" transform="rotate(45 80 25)" />
          <ellipse cx="84" cy="31" rx="2.8" ry="6" fill="url(#riceGrain)" transform="rotate(65 84 31)" />
          <ellipse cx="82" cy="39" rx="2.8" ry="6" fill="url(#riceGrain)" transform="rotate(85 82 39)" />
          <ellipse cx="76" cy="45" rx="2.8" ry="6" fill="url(#riceGrain)" transform="rotate(100 76 45)" />
        </svg>
      );

    case 'cotton':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="cottonFluff" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F5F5F5" />
              <stop offset="100%" stopColor="#D6D6D6" />
            </radialGradient>
            <linearGradient id="cottonBract" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8D6E63" />
              <stop offset="100%" stopColor="#4E342E" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="87" rx="32" ry="6" fill="#000000" fillOpacity="0.12" />
          <path d="M50 86 Q50 72 50 64" stroke="#4E342E" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M50 66 L30 62 L42 54 L24 44 L40 44 L32 28 L46 38 L50 20 L54 38 L68 28 L60 44 L76 44 L58 54 L70 62 Z" fill="url(#cottonBract)" />
          <circle cx="38" cy="44" r="16" fill="url(#cottonFluff)" />
          <circle cx="62" cy="44" r="16" fill="url(#cottonFluff)" />
          <circle cx="50" cy="34" r="16" fill="url(#cottonFluff)" />
          <circle cx="50" cy="54" r="15" fill="url(#cottonFluff)" />
          <circle cx="48" cy="42" r="9" fill="#FFFFFF" fillOpacity="0.7" />
        </svg>
      );

    case 'sugarcane':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="caneRind" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#689F38" />
              <stop offset="35%" stopColor="#8BC34A" />
              <stop offset="70%" stopColor="#4A148C" />
              <stop offset="100%" stopColor="#2E7D32" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="88" rx="30" ry="6" fill="#000000" fillOpacity="0.13" />
          <g transform="rotate(-6 42 55)">
            <rect x="36" y="24" width="10" height="60" rx="2" fill="url(#caneRind)" />
            <line x1="35" y1="40" x2="47" y2="40" stroke="#FFF59D" strokeWidth="2" strokeLinecap="round" />
            <line x1="35" y1="56" x2="47" y2="56" stroke="#FFF59D" strokeWidth="2" strokeLinecap="round" />
            <line x1="35" y1="72" x2="47" y2="72" stroke="#FFF59D" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g transform="rotate(8 56 55)">
            <rect x="52" y="20" width="10" height="64" rx="2" fill="url(#caneRind)" />
            <line x1="51" y1="36" x2="63" y2="36" stroke="#FFF59D" strokeWidth="2" strokeLinecap="round" />
            <line x1="51" y1="52" x2="63" y2="52" stroke="#FFF59D" strokeWidth="2" strokeLinecap="round" />
            <line x1="51" y1="68" x2="63" y2="68" stroke="#FFF59D" strokeWidth="2" strokeLinecap="round" />
          </g>
          <path d="M42 24 Q30 8 18 14" stroke="#43A047" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M58 20 Q70 6 82 12" stroke="#43A047" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'other':
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sproutSun" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF9C4" />
              <stop offset="100%" stopColor="#FFF9C4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#sproutSun)" opacity="0.6" />
          <ellipse cx="50" cy="84" rx="26" ry="6" fill="#000000" fillOpacity="0.12" />
          <path d="M28 84 Q50 78 72 84 Z" fill="#6D4C41" />
          <path d="M50 82 Q49 56 50 42" stroke="#2E7D32" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M50 56 C38 52, 28 38, 30 26 C42 28, 48 42, 50 56 Z" fill="#4CAF50" />
          <path d="M50 46 C62 42, 72 28, 70 16 C58 18, 52 32, 50 46 Z" fill="#66BB6A" />
        </svg>
      );
  }
}
