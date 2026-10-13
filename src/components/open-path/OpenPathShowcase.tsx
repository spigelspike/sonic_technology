'use client';

import React, { useState } from 'react';
import {
  TARGET_GASES,
  PATH_LENGTHS,
  TargetGasItem,
  PathLengthItem,
} from '@/data/openPathData';
import { LaserModelViewer } from './LaserModelViewer';
import {
  Maximize2,
  Radio,
  ArrowRight,
} from 'lucide-react';

export const OpenPathShowcase: React.FC = () => {
  const [selectedGas, setSelectedGas] = useState<TargetGasItem>(TARGET_GASES[1]); // Default H2S
  const [selectedPath, setSelectedPath] = useState<PathLengthItem>(PATH_LENGTHS[2]); // Default Long-Path (50-100m)
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  // Email inquiry link pre-filled with selected gas and path length
  const inquiryMailto = `mailto:gm@sonictech.ae?subject=Boreal%20GasFinder-LoS%20Project%20Enquiry%20-%20${encodeURIComponent(
    selectedGas.name
  )}%20(${encodeURIComponent(selectedGas.formula)})%20-%20${encodeURIComponent(
    selectedPath.tier
  )}&body=Dear%20Sonic%20Technologies%20Engineering%20Team,%0A%0APlease%20provide%20technical%20datasheets%20and%20optical%20path%20calculations%20for%20our%20facility:%0A%0A-%20Target%20Gas:%20${encodeURIComponent(
    selectedGas.name
  )}%20(${encodeURIComponent(selectedGas.formula)})%0A-%20Measurement%20Range:%20${encodeURIComponent(
    selectedGas.loRange
  )}%0A-%20Optical%20Path%20Length:%20${encodeURIComponent(
    selectedPath.tier
  )}%20(${encodeURIComponent(
    selectedPath.rangeMeters
  )})%0A%0AFacility%20Location:%20%0AContact%20Person:%20%0ACompany:%20`;

  return (
    <div className="w-full bg-[var(--bg)] text-[var(--text)] transition-colors pb-24 md:pb-0">
      {/* =========================================================================
          1. HERO SECTION
          Desktop: 50% Hero width for 3D model, cleanly proportioned.
          Mobile Order: Headline -> 3D Model -> Primary CTA -> Plain Spec List.
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-20 border-b border-[var(--border)] overflow-hidden">
        <div className="container-1280 space-y-8 sm:space-y-12">

          {/* Top Partner & Technology Line */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-[var(--border)] pb-4 sm:pb-5">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="https://www.boreal-laser.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] rounded"
                title="Boreal Laser Inc. Technology Partner"
              >
                <img
                  src="/assets/boreal.png"
                  alt="Boreal Laser Inc."
                  className="h-7 sm:h-9 w-auto object-contain theme-light-logo"
                  width={140}
                  height={36}
                />
                <img
                  src="/assets/boreal_white.png"
                  alt="Boreal Laser Inc."
                  className="h-7 sm:h-9 w-auto object-contain theme-dark-logo"
                  width={140}
                  height={36}
                />
              </a>
              <span className="text-[var(--border)] hidden sm:inline">|</span>
              <span className="text-xs sm:text-sm text-[var(--text-2)] font-medium">
                Technology partner: Boreal Laser Inc.
              </span>
            </div>

            <div className="text-xs text-[var(--text-2)] font-medium">
              Open-path optical spectroscopy
            </div>
          </div>

          {/* Main Hero Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Desktop Column / Mobile Group 1: Headline & Content */}
            <div className="lg:col-span-6 flex flex-col space-y-6">

              {/* Headline Block (Mobile Order 1) */}
              <div className="order-1 space-y-3 sm:space-y-4">
                <span className="text-xs sm:text-sm font-semibold text-[var(--text-2)] tracking-normal uppercase">
                  Line-of-Sight Laser Gas Detection
                </span>

                <h1
                  id="hero-heading"
                  className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1] scroll-mt-24"
                >
                  GasFinder – Line of Sight (LoS)
                </h1>

                <p className="text-base sm:text-lg text-[var(--text)] font-normal leading-relaxed">
                  Tunable diode laser absorption spectroscopy (TDLAS) for continuous perimeter and fence-line monitoring across spans up to 500 meters.
                </p>

                <p className="text-sm text-[var(--text-2)] leading-relaxed">
                  Coaxial transmitter and receiver optics project an eye-safe collimated laser beam to a passive retroreflector. Measures target gas concentration along the entire optical beam with a 1.0-second measurement cycle.
                </p>
              </div>

              {/* 3D Model: Mobile Order 2 (Shown between Headline and CTA on mobile) */}
              <div className="order-2 lg:hidden w-full my-2">
                <div className="w-full flex items-center justify-center">
                  <LaserModelViewer modelPath="/assets/GasFinder/laser.glb" />
                </div>
              </div>

              {/* CTA Action Row: Mobile Order 3 */}
              <div className="order-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center px-6 h-12 rounded-[4px] text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                >
                  <span>Request Technical Datasheet &amp; Site Survey</span>
                </a>

                <a
                  href="#target-gases"
                  className="inline-flex items-center justify-center px-5 h-12 rounded-[4px] text-sm font-semibold text-[var(--text)] bg-[var(--surface-2)] hover:bg-[var(--border)] border border-[var(--border)] transition-colors"
                >
                  <span>View Gas Thresholds</span>
                </a>
              </div>

              {/* Feature Specifications: Mobile Order 4 (Plain 2-column definition layout, no icon cards) */}
              <div className="order-4 pt-4 sm:pt-6 border-t border-[var(--border)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      Integrated transceiver architecture
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Transmitter laser diode, receiver optics, and analytical processor housed in a single assembly. No separate transceiver-receiver alignment pairs required.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      1.0-second response time
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Continuous optical measurement updating every second with high optical sensitivity for immediate alarm initiation.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      No routine field recalibration
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Internal reference cell performs continuous spectral verification on every scan, eliminating routine field test gas consumption.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      Consumable-free solid-state optics
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Immune to sensor poisoning, moisture saturation, and catalytic cell degradation with zero periodic sensor element replacements.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Desktop Column: 3D Model Centerpiece (Balanced desktop scale, front signature view) */}
            <div className="hidden lg:flex lg:col-span-6 w-full items-center justify-center relative">
              <LaserModelViewer modelPath="/assets/GasFinder/laser.glb" />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. SECTION: TARGET GASES & MEASUREMENT RANGES
          Clean data table without artificial "Select" column with radio buttons.
          Row click selects the gas.
          ========================================================================= */}
      <section id="target-gases" className="py-12 sm:py-20 border-b border-[var(--border)]">
        <div className="container-1280 space-y-6 sm:space-y-8">

          {/* Section Header */}
          <div className="space-y-2 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] tracking-tight">
              Target gases and alarm thresholds
            </h2>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              Path-integrated gas measurement ranges in <span className="font-mono">ppm-m</span> and <span className="font-mono">LEL-m</span>. Threshold setpoints reflect representative industrial standards; final alarm logic is configured to facility hazard assessments.
            </p>
          </div>

          {/* Desktop & Tablet: Compact Engineering Data Table (>= 640px) - No "Select" radio column */}
          <div className="hidden sm:block overflow-x-auto border border-[var(--border)] rounded-lg bg-[var(--card)] shadow-xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface-2)] text-xs text-[var(--text-2)] font-semibold">
                  <th className="py-3 px-4">Formula</th>
                  <th className="py-3 px-4">Target Gas</th>
                  <th className="py-3 px-4">Hazard Class</th>
                  <th className="py-3 px-4">Dynamic Range</th>
                  <th className="py-3 px-4">Low Alarm (Hi)</th>
                  <th className="py-3 px-4">High Alarm (HiHi)</th>
                  <th className="py-3 px-4">Typical Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {TARGET_GASES.map((gas) => {
                  const isSelected = selectedGas.id === gas.id;
                  return (
                    <tr
                      key={gas.id}
                      onClick={() => setSelectedGas(gas)}
                      tabIndex={0}
                      role="button"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedGas(gas);
                        }
                      }}
                      className={`transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] ${
                        isSelected
                          ? 'bg-[var(--surface-2)] font-medium text-[var(--text)] border-l-4 border-l-[var(--accent)]'
                          : 'hover:bg-[var(--surface-2)]/60 text-[var(--text-2)] hover:text-[var(--text)] border-l-4 border-l-transparent'
                      }`}
                    >
                      <td className="py-3.5 px-4 font-mono font-bold text-sm text-[var(--text)] whitespace-nowrap">
                        <span className={`inline-block px-2 py-0.5 rounded border transition-colors ${
                          isSelected
                            ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                            : 'bg-[var(--surface-2)] border-[var(--border)] text-[var(--text)]'
                        }`}>
                          {gas.formula}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[var(--text)] whitespace-nowrap">
                        {gas.name}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="text-xs px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-2)]">
                          {gas.hazardType}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono whitespace-nowrap text-xs text-[var(--text)]">
                        {gas.loRange}
                      </td>
                      <td className="py-3.5 px-4 font-mono whitespace-nowrap text-xs text-[var(--text)]">
                        {gas.hiAlarm}
                      </td>
                      <td className="py-3.5 px-4 font-mono whitespace-nowrap text-xs text-[var(--text-2)]">
                        {gas.hiHiAlarm || '—'}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-[var(--text-2)] max-w-xs truncate">
                        {gas.typicalApplication}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile: Clean List under 640px - No radio circle button */}
          <div className="sm:hidden space-y-2.5">
            {TARGET_GASES.map((gas) => {
              const isSelected = selectedGas.id === gas.id;
              return (
                <div
                  key={gas.id}
                  onClick={() => setSelectedGas(gas)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedGas(gas);
                    }
                  }}
                  className={`min-h-[44px] p-4 rounded-lg border transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] ${
                    isSelected
                      ? 'bg-[var(--card)] border-[var(--accent)] border-l-4 border-l-[var(--accent)] shadow-sm'
                      : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--text-2)]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`font-mono text-sm font-bold px-2 py-0.5 rounded border ${
                        isSelected
                          ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                          : 'bg-[var(--surface-2)] text-[var(--text)] border-[var(--border)]'
                      }`}>
                        {gas.formula}
                      </span>
                      <span className="text-sm font-semibold text-[var(--text)]">
                        {gas.name}
                      </span>
                    </div>

                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-2)]">
                      {gas.hazardType}
                    </span>
                  </div>

                  {/* Aligned numeric figures */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-3 mt-3 border-t border-[var(--border)]">
                    <div>
                      <span className="text-[var(--text-2)] block">Range:</span>
                      <span className="font-mono text-[var(--text)] font-semibold">{gas.loRange}</span>
                    </div>
                    <div>
                      <span className="text-[var(--text-2)] block">Alarms:</span>
                      <span className="font-mono text-[var(--text)]">Hi: {gas.hiAlarm}</span>
                      {gas.hiHiAlarm && (
                        <span className="font-mono text-[var(--text-2)] ml-2">HiHi: {gas.hiHiAlarm}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Gas Summary Bar */}
          <div className="p-4 sm:p-5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="text-xs text-[var(--text-2)] font-medium">
                Active Selection: <strong className="text-[var(--text)] font-mono">{selectedGas.name} ({selectedGas.formula})</strong>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text)]">
                Typical installations: {selectedGas.typicalApplication}
              </p>
            </div>

            <a
              href="#consultation"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--accent)] hover:underline shrink-0"
            >
              <span>Consult Engineering for {selectedGas.formula}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. SECTION: PATH LENGTH SELECTION
          Clean path length cards on left, technical diagram on right.
          No radio check icons, no clunky artificial progress bar.
          ========================================================================= */}
      <section id="path-lengths" className="py-12 sm:py-20 border-b border-[var(--border)]">
        <div className="container-1280 space-y-6 sm:space-y-8">

          {/* Section Header */}
          <div className="space-y-2 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] tracking-tight">
              Path length selection
            </h2>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              Optical span determines the matching retroreflector optics required to maintain optical signal return. Consideration has been given to optimizing the ability to create and maintain optical alignment in varied industrial environments.
            </p>
          </div>

          {/* Split View: 4 Path Length Cards on Left, Technical Diagram on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

            {/* Left: Interactive Path Length Cards (No radio icons, clean selection) */}
            <div className="lg:col-span-6 space-y-3">
              {PATH_LENGTHS.map((item) => {
                const isSelected = selectedPath.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPath(item)}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedPath(item);
                      }
                    }}
                    className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] ${
                      isSelected
                        ? 'bg-[var(--card)] border-[var(--accent)] shadow-md ring-1 ring-[var(--accent)]'
                        : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--text-2)]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text)]">
                            {item.tier}
                          </h3>
                          <span className="text-xs font-mono text-[var(--accent)] font-semibold">
                            ({item.opticsType})
                          </span>
                        </div>

                        <div className="text-xs font-mono font-bold text-[var(--text)] mt-1">
                          Suggested Path Length: {item.rangeMeters} ({item.rangeFeet})
                        </div>

                        <p className="text-xs text-[var(--text-2)] mt-1.5 leading-relaxed">
                          {item.recommendedUse}
                        </p>
                      </div>

                      <div className="sm:text-right shrink-0 mt-1 sm:mt-0">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-2)] inline-block">
                          {item.alignmentTolerance}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Technical Diagram with Click-to-Zoom (Clean diagram presentation) */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setActiveImageModal('/assets/GasFinder/SelectyourPathLength.png')}
                className="group relative rounded-2xl bg-[var(--card)] border border-[var(--border)] p-4 sm:p-6 sm:p-8 flex items-center justify-center shadow-md hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[9px] sm:text-[10px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] font-semibold">
                  OPTICAL PATH ALIGNMENT SPAN MATRIX
                </div>

                <img
                  src="/assets/GasFinder/SelectyourPathLength.png"
                  alt="Open Path Gas Detection Suggested Path Length Diagram"
                  className="max-h-[260px] sm:max-h-[360px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-[var(--accent)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                  Expand Diagram
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SECTION: PLACEMENT GUIDE
          HTML overlays for readable specs, clean layout with dividers.
          ========================================================================= */}
      <section id="placement-guide" className="py-12 sm:py-20 border-b border-[var(--border)]">
        <div className="container-1280 space-y-10 sm:space-y-12">

          {/* Section Header */}
          <div className="space-y-2 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] tracking-tight">
              Placement guide
            </h2>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              Optical line-of-sight engineering for process units, pipe racks, and facility boundaries. Optimizing the detection curtain based on gas buoyancy and plant aerodynamics.
            </p>
          </div>

          {/* Plant Fence-Line Schematic with HTML Overlay */}
          <div className="border border-[var(--border)] rounded-2xl bg-[var(--card)] p-5 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text)]">
                  Fence-line and process skid emission curtain
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-2)]">
                  Continuous path-integrated detection envelope across multiple potential leak points
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveImageModal('/assets/GasFinder/OptimizeInstallation.png')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline shrink-0 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full-screen schematic</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Graphic with HTML Callouts */}
              <div className="lg:col-span-7 relative flex items-center justify-center p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
                <img
                  src="/assets/GasFinder/OptimizeInstallation.png"
                  alt="Process plant line and fence-line gas monitoring schematic"
                  className="max-h-[260px] sm:max-h-[320px] w-auto max-w-full object-contain"
                />

                <div className="absolute top-3 left-3 bg-[var(--card)]/95 border border-[var(--border)] rounded px-2.5 py-1 text-[11px] font-medium text-[var(--text)] shadow-xs">
                  Line and fence-line monitoring [ppm-m]
                </div>
              </div>

              {/* Explanatory Definition List */}
              <div className="lg:col-span-5 space-y-4 text-sm">
                <div className="space-y-1">
                  <h4 className="font-semibold text-[var(--text)]">
                    Volumetric plume interception
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                    Point detectors require physical gas molecules to enter the sensor sinter. Open-path lasers intercept dispersing gas clouds anywhere along the optical line of sight.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-[var(--text)]">
                    Multiple leak sources covered
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                    A single optical path replaces dozens of individual point detectors along compressor manifolds, pipe racks, and boundary fences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Detailed Technical Callout Blocks: Mounting Geometry & Electrical Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

            {/* Block 1: Mounting Height & Geographic Influence */}
            <div className="border border-[var(--border)] rounded-2xl bg-[var(--card)] p-5 sm:p-6 space-y-4 shadow-sm">
              <div className="border-b border-[var(--border)] pb-3">
                <span className="text-xs text-[var(--text-2)] font-medium">Mounting specifications</span>
                <h3 className="text-lg font-bold text-[var(--text)]">
                  Geographic Area of Influence
                </h3>
              </div>

              {/* Image with HTML Overlay */}
              <div
                onClick={() => setActiveImageModal('/assets/GasFinder/MountingHeightStructure.png')}
                className="relative rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-3 flex items-center justify-center cursor-pointer group"
              >
                <img
                  src="/assets/GasFinder/MountingHeightStructure.png"
                  alt="Mounting Height 2m to 4m and Area of Influence Diagram"
                  className="max-h-[200px] w-auto max-w-full object-contain"
                />
                <span className="absolute bottom-2 right-2 text-[10px] text-[var(--accent)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to zoom
                </span>
              </div>

              {/* HTML Data Callouts replacing baked-in text */}
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] space-y-0.5">
                  <div className="font-semibold text-[var(--text)]">
                    Mounting Height: 2 m to 4 m (7 ft to 13 ft)
                  </div>
                  <div className="text-xs text-[var(--text-2)]">
                    Maintains clear optical trajectory above ground personnel and forklift traffic while intercepting thermal gas convection.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] space-y-0.5">
                  <div className="font-semibold text-[var(--text)]">
                    Area of Influence: 5 m (15 ft) radius
                  </div>
                  <div className="text-xs text-[var(--text-2)]">
                    Effective capture perimeter around pressurized pipelines, flanges, valve trees, and storage vessels.
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Electrical, Power & Telemetry Interface */}
            <div className="border border-[var(--border)] rounded-2xl bg-[var(--card)] p-5 sm:p-6 space-y-4 shadow-sm">
              <div className="border-b border-[var(--border)] pb-3">
                <span className="text-xs text-[var(--text-2)] font-medium">Field wiring &amp; telemetry</span>
                <h3 className="text-lg font-bold text-[var(--text)]">
                  Power and Communication Interface
                </h3>
              </div>

              {/* Image with HTML Overlay */}
              <div
                onClick={() => setActiveImageModal('/assets/GasFinder/PowerCommunication.png')}
                className="relative rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-3 flex items-center justify-center cursor-pointer group"
              >
                <img
                  src="/assets/GasFinder/PowerCommunication.png"
                  alt="Boreal Field Connection Terminal Plate"
                  className="max-h-[200px] w-auto max-w-full object-contain"
                />
                <span className="absolute bottom-2 right-2 text-[10px] text-[var(--accent)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to zoom
                </span>
              </div>

              {/* HTML Data Callouts */}
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] space-y-0.5">
                  <div className="font-semibold text-[var(--text)]">
                    Operating Power: 24 VDC nominal
                  </div>
                  <div className="text-xs text-[var(--text-2)]">
                    Low-power solid-state operation with internal reverse polarity and transient surge protection.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] space-y-0.5">
                  <div className="font-semibold text-[var(--text)]">
                    Outputs: Dual 4–20 mA &amp; Modbus RS-485
                  </div>
                  <div className="text-xs text-[var(--text-2)]">
                    Isolated analog current loops for DCS/F&amp;G systems, serial multidrop digital bus, and Form C trouble relays.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Maintenance & Onboard Logging Definitions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] space-y-1">
              <h4 className="font-semibold text-[var(--text)] text-sm sm:text-base">
                Wireless ground-level diagnostics
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Field technicians configure alarm setpoints, verify alignment intensity, and perform optical health checks wirelessly from ground level without opening explosion-proof enclosures.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] space-y-1">
              <h4 className="font-semibold text-[var(--text)] text-sm sm:text-base">
                20-year internal data logging
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Non-volatile solid-state memory records gas concentration readings, optical transmission health, and system diagnostic events continuously over the lifetime of the instrument.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. DIRECT ENGINEERING CONSULTATION SECTION (RESTORED OLD VERSION)
          High-impact centered consultation section per user request.
          ========================================================================= */}
      <section id="contact" className="scroll-mt-20 py-12 sm:py-20 border-b border-[var(--border)] bg-[var(--surface-2)]">
        <div id="consultation" className="scroll-mt-20" />
        <div className="container-1280 text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[var(--accent)]">
            <Radio className="w-4 h-4 text-[var(--accent)]" />
            DIRECT UAE ENGINEERING CONSULTATION
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text)] tracking-tight">
            Deploy Boreal Open-Path Laser Gas Detection
          </h2>

          <p className="text-xs sm:text-base text-[var(--text-2)] leading-relaxed font-sans">
            Connect with Sonic Technologies functional safety and optical detection engineers for path-length calculations, optical line-of-sight studies, and UAE Civil Defense compliant safety system integration.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              href={inquiryMailto}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 rounded-[4px] text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
            >
              <span>Request Technical Datasheet &amp; Site Survey</span>
            </a>

            <a
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 rounded-[4px] text-sm font-semibold text-[var(--text)] bg-[var(--card)] hover:bg-[var(--surface-2)] border border-[var(--border)] transition-colors"
            >
              <span>View Landmark UAE Projects →</span>
            </a>
          </div>

          {/* Direct Desk Line for Desktop */}
          <div className="pt-2 text-xs font-mono text-[var(--text-2)] flex flex-wrap items-center justify-center gap-2">
            <span>Engineering Desk:</span>
            <a href="mailto:gm@sonictech.ae" className="text-[var(--accent-text)] font-semibold hover:underline">
              gm@sonictech.ae
            </a>
            <span className="opacity-40">·</span>
            <span>Abu Dhabi &amp; Dubai, UAE</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. MOBILE STICKY BOTTOM BAR
          Visible on mobile, shows current gas & path selection + Request Quote.
          ========================================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[var(--card)] border-t border-[var(--border)] shadow-xl px-4 py-3 flex items-center justify-between gap-3">
        <div className="space-y-0.5 min-w-0">
          <span className="text-[10px] text-[var(--text-2)] uppercase block">
            Current Selection
          </span>
          <div className="text-xs font-bold text-[var(--text)] truncate">
            <span className="font-mono text-[var(--accent)]">{selectedGas.formula}</span>
            <span className="text-[var(--text-2)] mx-1">·</span>
            <span className="font-mono">{selectedPath.rangeMeters}</span>
          </div>
        </div>

        <a
          href={inquiryMailto}
          className="inline-flex items-center justify-center px-4 h-10 rounded-[4px] text-xs font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shrink-0 shadow-sm"
        >
          <span>Request Quote</span>
        </a>
      </div>

      {/* =========================================================================
          7. FOOTER BAR
          ========================================================================= */}
      <footer className="py-6 sm:py-8 text-xs text-[var(--text-2)] border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="container-1280 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Sonic Technologies · Boreal Laser Open-Path Optical Systems</span>
          <span>© 2026 Sonic Technologies. All rights reserved.</span>
        </div>
      </footer>

      {/* =========================================================================
          8. LIGHTBOX MODAL FOR SCHEMATICS
          ========================================================================= */}
      {activeImageModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] rounded-lg bg-[var(--card)] border border-[var(--border)] p-4 sm:p-6 overflow-hidden flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-[var(--border)] mb-4">
              <span className="text-xs font-semibold text-[var(--text)]">
                Technical schematic inspection
              </span>
              <button
                type="button"
                onClick={() => setActiveImageModal(null)}
                className="px-3 py-1 rounded text-xs bg-[var(--surface-2)] hover:bg-[var(--border)] text-[var(--text)] transition-colors cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>

            <img
              src={activeImageModal}
              alt="High-resolution technical diagram"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};
