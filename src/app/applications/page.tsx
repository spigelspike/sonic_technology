import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { ApplicationsDirectory } from '@/components/applications/ApplicationsDirectory';

export const metadata: Metadata = {
  title: 'Engineered Applications | Sonic Technologies | Turbomachinery, SCADA & Automation',
  description:
    'Turnkey industrial automation systems engineered by Sonic Technologies: Gas turbine supervisory systems, API 670 turbomachinery rotor dynamics, marine engine test benches, deterministic FPGA data loggers, and industrial SCADA workstations.',
  keywords: [
    'Sonic Technologies Applications',
    'Gas Turbine Supervisory System UAE',
    'Rotor Dynamics Order Tracking',
    'API 670 Machine Protection UAE',
    'Marine Diesel Engine Test Bench',
    'FPGA Temperature Data Logger',
    'SCADA Data Acquisition Workstation',
    'Analog Remote Transmitter Monitoring',
  ],
};

export default function ApplicationsPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors selection:bg-[var(--accent)] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        <ApplicationsDirectory />
      </main>
    </div>
  );
}
