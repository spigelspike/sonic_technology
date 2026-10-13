'use client';

import React, { useState } from 'react';
import { Monitor, Shield, Maximize2, X } from 'lucide-react';

export type PipeModelVariant = 'sonic-mc2' | 'jinu-lcd';

interface ModelImageConfig {
  id: PipeModelVariant;
  name: string;
  modelCode: string;
  shortLabel: string;
  imagePath: string;
  alt: string;
  tagline: string;
  keyFeature: string;
}

const MODEL_CONFIGS: Record<PipeModelVariant, ModelImageConfig> = {
  'sonic-mc2': {
    id: 'sonic-mc2',
    name: 'SONIC-ADD-MC2',
    modelCode: 'SONIC-ADD-MC2 Standard Enclosure',
    shortLabel: 'Standard Enclosure',
    imagePath: '/assets/Pipe-In-Pipe/SONIC-ADD-MC2.png',
    alt: 'SONIC-ADD-MC2 Pipe-in-Pipe gas detector transmitter with solid IP65 enclosure and NPT 3/4 inch connector',
    tagline: 'Solid blind-cover housing with dual 4–20 mA / 0–10 V analog outputs and dual SPST alarm relays.',
    keyFeature: 'Dual Analog Loops · Blind IP65 Cover',
  },
  'jinu-lcd': {
    id: 'jinu-lcd',
    name: 'JINU-SONIC-ADD-MC',
    modelCode: 'JINU-SONIC-ADD-MC Digital LCD Edition',
    shortLabel: 'Digital LCD Display',
    imagePath: '/assets/Pipe-In-Pipe/JINU-SONIC-ADD-MC.png',
    alt: 'JINU-SONIC-ADD-MC Pipe-in-Pipe gas detector with 72x36mm digital LCD display and push-button self-test switch',
    tagline: 'High-contrast 72 × 36 mm digital LCD displaying real-time % LEL gas concentration and diagnostic status.',
    keyFeature: '72×36 mm Digital LCD · Push-Button Self-Test',
  },
};

interface PipeInPipeModelViewerProps {
  initialVariant?: PipeModelVariant;
  activeVariant?: PipeModelVariant;
  onVariantChange?: (variant: PipeModelVariant) => void;
  className?: string;
}

export const PipeInPipeModelViewer: React.FC<PipeInPipeModelViewerProps> = ({
  initialVariant = 'sonic-mc2',
  activeVariant: controlledVariant,
  onVariantChange,
  className = '',
}) => {
  const [internalVariant, setInternalVariant] = useState<PipeModelVariant>(initialVariant);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const currentVariant = controlledVariant ?? internalVariant;
  const config = MODEL_CONFIGS[currentVariant];

  const handleSelectVariant = (variant: PipeModelVariant) => {
    setInternalVariant(variant);
    if (onVariantChange) {
      onVariantChange(variant);
    }
  };

  return (
    <div className={`relative flex flex-col items-center w-full ${className}`}>
      {/* Model Variant Selector Tabs */}
      <div className="w-full flex items-center justify-center mb-3 z-10">
        <div className="inline-flex p-1 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] gap-1 shadow-xs">
          <button
            type="button"
            onClick={() => handleSelectVariant('sonic-mc2')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              currentVariant === 'sonic-mc2'
                ? 'bg-[var(--card)] text-[var(--text)] shadow-xs border border-[var(--border)]'
                : 'text-[var(--text-2)] hover:text-[var(--text)]'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Standard (SONIC-ADD-MC2)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVariant('jinu-lcd')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              currentVariant === 'jinu-lcd'
                ? 'bg-[var(--card)] text-[var(--text)] shadow-xs border border-[var(--border)]'
                : 'text-[var(--text-2)] hover:text-[var(--text)]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Digital LCD (JINU-SONIC-ADD-MC)</span>
          </button>
        </div>
      </div>

      {/* Main Product Photography Showcase Card */}
      <div className="relative w-full rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 sm:p-8 flex flex-col items-center justify-center shadow-sm overflow-hidden group">
        {/* Subtle radial ambient highlight */}
        <div className="absolute inset-0 bg-radial from-black/[0.02] to-transparent dark:from-white/[0.03] pointer-events-none" />

        {/* Top Feature Badges */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-[var(--text-2)] pb-2 mb-2 border-b border-[var(--border)]">
          <span className="font-semibold text-[var(--text)]">{config.name}</span>
          <span className="px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-2)]">
            {config.keyFeature}
          </span>
        </div>

        {/* Product Image Display with Click-to-Zoom */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px] flex items-center justify-center cursor-pointer select-none"
          title="Click to view full-resolution schematic"
        >
          <img
            key={config.id}
            src={config.imagePath}
            alt={config.alt}
            className="w-auto h-full max-h-[92%] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            loading="eager"
          />

          {/* Expand hover button */}
          <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 text-[11px] font-medium text-[var(--accent)] bg-[var(--card)]/90 backdrop-blur-xs border border-[var(--border)] px-2.5 py-1 rounded shadow-xs opacity-80 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3 h-3" />
            <span>Zoom</span>
          </div>
        </div>

        {/* Bottom Hardware Architecture Chips */}
        <div className="w-full pt-4 mt-2 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-2)]">
          <span className="font-mono">
            Process fitting: <strong className="text-[var(--text)]">NPT 3/4&quot; Male</strong>
          </span>
          <span className="font-mono">
            Enclosure: <strong className="text-[var(--text)]">IP65 (H90×W145×D50mm)</strong>
          </span>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal for Hardware Inspection */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] rounded-xl bg-[var(--card)] border border-[var(--border)] p-4 sm:p-6 overflow-hidden flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-[var(--border)] mb-4">
              <span className="text-xs font-semibold text-[var(--text)]">
                {config.modelCode}
              </span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1 rounded bg-[var(--surface-2)] hover:bg-[var(--border)] text-[var(--text)] transition-colors cursor-pointer"
                aria-label="Close inspection view"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <img
              src={config.imagePath}
              alt={config.alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded"
            />

            <div className="w-full pt-4 mt-3 border-t border-[var(--border)] text-xs text-[var(--text-2)] text-center">
              {config.tagline}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
