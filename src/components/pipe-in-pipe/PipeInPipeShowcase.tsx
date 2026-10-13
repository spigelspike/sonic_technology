'use client';

import React, { useState } from 'react';
import { PipeInPipeModelViewer, PipeModelVariant } from './PipeInPipeModelViewer';
import {
  Radio,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Activity,
  Sliders,
  BellRing,
} from 'lucide-react';

export const PipeInPipeShowcase: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<PipeModelVariant>('sonic-mc2');

  const modelDisplayName =
    selectedVariant === 'sonic-mc2'
      ? 'SONIC-ADD-MC2 (Standard Enclosure)'
      : 'JINU-SONIC-ADD-MC (Digital LCD Display)';

  const inquiryMailto = `mailto:gm@sonictech.ae?subject=Pipe-In-Pipe%20Gas%20Detector%20Project%20Enquiry%20-%20${encodeURIComponent(
    modelDisplayName
  )}&body=Dear%20Sonic%20Technologies%20Engineering%20Team,%0A%0APlease%20provide%20technical%20datasheets%20and%20quotations%20for%20our%20pipe-in-pipe%20monitoring%20project:%0A%0A-%20Model%20Configuration:%20${encodeURIComponent(
    modelDisplayName
  )}%0A-%20Target%20Gas:%20LPG%20/%20Methane%20/%20Propane%20(0-100%25%20LEL)%0A-%20Process%20Connection:%20NPT%203/4%22%20Double-Wall%20Annular%20Port%0A%0ACompany%20/%20Facility:%20%0AProject%20Location:%20%0AContact%20Person:%20`;

  return (
    <div className="w-full bg-[var(--bg)] text-[var(--text)] transition-colors pb-24 md:pb-0">
      {/* =========================================================================
          1. HERO SECTION
          Desktop: 50% Hero width for 3D model, cleanly proportioned.
          Mobile Order: Headline -> 3D Model -> Primary CTA -> Plain Spec List.
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-20 border-b border-[var(--border)] overflow-hidden">
        <div className="container-1280 space-y-8 sm:space-y-12">

          {/* Top Classification Line */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-[var(--border)] pb-4 sm:pb-5">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold text-[var(--text)]">
                Sonic Technologies
              </span>
              <span className="text-[var(--border)]">|</span>
              <span className="text-xs sm:text-sm text-[var(--text-2)] font-medium">
                Double-Wall Pipeline Gas Detection Systems
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--text-2)] font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>Interstitial Annular Space Gas Monitoring</span>
            </div>
          </div>

          {/* Main Hero Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Desktop Column / Mobile Group 1: Headline & Content */}
            <div className="lg:col-span-6 flex flex-col space-y-6">

              {/* Headline Block (Mobile Order 1) */}
              <div className="order-1 space-y-3 sm:space-y-4">
                <span className="text-xs sm:text-sm font-semibold text-[var(--text-2)] tracking-normal uppercase">
                  Double-Wall Pipeline Gas Detection
                </span>

                <h1
                  id="hero-heading"
                  className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1] scroll-mt-24"
                >
                  Pipe-In-Pipe Detectors
                </h1>

                <p className="text-base sm:text-lg text-[var(--text)] font-normal leading-relaxed">
                  Industrial gas detection engineered for pipe-in-pipe installations — robust, precise.
                </p>

                <p className="text-sm text-[var(--text-2)] leading-relaxed">
                  Designed specifically for interstitial annular containment spaces in double-walled fuel pipelines. Couples directly via an <span className="font-mono">NPT 3/4&quot;</span> male threaded connector to detect combustible gas migration before outer pressure barriers are breached.
                </p>
              </div>

              {/* 3D Model: Mobile Order 2 (Shown between Headline and CTA on mobile) */}
              <div className="order-2 lg:hidden w-full my-2">
                <PipeInPipeModelViewer
                  activeVariant={selectedVariant}
                  onVariantChange={setSelectedVariant}
                />
              </div>

              {/* CTA Action Row: Mobile Order 3 */}
              <div className="order-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center px-6 h-12 rounded-[4px] text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                >
                  <span>Request Technical Datasheet &amp; Quote</span>
                </a>

                <a
                  href="#specifications"
                  className="inline-flex items-center justify-center px-5 h-12 rounded-[4px] text-sm font-semibold text-[var(--text)] bg-[var(--surface-2)] hover:bg-[var(--border)] border border-[var(--border)] transition-colors"
                >
                  <span>View Technical Specs</span>
                </a>
              </div>

              {/* Feature Specifications: Mobile Order 4 (Plain 2-column definition layout) */}
              <div className="order-4 pt-4 sm:pt-6 border-t border-[var(--border)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      Direct NPT 3/4&quot; pipeline coupling
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Threads directly into double-wall pipe containment taps without flow-restricting adapters, providing zero-dead-volume gas sampling.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      0 … 100% LEL full range
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Pellistor catalytic bead or optional MOS sensor detecting Butane, Hydrogen, Methane, and Propane (LPG).
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      Dual analog &amp; RS485 Modbus
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Isolated user-settable 4–20 mA or 0–10 V loops with multidrop Modbus RTU telemetry for BMS and central SCADA integration.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      IP65 sealed industrial enclosure
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Rated 0 to +50 °C with internal 85 dB audible buzzer, dual Red/Green status LEDs, and push-button self-test diagnostics.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Desktop Column: 3D Model Centerpiece */}
            <div className="hidden lg:flex lg:col-span-6 w-full items-center justify-center relative">
              <PipeInPipeModelViewer
                activeVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
              />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. HOW PIPE-IN-PIPE DETECTION WORKS (INTERSTITIAL SAFETY PRINCIPLES)
          Clean engineering breakdown of double-wall pipeline containment.
          ========================================================================= */}
      <section id="principles" className="py-12 sm:py-20 border-b border-[var(--border)]">
        <div className="container-1280 space-y-8 sm:space-y-10">

          <div className="space-y-2 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] tracking-tight">
              How Pipe-in-Pipe Interstitial Monitoring Works
            </h2>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              Double-walled fuel piping protects high-occupancy commercial buildings, underground utility chases, and plant utility corridors. Concentric secondary containment confines leaks before fuel gas enters occupied areas.
            </p>
          </div>

          {/* Visual 4-Stage Process Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xs font-mono font-bold text-[var(--accent)]">
                01
              </div>
              <h3 className="text-base font-bold text-[var(--text)]">
                Inner Carrier Pipe
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Pressurized fuel gas (LPG, propane, natural gas) flows continuously through the primary central carrier line under plant operating pressures.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xs font-mono font-bold text-[var(--accent)]">
                02
              </div>
              <h3 className="text-base font-bold text-[var(--text)]">
                Interstitial Annular Cavity
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                The sealed annular space between inner and outer pipes acts as a secondary buffer. Any weld pinhole or flange weep directs fuel gas into this monitored volume.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xs font-mono font-bold text-[var(--accent)]">
                03
              </div>
              <h3 className="text-base font-bold text-[var(--text)]">
                Direct NPT 3/4&quot; Detection Tap
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                The SONIC-ADD-MC2 detector screws into an access port welded directly onto the outer pipe jacket, sampling the annular gas mixture in real time.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xs font-mono font-bold text-[var(--accent)]">
                04
              </div>
              <h3 className="text-base font-bold text-[var(--text)]">
                Automated Safety Interlock
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Upon reaching the pre-configured alarm threshold, dual SPST relays trigger emergency solenoid shutoff valves and initiate exhaust ventilation.
              </p>
            </div>
          </div>

          {/* Key Advantages Summary Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold uppercase text-[var(--accent)]">
                Compliance &amp; Life Safety
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[var(--text)]">
                Full compliance with UAE Civil Defence Fuel Gas Codes
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-2)] max-w-2xl">
                Meets NFPA 54 / NFPA 58 requirements and UAE commercial building safety codes for gas lines traversing indoor shafts, basements, and occupied retail zones.
              </p>
            </div>

            <a
              href="#consultation"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded text-xs font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shrink-0 shadow-xs"
            >
              <span>Consult Engineering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. COMPREHENSIVE SPECIFICATIONS & VARIANT COMPARISON TABLE
          Data table strictly preserving all technical facts from datasheet.
          ========================================================================= */}
      <section id="specifications" className="py-12 sm:py-20 border-b border-[var(--border)]">
        <div className="container-1280 space-y-6 sm:space-y-8">

          <div className="space-y-2 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] tracking-tight">
              Technical Specifications &amp; Model Comparison
            </h2>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              Comparison between the standard heavy-duty transmitter and the digital LCD display edition. Both units share the identical <span className="font-mono">NPT 3/4&quot;</span> annular process fitting and sensor cell architecture.
            </p>
          </div>

          {/* Detailed Side-by-Side Specifications Table */}
          <div className="overflow-x-auto border border-[var(--border)] rounded-lg bg-[var(--card)] shadow-xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface-2)] text-xs text-[var(--text-2)] font-semibold">
                  <th className="py-3.5 px-4 w-1/3">Specification Parameter</th>
                  <th className="py-3.5 px-4 w-1/3">
                    <span className="text-[var(--text)] font-bold">SONIC-ADD-MC2</span>
                    <span className="block text-[11px] font-normal text-[var(--text-2)]">Standard Enclosure Model</span>
                  </th>
                  <th className="py-3.5 px-4 w-1/3">
                    <span className="text-[var(--text)] font-bold">JINU-SONIC-ADD-MC</span>
                    <span className="block text-[11px] font-normal text-[var(--text-2)]">Digital LCD Display Model</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] text-xs sm:text-sm">
                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Detected Gases</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">Butane, hydrogen, methane, propane (LPG)</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">Butane, hydrogen, methane, propane (LPG)</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Measurement Range</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">0 … 100% LEL</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">0 … 100% LEL</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Sensor Technology</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Catalytic bead (pellistor), optional metal oxide (MOS)</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Catalytic bead (pellistor), optional metal oxide (MOS)</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Process Connection</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">NPT 3/4&quot; male threaded annular connector</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">NPT 3/4&quot; male threaded annular connector</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Housing Dimensions</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">H90 × W145 × D50 mm (housing only)</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">H90 × W145 × D50 mm (housing only)</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Enclosure Rating</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">IP65 sealed heavy-duty robust enclosure</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">IP65 sealed heavy-duty robust enclosure</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Operating Temperature</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">0 … +50 °C</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">0 … +50 °C</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Operating Environment</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Industrial indoor and outdoor locations</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Industrial indoor and outdoor locations</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Analog Outputs</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">Two analog outputs (settable to 4–20 mA or 0–10 V)</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">One analog output (4–20 mA or 0–10 V)*</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Digital Interface</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">RS485 Modbus RTU slave interface</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">RS485 Modbus RTU slave interface</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Visual Indication</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Red and Green status LEDs</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Red and Green LEDs + 72×36 mm Digital LCD</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Acoustic Alarm</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">Internal buzzer 85 dB</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">Internal buzzer 85 dB</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Self-Test Diagnostic Button</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Available via terminal jumper / digital bus</td>
                  <td className="py-3 px-4 text-[var(--text)] font-medium">Front push-button switch triggering both relays simultaneously</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Engineering &amp; Integration</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Engineered &amp; Integrated in UAE by Sonic Technologies</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Engineered &amp; Integrated in UAE by Sonic Technologies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-xs text-[var(--text-2)] italic">
            * Note: Only one analog output is available for a version with LCD. Dual analog output configuration requires the standard blind cover enclosure.
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. INDUSTRIAL APPLICATION SCENARIOS
          ========================================================================= */}
      <section className="py-12 sm:py-20 border-b border-[var(--border)] bg-[var(--surface-2)]">
        <div className="container-1280 space-y-8 sm:space-y-10">

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-semibold text-[var(--text-2)] uppercase">
              Field Deployments
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] tracking-tight">
              UAE Industrial Application Scenarios
            </h2>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              Standardized installations across hospitality resorts, commercial towers, and industrial process facilities throughout Dubai, Abu Dhabi, and the Northern Emirates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="text-xs font-mono font-semibold text-[var(--accent)]">
                Scenario A
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">
                Commercial Kitchen LPG Risers
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Dual-contained fuel pipes traversing service shafts in hotels, food courts, and luxury towers. Detectors monitor annular drops into each kitchen station.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="text-xs font-mono font-semibold text-[var(--accent)]">
                Scenario B
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">
                Boiler &amp; District Cooling Plants
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Natural gas and LPG high-pressure fuel supply lines feeding industrial hot-water boilers, steam generators, and absorption chiller manifolds.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="text-xs font-mono font-semibold text-[var(--accent)]">
                Scenario C
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">
                Underground Fuel Service Tunnels
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Interstitial containment monitoring across subterranean utility tunnels, vehicle ramps, and enclosed pipeline trenches where natural ventilation is zero.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. DIRECT ENGINEERING CONSULTATION SECTION (RESTORED HIGH-IMPACT LAYOUT)
          ========================================================================= */}
      <section id="consultation" className="py-12 sm:py-20 border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="container-1280 text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[var(--accent)]">
            <Radio className="w-4 h-4 text-[var(--accent)]" />
            DIRECT UAE ENGINEERING CONSULTATION
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text)] tracking-tight">
            Deploy Pipe-In-Pipe Gas Detection
          </h2>

          <p className="text-xs sm:text-base text-[var(--text-2)] leading-relaxed font-sans">
            Connect with Sonic Technologies functional safety and gas detection engineers for interstitial tap sizing, double-wall containment calculations, and UAE Civil Defense compliant safety system integration.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              href={inquiryMailto}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 rounded-[4px] text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
            >
              <span>Request Technical Datasheet &amp; Quote</span>
            </a>

            <a
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 rounded-[4px] text-sm font-semibold text-[var(--text)] bg-[var(--card)] hover:bg-[var(--surface-2)] border border-[var(--border)] transition-colors"
            >
              <span>View Landmark UAE Projects →</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. MOBILE STICKY BOTTOM BAR
          ========================================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[var(--card)] border-t border-[var(--border)] shadow-xl px-4 py-3 flex items-center justify-between gap-3">
        <div className="space-y-0.5 min-w-0">
          <span className="text-[10px] text-[var(--text-2)] uppercase block">
            Selected Configuration
          </span>
          <div className="text-xs font-bold text-[var(--text)] truncate">
            <span className="font-mono text-[var(--accent)]">{modelDisplayName}</span>
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
          <span>Sonic Technologies · Industrial Double-Wall Gas Systems</span>
          <span>© 2026 Sonic Technologies. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};
