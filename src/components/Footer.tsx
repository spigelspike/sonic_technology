'use client';

import React from 'react';

interface FooterProps {
  onOpenRfq: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRfq }) => {
  return (
    <footer className="bg-[#05070a] border-t border-white/10 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="Sonic Technologies"
                className="h-9 w-auto object-contain brightness-110"
              />
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed">
              Automation technology company specializing in manufacturing FPGA embedded software, rigid addressable gas and fire control panels, and SCADA remote thermal unit telemetry in the United Arab Emirates.
            </p>

            <div className="text-zinc-300">
              <span className="text-red-500">📍</span> Headquartered in the UAE
            </div>
          </div>

          {/* Nav Col 1 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#top" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#gas-projects" className="hover:text-red-400 transition-colors">Gas Panel Projects</a></li>
              <li><a href="#mission" className="hover:text-red-400 transition-colors">Engineering Verticals</a></li>
              <li><a href="#ai-supervision" className="hover:text-red-400 transition-colors">AI Supervision Layer</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Selected Projects
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#gas-projects" className="hover:text-red-400 transition-colors">Etihad Towers Abu Dhabi</a></li>
              <li><a href="#gas-projects" className="hover:text-red-400 transition-colors">The Royal Atlantis Dubai</a></li>
              <li><a href="#gas-projects" className="hover:text-red-400 transition-colors">Waldorf Astoria Palm</a></li>
              <li><a href="#gas-projects" className="hover:text-red-400 transition-colors">Yas Island Rotana Abu Dhabi</a></li>
            </ul>
          </div>

          {/* Nav Col 3: Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-zinc-400">
              <p>For project enquiries, technical consultations, or partnership opportunities:</p>
              <a
                href="mailto:gm@sonictech.ae"
                className="inline-block text-red-400 hover:text-red-300 font-bold"
              >
                gm@sonictech.ae
              </a>
              <div className="pt-2">
                <button
                  onClick={onOpenRfq}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors cursor-pointer"
                >
                  Request Consultation →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © 2026 SONIC TECHNOLOGIES. All rights reserved. The Smartest Way Forward.
          </div>
          <div>
            <a href="#top" className="text-zinc-400 hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
