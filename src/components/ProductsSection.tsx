'use client';

import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { RfqModal } from './RfqModal';

const PRODUCTS = [
  {
    id: 'laser-detector',
    title: 'GasFinder-LoS Open-Path Laser Detector',
    model: 'Boreal GasFinder-LoS',
    category: 'Optical Spectroscopy Gas Detection',
    origin: 'Manufactured by Boreal Laser Inc.',
    tag: 'Long-Range Optical',
    highlight: '5m to 200m Path Length',
    summary: 'Line-of-sight optical gas detection for toxic and combustible gases across path lengths up to 200 m with sub-second response and zero false alarms.',
    specs: [
      { label: 'Path Length', value: '5 m to 200 m' },
      { label: 'Target Gases', value: 'HF, H₂S, NH₃, CO₂, CO, CH₄, HCN' },
      { label: 'Speed of Response', value: '1 second results, zero cross-sensitivity' },
      { label: 'Calibration', value: 'Internal reference cell (no bump test needed)' },
      { label: 'Outputs', value: 'Dual 4–20 mA, Modbus RS485, Ethernet' },
      { label: 'Consumables', value: '100% Free of consumables' },
    ],
    mailtoSubject: 'Boreal GasFinder-LoS Open-Path Laser Detector',
  },
  {
    id: 'pipe-in-pipe',
    title: 'Pipe-in-Pipe Gas Detector-Transmitter',
    model: 'SONIC-ADD-MC2',
    category: 'Interstitial Annular Pipeline Detection',
    origin: 'Made in UAE',
    tag: 'Double-Wall Safety',
    highlight: 'NPT 3/4" Annular Seal',
    summary: 'Engineered for pipe-in-pipe installations to detect fuel gas migration in interstitial double-wall spaces before outer pressure boundaries are compromised.',
    specs: [
      { label: 'Target Gases', value: 'Butane, hydrogen, methane, propane' },
      { label: 'Measurement Range', value: '0 … 100% LEL' },
      { label: 'Process Connector', value: 'NPT 3/4" connector for pipe-in-pipe' },
      { label: 'Analog Outputs', value: 'Two analog outputs (4–20 mA or 0–10 V)' },
      { label: 'Digital Interface', value: 'RS485 Modbus RTU interface' },
      { label: 'Signaling Options', value: 'Dual SPST relays or LCD indicator (85 dB)' },
    ],
    mailtoSubject: 'SONIC-ADD-MC2 Pipe-in-Pipe Gas Detector',
  },
  {
    id: 'wall-mount',
    title: 'Wall-Mount Gas Detector-Transmitter',
    model: 'SONIC-ADD-MC2 Wall Mount',
    category: 'Industrial Facility Gas Sentinel',
    origin: 'Made in UAE • IP65',
    tag: 'Plant Sentinel',
    highlight: 'IP65 Rugged Enclosure',
    summary: 'Robust industrial gas detection engineered for harsh environments, mechanical rooms, boiler plant rooms, and industrial production zones.',
    specs: [
      { label: 'Enclosure Rating', value: 'IP65 heavy-duty industrial enclosure' },
      { label: 'Sensor Types', value: 'Catalytic bead (pellistor) or metal oxide (MOS)' },
      { label: 'Measurement Range', value: '0 … 100% LEL' },
      { label: 'Analog Outputs', value: 'Two analog outputs (4–20 mA or 0–10 V)' },
      { label: 'Digital Bus', value: 'RS485 Modbus RTU' },
      { label: 'Alerting Options', value: 'Dual SPST alarm relays or LCD indicator' },
    ],
    mailtoSubject: 'SONIC-ADD-MC2 Wall-Mount Gas Detector',
  },
];

export const ProductsSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleOpenRfq = (model: string) => {
    setSelectedProduct(model);
    setModalOpen(true);
  };

  return (
    <>
      <section id="products" className="py-20 sm:py-28 border-b border-[var(--border)] bg-[var(--surface-2)] transition-colors relative">
        <div className="container-1280 relative z-10">
          
          {/* Section Header */}
          <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="tag-accent mb-4">Verified Hardware Specifications</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[var(--text)]">
                Product Portfolio
              </h2>
              <p className="text-base text-[var(--text-2)] mt-3 max-w-[65ch] leading-relaxed">
                Precision gas transmitters and open-path optical spectrometers engineered to exact functional safety and UAE environmental requirements.
              </p>
            </div>

            <button
              onClick={() => handleOpenRfq('Comprehensive Product Line')}
              className="btn-primary text-xs shrink-0 cursor-pointer"
            >
              Request Custom RFQ →
            </button>
          </ScrollReveal>

          {/* 3 Dedicated Premium Product Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch stagger-children">
            {PRODUCTS.map((prod) => (
              <ScrollReveal key={prod.id} className="flex">
                <div
                  id={prod.id}
                  className="premium-card p-6 sm:p-8 flex flex-col justify-between w-full group"
                >
                  <div>
                    {/* Header: Model & Origin */}
                    <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] text-xs font-mono-tech">
                      <span className="font-bold text-[var(--text)]">{prod.model}</span>
                      <span className="tag-accent text-[10px]">{prod.origin}</span>
                    </div>

                    {/* Badge & Title */}
                    <div className="mt-5">
                      <span className="tag-neutral text-[10px] mb-2">{prod.category}</span>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text)] mt-2 group-hover:text-[var(--accent-text)] transition-colors leading-snug">
                        {prod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-2)] mt-3 leading-relaxed">
                        {prod.summary}
                      </p>
                    </div>

                    {/* Technical Specs List */}
                    <dl className="mt-6 pt-4 border-t border-[var(--border)] divide-y divide-[var(--border-subtle)] font-mono-tech text-xs">
                      {prod.specs.map((sp, idx) => (
                        <div key={idx} className="py-2.5 flex items-start justify-between gap-3">
                          <dt className="text-[var(--text-2)] shrink-0">{sp.label}:</dt>
                          <dd className="text-[var(--text)] font-semibold text-right leading-tight">{sp.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-6 border-t border-[var(--border)] space-y-2.5">
                    {prod.id === 'pipe-in-pipe' && (
                      <a
                        href="/pipe-in-pipe-detectors"
                        className="w-full h-10 rounded-md text-xs font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>View Hardware Showcase</span>
                        <span>→</span>
                      </a>
                    )}

                    {prod.id === 'laser-detector' && (
                      <a
                        href="/open-path-gas-detection"
                        className="w-full h-10 rounded-md text-xs font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>View Interactive 3D Showcase</span>
                        <span>→</span>
                      </a>
                    )}

                    {prod.id === 'wall-mount' && (
                      <a
                        href="/wall-mount-detectors"
                        className="w-full h-10 rounded-md text-xs font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>View Hardware Showcase</span>
                        <span>→</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => handleOpenRfq(prod.model)}
                      className="w-full h-10 rounded-md text-xs font-medium text-[var(--text)] bg-[var(--surface-2)] hover:bg-[var(--card)] border border-[var(--border)] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Request RFQ / Datasheet</span>
                      <span>→</span>
                    </button>

                    <a
                      href={`mailto:gm@sonictech.ae?subject=Enquiry:%20${encodeURIComponent(prod.mailtoSubject)}`}
                      className="w-full h-9 rounded-md text-xs font-medium text-[var(--text-2)] hover:text-[var(--text)] hover:underline transition-colors flex items-center justify-center"
                    >
                      <span>Email Directly</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive RFQ Modal */}
      <RfqModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </>
  );
};
