'use client';

import React, { useState } from 'react';
import { GAS_SPECS, GasDetectorSpec } from '../data/sonicData';

interface GasConfiguratorProps {
  onSelectGasForQuote?: (gasName: string, detector: string) => void;
}

export const GasConfigurator: React.FC<GasConfiguratorProps> = ({ onSelectGasForQuote }) => {
  const [selectedFormula, setSelectedFormula] = useState<string>(GAS_SPECS[0].formula);

  const activeGas = GAS_SPECS.find((g) => g.formula === selectedFormula) || GAS_SPECS[0];

  return (
    <section id="gas-selector" className="py-24 bg-[#0a0e17] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-medium tracking-wider mb-3">
            <span>ENGINEERING UTILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
            Interactive Gas &amp; Sensor Configurator
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Match your facility&apos;s specific hazardous gas risks to verified Sonic detection instruments and alarm setpoints.
          </p>
        </div>

        {/* Gas Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {GAS_SPECS.map((gas) => (
            <button
              key={gas.formula}
              onClick={() => setSelectedFormula(gas.formula)}
              className={`px-4 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all border cursor-pointer flex items-center gap-2.5 ${
                selectedFormula === gas.formula
                  ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/40 scale-105'
                  : 'bg-[#0f1422] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <span className="px-1.5 py-0.5 rounded bg-black/40 text-xs">
                {gas.formula}
              </span>
              <span>{gas.commonName.split('(')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Gas Specification Dashboard */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 5 Cols: Gas Identity Card */}
            <div className="lg:col-span-5 bg-[#07090e] rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                    {activeGas.formula}
                  </div>
                  <div className="text-sm font-mono text-zinc-400 mt-1">
                    {activeGas.commonName}
                  </div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-[10px] uppercase text-zinc-500">CAS Registry</div>
                  <div className="text-xs font-bold text-zinc-300">{activeGas.casNumber}</div>
                </div>
              </div>

              {/* Threshold Alarm Cards */}
              <div className="mt-6 space-y-4 font-mono">
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase text-zinc-400">Measurement Span</div>
                    <div className="text-sm font-bold text-white">{activeGas.measurementRange}</div>
                  </div>
                  <span className="text-xs text-cyan-400 font-semibold">DYNAMIC SPAN</span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-900/40 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase text-amber-400">High Alarm Setpoint (1st Stage)</div>
                    <div className="text-sm font-bold text-amber-200">{activeGas.hiAlarm}</div>
                  </div>
                  <span className="text-[10px] text-amber-400 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800">
                    BMS WARNING
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-900/50 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase text-red-400">High-High Trip (Emergency Trip)</div>
                    <div className="text-sm font-bold text-red-200">{activeGas.hiHiAlarm}</div>
                  </div>
                  <span className="text-[10px] text-red-400 px-2 py-0.5 rounded bg-red-950/80 border border-red-800 animate-pulse">
                    SOLENOID TRIP
                  </span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Recommended Sonic Sensor Instrument */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase text-red-400 font-bold tracking-wider">
                  Recommended Instrumentation Solution
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white mt-1">
                  {activeGas.recommendedDetector}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
                  <span className="text-zinc-500 uppercase text-[10px]">Sensing Technology</span>
                  <div className="text-sm font-bold text-zinc-100 mt-1">{activeGas.technology}</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
                  <span className="text-zinc-500 uppercase text-[10px]">Response Time</span>
                  <div className="text-sm font-bold text-emerald-400 mt-1">&lt; 1.0 Second (Immediate)</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold mb-2">
                  Typical UAE Project Applications:
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-[#07090e] p-4 rounded-xl border border-white/5 font-mono">
                  {activeGas.typicalApplications}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectGasForQuote?.(activeGas.commonName, activeGas.recommendedDetector)}
                  className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-700/30 transition-all cursor-pointer"
                >
                  Request Quotation for {activeGas.formula}
                </button>
                <a
                  href="#hardware"
                  className="px-5 py-3 rounded-xl text-xs font-mono text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                >
                  View Hardware Specs →
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
