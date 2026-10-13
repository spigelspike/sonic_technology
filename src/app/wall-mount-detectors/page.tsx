import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { WallMountShowcase } from '@/components/wall-mount/WallMountShowcase';

export const metadata: Metadata = {
  title: 'Wall Mount Gas Detectors | SONIC-ADD-MC2 & JINU-SONIC-ADD-MC | Sonic Technologies UAE',
  description:
    'Heavy-duty industrial wall-mounted gas detector transmitters engineered for commercial kitchens, boiler rooms, and mechanical plants. Dual mounting flanges, 0-100% LEL, dual 4-20mA, Modbus RTU, 85 dB buzzer, and IP65 enclosure. Engineered and integrated in the UAE by Sonic Technologies.',
  keywords: [
    'Wall Mount Gas Detector UAE',
    'SONIC-ADD-MC2 Wall Mount',
    'JINU-SONIC-ADD-MC',
    'Commercial Kitchen Gas Detection Dubai',
    'Boiler Room Gas Sentinel Abu Dhabi',
    'LPG Wall Mount Detector UAE',
    'Methane Gas Sensor IP65',
  ],
};

export default function WallMountPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors selection:bg-[var(--accent)] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        <WallMountShowcase />
      </main>
    </div>
  );
}
