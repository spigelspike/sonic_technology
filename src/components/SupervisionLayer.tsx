'use client';

import React, { useState, useEffect } from 'react';

const AGENT_TASKS = [
  { name: 'Continuous Monitoring', status: 'ACTIVE', color: 'text-red-500 dark:text-red-400' },
  { name: 'Anomaly Detection', status: 'ACTIVE', color: 'text-red-500 dark:text-red-400' },
  { name: 'Remote Control Interface', status: 'ACTIVE', color: 'text-red-500 dark:text-red-400' },
  { name: 'Smart Alert Engine', status: 'ACTIVE', color: 'text-red-500 dark:text-red-400' },
  { name: 'Predictive Analysis', status: 'LEARNING', color: 'text-amber-500 dark:text-amber-400 animate-pulse' },
];

export const SupervisionLayer: React.FC = () => {
  const [pulseTime, setPulseTime] = useState<string>('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setPulseTime(now.toTimeString().split(' ')[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-28 border-b border-[var(--border)] bg-[var(--surface-2)] transition-colors relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-1280 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Supervision Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-glow)] border border-[var(--accent-border)] text-xs font-mono-tech tracking-wider uppercase text-[var(--accent)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>Supervision Layer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[var(--text)] leading-tight">
              Every Supervisory IoT system we ship includes an{' '}
              <span className="text-red-500">AI Agent.</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-2)] leading-relaxed">
              Live monitoring. Smart alerts. Full supervisory control — from anywhere in the world. Not a dashboard. Not a report. A real-time autonomous agent watching your systems.
            </p>

            <div className="pt-2">
              <a
                href="#applications"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>EXPLORE OUR APPLICATIONS</span>
                <span>→</span>
              </a>
            </div>

            {/* Quick Micro Badges */}
            <div className="pt-4 border-t border-[var(--border)] grid grid-cols-2 gap-4 text-xs font-mono-tech text-[var(--text-2)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Zero-OS Determinism</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Sub-15ms Safety Trip</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Agent Terminal Console matching reference */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-red-500/30 bg-zinc-950 shadow-2xl overflow-hidden text-zinc-200">
              
              {/* Terminal Window Top Bar with 3 Dots */}
              <div className="bg-zinc-900 border-b border-zinc-800 px-4 sm:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                </div>
                <div className="text-[11px] font-mono-tech text-zinc-400 font-semibold tracking-wider">
                  SONIC SUPERVISORY AGENT — V3.1
                </div>
                <div className="w-12 text-right text-[10px] font-mono-tech text-zinc-500">
                  {pulseTime}
                </div>
              </div>

              {/* Terminal Inner Console */}
              <div className="p-6 sm:p-8 font-mono-tech text-xs sm:text-sm space-y-4">
                
                {/* Header Information */}
                <div className="flex items-center justify-between text-zinc-400 uppercase tracking-wider text-[11px]">
                  <span>SONIC SUPERVISORY AGENT</span>
                  <span className="text-zinc-500">V3.1</span>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between font-bold">
                  <span className="text-zinc-400 uppercase tracking-widest text-[11px]">STATUS</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                    <span className="text-red-500 tracking-widest uppercase">ONLINE</span>
                    <span className="text-red-500/80 font-normal">|</span>
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="border-b border-zinc-800/90 my-2" />

                {/* Agent Subsystem Task Matrix */}
                <div className="space-y-3.5 pt-1">
                  {AGENT_TASKS.map((task, idx) => (
                    <div key={idx} className="flex items-center justify-between py-0.5">
                      <div className="flex items-center gap-2.5 text-zinc-300">
                        <span className="text-zinc-500 text-[10px]">■</span>
                        <span>{task.name}</span>
                      </div>
                      <span className={`font-bold tracking-wider text-xs ${task.color}`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Terminal Telemetry Line */}
                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">&gt;</span>
                    <span>Autonomous loop ready</span>
                  </div>
                  <span className="text-zinc-600">0 anomalies detected</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
