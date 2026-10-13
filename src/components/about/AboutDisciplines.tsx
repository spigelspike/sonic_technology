'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

interface DisciplineItem {
  id: string;
  name: string;
  domain: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const DISCIPLINES: DisciplineItem[] = [
  {
    id: 'gas-detection',
    name: 'Gas Detection',
    domain: 'Toxic & Combustible Plume Surveillance',
    description:
      'Fixed catalytic bead, electrochemical cell, infrared point, and open-path laser absorption spectroscopy engineered for chemical plants, refineries, and mechanical utility risers.',
    linkText: 'Open-Path Systems',
    linkHref: '/open-path-gas-detection',
  },
  {
    id: 'flame-detection',
    name: 'Fire & Flame Detection',
    domain: 'Optical Radiation Discrimination',
    description:
      'Multi-spectrum ultraviolet, dual-IR, and triple-IR optical flame sensors engineered to detect hydrocarbon and hydrogen fires while ignoring solar radiation, flare reflections, and arc welding.',
    linkText: 'Flame Applications',
    linkHref: '/applications',
  },
  {
    id: 'scada-control',
    name: 'SCADA & Control',
    domain: 'Supervisory Telemetry & Safety Interlocks',
    description:
      'Supervisory control hardware, PLC automation, and deterministic trip logic for real-time telemetry, automated valve shutoff, and emergency exhaust ventilation activation.',
    linkText: 'Control Systems',
    linkHref: '/applications',
  },
  {
    id: 'industrial-iot',
    name: 'Industrial IoT',
    domain: 'Remote Field Telemetry & Gateway Logging',
    description:
      'Edge telemetry gateways and sensor bus transmitters providing continuous status logging, alarm broadcasting, and cloud-synced diagnostics across distributed industrial facilities.',
    linkText: 'IoT Telemetry',
    linkHref: '/applications',
  },
];

export const AboutDisciplines: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full border-b border-[var(--border)] bg-[var(--bg)] transition-colors py-16 sm:py-24 lg:py-32">
      {/* High-tech engineering DotPattern background texture with radial vignette */}
      <DotPattern
        width={24}
        height={24}
        cx={1.5}
        cy={1.5}
        cr={1}
        className={cn(
          "fill-neutral-400/40 dark:fill-neutral-500/25 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)] pointer-events-none",
        )}
      />

      <div className="container-1280 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Heading: Single weight, single color, no red split */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-heading text-[var(--text)] tracking-tight leading-tight">
            Engineering Disciplines
          </h2>
          <p className="text-[17px] sm:text-[18px] text-[var(--text-2)] font-normal leading-[1.6] max-w-[68ch]">
            Specialized instrumentation, optical flame sensing, and telemetry systems engineered for harsh operating environments across the UAE.
          </p>
        </div>

        {/* Clean list with hairline dividers - system slot boxes removed */}
        <div className="border-t border-[var(--border)] divide-y divide-[var(--border)]">
          {DISCIPLINES.map((discipline) => (
            <div
              key={discipline.id}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center group"
            >
              
              {/* Col 1-4: Discipline Name & Technical Subtitle */}
              <div className="lg:col-span-4 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text)] group-hover:text-[var(--text)] transition-colors">
                  {discipline.name}
                </h3>
                <div className="text-xs uppercase tracking-wider text-[var(--text-2)]">
                  {discipline.domain}
                </div>
              </div>

              {/* Col 5-10: Two-line Engineering Description */}
              <div className="lg:col-span-6">
                <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed font-normal max-w-[62ch]">
                  {discipline.description}
                </p>
              </div>

              {/* Col 11-12: Clean Action Link */}
              <div className="lg:col-span-2 flex lg:justify-end">
                <a
                  href={discipline.linkHref}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[var(--text)] hover:underline transition-colors shrink-0"
                >
                  <span>{discipline.linkText}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--text-2)] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
