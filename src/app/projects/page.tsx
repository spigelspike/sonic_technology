import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectsDirectory } from '@/components/projects/ProjectsDirectory';

export const metadata: Metadata = {
  title: 'Landmark Projects | Sonic Technologies | UAE Gas & Automation Engineering',
  description:
    'A portfolio of 20+ landmark gas warning systems, addressable fire safety loops, and industrial automation projects across Abu Dhabi and Dubai engineered by Sonic Technologies.',
  keywords: [
    'Sonic Technologies Projects',
    'Abu Dhabi Gas Detection Projects',
    'Dubai SCADA Automation',
    'Etihad Towers Gas Detection',
    'The Royal Atlantis Gas Safety',
    'UAE Civil Defense Approved Gas Systems',
    'Addressable Gas Panel UAE',
  ],
};

export default function ProjectsPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors selection:bg-[var(--accent)] selection:text-white">
      {/* Primary Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <ProjectsDirectory />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
