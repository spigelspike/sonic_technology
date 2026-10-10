'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { PartnerTicker } from '../components/PartnerTicker';
import { GasPanelProjectsSlider } from '../components/GasPanelProjectsSlider';
import { MissionSupervisionSection } from '../components/MissionSupervisionSection';
import { RfqModal } from '../components/RfqModal';
import { Footer } from '../components/Footer';

export default function Home() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#07090e] text-zinc-100 relative selection:bg-red-600 selection:text-white">
      
      {/* 1. Header / Navbar */}
      <Navbar onOpenRfq={() => setIsRfqOpen(true)} />

      {/* Main Flow */}
      <main className="flex-1">
        
        {/* 2. Hero Section (Matching Image 1 reference) */}
        <Hero onOpenRfq={() => setIsRfqOpen(true)} />

        {/* 3. Trusted Partners (Large full-color logos) */}
        <PartnerTicker />

        {/* 4. GAS PANEL PROJECTS (Auto-scrolling carousel with UAE landmarks) */}
        <GasPanelProjectsSlider />

        {/* 5. Core Mission & Systems: About Us, CONTROL. PROTECT. AUTOMATE., IoT/24-7/AI, Verticals, AI Supervision */}
        <MissionSupervisionSection />

        {/* 6. Closer Call to Action */}
        <section id="contact" className="py-24 bg-gradient-to-b from-[#0a0e17] to-[#07090e] border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
            <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-bold">
              LET&apos;S TALK
            </span>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono text-white tracking-tight">
              Ready to bring your<br />systems online?
            </h2>
            
            <p className="text-zinc-300 text-lg sm:text-xl font-serif italic text-red-400">
              &ldquo;The Smartest Way Forward&rdquo;
            </p>

            <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
              For project enquiries, technical consultations, or partnership opportunities, reach our team directly.
            </p>

            <div className="pt-4 flex items-center justify-center">
              <button
                onClick={() => setIsRfqOpen(true)}
                id="footer-cta-btn"
                className="px-8 py-4 rounded-full font-bold font-mono text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/40 border border-red-500/50 transition-all cursor-pointer hover:scale-105"
              >
                Get In Touch →
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* 7. Footer */}
      <Footer onOpenRfq={() => setIsRfqOpen(true)} />

      {/* RFQ / Contact Modal */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
      />

    </div>
  );
}
