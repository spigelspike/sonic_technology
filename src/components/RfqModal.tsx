'use client';

import React, { useState } from 'react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, initialProduct }) => {
  const [sector, setSector] = useState('High-Rise Commercial');
  const [gases, setGases] = useState<string[]>(['LPG (Kitchen/Fuels)']);
  const [systemType, setSystemType] = useState(initialProduct || 'Pipe-In-Pipe LPG Transmitters');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('Abu Dhabi / Dubai, UAE');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleGas = (gasName: string) => {
    if (gases.includes(gasName)) {
      setGases(gases.filter((g) => g !== gasName));
    } else {
      setGases([...gases, gasName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoLink = `mailto:gm@sonictech.ae?subject=${encodeURIComponent(
    `Project RFQ: ${sector} — ${company || clientName}`
  )}&body=${encodeURIComponent(
    `Project Scope Inquiry for Sonic Technologies:\n\n` +
    `Client Name: ${clientName}\n` +
    `Company / Contractor: ${company}\n` +
    `Email: ${clientEmail}\n` +
    `Project Sector: ${sector}\n` +
    `Target Gases: ${gases.join(', ')}\n` +
    `System Requested: ${systemType}\n` +
    `Project Location: ${location}\n` +
    `Additional Engineering Notes: ${notes}\n\n` +
    `Generated via Sonic Technologies Engineering Portal.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/60 border border-white/10 cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono bg-red-950 text-red-400 border border-red-800 mb-2">
                <span>OFFICIAL ENGINEERING RFQ</span>
              </div>
              <h3 className="text-2xl font-bold font-mono text-white">
                Request Project Scope &amp; Quotation
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Direct procurement dispatch to Sonic Technologies Engineering Headquarters (UAE).
              </p>
            </div>

            {/* Sector Selector */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-2">
                1. Project Sector
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'High-Rise Commercial',
                  'Hospitality & Hotel Kitchen',
                  'Oil & Gas / Refinery',
                  'District Energy & SCADA',
                  'Residential Compound',
                  'Agriculture & Cold Storage',
                ].map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSector(s)}
                    className={`p-2.5 rounded-lg text-xs font-mono text-left transition-all border cursor-pointer ${
                      sector === s
                        ? 'bg-red-600 text-white border-red-500 font-bold'
                        : 'bg-[#07090e] text-zinc-400 border-white/5 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Gases */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-2">
                2. Target Gas Hazards
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'LPG (Kitchen/Fuels)',
                  'Methane (CH4)',
                  'Hydrogen Sulfide (H2S)',
                  'Ammonia (NH3)',
                  'Carbon Monoxide (CO)',
                  'Hydrogen Fluoride (HF)',
                  'Fire / Flame Detection',
                ].map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => toggleGas(g)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                      gases.includes(g)
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-500 font-bold'
                        : 'bg-[#07090e] text-zinc-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {gases.includes(g) ? '✓ ' : '+ '}
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Tariq Al Mansoori"
                  className="w-full px-3 py-2 rounded-lg bg-[#07090e] border border-white/10 text-white text-xs font-mono focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Company / Contractor *</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. MEP Engineering LLC"
                  className="w-full px-3 py-2 rounded-lg bg-[#07090e] border border-white/10 text-white text-xs font-mono focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="name@company.ae"
                  className="w-full px-3 py-2 rounded-lg bg-[#07090e] border border-white/10 text-white text-xs font-mono focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Project Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Abu Dhabi / Dubai"
                  className="w-full px-3 py-2 rounded-lg bg-[#07090e] border border-white/10 text-white text-xs font-mono focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Project Scope &amp; System Requirements</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Specify pipe diameter, number of detection zones, or BMS / SCADA integration details..."
                className="w-full px-3 py-2 rounded-lg bg-[#07090e] border border-white/10 text-white text-xs font-mono focus:border-red-500 focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg text-xs font-mono font-bold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/30 cursor-pointer"
              >
                Generate Specification RFQ →
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <div>
              <h3 className="text-2xl font-bold font-mono text-white">
                RFQ Briefing Prepared Successfully
              </h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
                Your technical parameters for <strong className="text-zinc-200">{sector}</strong> have been compiled.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#07090e] border border-white/10 text-left font-mono text-xs space-y-1.5 text-zinc-300">
              <div><strong className="text-zinc-500">Contact:</strong> {clientName} ({company})</div>
              <div><strong className="text-zinc-500">Hazards:</strong> {gases.join(', ')}</div>
              <div><strong className="text-zinc-500">Location:</strong> {location}</div>
              <div><strong className="text-zinc-500">Routing to:</strong> gm@sonictech.ae</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={mailtoLink}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold font-mono text-xs text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-700/40"
              >
                Send Email to GM@SONICTECH.AE →
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-3 rounded-xl font-mono text-xs text-zinc-400 hover:text-white bg-zinc-900 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
