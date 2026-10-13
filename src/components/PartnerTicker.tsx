'use client';

import React from 'react';

const PARTNERS = [
  { 
    name: 'JINU', 
    src: '/assets/Jinu_clean.png', 
    srcDark: '/assets/Jinu_clean.png', 
    width: 305, 
    height: 122, 
    lightClass: '', 
    darkClass: 'brightness-125',
    imgClass: 'max-h-12 sm:max-h-14 lg:max-h-16 max-w-[150px] lg:max-w-[180px]',
  },
  { 
    name: 'LS Electric', 
    src: '/assets/LSElectric_clean.png', 
    srcDark: '/assets/LSElectric_clean.png', 
    width: 300, 
    height: 58, 
    lightClass: '', 
    darkClass: 'brightness-125',
    imgClass: 'max-h-10 sm:max-h-12 lg:max-h-14 max-w-[190px] lg:max-w-[230px]',
  },
  { 
    name: 'Al Fanar', 
    src: '/assets/AlFanar_clean.png', 
    srcDark: '/assets/AlFanar_clean.png', 
    width: 76, 
    height: 150, 
    lightClass: '', 
    darkClass: 'brightness-125',
    imgClass: 'max-h-16 sm:max-h-20 lg:max-h-22 max-w-[85px] lg:max-w-[105px]',
  },
  { 
    name: 'Boreal Laser', 
    src: '/assets/boreal.png', 
    srcDark: '/assets/boreal_white.png', 
    width: 255, 
    height: 66, 
    lightClass: '', 
    darkClass: '',
    imgClass: 'max-h-12 sm:max-h-14 lg:max-h-16 max-w-[180px] lg:max-w-[210px]',
  },
  { 
    name: 'EHC', 
    src: '/assets/EHC_clean.png', 
    srcDark: '/assets/EHC_white_clean.png', 
    width: 1255, 
    height: 583, 
    lightClass: 'mix-blend-multiply', 
    darkClass: '',
    imgClass: 'max-h-12 sm:max-h-14 lg:max-h-16 max-w-[160px] lg:max-w-[190px]',
  },
  { 
    name: 'Hiteks', 
    src: '/assets/Hiteks_clean.png', 
    srcDark: '/assets/Hiteks_clean.png', 
    width: 1431, 
    height: 447, 
    lightClass: 'mix-blend-multiply', 
    darkClass: 'brightness-125',
    imgClass: 'max-h-12 sm:max-h-14 lg:max-h-16 max-w-[170px] lg:max-w-[200px]',
  },
];

export const PartnerTicker: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--surface-2)] transition-colors overflow-hidden">
      <div className="container-1280">

        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-text)] font-bold">
            Trusted Across Critical Infrastructure
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[var(--text)] mt-2">
            1000+ Customers Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-2)] mt-2 font-mono-tech max-w-xl mx-auto">
            Partnering with premier energy providers, engineering contractors, and automation leaders
          </p>
        </div>

        {/* Desktop: Unified, borderless row with prominent, large logos */}
        <div className="hidden md:flex items-center justify-between gap-6 lg:gap-10 px-2 py-4">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center flex-1 h-24 lg:h-28 transition-all duration-300 hover:scale-108 cursor-default"
            >
              {/* Light mode */}
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className={`w-auto object-contain transition-all theme-light-logo ${partner.imgClass} ${partner.lightClass}`}
                loading="lazy"
              />

              {/* Dark mode */}
              <img
                src={partner.srcDark}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className={`w-auto object-contain transition-all theme-dark-logo ${partner.imgClass} ${partner.darkClass}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Mobile: Infinite smooth horizontal scrolling marquee with big logos */}
      <div className="md:hidden relative w-full overflow-hidden py-4">
        {/* Edge fade blend overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-14 z-10 pointer-events-none bg-gradient-to-r from-[var(--surface-2)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-14 z-10 pointer-events-none bg-gradient-to-l from-[var(--surface-2)] to-transparent" />

        {/* Continuous looping marquee */}
        <div className="flex w-max animate-marquee gap-14 items-center px-4">
          {/* First sequence */}
          {PARTNERS.map((partner, idx) => (
            <div
              key={`mob-1-${idx}`}
              className="shrink-0 flex items-center justify-center h-22 w-40 px-2"
            >
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className={`w-auto object-contain theme-light-logo ${partner.imgClass} ${partner.lightClass}`}
                loading="lazy"
              />
              <img
                src={partner.srcDark}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className={`w-auto object-contain theme-dark-logo ${partner.imgClass} ${partner.darkClass}`}
                loading="lazy"
              />
            </div>
          ))}

          {/* Duplicate sequence for seamless loop */}
          {PARTNERS.map((partner, idx) => (
            <div
              key={`mob-2-${idx}`}
              className="shrink-0 flex items-center justify-center h-22 w-40 px-2"
            >
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className={`w-auto object-contain theme-light-logo ${partner.imgClass} ${partner.lightClass}`}
                loading="lazy"
              />
              <img
                src={partner.srcDark}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className={`w-auto object-contain theme-dark-logo ${partner.imgClass} ${partner.darkClass}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
