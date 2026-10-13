'use client';

import React from 'react';
import Image from 'next/image';

const FEATURES = [
  {
    title: 'IoT Integration',
    desc: 'Edge nodes, RTU gateways and seamless connectivity across your existing infrastructure.',
    icon: (
      <svg className="w-5 h-5 text-[#E52435]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    title: '24/7 Monitoring',
    desc: 'Continuous operational visibility with real-time alerts, diagnostics and performance insights.',
    icon: (
      <svg className="w-5 h-5 text-[#E52435]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.5" />
        <polyline points="12 6 12 11.5 15.5 11.5" />
      </svg>
    ),
  },
  {
    title: 'AI Supervision',
    desc: 'Advanced algorithms for anomaly detection, predictive alerts and faster decision-making.',
    icon: (
      <svg className="w-5 h-5 text-[#E52435]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M12 5v13" />
      </svg>
    ),
  },
];

export const PillarsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-20 sm:py-24 lg:py-28 border-b border-[var(--border)] bg-[var(--bg)] transition-colors relative overflow-hidden">
      
      {/* Background Image: Engineer with tablet at industrial plant, bleeding right and fading smoothly left */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[56%] pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/assets/intelligence_assets.jpg"
          alt="Intelligence across your assets - Field engineer with telemetry tablet"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
          style={{ objectPosition: '82% 15%' }}
        />
        
        {/* Horizontal Gradient: Fades from solid background on the left to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/90 md:via-[var(--bg)]/70 to-transparent" />
        
        {/* Mobile/Tablet Vertical Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-transparent lg:hidden" />
        
        {/* Subtle top & bottom edge softening to blend with neighboring section borders */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)] opacity-40 pointer-events-none" />
      </div>

      <div className="container-1280 relative z-10">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Description & 3 Clean Non-Interactive Feature Items */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            
            {/* Overline Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#E52435]" />
              <span className="text-xs sm:text-[13px] font-mono-tech font-bold uppercase tracking-widest text-[#E52435]">
                Connected Operations
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-heading text-[var(--text)] tracking-tight leading-[1.08]">
              Intelligence <br />
              across your assets.
            </h2>

            {/* Subparagraph */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[var(--text-2)] leading-relaxed max-w-[50ch] font-normal">
              From IoT integration to 24/7 monitoring and AI-assisted supervision, Sonic Technologies connects your people, assets and environment through intelligent systems.
            </p>

            {/* 3 Pure Non-Interactive Feature Items (Clean Brand Red Container, No Arrows) */}
            <div className="mt-8 sm:mt-10 space-y-6">
              {FEATURES.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-5 select-none">
                  {/* Clean Brand Red Tinted Icon Container */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border shadow-xs"
                    style={{
                      backgroundColor: 'rgba(229, 36, 53, 0.08)',
                      borderColor: 'rgba(229, 36, 53, 0.22)',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Text Details (No Arrows) */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="text-base sm:text-[17px] font-bold font-heading text-[var(--text)] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-2)] mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column Spacer on Desktop: Lets the background image shine through cleanly */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[460px] pointer-events-none" />

        </div>

      </div>
    </section>
  );
};
