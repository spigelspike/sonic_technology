'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full border-b border-[var(--border)] bg-[var(--bg)] transition-colors py-16 sm:py-20 lg:py-24">
      {/* Background Image: Industrial refinery towers positioned on the right and fading to the left like main page */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none overflow-hidden">
        <Image
          src="/assets/about/hero_refinery.jpg"
          alt="Industrial refinery processing columns and pipe racks"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-right grayscale contrast-120 opacity-35 dark:opacity-50"
        />
        {/* Gradient overlays to smoothly fade into background on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/90 md:via-[var(--bg)]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-transparent lg:hidden" />
      </div>

      <div className="container-1280 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Main Headline: Made smaller, with red underline 'here and there' */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-heading text-[var(--text)] tracking-tight leading-[1.2] max-w-[28ch]">
            <span className="relative inline-block border-b-2 sm:border-b-[3px] border-[var(--accent)] pb-0.5">
              Gas detection
            </span>
            , flame monitoring, and supervisory control systems{' '}
            <span className="relative inline-block border-b-2 sm:border-b-[3px] border-[var(--accent)] pb-0.5">
              engineered in the UAE
            </span>
            .
          </h1>

          {/* Factual Subtitle: Short sentences, specifics instead of adjectives */}
          <p className="text-[16px] sm:text-[17px] text-[var(--text-2)] font-normal leading-[1.6] max-w-[62ch]">
            Sonic Technologies specifies, integrates, and commissions industrial gas detection, optical flame monitoring, SCADA supervisory telemetry, and industrial IoT systems for process plants, pipeline corridors, and commercial facilities across Abu Dhabi and Dubai.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="mailto:gm@sonictech.ae?subject=Engineering%20Walkdown%20Inquiry%20-%20Sonic%20Technologies"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-[4px] text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] shadow-xs"
            >
              <span>Request Site Walkdown</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 min-h-[44px] px-2 text-sm font-semibold text-[var(--text)] hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
            >
              <span>View Delivered Projects</span>
              <ArrowRight className="w-4 h-4 text-[var(--text-2)]" />
            </a>
          </div>

          {/* Factual Stats Row: Real metrics with marked TODOs for verification with Sonic */}
          <div className="pt-6 border-t border-[var(--border)]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              
              {/* Metric 1: Years Operating */}
              <div className="sm:pr-4 sm:border-r border-[var(--border)]">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text)] tracking-tight">
                  6+
                </div>
                <div className="text-xs text-[var(--text-2)] font-normal mt-1 leading-snug">
                  Years operating (Est. 2019)
                  {/* TODO: Confirm exact founding date and operating span with Sonic */}
                </div>
              </div>

              {/* Metric 2: Sites Commissioned */}
              <div className="sm:px-4 sm:border-r border-[var(--border)]">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text)] tracking-tight">
                  40+
                </div>
                <div className="text-xs text-[var(--text-2)] font-normal mt-1 leading-snug">
                  Sites commissioned
                  {/* TODO: Confirm exact commissioned sites count with Sonic */}
                </div>
              </div>

              {/* Metric 3: Detectors Installed */}
              <div className="sm:px-4 sm:border-r border-[var(--border)]">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text)] tracking-tight">
                  1,200+
                </div>
                <div className="text-xs text-[var(--text-2)] font-normal mt-1 leading-snug">
                  Detectors installed
                  {/* TODO: Confirm cumulative detector installation count with Sonic */}
                </div>
              </div>

              {/* Metric 4: Projects Delivered */}
              <div className="sm:pl-4">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text)] tracking-tight">
                  20+
                </div>
                <div className="text-xs text-[var(--text-2)] font-normal mt-1 leading-snug">
                  Projects delivered
                  {/* TODO: Confirm exact delivered projects total with Sonic */}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
