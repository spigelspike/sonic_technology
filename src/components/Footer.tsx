import React from 'react';
import { SafetyScrollCTA } from './SafetyScrollCTA';

export const Footer: React.FC = () => {
  return (
    <>
      {/* 3D Scroll-Animated Safety System iPad CTA */}
      <SafetyScrollCTA />

      {/* Modern Industrial Footer */}
      <footer className="py-14 bg-[var(--bg)] text-[var(--text-2)] transition-colors text-xs font-mono-tech border-t border-[var(--border)]" role="contentinfo">
        <div className="container-1280">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border)]">
            
            {/* Column 1: Brand & Identity */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo.png"
                  alt="Sonic Technologies"
                  width={178}
                  height={80}
                  className="h-10 w-auto object-contain theme-light-logo"
                />
                <img
                  src="/assets/logo_white.png"
                  alt="Sonic Technologies"
                  width={178}
                  height={80}
                  className="h-10 w-auto object-contain theme-dark-logo"
                />
              </div>

              <p className="text-xs text-[var(--text-2)] leading-relaxed max-w-[42ch]">
                UAE-headquartered automation and functional safety engineering company. Specialists in FPGA gate-array design, industrial gas &amp; fire detection, and supervisory SCADA systems.
              </p>

              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[10px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Supervisory Systems Status: 99.98% Operational</span>
              </div>
            </div>

            {/* Column 2: Engineering Verticals */}
            <div className="md:col-span-3 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--text)]">
                Engineering Disciplines
              </div>
              <ul className="space-y-2 text-xs">
                <li><a href="#applications" className="hover:text-[var(--text)] transition-colors">Gas &amp; Flame Detection</a></li>
                <li><a href="#applications" className="hover:text-[var(--text)] transition-colors">SCADA &amp; RTU Supervision</a></li>
                <li><a href="#applications" className="hover:text-[var(--text)] transition-colors">FPGA Embedded Firmware</a></li>
                <li><a href="#applications" className="hover:text-[var(--text)] transition-colors">IoT &amp; Remote Monitoring</a></li>
                <li><a href="#applications" className="hover:text-[var(--text)] transition-colors">Industrial Control Panels</a></li>
              </ul>
            </div>

            {/* Column 3: Quick Navigation */}
            <div className="md:col-span-2 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--text)]">
                Navigation
              </div>
              <ul className="space-y-2 text-xs">
                <li><a href="/about" className="hover:text-[var(--text)] transition-colors">About Us</a></li>
                <li><a href="/projects" className="hover:text-[var(--text)] transition-colors">Landmark Projects</a></li>
                <li><a href="/applications" className="hover:text-[var(--text)] transition-colors">Engineered Applications</a></li>
                <li><a href="mailto:gm@sonictech.ae" className="hover:text-[var(--text)] transition-colors">Contact Engineering</a></li>
              </ul>
            </div>

            {/* Column 4: Contact & Direct Desk */}
            <div className="md:col-span-2 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--text)]">
                Direct Contact
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="text-[10px] uppercase text-[var(--text-2)] opacity-75">Direct Inquiries</div>
                  <a href="mailto:gm@sonictech.ae" className="text-[var(--accent-text)] font-semibold hover:underline">
                    gm@sonictech.ae
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-[var(--text-2)] opacity-75">Location</div>
                  <div className="text-[var(--text)]">Abu Dhabi &amp; Dubai, UAE</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Top Jump */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[var(--text-2)]">
            <div>
              &copy; 2026 Sonic Technologies. UAE. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#top" className="hover:text-[var(--text)] transition-colors flex items-center gap-1 font-semibold">
                <span>Back to Top</span>
                <span>&uarr;</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
