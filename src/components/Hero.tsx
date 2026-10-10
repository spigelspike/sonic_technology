'use client';

import React from 'react';

interface HeroProps {
  onOpenRfq: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRfq }) => {
  return (
    <section className="relative min-h-[580px] lg:min-h-[720px] flex items-center overflow-hidden bg-black">
      
      {/* Background Graphic Image (hero_landing.webp provided by user) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_landing.webp"
          alt="Sonic Technologies Industrial Automation & Safety Systems"
          className="w-full h-full object-cover object-right sm:object-center"
        />
        {/* Left-side dark gradient overlay to ensure perfect contrast for text matching Image 1 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 w-full">
        <div className="max-w-2xl flex flex-col items-start space-y-6">
          
          {/* Eyebrow Label (from Image 1) */}
          <div className="text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold text-zinc-300">
            INDUSTRIAL AUTOMATION &amp; SAFETY SYSTEMS
          </div>

          {/* Main Headline (Exact from Image 1) */}
          <h1 className="text-5xl sm:text-6xl lg:text-[74px] font-black tracking-tight text-white leading-[1.05]">
            Engineered<br />
            for Safety.<br />
            <span className="text-red-600 drop-shadow-[0_0_35px_rgba(230,57,70,0.5)]">
              Built for Control.
            </span>
          </h1>

          {/* Subtitle Line (Exact from Image 1) */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-sans tracking-wide">
            Gas &amp; Fire Detection &nbsp;·&nbsp; SCADA &nbsp;·&nbsp; Industrial Automation &nbsp;·&nbsp; IoT &nbsp;·&nbsp; AI Supervision
          </p>

          {/* Buttons (Exact from Image 1) */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary Red Button: Explore Our Solutions → */}
            <a
              href="#mission"
              id="hero-explore-btn"
              className="px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-700/50 border border-red-500/60 transition-all flex items-center gap-2.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Explore Our Solutions</span>
              <span className="text-lg">→</span>
            </a>

            {/* Secondary Dark Outline Button: View Projects */}
            <a
              href="#gas-projects"
              id="hero-view-projects-btn"
              className="px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-zinc-200 bg-black/60 hover:bg-black/90 border border-white/25 hover:border-red-500/60 hover:text-white transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <span>View Projects</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
