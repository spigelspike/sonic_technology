'use client';

import React, { useState } from 'react';
import { WallMountImageViewer, WallMountVariant } from './WallMountImageViewer';
import {
  Radio,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Wrench,
  AlertTriangle,
} from 'lucide-react';

export const WallMountShowcase: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<WallMountVariant>('sonic-mc2');

  const modelDisplayName =
    selectedVariant === 'sonic-mc2'
      ? 'SONIC-ADD-MC2 (Standard Wall Mount)'
      : 'JINU-SONIC-ADD-MC (Digital LCD Indicator)';

  const inquiryMailto = `mailto:gm@sonictech.ae?subject=Wall-Mount%20Gas%20Detector%20Project%20Enquiry%20-%20${encodeURIComponent(
    modelDisplayName
  )}&body=Dear%20Sonic%20Technologies%20Engineering%20Team,%0A%0APlease%20provide%20technical%20datasheets%20and%20quotations%20for%20our%20wall-mounted%20gas%20detection%20project:%0A%0A-%20Model%20Configuration:%20${encodeURIComponent(
    modelDisplayName
  )}%0A-%20Target%20Gas:%20LPG%20/%20Methane%20/%20Propane%20/%20Hydrogen%20(0-100%25%20LEL)%0A-%20Installation%20Type:%20Wall-Mounted%20Industrial%20Flange%0A%0ACompany%20/%20Facility:%20%0AProject%20Location:%20%0AContact%20Person:%20`;

  return (
    <div className="w-full bg-[var(--bg)] text-[var(--text)] transition-colors pb-24 md:pb-0">
      {/* =========================================================================
          1. HERO SECTION
          Desktop: 50% Hero width for product showcase, cleanly proportioned.
          Mobile Order: Headline -> Product Image -> Primary CTA -> Plain Spec List.
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
                Industrial Wall-Mount Gas Detection Systems
              </span>
            </div>

            {/* Badges line */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] font-semibold">
                IP65 Weatherproof
              </span>
              <span className="px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] font-semibold">
                4-20 mA / 0-10 V
              </span>
              <span className="px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] font-semibold">
                RS485 Modbus
              </span>
              <span className="px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] font-semibold">
                85 dB Buzzer
              </span>
            </div>
          </div>

          {/* Main Hero Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Desktop Column / Mobile Group 1: Headline & Content */}
            <div className="lg:col-span-6 flex flex-col space-y-6">

              {/* Headline Block (Mobile Order 1) */}
              <div className="order-1 space-y-3 sm:space-y-4">
                <span className="text-xs sm:text-sm font-semibold text-[var(--text-2)] tracking-normal uppercase">
                  Heavy-Duty Plant Gas Sentinel
                </span>

                <h1
                  id="hero-heading"
                  className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1] scroll-mt-24"
                >
                  Wall Mount Detector
                </h1>

                <p className="text-base sm:text-lg text-[var(--text)] font-normal leading-relaxed">
                  Industrial gas detection engineered for wall-mounted installations — robust, precise, and built for demanding environments.
                </p>

                <p className="text-sm text-[var(--text-2)] leading-relaxed">
                  Engineered for commercial kitchens, boiler rooms, underground parking, and chemical storage facilities. Equipped with dual side-mounting flanges with keyhole screw slots for rapid, vibration-resistant attachment to industrial walls.
                </p>
              </div>

              {/* Product Showcase: Mobile Order 2 */}
              <div className="order-2 lg:hidden w-full my-2">
                <WallMountImageViewer
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
                      Integrated wall-mount flanges
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Heavy-duty side mounting tabs with keyhole slots for fast, secure attachment to masonry, concrete walls, and steel uni-strut channels.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      0 … 100% LEL precision range
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
                      Two analog outputs settable to 4–20 mA or 0–10 V with multi-drop Modbus RTU interface for BMS and central SCADA integration.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      IP65 sealed industrial enclosure
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                      Compact H90 × W145 × D50 mm footprint rated 0 to +50 °C with internal 85 dB audible buzzer and dual Red/Green status LEDs.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Desktop Column: Product Photography Centerpiece */}
            <div className="hidden lg:flex lg:col-span-6 w-full items-center justify-center relative">
              <WallMountImageViewer
                activeVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
              />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. SENSOR ARCHITECTURE & SAFETY FEATURES
          ========================================================================= */}
      <section id="features" className="py-12 sm:py-20 border-b border-[var(--border)]">
        <div className="container-1280 space-y-8 sm:space-y-10">

          <div className="space-y-2 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] tracking-tight">
              Sensor Chemistry &amp; Field Safety Architecture
            </h2>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              Engineered with proven solid-state and electrochemical sensing elements calibrated specifically for combustible fuel gas hazards in commercial and industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xs font-mono font-bold text-[var(--accent)]">
                01
              </div>
              <h3 className="text-base font-bold text-[var(--text)]">
                Pellistor Catalytic Bead
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Standard sensing element providing linear 0–100% LEL response to combustible hydrocarbons (methane, propane, butane). High thermal stability and rapid response.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xs font-mono font-bold text-[var(--accent)]">
                02
              </div>
              <h3 className="text-base font-bold text-[var(--text)]">
                Optional MOS Sensor
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Metal oxide semiconductor option engineered for low-temperature environments, harsh atmospheric conditions, and low ppm sub-LEL early warning applications.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xs font-mono font-bold text-[var(--accent)]">
                03
              </div>
              <h3 className="text-base font-bold text-[var(--text)]">
                Direct Emergency Relays
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Dual dry-contact SPST relays rated 250 VAC / 30 VDC (5A) enable direct autonomous shutdown of solenoid valves and activation of ventilation exhaust fans without requiring a separate PLC.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. COMPREHENSIVE SPECIFICATIONS & MODEL COMPARISON TABLE
          Data table strictly preserving all technical facts from datasheet.
          ========================================================================= */}
      <section id="specifications" className="py-12 sm:py-20 border-b border-[var(--border)]">
        <div className="container-1280 space-y-6 sm:space-y-8">

          <div className="space-y-2 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] tracking-tight">
              Technical Specifications &amp; Model Comparison
            </h2>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              Comparison between the standard blind-cover wall mount model and the digital LCD indicator edition.
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
                    <span className="block text-[11px] font-normal text-[var(--text-2)]">Standard Wall Mount Model</span>
                  </th>
                  <th className="py-3.5 px-4 w-1/3">
                    <span className="text-[var(--text)] font-bold">JINU-SONIC-ADD-MC</span>
                    <span className="block text-[11px] font-normal text-[var(--text-2)]">Digital LCD Indicator Model</span>
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
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Mounting Architecture</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Dual integrated side flanges with keyhole slots</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Dual integrated side flanges with keyhole slots</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Housing Dimensions</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">H90 × W145 × D50 mm (housing only)</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">H90 × W145 × D50 mm (housing only)</td>
                </tr>

                <tr className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[var(--text)]">Display Type</td>
                  <td className="py-3 px-4 text-[var(--text-2)]">Solid blind cover with dual Red/Green status LEDs</td>
                  <td className="py-3 px-4 font-mono text-[var(--text)]">72 × 36 mm high-contrast Digital LCD</td>
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
              Standardized wall-mounted gas detection across critical commercial and industrial facilities throughout Dubai, Abu Dhabi, and the Northern Emirates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="text-xs font-mono font-semibold text-[var(--accent)]">
                Scenario A
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">
                Commercial Kitchens &amp; Food Courts
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Wall-mounted monitoring in commercial kitchen cooklines, gas manifold rooms, and shopping mall food courts detecting LPG and methane accumulation.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="text-xs font-mono font-semibold text-[var(--accent)]">
                Scenario B
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">
                Boiler &amp; Mechanical Rooms
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Continuous surveillance around natural gas meters, pressure-reducing stations, and burner assemblies in enclosed mechanical plant rooms.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="text-xs font-mono font-semibold text-[var(--accent)]">
                Scenario C
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">
                Underground Parking &amp; Cylinder Stores
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                Wall-mounted sentinels in subterranean gas cylinder cages, battery charging rooms, and underground maintenance garages.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. DIRECT ENGINEERING CONSULTATION SECTION (RESTORED HIGH-IMPACT LAYOUT)
          ========================================================================= */}
      <section id="contact" className="scroll-mt-20 py-12 sm:py-20 border-b border-[var(--border)] bg-[var(--bg)]">
        <div id="consultation" className="scroll-mt-20" />
        <div className="container-1280 text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[var(--accent)]">
            <Radio className="w-4 h-4 text-[var(--accent)]" />
            DIRECT UAE ENGINEERING CONSULTATION
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text)] tracking-tight">
            Deploy Wall-Mount Industrial Gas Detection
          </h2>

          <p className="text-xs sm:text-base text-[var(--text-2)] leading-relaxed font-sans">
            Connect with Sonic Technologies functional safety and gas detection engineers for detector spacing calculations, relay interlock wiring, and UAE Civil Defense compliant safety system integration.
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
          <span>Sonic Technologies · Industrial Wall-Mount Gas Sentinels</span>
          <span>© 2026 Sonic Technologies. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};
