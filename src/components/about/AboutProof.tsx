'use client';

import React from 'react';
import Image from 'next/image';

interface PartnerLogo {
  name: string;
  lightLogo: string;
  darkLogo?: string;
  role: string;
  confirmed: boolean;
}

const PARTNERS_PROOF: PartnerLogo[] = [
  {
    name: 'Boreal Laser',
    lightLogo: '/assets/boreal.png',
    darkLogo: '/assets/boreal_white.png',
    role: 'Open-Path Laser Gas Detection Technology',
    confirmed: true,
  },
  {
    name: 'LS Electric',
    lightLogo: '/assets/LSElectric_clean.png',
    role: 'Industrial Power & PLC Automation',
    confirmed: false, // TODO: confirm permission with Sonic
  },
  {
    name: 'JINU',
    lightLogo: '/assets/Jinu_clean.png',
    role: 'Industrial Sensor Assemblies',
    confirmed: false, // TODO: confirm permission with Sonic
  },
  {
    name: 'Al Fanar',
    lightLogo: '/assets/AlFanar_clean.png',
    role: 'Electrical & Systems Engineering',
    confirmed: false, // TODO: confirm permission with Sonic
  },
  {
    name: 'EHC',
    lightLogo: '/assets/EHC_clean.png',
    darkLogo: '/assets/EHC_white_clean.png',
    role: 'Industrial Controls & Equipment',
    confirmed: false, // TODO: confirm permission with Sonic
  },
  {
    name: 'Hiteks',
    lightLogo: '/assets/Hiteks_clean.png',
    role: 'Precision Instrumentation',
    confirmed: false, // TODO: confirm permission with Sonic
  },
];

export const AboutProof: React.FC = () => {
  return (
    <section className="w-full border-b border-[var(--border)] bg-[var(--bg)] transition-colors py-16 sm:py-20 lg:py-24">
      <div className="container-1280 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text)] tracking-tight">
              Technology Partners &amp; Compliance
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-2)] font-normal max-w-2xl">
              Integration partnerships and regulatory compliance frameworks for functional safety deployments.
            </p>
          </div>

          {/* Explicit TODO status label for procurement & Sonic validation */}
          <div className="text-xs font-mono text-[var(--text-2)] opacity-80 sm:text-right">
            <span>TODO: Confirm formal logo display permissions with Sonic</span>
          </div>
        </div>

        {/* Grayscale Logos Row at Equal Height */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
          {PARTNERS_PROOF.map((partner) => (
            <div
              key={partner.name}
              className="h-16 rounded-sm border border-[var(--border)] bg-[var(--surface-2)]/50 px-4 py-2 flex flex-col items-center justify-center text-center transition-colors hover:border-[var(--text-2)]/40 group"
              title={`${partner.name} — ${partner.role}`}
            >
              <div className="relative w-full h-8 flex items-center justify-center">
                {/* Light mode logo */}
                <Image
                  src={partner.lightLogo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={32}
                  className={`max-h-7 w-auto object-contain grayscale contrast-125 opacity-70 group-hover:opacity-100 transition-opacity ${
                    partner.darkLogo ? 'dark:hidden' : 'dark:invert'
                  }`}
                />
                {/* Dark mode logo if available */}
                {partner.darkLogo && (
                  <Image
                    src={partner.darkLogo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={32}
                    className="max-h-7 w-auto object-contain grayscale contrast-125 opacity-70 group-hover:opacity-100 transition-opacity hidden dark:block"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Compliance Standards Row */}
        <div className="pt-6 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[var(--text-2)]">
          
          <div className="space-y-1">
            <div className="font-semibold text-[var(--text)]">
              UAE Civil Defence Compliance
            </div>
            <div>
              Control panels and field sensor loops engineered to meet UAE Civil Defence life-safety approval requirements.
            </div>
            {/* TODO: Confirm certificate numbers with Sonic */}
          </div>

          <div className="space-y-1">
            <div className="font-semibold text-[var(--text)]">
              IEC 61508 / Functional Safety (SIL 2/3)
            </div>
            <div>
              Field architectures, voting configurations, and fail-safe relay interfaces aligned to international safety integrity levels.
            </div>
            {/* TODO: Confirm SIL rating documentation with Sonic */}
          </div>

          <div className="space-y-1">
            <div className="font-semibold text-[var(--text)]">
              ISO Quality &amp; Calibration Standards
            </div>
            <div>
              Certified calibration gases, traceable bump test protocols, and documented inspection logs for every handover.
            </div>
            {/* TODO: Confirm ISO 9001 registration details with Sonic */}
          </div>

        </div>

      </div>
    </section>
  );
};
