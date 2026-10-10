'use client';

import React from 'react';

interface CandidatePitchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CandidatePitchDrawer: React.FC<CandidatePitchDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl glass-panel bg-[#090d16] border-l border-white/20 p-6 sm:p-10 overflow-y-auto shadow-2xl relative">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/60 border border-white/10 cursor-pointer"
            aria-label="Close pitch drawer"
          >
            ✕
          </button>

          {/* Header */}
          <div className="space-y-2 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-mono font-semibold tracking-wider">
              <span>🚀 THE CANDIDATE&apos;S PITCH &amp; CASE STUDY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
              Why I Redesigned Sonic Technologies
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              A proactive engineering submission to the Sonic Technologies leadership team.
            </p>
          </div>

          {/* Letter to Sonic Technologies */}
          <div className="my-6 p-5 rounded-2xl bg-gradient-to-br from-red-950/30 to-[#0d1322] border border-red-500/30 text-sm text-zinc-300 space-y-3 leading-relaxed">
            <p className="font-semibold text-white">
              To the Founders &amp; Engineering Leadership at Sonic Technologies,
            </p>
            <p>
              Your engineering work is extraordinary. You manufacture FPGA-embedded safety controllers, deploy open-path laser gas detection, and protect landmark UAE destinations like <span className="text-red-400 font-medium">Etihad Towers</span> and <span className="text-red-400 font-medium">The Royal Atlantis Resort</span>.
            </p>
            <p>
              However, your previous website did not reflect that engineering supremacy. It had buried command words, clunky photo sliders, and generic scanline terminal tropes. I built this comprehensive redesign to demonstrate what happens when elite industrial domain knowledge meets state-of-the-art modern software engineering.
            </p>
            <p className="text-cyan-300 font-medium font-mono text-xs">
              — I am applying to join your team to build the future of industrial safety interfaces.
            </p>
          </div>

          {/* Forensic Audit & Solutions Matrix */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Comparative Engineering Audit
            </h3>

            <div className="space-y-3 font-mono text-xs">
              
              <div className="p-4 rounded-xl bg-[#07090e] border border-white/10">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="font-bold text-red-400">Previous Site:</span>
                  <span className="text-[10px] text-zinc-500">Static AI Slop Tropes</span>
                </div>
                <p className="text-zinc-400 leading-normal">
                  Static mock console with green dots reading &ldquo;v3.1 ONLINE ▌&rdquo;, shutter grid animation that hindered page load, and buried hardware pages.
                </p>
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-zinc-300">
                  <span className="font-bold text-emerald-400">Redesign Solution:</span>
                  <span className="text-[10px] text-emerald-500">Interactive SCADA Lab</span>
                </div>
                <p className="text-zinc-300 leading-normal">
                  Working interactive SCADA telemetry with live SVG waveform graphs, selectable UAE facility nodes, simulated emergency trips, and instant packet counting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#07090e] border border-white/10">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="font-bold text-red-400">Previous Site:</span>
                  <span className="text-[10px] text-zinc-500">Passive Content Presentation</span>
                </div>
                <p className="text-zinc-400 leading-normal">
                  Gas lists were static HTML tables. Visiting MEP engineers had to search across multiple URLs to understand detector compatibility.
                </p>
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-zinc-300">
                  <span className="font-bold text-emerald-400">Redesign Solution:</span>
                  <span className="text-[10px] text-emerald-500">Interactive Gas Configurator</span>
                </div>
                <p className="text-zinc-300 leading-normal">
                  Engineers click target gases (Methane, H2S, LPG, Ammonia) to instantly see CAS codes, threshold limits (LEL/PPM), and recommended Sonic instruments.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#07090e] border border-white/10">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="font-bold text-red-400">Previous Site:</span>
                  <span className="text-[10px] text-zinc-500">Missing Sales Pipeline</span>
                </div>
                <p className="text-zinc-400 leading-normal">
                  A lone mailto link on the contact page with zero qualification questions or RFQ structure.
                </p>
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-zinc-300">
                  <span className="font-bold text-emerald-400">Redesign Solution:</span>
                  <span className="text-[10px] text-emerald-500">High-Velocity RFQ Suite</span>
                </div>
                <p className="text-zinc-300 leading-normal">
                  Structured RFP scope generator collecting project sectors, hazard types, pipe diameters, and routing structured briefs directly to GM@sonictech.ae.
                </p>
              </div>

            </div>
          </div>

          {/* Technical Skills & Architecture Summary */}
          <div className="mt-8 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Engineering Architecture Applied Here
            </h3>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#07090e] border border-white/10">
                <span className="text-zinc-500">Framework:</span>
                <div className="text-white font-bold mt-0.5">Next.js 16 (App Router)</div>
              </div>
              <div className="p-3 rounded-lg bg-[#07090e] border border-white/10">
                <span className="text-zinc-500">Language:</span>
                <div className="text-white font-bold mt-0.5">TypeScript (Strict Mode)</div>
              </div>
              <div className="p-3 rounded-lg bg-[#07090e] border border-white/10">
                <span className="text-zinc-500">UI / Styling:</span>
                <div className="text-white font-bold mt-0.5">Tailwind v4 + Glassmorphism</div>
              </div>
              <div className="p-3 rounded-lg bg-[#07090e] border border-white/10">
                <span className="text-zinc-500">Performance:</span>
                <div className="text-emerald-400 font-bold mt-0.5">Sub-second Prerendering</div>
              </div>
            </div>
          </div>

          {/* Direct Contact to Candidate */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold font-mono text-white">
                  Ready to Discuss Roles &amp; Vision?
                </h4>
                <p className="text-xs text-zinc-400">
                  Available for Full-Stack, Front-End, or Product Engineering opportunities.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:gm@sonictech.ae?subject=Inquiry%20regarding%20Sonic%20Technologies%20Redesign%20Submission"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-mono text-xs font-bold text-white bg-red-600 hover:bg-red-500 text-center shadow-lg shadow-red-600/30"
              >
                Reach Out Regarding This Project
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-3 rounded-xl font-mono text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-white/10 cursor-pointer"
              >
                Back to Live Site
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
