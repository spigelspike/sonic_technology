'use client';

import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

export const SafetyScrollCTA: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--surface-2)] border-b border-[var(--border)] transition-colors">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent)] rounded-full blur-[140px] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[140px] opacity-[0.03] pointer-events-none" />

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center px-4 max-w-4xl mx-auto mb-2">
            <div className="tag-accent mb-4">
              Direct Engineering Consultation
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text)] text-center leading-tight">
              Ready to bring your{' '}
              <span className="text-[var(--accent-text)]">safety systems online?</span>
            </h2>
          </div>
        }
      >
        {/* iPad Tablet Screen - Original Colors, Clean & Centered */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center p-6 sm:p-10 md:p-14 bg-[var(--card)] text-[var(--text)] rounded-xl transition-colors select-none">
          
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            {/* Original Tag */}
            <div className="tag-accent mb-4">
              Direct Engineering Consultation
            </div>

            {/* Original Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[var(--text)] leading-tight">
              Ready to bring your safety systems online?
            </h3>

            {/* Original Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-2)] mt-4 max-w-[55ch] leading-relaxed">
              For project tenders, technical datasheets, site hazard surveys, or functional safety evaluations, connect with our UAE engineering team.
            </p>

            {/* Original CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:gm@sonictech.ae?subject=Project%20Enquiry%20-%20Sonic%20Technologies"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:gm@sonictech.ae?subject=Project%20Enquiry%20-%20Sonic%20Technologies';
                }}
                className="btn-primary text-sm shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                <span>Contact Us</span>
                <span>→</span>
              </a>

              <a
                href="#projects"
                className="btn-secondary text-sm"
              >
                View Selected Projects
              </a>
            </div>
          </div>

        </div>
      </ContainerScroll>
    </section>
  );
};
