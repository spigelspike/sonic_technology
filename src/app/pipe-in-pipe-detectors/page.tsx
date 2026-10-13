import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { PipeInPipeShowcase } from '@/components/pipe-in-pipe/PipeInPipeShowcase';

export const metadata: Metadata = {
  title: 'Pipe-In-Pipe Gas Detectors | SONIC-ADD-MC2 & JINU-SONIC-ADD-MC | Sonic Technologies UAE',
  description:
    'Industrial gas detection engineered specifically for double-wall pipe-in-pipe fuel gas lines. NPT 3/4" annular space coupling, 0-100% LEL, dual 4-20mA, Modbus RTU, and IP65 robust enclosure. Engineered and integrated in the UAE by Sonic Technologies.',
  keywords: [
    'Pipe-In-Pipe Gas Detectors UAE',
    'SONIC-ADD-MC2',
    'JINU-SONIC-ADD-MC',
    'Double-Wall Gas Pipeline Detection Dubai',
    'Interstitial Annular Gas Detection Abu Dhabi',
    'LPG Double Containment Pipe Sensor',
    'NPT 3/4 Gas Detector UAE',
  ],
};

export default function PipeInPipePage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors selection:bg-[var(--accent)] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        <PipeInPipeShowcase />
      </main>
    </div>
  );
}
