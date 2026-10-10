'use client';

import React from 'react';

const PARTNERS = [
  { name: 'JINU', src: '/assets/Jinu.png', maxHeight: 'max-h-12 sm:max-h-16' },
  { name: 'LS Electric', src: '/assets/LSElectric.png', maxHeight: 'max-h-10 sm:max-h-14' },
  { name: 'Al Fanar', src: '/assets/AlFanar.png', maxHeight: 'max-h-14 sm:max-h-20' },
  { name: 'Boreal Laser', src: '/assets/boreal.png', maxHeight: 'max-h-9 sm:max-h-12' },
  { name: 'EHC', src: '/assets/EHC.png', maxHeight: 'max-h-12 sm:max-h-16' },
  { name: 'Hiteks', src: '/assets/Hiteks.png', maxHeight: 'max-h-11 sm:max-h-15' },
];

export const PartnerTicker: React.FC = () => {
  return (
    <section id="partners" className="py-16 bg-[#07090e] border-y border-white/10 relative overflow-hidden bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-sm font-sans text-zinc-400 font-medium tracking-wide">
            Trusted by Industry Leaders &amp; Energy Partners Across the UAE
          </p>
        </div>

        {/* Big Full-Color Partner Logos in Sleek Clean Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 h-24 sm:h-28 flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className={`w-auto object-contain transition-transform duration-300 group-hover:scale-110 ${partner.maxHeight}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
