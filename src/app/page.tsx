import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { PartnerTicker } from '../components/PartnerTicker';
import { SolutionsSection } from '../components/SolutionsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { PillarsSection } from '../components/PillarsSection';
import { SupervisionLayer } from '../components/SupervisionLayer';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors selection:bg-[var(--accent)] selection:text-white">
      {/* 1. Header with Dual Theme Toggle */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Partner Strip: 6 verified partner logos */}
        <PartnerTicker />

        {/* 4. Core Engineering Verticals */}
        <SolutionsSection />

        {/* 5. Landmark Projects: Gas Panel Projects */}
        <ProjectsSection />

        {/* 6. Core Pillars: IoT • 24/7 • AI */}
        <PillarsSection />

        {/* 7. Supervision Layer: Autonomous AI Agent Console */}
        <SupervisionLayer />
      </main>

      {/* 7. Direct Engineering Consultation & Footer */}
      <Footer />
    </div>
  );
}
