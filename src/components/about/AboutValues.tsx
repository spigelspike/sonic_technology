'use client';

import React from 'react';
import { ShieldCheck, Crosshair, Globe2, FileText } from 'lucide-react';

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Protection of life and asset is non-negotiable; all standards aligned to safety.',
  },
  {
    icon: Crosshair,
    title: 'Precision',
    description: 'Calibrated, documented tolerances; zero tolerance for false alarms or slip.',
  },
  {
    icon: Globe2,
    title: 'Built for the Region. Ready for the World.',
    description:
      'Engineered for UAE conditions — extreme heat, dust, humidity and duty cycle; engineered to the highest standards.',
  },
  {
    icon: FileText,
    title: 'Clarity',
    description:
      'Zero obscure jargon; plain transparency in every documentation, POC, and access.',
  },
];

export const AboutValues: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--bg)] transition-colors">
      <div className="container-1280 space-y-10 sm:space-y-14">
        
        {/* Section Tag matching mockup */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[var(--accent)]">
          <span className="w-4 h-[1.5px] bg-[var(--accent)]" />
          <span>Why Teams Choose Sonic</span>
        </div>

        {/* 4 Columns with Vertical Divider Borders matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[var(--border)] rounded-lg bg-[var(--card)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)] shadow-xs overflow-hidden">
          {VALUES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="p-6 sm:p-8 flex flex-col space-y-5 hover:bg-[var(--surface-2)]/40 transition-colors group"
              >
                {/* Red thin outline icon matching mockup */}
                <div className="w-9 h-9 flex items-center justify-center text-[var(--accent)]">
                  <Icon className="w-7 h-7 stroke-[1.5] group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold font-heading text-[var(--text)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
