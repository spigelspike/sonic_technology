'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Track scroll position for backdrop blur styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key and handle focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isAboutActive = pathname === '/about' || pathname === '/about-us';

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--bg)] border-b border-[var(--border)] transition-colors">
      <div className="container-1280 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2 shrink-0">
          <img
            src="/assets/logo.png"
            alt="Sonic Technologies"
            className="h-10 sm:h-12 w-auto object-contain theme-light-logo"
            width={178}
            height={80}
          />
          <img
            src="/assets/logo_white.png"
            alt="Sonic Technologies"
            className="h-10 sm:h-12 w-auto object-contain theme-dark-logo"
            width={178}
            height={80}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium" aria-label="Primary Navigation">
          <a
            href="/about"
            className={`relative py-1 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2 whitespace-nowrap ${
              isAboutActive ? 'text-[var(--text)] font-semibold' : 'text-[var(--text-2)] hover:text-[var(--text)]'
            }`}
          >
            <span>About Us</span>
            {isAboutActive && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)]" />
            )}
          </a>
          <a
            href="/projects"
            className="text-[var(--text-2)] hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2"
          >
            Projects
          </a>
          <a
            href="/applications"
            className="text-[var(--text-2)] hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2"
          >
            Applications
          </a>
          <a
            href="/open-path-gas-detection"
            className="text-[var(--text-2)] hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2 whitespace-nowrap"
          >
            Open-Path Gas Detection
          </a>
          <a
            href="/pipe-in-pipe-detectors"
            className="text-[var(--text-2)] hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2 whitespace-nowrap"
          >
            Pipe-In-Pipe
          </a>
          <a
            href="/wall-mount-detectors"
            className="text-[var(--text-2)] hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2 whitespace-nowrap"
          >
            Wall-Mount
          </a>
        </nav>

        {/* Action Controls: Theme Toggle, Contact Us (always visible), and Hamburger for Mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href="mailto:gm@sonictech.ae?subject=Project%20Enquiry%20-%20Sonic%20Technologies"
            id="nav-contact-cta"
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 h-9 sm:h-11 rounded-[4px] text-xs sm:text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2 shrink-0 shadow-xs"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger (< lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-[4px] text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Full-Screen Overlay Navigation */}
      {mobileMenuOpen && (
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
        >
          <nav className="flex flex-col space-y-2 text-base font-medium text-[var(--text)]" aria-label="Mobile Navigation">
            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-4 rounded-[4px] bg-[var(--surface-2)] text-[var(--accent)] font-semibold border-l-2 border-[var(--accent)]"
            >
              About Us
            </a>
            <a
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-4 rounded-[4px] hover:bg-[var(--surface-2)] text-[var(--text)] transition-colors"
            >
              Projects
            </a>
            <a
              href="/applications"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-4 rounded-[4px] hover:bg-[var(--surface-2)] text-[var(--text)] transition-colors"
            >
              Applications
            </a>
            <a
              href="/open-path-gas-detection"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-4 rounded-[4px] hover:bg-[var(--surface-2)] text-[var(--text)] transition-colors"
            >
              Open-Path Gas Detection
            </a>
            <a
              href="/pipe-in-pipe-detectors"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-4 rounded-[4px] hover:bg-[var(--surface-2)] text-[var(--text)] transition-colors"
            >
              Pipe-In-Pipe Detectors
            </a>
            <a
              href="/wall-mount-detectors"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-4 rounded-[4px] hover:bg-[var(--surface-2)] text-[var(--text)] transition-colors"
            >
              Wall Mount Detectors
            </a>
          </nav>

          <div className="pt-6 border-t border-[var(--border)] space-y-4">
            <div className="text-xs text-[var(--text-2)]">
              <div>Sonic Technologies</div>
              <div>Abu Dhabi &amp; Dubai, United Arab Emirates</div>
              <div className="mt-1 font-mono text-[var(--text)]">gm@sonictech.ae</div>
            </div>

            <a
              href="mailto:gm@sonictech.ae?subject=Project%20Enquiry%20-%20Sonic%20Technologies"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center justify-center w-full px-4 rounded-[4px] text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors"
            >
              Contact Engineering Desk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
