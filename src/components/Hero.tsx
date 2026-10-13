'use client';

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#07090e] text-white">
      {/* Background Image: Full-bleed industrial control panel, positioned to display top lamps and logo plate */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none transition-all duration-300"
        style={{
          backgroundImage: `url('/assets/hero_landing.webp')`,
          backgroundPosition: 'right 18%'
        }}
      />

      {/* Cinematic Dark Gradient Overlays for High-Contrast Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 md:via-black/75 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none lg:hidden" />

      {/* Content Container */}
      <div className="container-1280 relative z-10 py-16 sm:py-24 lg:py-32 min-h-[620px] lg:min-h-[720px] flex items-center">
        <div className="max-w-2xl flex flex-col items-start space-y-6">

          {/* Subtitle / Category Tag */}
          <div className="text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold text-zinc-400">
            Industrial Automation &amp; Safety Systems
          </div>

          {/* Prominent Sonic Technologies Brand Logo where the brand text starts */}
          <div className="pt-1">
            <img
              src="/assets/logo_white.png"
              alt="Sonic Technologies"
              width={448}
              height={202}
              className="h-14 sm:h-18 lg:h-22 w-auto object-contain filter drop-shadow-md"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-[1.08]">
            Engineered for Safety.<br />
            <span className="text-[#E52435]">Built for Control.</span>
          </h1>

          {/* Subtitle text below the logo and headline */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-medium leading-relaxed max-w-[55ch]">
            Gas &amp; Fire Detection &bull; SCADA &bull; Industrial Automation &bull; IoT &bull; AI Supervision
          </p>

          {/* Action CTAs matching the image reference */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#applications"
              id="hero-primary-cta"
              className="inline-flex items-center justify-center px-7 h-13 rounded-[4px] text-sm font-bold text-white bg-[#E52435] hover:bg-[#c91d2b] shadow-lg shadow-red-600/30 transition-all hover:translate-y-[-1px] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2"
            >
              <span>Explore Our Solutions</span>
              <span className="ml-2">&rarr;</span>
            </a>

            <a
              href="#projects"
              id="hero-secondary-cta"
              className="inline-flex items-center justify-center px-7 h-13 rounded-[4px] text-sm font-bold text-white border border-white/30 bg-black/40 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all hover:translate-y-[-1px] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2"
            >
              View Projects
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
