'use client';

import React from 'react';

interface PartnerConfig {
  id: string;
  name: string;
  src: string;
  srcDark: string;
  imgClass?: string;
}

const PARTNERS: PartnerConfig[] = [
  {
    id: 'jinu',
    name: 'JINU',
    src: '/assets/Jinu_clean.png',
    srcDark: '/assets/Jinu_clean.png',
    imgClass: 'max-h-12 sm:max-h-14 max-w-[140px]',
  },
  {
    id: 'ls-electric',
    name: 'LS Electric',
    src: '/assets/LSElectric_clean.png',
    srcDark: '/assets/LSElectric_clean.png',
    imgClass: 'max-h-9 sm:max-h-11 max-w-[180px]',
  },
  {
    id: 'al-fanar',
    name: 'Al Fanar',
    src: '/assets/AlFanar_clean.png',
    srcDark: '/assets/AlFanar_clean.png',
    imgClass: 'max-h-14 sm:max-h-16 max-w-[95px]',
  },
  {
    id: 'boreal-laser',
    name: 'Boreal Laser',
    src: '/assets/boreal.png',
    srcDark: '/assets/boreal_white.png',
    imgClass: 'max-h-10 sm:max-h-12 max-w-[170px]',
  },
  {
    id: 'ehc',
    name: 'EHC',
    src: '/assets/EHC_clean.png',
    srcDark: '/assets/EHC_white_clean.png',
    imgClass: 'max-h-11 sm:max-h-13 max-w-[150px]',
  },
  {
    id: 'hiteks',
    name: 'Hiteks',
    src: '/assets/Hiteks_clean.png',
    srcDark: '/assets/Hiteks_clean.png',
    imgClass: 'max-h-10 sm:max-h-12 max-w-[150px]',
  },
];

export const PartnerShowcase: React.FC = () => {
  // Triple the set for each half so the marquee is continuous and seamless across all displays
  const partnerSet = [...PARTNERS, ...PARTNERS, ...PARTNERS];
  const fullMarqueeList = [...partnerSet, ...partnerSet];

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--border)] relative overflow-hidden bg-[var(--bg)]">
      <div className="container-1280 text-center space-y-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-wider text-[var(--text)] uppercase">
            OUR PARTNERS
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed max-w-xl mx-auto font-mono">
            Manufacturing leaders and global technology partners collaborating with us across landmark infrastructure, smart communities and safety engineering across the UAE.
          </p>
        </div>
      </div>

      {/* Borderless Marquee without white boxes around logos */}
      <div className="relative w-full overflow-hidden mt-12 py-4">
        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent" />

        {/* Marquee Track: Smooth continuous scroll with hover pause */}
        <div className="flex w-max animate-marquee items-center [animation-duration:32s] hover:[animation-play-state:paused] px-4">
          {fullMarqueeList.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="shrink-0 flex flex-col items-center justify-center px-8 sm:px-12 py-3 group cursor-default transition-all duration-300"
            >
              {/* Clean logo without any white box or card wrapper */}
              <div className="h-16 sm:h-20 flex items-center justify-center">
                {/* Light Mode Logo */}
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className={`object-contain theme-light-logo opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ${partner.imgClass ?? ''}`}
                  loading="lazy"
                />

                {/* Dark Mode Logo */}
                <img
                  src={partner.srcDark}
                  alt={`${partner.name} logo`}
                  className={`object-contain theme-dark-logo opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ${partner.imgClass ?? ''}`}
                  loading="lazy"
                />
              </div>

              {/* Partner Name Label */}
              <span className="font-heading text-xs font-bold tracking-wider uppercase text-[var(--text-2)] group-hover:text-[var(--text)] transition-colors mt-2">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
