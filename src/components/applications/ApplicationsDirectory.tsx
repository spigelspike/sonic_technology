'use client';

import React, { useState } from 'react';
import { APPLICATIONS_DATA } from '@/data/applicationsData';
import { ApplicationLightbox } from './ApplicationLightbox';
import { ProjectTitleDots } from '../projects/ProjectTitleDots';
import { ZoomIn, Cpu, Layers, Activity, Radio, ArrowRight } from 'lucide-react';

export const ApplicationsDirectory: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* 1. Hero Section with Clean CAD Dot Matrix Background (No Tags) */}
      <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-24 border-b border-[var(--border)] bg-[var(--bg)] overflow-hidden">
        {/* Crisp Architectural Dot Matrix localized behind the Title */}
        <ProjectTitleDots />

        <div className="container-1280 relative z-10 space-y-6">
          <div className="max-w-3xl space-y-4">
            {/* Eyebrow: WHAT WE BUILD */}
            <div className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-[var(--accent)]">
              WHAT WE BUILD
            </div>

            {/* Heading: Applications */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text)]">
              Applications
            </h1>

            {/* Subtitle from user's original reference */}
            <p className="text-base sm:text-xl font-medium text-[var(--text)] leading-relaxed">
              A selection of the systems we design, build, and bring online.
            </p>

            {/* Authentic Engineering Pedigree Details */}
            <p className="text-xs sm:text-sm text-[var(--text-2)] font-mono leading-relaxed max-w-2xl">
              From multi-megawatt gas turbine supervisory consoles and API 670 machinery protection to high-speed deterministic FPGA loggers and marine engine test cells, Sonic Technologies engineers turnkey industrial supervisory control, telemetry, and automated data acquisition infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Alternating Zig-Zag Applications Showcase (01 through 06) */}
      <section className="py-16 sm:py-24 bg-[var(--bg)]">
        <div className="container-1280 space-y-24 sm:space-y-32">
          {APPLICATIONS_DATA.map((app, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={app.id}
                id={app.id}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Technical Header & Crisp Number */}
                  <div className="flex items-baseline justify-between border-b border-[var(--border)] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--accent)] text-white">
                        SYS // {app.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                        {app.category}
                      </span>
                    </div>

                    {/* Crisp, Bold Architectural Number */}
                    <div className="font-mono text-4xl sm:text-6xl font-extrabold text-[var(--accent)] opacity-85 tracking-tighter select-none">
                      {app.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight leading-snug">
                    {app.title}
                  </h2>

                  {/* Summary & Description */}
                  <div className="space-y-3">
                    <p className="text-sm sm:text-base text-[var(--text)] font-medium leading-relaxed">
                      {app.summary}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  {/* Hardware Specification Callout */}
                  <div className="p-4 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] space-y-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      Hardware Platform
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[var(--text)]">
                      {app.hardwareHighlight}
                    </div>
                  </div>

                  {/* Architecture & Telemetry Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-2)] font-semibold flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
                      Core Engineering Architecture
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {app.architecture.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs text-[var(--text-2)] flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-[var(--accent)] mt-0.5 shrink-0 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Protocols and Standards */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-2)] font-semibold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-[var(--accent)]" />
                      Communication & Standards
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {app.protocols.map((proto, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-[var(--card)] border border-[var(--border)] text-[var(--text)] shadow-2xs"
                        >
                          {proto}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Schematic Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveLightboxIndex(index)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors cursor-pointer group"
                    >
                      <span>Inspect High-Resolution Schematic & SCADA Console</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Schematic Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div
                    onClick={() => setActiveLightboxIndex(index)}
                    className="group relative rounded-xl bg-[var(--card)] border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-xl hover:border-[var(--accent)] transition-all duration-300 cursor-pointer"
                  >
                    {/* Top Technical Bar */}
                    <div className="px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface-2)] flex items-center justify-between text-[11px] font-mono text-[var(--text-2)]">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                        ENGINEERING CONSOLE // SYS-{app.number}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[var(--accent)] font-semibold">
                        <ZoomIn className="w-3 h-3" />
                        Click to Expand
                      </span>
                    </div>

                    {/* Image Container with Crisp Backing */}
                    <div className="p-4 sm:p-6 bg-black/5 dark:bg-black/30 flex items-center justify-center min-h-[300px] sm:min-h-[360px]">
                      <img
                        src={app.image}
                        alt={`${app.title} industrial engineering schematic`}
                        className="max-h-[340px] sm:max-h-[420px] w-auto max-w-full object-contain rounded transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>

                    {/* Corner Registration Crosshairs */}
                    <div className="absolute bottom-2 left-3 text-[9px] font-mono text-[var(--text-2)] opacity-60">
                      [SONIC // {app.category.toUpperCase()}]
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Consultation CTA Bar */}
      <section className="py-14 sm:py-20 border-t border-[var(--border)] bg-[var(--surface-2)]">
        <div className="container-1280 text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[var(--accent)]">
            <Radio className="w-4 h-4 text-[var(--accent)]" />
            CUSTOM INDUSTRIAL AUTOMATION
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
            Need a Custom Supervisory, SCADA, or Test Cell System?
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed font-mono">
            Our UAE engineering team designs custom FPGA acquisition racks, API 670 machinery protection enclosures, and high-throughput SCADA software tailored to your specific rotating equipment or test bench.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:gm@sonictech.ae?subject=Custom%20Application%20Engineering%20Enquiry%20-%20Sonic%20Technologies"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-11 rounded-[4px] text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
            >
              <span>Consult with Our Engineering Team</span>
            </a>

            <a
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-11 rounded-[4px] text-sm font-semibold text-[var(--text)] bg-[var(--card)] hover:bg-[var(--surface-2)] border border-[var(--border)] transition-colors"
            >
              <span>Explore Landmark UAE Projects →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Clean Minimalist Copyright Bar */}
      <div className="py-8 text-center text-xs font-mono text-[var(--text-2)] border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="container-1280 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Sonic Technologies // Industrial Supervisory & Automation Systems</span>
          <span>© 2026 Sonic Technologies. All rights reserved.</span>
        </div>
      </div>

      {/* Full-Screen Interactive Lightbox */}
      <ApplicationLightbox
        applications={APPLICATIONS_DATA}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onSelectIndex={(idx) => setActiveLightboxIndex(idx)}
      />
    </div>
  );
};
