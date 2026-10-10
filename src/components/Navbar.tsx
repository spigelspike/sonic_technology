'use client';

import React, { useState } from 'react';

interface NavbarProps {
  onOpenRfq: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfq }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07090e]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Official Sonic Technologies Logo */}
        <a href="#top" className="flex items-center group">
          <img
            src="/assets/logo.png"
            alt="Sonic Technologies"
            className="h-9 sm:h-11 w-auto object-contain brightness-110 drop-shadow-[0_2px_10px_rgba(230,57,70,0.25)] group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#top" className="text-white hover:text-red-400 font-semibold transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-red-400 transition-colors">
            About
          </a>
          <a href="#mission" className="hover:text-red-400 transition-colors">
            Solutions
          </a>
          <a href="#gas-projects" className="hover:text-red-400 transition-colors">
            Projects
          </a>
          <a href="#ai-supervision" className="hover:text-red-400 transition-colors">
            AI Supervision
          </a>
          <a href="#contact" className="hover:text-red-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Action: Search and "Get In Touch →" */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenRfq}
            aria-label="Search"
            className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button
            onClick={onOpenRfq}
            id="nav-get-in-touch-btn"
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-700/40 border border-red-500/50 transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Get In Touch</span>
            <span className="text-base leading-none">→</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/60 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0d111a] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-red-950/40 hover:text-red-400"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-red-950/40 hover:text-red-400"
          >
            About
          </a>
          <a
            href="#mission"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-red-950/40 hover:text-red-400"
          >
            Solutions
          </a>
          <a
            href="#gas-projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-red-950/40 hover:text-red-400"
          >
            Gas Panel Projects
          </a>
          <a
            href="#ai-supervision"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-red-950/40 hover:text-red-400"
          >
            AI Supervision
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-red-950/40 hover:text-red-400"
          >
            Contact
          </a>
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-red-600"
            >
              Get In Touch →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
