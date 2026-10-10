'use client';

import React, { useState } from 'react';
import { HARDWARE_PRODUCTS, HardwareItem } from '../data/sonicData';

interface HardwareMatrixProps {
  onSelectProductForQuote?: (productName: string) => void;
}

export const HardwareMatrix: React.FC<HardwareMatrixProps> = ({ onSelectProductForQuote }) => {
  const [activeTab, setActiveTab] = useState<string>(HARDWARE_PRODUCTS[0].id);

  const selectedProduct = HARDWARE_PRODUCTS.find((p) => p.id === activeTab) || HARDWARE_PRODUCTS[0];

  return (
    <section id="hardware" className="py-24 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 text-xs font-mono font-medium tracking-wider mb-3">
            <span>ENGINEERED &amp; ASSEMBLED IN THE UAE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
            Industrial Hardware Ecosystem
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Built for extreme Gulf environmental conditions — high ambient heat, dust, humidity, and critical life-safety standards.
          </p>
        </div>

        {/* Product Family Selection Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {HARDWARE_PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setActiveTab(prod.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all shrink-0 border cursor-pointer ${
                activeTab === prod.id
                  ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                  : 'bg-[#0f1422] text-zinc-400 border-white/10 hover:border-white/25 hover:text-white'
              }`}
            >
              {prod.title.split('—')[0]}
            </button>
          ))}
        </div>

        {/* Active Product Detailed Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden">
          
          {/* Subtle Ambient Laser Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 6 Cols: Description & Key Highlights */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                {selectedProduct.badge && (
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-red-950 text-red-300 border border-red-800">
                    {selectedProduct.badge}
                  </span>
                )}
                <span className="text-xs font-mono text-zinc-400">
                  Origin: <strong className="text-zinc-200">{selectedProduct.origin}</strong>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white">
                  {selectedProduct.title}
                </h3>
                <p className="text-sm font-mono text-red-400 mt-1">
                  Model: {selectedProduct.model}
                </p>
              </div>

              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                {selectedProduct.summary}
              </p>

              {/* Key Features Bullet Points */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-3">
                  Engineering Capabilities:
                </h4>
                <ul className="space-y-2.5">
                  {selectedProduct.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="text-red-500 font-mono mt-0.5">◆</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectProductForQuote?.(selectedProduct.title)}
                  className="px-5 py-3 rounded-xl font-semibold text-sm text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-700/30 transition-all cursor-pointer"
                >
                  Configure &amp; Request Quote
                </button>
                <a
                  href="#gas-selector"
                  className="px-5 py-3 rounded-xl font-mono text-xs text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-all flex items-center gap-2"
                >
                  <span>Check Gas Compatibility</span>
                  <span>→</span>
                </a>
              </div>

            </div>

            {/* Right 6 Cols: Engineering Specifications Table */}
            <div className="lg:col-span-6 bg-[#0a0e17] rounded-2xl p-6 border border-white/10 shadow-inner">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Technical Datasheet Specifications
                </h4>
                <span className="text-[10px] font-mono text-emerald-400">VERIFIED SPEC</span>
              </div>

              <dl className="divide-y divide-white/5 font-mono text-xs">
                {selectedProduct.specs.map((sp, idx) => (
                  <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <dt className="text-zinc-400 font-medium">{sp.label}:</dt>
                    <dd className="text-zinc-100 font-bold text-right sm:text-left">{sp.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-xs font-mono text-zinc-400 flex items-center gap-3">
                <span className="text-xl">🛡️</span>
                <div>
                  <div className="text-zinc-200 font-semibold">Factory Certified &amp; Pre-Calibrated</div>
                  <div className="text-[11px] text-zinc-400">Shipped with factory calibration certificate &amp; UAE Civil Defence compliance documentation.</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
