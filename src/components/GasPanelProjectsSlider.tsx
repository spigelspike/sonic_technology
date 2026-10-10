'use client';

import React, { useState, useEffect, useRef } from 'react';

interface GasProject {
  id: string;
  name: string;
  location: string;
  image: string;
  systems: string;
  sensors: string;
  tag: string;
}

const GAS_PROJECTS: GasProject[] = [
  {
    id: 'etihad-towers',
    name: 'ETIHAD TOWERS',
    location: 'Abu Dhabi',
    image: '/assets/EtihadTowersAbuDhabi.png',
    systems: 'Addressable Gas & Fire Defense Loop • Central SCADA',
    sensors: '284 Monitored Nodes',
    tag: 'Commercial & Hospitality Complex',
  },
  {
    id: 'royal-atlantis',
    name: 'ROYAL ATLANTIS HOTEL',
    location: 'Dubai',
    image: '/assets/RoyalAtlantisHotelDubai.png',
    systems: 'High-Density Kitchen LPG Detection • Double-Wall Annular Monitoring',
    sensors: '420 Active Transmitters',
    tag: 'Ultra-Luxury Culinary Destination',
  },
  {
    id: 'waldorf-astoria',
    name: 'WALDORF ASTORIA HOTEL',
    location: 'Dubai',
    image: '/assets/WaldorfAstoriaHotelDubai.png',
    systems: 'Wall-Mount Multi-Gas Detectors • RS485 Modbus Hub',
    sensors: '160 Field Endpoints',
    tag: 'Palm Jumeirah Iconic Landmark',
  },
  {
    id: 'yas-rotana',
    name: 'YAS ISLAND ROTANA HOTEL',
    location: 'Abu Dhabi',
    image: '/assets/YasIslandRotanaHotelAbuDhabi.png',
    systems: 'Remote Thermal Unit (RTU) SCADA • Flammable Gas Interlock',
    sensors: '112 Supervisory Points',
    tag: 'Yas Marina Destination',
  },
];

export const GasPanelProjectsSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll effect: advances every 3.8 seconds unless hovered
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % GAS_PROJECTS.length);
      }, 3800);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % GAS_PROJECTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? GAS_PROJECTS.length - 1 : prev - 1));
  };

  const currentProject = GAS_PROJECTS[activeIndex];

  return (
    <section
      id="gas-projects"
      className="py-20 bg-[#0a0e17] border-b border-white/10 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 text-xs font-mono font-medium tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>LANDMARK UAE INSTALLATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono text-white tracking-tight">
              GAS PANEL PROJECTS
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              Engineered and commissioned gas detection panels safeguarding the region&apos;s most demanding hospitality and high-rise structures.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              className="w-10 h-10 rounded-full bg-[#07090e] border border-white/10 hover:border-red-500/50 flex items-center justify-center text-white text-lg font-mono transition-colors cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Project"
              className="w-10 h-10 rounded-full bg-[#07090e] border border-white/10 hover:border-red-500/50 flex items-center justify-center text-white text-lg font-mono transition-colors cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>

        {/* The Main Heroic Project Showcase Banner */}
        <div className="relative h-[340px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black group">
          
          {/* Main Slide Image */}
          <img
            src={currentProject.image}
            alt={currentProject.name}
            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
          />

          {/* Gradient Lighting Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent sm:w-2/3" />

          {/* Top Location & Node Badges */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-600 text-white shadow-lg shadow-red-600/40">
              {currentProject.location}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/70 text-zinc-300 border border-white/20 backdrop-blur-md">
              {currentProject.sensors}
            </span>
          </div>

          {/* Bottom Caption Bar */}
          <div className="absolute bottom-6 inset-x-6 sm:inset-x-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 p-6 rounded-2xl bg-[#07090e]/80 border border-white/15 backdrop-blur-md">
            <div>
              <div className="text-[11px] font-mono uppercase text-red-400 font-bold tracking-wider">
                {currentProject.tag}
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-mono text-white mt-1">
                {currentProject.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-zinc-300 mt-1 max-w-xl">
                {currentProject.systems}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#scada-lab"
                className="px-5 py-2.5 rounded-full text-xs font-mono font-semibold text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-600/30 transition-all flex items-center gap-1.5"
              >
                <span>Inspect Loop Telemetry</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Pagination Dots & Project Quick Select Thumbnails */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {GAS_PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-red-600' : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Jump to ${proj.name}`}
              />
            ))}
            <span className="ml-3 text-xs font-mono text-zinc-400">
              {isPaused ? '(Paused on hover)' : '(Auto-scrolling)'}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-zinc-400">
            {GAS_PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`transition-colors cursor-pointer ${
                  activeIndex === idx ? 'text-red-400 font-bold' : 'hover:text-white'
                }`}
              >
                {proj.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
