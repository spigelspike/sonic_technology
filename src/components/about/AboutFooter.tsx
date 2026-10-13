'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export const AboutFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[var(--surface-2)]/40 dark:bg-[#070809] border-t border-[var(--border)] transition-colors text-[14px] text-[var(--text-2)]">
      <div className="container-1280 py-14 sm:py-16">
        
        {/* 12-Column Grid: Grouped in clean columns with 14px normal sans-serif */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[var(--border)]">
          
          {/* Column 1: Brand & Engineering Identity (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <a href="/" className="inline-block">
              <Image
                src="/assets/logo.png"
                alt="Sonic Technologies"
                width={160}
                height={54}
                className="h-9 w-auto object-contain theme-light-logo"
              />
              <Image
                src="/assets/logo_white.png"
                alt="Sonic Technologies"
                width={160}
                height={54}
                className="h-9 w-auto object-contain theme-dark-logo"
              />
            </a>

            <p className="text-[14px] leading-relaxed max-w-[40ch]">
              UAE-based engineering company specializing in industrial gas detection, optical flame monitoring, SCADA telemetry, and functional safety systems.
            </p>

            <div className="text-[13px] text-[var(--text)] font-medium">
              Registered in Abu Dhabi &amp; Dubai, UAE
            </div>
          </div>

          {/* Column 2: Engineering Disciplines (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[13px] font-semibold uppercase tracking-wider text-[var(--text)]">
              Engineering Disciplines
            </div>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="/open-path-gas-detection" className="hover:text-[var(--text)] transition-colors">
                  Open-Path Gas Detection
                </a>
              </li>
              <li>
                <a href="/applications" className="hover:text-[var(--text)] transition-colors">
                  Optical Flame Monitoring
                </a>
              </li>
              <li>
                <a href="/applications" className="hover:text-[var(--text)] transition-colors">
                  SCADA &amp; Supervisory Control
                </a>
              </li>
              <li>
                <a href="/pipe-in-pipe-detectors" className="hover:text-[var(--text)] transition-colors">
                  Pipe-In-Pipe Monitoring
                </a>
              </li>
              <li>
                <a href="/wall-mount-detectors" className="hover:text-[var(--text)] transition-colors">
                  Wall-Mount Transmitters
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-[13px] font-semibold uppercase tracking-wider text-[var(--text)]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="/about" className="text-[var(--text)] font-semibold hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-[var(--text)] transition-colors">
                  Projects Portfolio
                </a>
              </li>
              <li>
                <a href="/applications" className="hover:text-[var(--text)] transition-colors">
                  Applications
                </a>
              </li>
              <li>
                <a href="mailto:gm@sonictech.ae" className="hover:text-[var(--text)] transition-colors">
                  Contact Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Details (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[13px] font-semibold uppercase tracking-wider text-[var(--text)]">
              Office &amp; Inquiries
            </div>
            <div className="space-y-3 text-[14px]">
              <div>
                <div className="text-xs uppercase text-[var(--text-2)] opacity-80">Direct Engineering Desk</div>
                <a
                  href="mailto:gm@sonictech.ae"
                  className="text-[var(--text)] font-medium hover:underline block pt-0.5"
                >
                  gm@sonictech.ae
                </a>
              </div>

              <div>
                <div className="text-xs uppercase text-[var(--text-2)] opacity-80">Locations</div>
                <div className="text-[var(--text)] pt-0.5">
                  Abu Dhabi &amp; Dubai, United Arab Emirates
                </div>
              </div>

              <div>
                <div className="text-xs uppercase text-[var(--text-2)] opacity-80">Support Response</div>
                <div className="text-[var(--text)] pt-0.5">
                  On-site engineering dispatch across the UAE
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean 13px sans-serif, no tiny monospace line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px]">
          <div>
            &copy; 2026 Sonic Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-[var(--text)] transition-colors">
              Privacy
            </a>
            <span className="text-[var(--border)]">|</span>
            <a href="/terms" className="hover:text-[var(--text)] transition-colors">
              Terms
            </a>
            <span className="text-[var(--border)]">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
