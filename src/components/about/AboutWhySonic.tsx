'use client';

import React from 'react';

interface RationaleItem {
  title: string;
  proof: string;
  specification: string;
}

const RATIONALE_ITEMS: RationaleItem[] = [
  {
    title: 'UAE climate & ambient engineering',
    proof:
      'Field instrumentation is specified and tested for continuous operation in ambient temperatures up to 55°C, high coastal humidity, and airborne desert dust.',
    specification: 'IP65/IP66 ingress ratings, sun shields, and temperature-compensated sensor cells.',
  },
  {
    title: 'Boreal Laser open-path integration',
    proof:
      'Official regional integration partner for Boreal Laser optical systems, providing continuous line-of-sight gas plume detection up to 500 meters without sensor poisoning or drift from sunlight.',
    specification: 'Laser absorption spectroscopy with internal reference cell calibration.',
  },
  {
    title: 'Single-source UAE engineering',
    proof:
      'Site walkdowns, panel assembly, field wiring, bump testing with certified calibration gases, and SCADA telemetry mapping are handled by Sonic engineers in Abu Dhabi and Dubai.',
    specification: 'Local fabrication and field dispatch with no third-party subcontractor handoffs.',
  },
  {
    title: 'Deterministic safety interlocks',
    proof:
      'Control panels execute deterministic shutoff logic for emergency isolation valves and ventilation exhaust fans, complying with UAE Civil Defence life-safety mandates.',
    specification: 'Hardwired relay interlocks, Modbus RTU/TCP telemetry, and sub-second trip response.',
  },
];

export const AboutWhySonic: React.FC = () => {
  return (
    <section className="w-full border-b border-[var(--border)] bg-[var(--bg)] transition-colors py-16 sm:py-24 lg:py-32">
      <div className="container-1280 space-y-12 sm:space-y-16">
        
        {/* Section Heading: Single weight, single color, no red dash eyebrow */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-heading text-[var(--text)] tracking-tight leading-tight">
            Why teams choose Sonic
          </h2>
          <p className="text-[17px] sm:text-[18px] text-[var(--text-2)] font-normal leading-[1.6] max-w-[68ch]">
            Technical rationale and verified field capabilities applied across industrial, infrastructure, and commercial facilities.
          </p>
        </div>

        {/* Varied Layout:
            Clean 4-column structured editorial layout on desktop with hairline dividers.
            NO line icons. NO card-with-border-and-shadow treatment. Pure typographic precision. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-2 border-t border-[var(--border)]">
          {RATIONALE_ITEMS.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-3 pt-6 sm:pt-8">
              
              {/* Statement Title */}
              <h3 className="text-lg font-bold font-heading text-[var(--text)] leading-snug">
                {item.title}
              </h3>

              {/* Concrete Proof */}
              <p className="text-sm text-[var(--text-2)] leading-relaxed font-normal flex-1">
                {item.proof}
              </p>

              {/* Technical Specification Detail */}
              <div className="pt-3 text-xs text-[var(--text-2)] font-mono border-t border-[var(--border)] opacity-85 leading-normal">
                {item.specification}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
