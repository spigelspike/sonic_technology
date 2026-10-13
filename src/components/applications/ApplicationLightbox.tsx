'use client';

import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Cpu, Layers } from 'lucide-react';
import { ApplicationItem } from '@/data/applicationsData';

interface ApplicationLightboxProps {
  applications: ApplicationItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const ApplicationLightbox: React.FC<ApplicationLightboxProps> = ({
  applications,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < applications.length;
  const currentApp = isOpen ? applications[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + applications.length) % applications.length;
    onSelectIndex(nextIdx);
  }, [currentIndex, applications.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % applications.length;
    onSelectIndex(nextIdx);
  }, [currentIndex, applications.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentApp) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${currentApp.title} Engineering Schematic Lightbox`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Container - Stop propagation on inner clicks */}
      <div
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-xl bg-[var(--card)] border border-[var(--border)] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--surface-2)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--accent)] text-white">
              SYS // {currentApp.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold hidden sm:inline">
              {currentApp.category}
            </span>
            <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text)] truncate max-w-md sm:max-w-xl">
              {currentApp.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[var(--text-2)] mr-2 hidden sm:inline">
              {currentIndex + 1} of {applications.length}
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close schematic preview"
              className="p-1.5 rounded-lg text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--card)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Area: High-Res Schematic Display with Technical Sidebar */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-black/40">
          {/* Left / Center: High-Resolution Schematic Viewer */}
          <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-auto bg-black/30 min-h-[380px] lg:min-h-[500px]">
            <img
              src={currentApp.image}
              alt={`${currentApp.title} high-resolution engineering schematic`}
              className="max-h-[68vh] max-w-full object-contain rounded shadow-lg transition-transform"
            />

            {/* Quick Navigation Buttons */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous application schematic"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[var(--accent)] text-white backdrop-blur transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next application schematic"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[var(--accent)] text-white backdrop-blur transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Sidebar: Key Architecture Details */}
          <div className="w-full lg:w-96 p-5 sm:p-6 border-t lg:border-t-0 lg:border-l border-[var(--border)] bg-[var(--card)] overflow-y-auto space-y-4 max-h-[30vh] lg:max-h-none">
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-2)] font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
                Hardware Specification
              </div>
              <p className="text-xs text-[var(--text)] font-semibold leading-relaxed">
                {currentApp.hardwareHighlight}
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[var(--border)]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-2)] font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
                Architecture & Telemetry
              </div>
              <ul className="space-y-1.5">
                {currentApp.signalsAndIO.slice(0, 3).map((sig, idx) => (
                  <li key={idx} className="text-xs text-[var(--text-2)] flex items-start gap-1.5 leading-snug">
                    <span className="text-[var(--accent)] mt-0.5">•</span>
                    <span>{sig}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[var(--border)]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-2)] font-semibold">
                Protocols & Standards
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentApp.protocols.map((proto, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)]"
                  >
                    {proto}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Info */}
        <div className="px-6 py-3 border-t border-[var(--border)] bg-[var(--surface-2)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-2)] font-mono gap-2">
          <span>Sonic Technologies // Industrial Supervisory & Automation Division</span>
          <span>Press ESC to close · Left/Right arrows to navigate</span>
        </div>
      </div>
    </div>
  );
};
