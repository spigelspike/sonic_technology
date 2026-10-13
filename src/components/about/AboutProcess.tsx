'use client';

import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Survey & Site Walkdown',
    description:
      'Physical site inspection to evaluate plant layout, hazardous zones, ventilation patterns, and gas dispersion pathways.',
  },
  {
    number: '02',
    title: 'Design & Specification',
    description:
      'Specifying detector sensor chemistries, optical path lengths, voting logic, and telemetry interfaces before procurement and assembly.',
  },
  {
    number: '03',
    title: 'Assembly & Commissioning',
    description:
      'Control panel fabrication, field wiring, calibration gas bump testing, loop validation, and SCADA telemetry mapping.',
  },
  {
    number: '04',
    title: 'Calibration & Field Support',
    description:
      'Scheduled sensor element replacement, routine bump tests, Civil Defence compliance verification, and UAE emergency dispatch.',
  },
];

export const AboutProcess: React.FC = () => {
  return (
    <section className="w-full border-b border-[var(--border)] bg-[var(--bg)] transition-colors py-16 sm:py-24 lg:py-32">
      <div className="container-1280 space-y-12 sm:space-y-16">
        
        {/* Section Heading: Single weight, single color, no red split, no monospace red dash */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-heading text-[var(--text)] tracking-tight leading-tight">
            How we work
          </h2>
          <p className="text-[17px] sm:text-[18px] text-[var(--text-2)] font-normal leading-[1.6] max-w-[68ch]">
            A structured engineering workflow from initial site walkdown through panel assembly, commissioning, and scheduled calibration stewardship.
          </p>
        </div>

        {/* Process Flow:
            Desktop: 4-column horizontal sequence with thin line and small step markers
            Mobile: vertical list with a left rule */}
        <div className="relative pt-3">
          
          {/* Desktop Horizontal Baseline */}
          <div
            className="hidden lg:block absolute top-[11px] left-0 right-0 h-[1px] bg-[var(--border)] z-0"
            aria-hidden="true"
          />

          {/* Desktop 4 Columns / Mobile Vertical Stack with Left Rule */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-l border-[var(--border)] pl-6 lg:border-l-0 lg:pl-0 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col space-y-3">
                
                {/* Step Marker: Small Clean Number Node (No big circles, no red) */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-xs font-mono font-semibold text-[var(--text)] shrink-0">
                    {step.number}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold font-heading text-[var(--text)] pt-1">
                  {step.title}
                </h3>

                {/* Step Description: Two lines of clear technical text, uniform across all steps */}
                <p className="text-sm text-[var(--text-2)] leading-relaxed font-normal">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
