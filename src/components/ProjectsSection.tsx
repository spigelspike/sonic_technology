'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Project {
  id: string;
  name: string;
  location: string;
  country: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 'etihad-towers',
    name: 'ETIHAD TOWERS',
    location: 'ABU DHABI',
    country: 'UAE',
    image: '/assets/EtihadTowersAbuDhabi.png',
  },
  {
    id: 'royal-atlantis',
    name: 'THE ROYAL ATLANTIS RESORT',
    location: 'DUBAI',
    country: 'UAE',
    image: '/assets/RoyalAtlantisHotelDubai.png',
  },
  {
    id: 'waldorf-astoria',
    name: 'WALDORF ASTORIA HOTEL',
    location: 'DUBAI',
    country: 'UAE',
    image: '/assets/WaldorfAstoriaHotelDubai.png',
  },
  {
    id: 'yas-island-rotana',
    name: 'YAS ISLAND ROTANA HOTEL',
    location: 'ABU DHABI',
    country: 'UAE',
    image: '/assets/YasIslandRotanaHotelAbuDhabi.png',
  },
];

export const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const total = PROJECTS.length;
  const currentProject = PROJECTS[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer (pauses smoothly on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-[var(--surface-2)] border-b border-[var(--border)] transition-colors relative overflow-hidden scroll-mt-20"
    >
      <div className="container-1280 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-glow)] border border-[var(--accent-border)] text-xs font-mono-tech tracking-wider uppercase text-[var(--accent)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Landmark Installations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase text-[var(--text)]">
            GAS PANEL PROJECTS
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-2)] mt-2 max-w-[65ch] mx-auto">
            High-integrity gas detection, automated solenoid isolation, and 24/7 telemetry deployed across iconic UAE landmark destinations.
          </p>
        </div>

        {/* Showcase Slider Container */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-2xl border border-black/20 dark:border-white/10 group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Viewport */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9] min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] overflow-hidden">
            
            {/* Background Slides */}
            {PROJECTS.map((proj, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={proj.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  aria-hidden={!isActive}
                >
                  {/* Full-bleed architectural photo (bright and unobstructed) */}
                  <img
                    src={proj.image}
                    alt={`${proj.name} - ${proj.location}`}
                    className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
                      isActive ? 'scale-100' : 'scale-105'
                    }`}
                  />

                  {/* Reduced subtle vignette ONLY on the far left behind text; top and centre remain clear */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 via-30% to-transparent pointer-events-none" />

                  {/* Soft bottom vignette ensuring contrast with bottom bar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 via-20% to-transparent pointer-events-none" />
                </div>
              );
            })}

            {/* Left Overlay: ONLY Project Name and Place */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 md:p-12 lg:p-14 pb-32 sm:pb-36 md:pb-40 lg:pb-44 pointer-events-none text-white">
              <div className="max-w-xl pointer-events-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase text-white leading-tight drop-shadow-lg">
                  {currentProject.name}
                </h3>
                <div className="mt-2 sm:mt-2.5 flex items-center gap-2 text-sm sm:text-base md:text-lg font-mono-tech font-bold text-red-500 tracking-wider uppercase drop-shadow-md">
                  <span className="w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-500/50" />
                  <span>{`${currentProject.location}, UAE`}</span>
                </div>
              </div>
            </div>

            {/* Bottom Showcase Bar: Matches user reference screenshot */}
            <div className="absolute bottom-0 inset-x-0 z-20 bg-black/85 backdrop-blur-md border-t border-white/15 px-6 sm:px-10 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              {/* Progress Indicator Dots + Counter */}
              <div className="flex items-center gap-2">
                {PROJECTS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    aria-label={`Jump to project slide ${dotIdx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === currentIndex
                        ? 'w-8 bg-red-500 shadow-sm shadow-red-500/50'
                        : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
                <span className="text-[11px] font-mono-tech text-zinc-400 ml-2">
                  0{currentIndex + 1} / 0{total}
                </span>
              </div>

              {/* High-Contrast Bold Name + Location Banner (Matches: "ETIHAD TOWERS | ABU DHABI") */}
              <div className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base md:text-lg font-heading font-black tracking-wider uppercase sm:ml-auto">
                <span className="text-white drop-shadow-sm">{currentProject.name}</span>
                <span className="text-zinc-600 font-normal">|</span>
                <span className="text-red-500 drop-shadow-sm font-bold tracking-widest text-xs sm:text-sm md:text-base">
                  {currentProject.location}
                </span>
              </div>
            </div>

            {/* Circular Navigation Arrow Buttons (Left / Right) */}
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 -mt-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-black/95 active:scale-95 text-white border border-white/25 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all hover:border-white/60 cursor-pointer group-hover:scale-105"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next project"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 -mt-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-black/95 active:scale-95 text-white border border-white/25 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all hover:border-white/60 cursor-pointer group-hover:scale-105"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

        </div>

        {/* Link to Full Projects Directory */}
        <div className="mt-8 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-[var(--card)] hover:bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)] shadow-sm hover:shadow-md transition-all group"
          >
            <span>Explore All 20+ Landmark UAE Deployments &amp; Field Telemetry</span>
            <span className="text-[var(--accent)] group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
