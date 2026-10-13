import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { AboutPageContent } from '@/components/about/AboutPageContent';
import { AboutFooter } from '@/components/about/AboutFooter';

export const metadata: Metadata = {
  title: 'About Sonic Technologies | Industrial Gas Detection & SCADA Engineering (UAE)',
  description:
    'Sonic Technologies specifies, integrates, and commissions industrial gas detection, optical flame monitoring, SCADA supervisory telemetry, and industrial IoT systems across Abu Dhabi and Dubai.',
  keywords: [
    'About Sonic Technologies',
    'Sonic Technologies UAE',
    'Gas Detection Engineering Abu Dhabi',
    'Flame Detection Dubai',
    'Industrial SCADA Telemetry UAE',
    'Civil Defence Gas Safety UAE',
    'Boreal Laser Integration UAE',
  ],
  openGraph: {
    title: 'About Sonic Technologies | Industrial Gas Detection & SCADA Engineering (UAE)',
    description:
      'Industrial gas detection, flame monitoring, and supervisory control systems engineered for UAE industrial, infrastructure, and commercial facilities.',
    url: 'https://sonictech.ae/about',
    siteName: 'Sonic Technologies',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col w-full bg-[var(--bg)] text-[var(--text)] transition-colors">
      {/* Primary Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full">
        <AboutPageContent />
      </main>

      {/* Edge-to-Edge Industrial Footer */}
      <AboutFooter />
    </div>
  );
}
