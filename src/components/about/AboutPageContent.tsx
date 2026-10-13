'use client';

import React from 'react';
import { AboutHero } from './AboutHero';
import { AboutDisciplines } from './AboutDisciplines';
import { AboutProcess } from './AboutProcess';
import { AboutWhySonic } from './AboutWhySonic';
import { AboutCta } from './AboutCta';
import { SectionReveal } from './SectionReveal';

export const AboutPageContent: React.FC = () => {
  return (
    <div className="w-full bg-[var(--bg)] text-[var(--text)] transition-colors">
      {/* 1. Hero: Statement, Right Image with Left Fade, Stats */}
      <AboutHero />

      {/* 2. Engineering Disciplines: Single list with hairline dividers */}
      <SectionReveal>
        <AboutDisciplines />
      </SectionReveal>

      {/* 3. How We Work: 4-step horizontal sequence on desktop / vertical list on mobile */}
      <SectionReveal>
        <AboutProcess />
      </SectionReveal>

      {/* 4. Why Teams Choose Sonic: Concrete proof statements, editorial grid */}
      <SectionReveal>
        <AboutWhySonic />
      </SectionReveal>

      {/* 5. Closing CTA: Left-aligned, one sentence, primary button, right image with left fade */}
      <SectionReveal>
        <AboutCta />
      </SectionReveal>
    </div>
  );
};
