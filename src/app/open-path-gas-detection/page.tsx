import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { OpenPathShowcase } from '@/components/open-path/OpenPathShowcase';

export const metadata: Metadata = {
  title: 'Open Path Gas Detection | Boreal GasFinder-LoS | Sonic Technologies UAE',
  description:
    'Laser-based open-path optical spectroscopy detecting toxic and combustible gas plumes across path lengths up to 500+ meters in under 1 second. Engineered by Sonic Technologies in partnership with Boreal Laser Inc.',
  keywords: [
    'Open Path Gas Detection UAE',
    'Boreal GasFinder-LoS',
    'Laser Line of Sight Gas Detection',
    'Hydrogen Sulfide Open Path',
    'Methane Optical Detection UAE',
    'Fence-Line Gas Monitoring Abu Dhabi',
    'Tunable Diode Laser Spectroscopy Dubai',
  ],
};

export default function OpenPathPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors selection:bg-[var(--accent)] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        <OpenPathShowcase />
      </main>
    </div>
  );
}
