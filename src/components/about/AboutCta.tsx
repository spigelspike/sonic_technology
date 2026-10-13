'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const AboutCta: React.FC = () => {
  const mailtoInquiry =
    'mailto:gm@sonictech.ae?subject=Site%20Walkdown%20&%20Specification%20Inquiry%20-%20Sonic%20Technologies&body=Sonic%20Technologies%20Engineering%20Desk,%0A%0AWe%20would%20like%20to%20arrange%20a%20site%20walkdown%20and%20technical%20specification%20consultation:%0A%0AFacility%20Type:%20%0ALocation%20(Abu%20Dhabi%20/%20Dubai):%20%0ATarget%20Hazards%20(Toxic%20/%20Flammable%20Gas%20/%20Flame):%20%0AEngineering%20Scope%20(New%20Build%20/%20Retrofit%20/%20SCADA):%20%0A%0ACompany:%20%0AName:%20%0APhone:%20';

  return (
    <section className="relative overflow-hidden w-full border-b border-[var(--border)] bg-[var(--bg)] transition-colors py-16 sm:py-24 lg:py-32">
      {/* Background Image: Industrial gas storage tank positioned on the right and fading to the left like main page */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none overflow-hidden">
        <Image
          src="/assets/about/cta_spheres.jpg"
          alt="Industrial spherical gas storage tank and pipeline safety terminal"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-right grayscale contrast-110 opacity-35 dark:opacity-50"
        />
        {/* Gradient overlays to smoothly fade into background on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/90 md:via-[var(--bg)]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-transparent lg:hidden" />
      </div>

      <div className="container-1280 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Headline: Clean font size with red underline on 'safety requirements' */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-heading text-[var(--text)] tracking-tight leading-[1.2] max-w-[24ch]">
            Discuss your facility&apos;s{' '}
            <span className="relative inline-block border-b-2 sm:border-b-[3px] border-[var(--accent)] pb-0.5">
              safety requirements
            </span>
            .
          </h2>

          {/* Exactly one sentence stating what happens when they get in touch */}
          <p className="text-[16px] sm:text-[17px] text-[var(--text-2)] font-normal leading-[1.6] max-w-[60ch]">
            Contact our engineering team to schedule a physical site walkthrough and receive a written technical specification and proposal.
          </p>

          {/* Actions: One primary CTA button and one text link */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <a
              href={mailtoInquiry}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = mailtoInquiry;
              }}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-[4px] text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] shadow-xs cursor-pointer"
            >
              <span>Contact Engineering Desk</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 min-h-[44px] px-2 text-sm font-semibold text-[var(--text)] hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
            >
              <span>Explore projects portfolio</span>
              <ArrowRight className="w-4 h-4 text-[var(--text-2)]" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
