'use client';

import React from 'react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Listen & Survey',
    subtitle: 'Site Hazard Assessment',
    desc: 'We evaluate mechanical plant rooms, pipeline routing, ventilation flow rates, and specific explosive/toxic hazard envelopes.',
  },
  {
    step: '02',
    title: 'Design & Specify',
    subtitle: 'Deterministic Architecture',
    desc: 'Right-sized engineering architectures with verified SIL functional safety loops, sensor spans, and deterministic FPGA interlocks.',
  },
  {
    step: '03',
    title: 'Integrate & Commission',
    subtitle: 'Single-Source Delivery',
    desc: 'From sensor calibration and cabling to RTU panels, emergency solenoid valve shut-offs, and SCADA screens, one UAE engineering team owns execution.',
  },
  {
    step: '04',
    title: 'Support & Sustain',
    subtitle: 'Lifecycle Maintenance',
    desc: 'Certified calibration cycles, firmware enhancements, and rapid emergency dispatch across Abu Dhabi, Dubai, and the Northern Emirates.',
  },
];

const CAPABILITIES = [
  {
    title: 'FPGA Gate-Array Logic',
    desc: 'Zero-OS hardware determinism delivering guaranteed sub-15ms safety trip interlocks without software crashes or hang states.',
  },
  {
    title: 'SCADA & RTU Supervision',
    desc: 'Carrier-grade industrial telemetry over Modbus RTU / TCP, fiber rings, and centralized multi-facility monitoring consoles.',
  },
  {
    title: 'UAE Civil Defence Alignment',
    desc: 'Engineered in strict accordance with UAE fire codes, hazardous area classifications, and international IEC/EN safety directives.',
  },
  {
    title: 'Rapid Regional Dispatch',
    desc: 'Headquartered in the UAE with local engineering labs, rapid inventory access, and dedicated field instrumentation technicians.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[var(--border)] bg-[var(--bg)] transition-colors relative overflow-hidden">
      <div className="container-1280 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <div className="tag-accent mb-4">Engineering House Profile</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[var(--text)]">
              Engineered in the UAE. Delivered Worldwide.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-[var(--text-2)] leading-relaxed">
              Established in 2019, <strong className="text-[var(--text)]">Sonic Technologies</strong> is a premier UAE automation and safety engineering company specializing in FPGA embedded systems, industrial firmware, and SCADA telemetry. We focus on critical safety disciplines where failure is not an option: gas and flame detection, automated hazard isolation, and supervisory industrial IoT.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-text)] font-heading">
              2019
            </div>
            <div className="text-xs font-mono-tech uppercase text-[var(--text-2)] mt-2 font-medium">
              Established in UAE
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-text)] font-heading">
              1,000+
            </div>
            <div className="text-xs font-mono-tech uppercase text-[var(--text-2)] mt-2 font-medium">
              Sensors Installed
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-text)] font-heading">
              &lt;15ms
            </div>
            <div className="text-xs font-mono-tech uppercase text-[var(--text-2)] mt-2 font-medium">
              Hardware Trip Speed
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-text)] font-heading">
              100%
            </div>
            <div className="text-xs font-mono-tech uppercase text-[var(--text-2)] mt-2 font-medium">
              UAE Engineering Support
            </div>
          </div>
        </div>

        {/* 4-Step Engineering Process Strip */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-10 shadow-sm mb-16">
          <div className="flex items-center justify-between pb-6 border-b border-[var(--border)] mb-8">
            <div>
              <span className="tag-neutral text-[10px] mb-2">Methodology</span>
              <h3 className="text-2xl font-bold font-heading text-[var(--text)]">
                The Engineering-Led Delivery Lifecycle
              </h3>
            </div>
            <span className="text-xs font-mono-tech text-[var(--text-2)] hidden sm:block">
              ISO &amp; Civil Defence Standards
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((ps) => (
              <div key={ps.step} className="flex flex-col justify-between border-t border-[var(--border)] pt-5 relative">
                <div>
                  <span className="text-xs font-mono-tech font-bold text-[var(--accent-text)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-2 py-0.5 rounded">
                    STEP {ps.step}
                  </span>
                  <h4 className="text-lg font-bold font-heading text-[var(--text)] mt-3">
                    {ps.title}
                  </h4>
                  <div className="text-[11px] font-mono-tech text-[var(--accent-text)] mt-0.5">
                    {ps.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-2)] mt-2.5 leading-relaxed">
                    {ps.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div key={idx} className="premium-card p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] flex items-center justify-center text-[var(--accent-text)] font-mono-tech font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold font-heading text-[var(--text)] mb-2">
                  {cap.title}
                </h4>
                <p className="text-xs text-[var(--text-2)] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
