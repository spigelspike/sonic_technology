'use client';

import React from 'react';

const VERTICALS = [
  {
    title: 'Gas & Fire Control Systems',
    desc: 'Engineered gas detection and suppression panels built to industrial safety standards.',
  },
  {
    title: 'SCADA Deployments',
    desc: 'Full supervisory control and data acquisition systems for industrial operations.',
  },
  {
    title: 'Industrial Control Panels',
    desc: 'Custom-built control panels for manufacturing, utilities, and critical infrastructure.',
  },
  {
    title: 'Agricultural Control Panels',
    desc: 'Smart automation for irrigation, climate control, and precision agriculture systems.',
  },
  {
    title: 'Home Automation',
    desc: 'Integrated residential systems — lighting, security, climate, and access. All unified.',
  },
  {
    title: 'Remote Tank Level Monitoring',
    desc: 'Real-time sensor data from remote sites, aggregated and visualised on a single dashboard.',
  },
  {
    title: 'Alarm Terminal Systems',
    desc: 'Commercial and residential alarm hardware with remote supervision and instant alerting.',
  },
];

export const MissionSupervisionSection: React.FC = () => {
  return (
    <div id="mission" className="bg-[#07090e] text-white">
      
      {/* ========================================================
          1. ABOUT US SECTION
         ======================================================== */}
      <section id="about" className="py-20 border-b border-white/10 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <img
                  src="/assets/Panel.png"
                  alt="Sonic Technologies Control Panel"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent font-mono text-xs font-bold text-red-400">
                  SONIC TECHNOLOGY INNOVATION
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono tracking-widest text-red-500 uppercase font-bold">
                ABOUT US
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
                A specialist automation engineering team.
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans">
                <strong className="text-white">Sonic Technologies</strong> is an automation technology company specialising in manufacturing FPGA embedded software and firmware design. Established in 2019, it is a fast-growing company that has designed rigid addressable and conventional gas and fire control panels, and remote thermal unit RTUs using Supervisory control and data acquisition (SCADA).
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center font-mono">
                <div className="p-4 rounded-2xl bg-[#07090e] border border-white/5">
                  <div className="text-2xl font-bold text-white">UAE</div>
                  <div className="text-[11px] text-zinc-400 mt-1 uppercase">Headquartered</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#07090e] border border-white/5">
                  <div className="text-2xl font-bold text-red-500">24/7</div>
                  <div className="text-[11px] text-zinc-400 mt-1 uppercase">Support Mindset</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#07090e] border border-white/5">
                  <div className="text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-[11px] text-zinc-400 mt-1 uppercase">Engineering-Led</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          2. COMMAND CORE: CONTROL. PROTECT. AUTOMATE.
         ======================================================== */}
      <section className="py-24 border-b border-white/10 relative overflow-hidden bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-mono tracking-tight leading-[1.08] text-white">
                CONTROL<span className="text-red-600">.</span><br />
                PROTECT<span className="text-red-600">.</span><br />
                AUTOMATE<span className="text-red-600">.</span>
              </h2>

              <p className="text-xl sm:text-2xl text-zinc-300 font-serif italic text-red-400">
                &ldquo;The Smartest Way Forward&rdquo;
              </p>

              <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
                Gas. Fire. SCADA. Industrial &amp; home automation.<br />
                Remote monitoring. All connected. All supervised by AI.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <div className="px-6 py-4 rounded-2xl bg-zinc-900/90 border border-red-500/30 flex items-center gap-4">
                  <div className="text-3xl font-black font-mono text-white">Thousands</div>
                  <div className="h-8 w-[1px] bg-white/20" />
                  <div className="text-xs font-mono uppercase text-zinc-300 leading-tight">
                    of projects<br />
                    <span className="text-red-400 font-bold">worldwide</span>
                  </div>
                </div>

                <a
                  href="#gas-projects"
                  className="px-6 py-4 rounded-2xl font-bold font-mono text-xs text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-700/40 transition-all"
                >
                  View Our Work →
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="p-8 rounded-3xl bg-[#0d111a] border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-4">
                <img
                  src="/assets/SonicSoftRed.png"
                  alt="Sonic Technologies"
                  className="w-56 h-auto object-contain drop-shadow-[0_4px_30px_rgba(230,57,70,0.4)]"
                />
                <div className="text-sm font-mono text-zinc-300 font-semibold">
                  The Smartest Way Forward
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          3. KEY FIGURES: IoT · 24/7 · AI
         ======================================================== */}
      <section className="py-20 border-b border-white/10 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-[#07090e] border border-white/10 hover:border-red-500/40 transition-all group">
              <div className="text-5xl sm:text-6xl font-black font-mono text-red-600 tracking-tight">
                IoT
              </div>
              <div className="h-[2px] w-12 bg-red-600 my-4 group-hover:w-20 transition-all" />
              <h3 className="text-xl font-bold text-white">Connected Systems</h3>
              <p className="text-xs font-mono text-zinc-400 mt-1 uppercase">Worldwide</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#07090e] border border-white/10 hover:border-red-500/40 transition-all group">
              <div className="text-5xl sm:text-6xl font-black font-mono text-red-600 tracking-tight">
                24/7
              </div>
              <div className="h-[2px] w-12 bg-red-600 my-4 group-hover:w-20 transition-all" />
              <h3 className="text-xl font-bold text-white">Live Supervision.</h3>
              <p className="text-xs font-mono text-zinc-400 mt-1 uppercase">Anywhere, Any Time</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#07090e] border border-white/10 hover:border-red-500/40 transition-all group">
              <div className="text-5xl sm:text-6xl font-black font-mono text-red-600 tracking-tight">
                AI
              </div>
              <div className="h-[2px] w-12 bg-red-600 my-4 group-hover:w-20 transition-all" />
              <h3 className="text-xl font-bold text-white">Supervision Agent</h3>
              <p className="text-xs font-mono text-zinc-400 mt-1 uppercase">On every system we ship</p>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          4. THE VERTICALS — PRECISION LIST
         ======================================================== */}
      <section className="py-24 border-b border-white/10 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-bold">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 font-sans">
              Engineering Verticals
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {VERTICALS.map((item, idx) => (
              <div
                key={idx}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] px-4 rounded-xl transition-colors"
              >
                <div className="flex items-start md:items-center gap-4">
                  <span className="text-red-500 text-sm font-mono mt-1 md:mt-0">◆</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1 max-w-2xl font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <span className="text-red-500 font-mono text-lg shrink-0 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          5. THE AI SUPERVISION LAYER
         ======================================================== */}
      <section id="ai-supervision" className="py-24 border-b border-white/10 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-bold">
                SUPERVISION LAYER
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Every Supervisory IoT system we ship includes an AI Agent.
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans">
                Live monitoring. Smart alerts. Full supervisory control — from anywhere in the world.
                Not a dashboard. Not a report. A real-time autonomous agent watching your systems.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-full font-bold text-sm text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-700/40 transition-all inline-block"
                >
                  Explore Our Capabilities →
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#05070a] border border-white/15 p-6 shadow-2xl font-mono text-xs">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-bold text-white">SONIC SUPERVISORY AGENT</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800">
                    ONLINE
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex justify-between text-zinc-300">
                    <span>Continuous Monitoring:</span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Anomaly Detection:</span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Remote Control Interface:</span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Smart Alert Engine:</span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Predictive Drift Analysis:</span>
                    <span className="text-emerald-400 font-bold">LEARNING &amp; OPTIMIZING</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-zinc-500 flex justify-between">
                  <span>FPGA Embedded Host</span>
                  <span>Zero-Cloud Dependency Failsafe</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          6. THE SCOPE — THOUSANDS OF PROJECTS WORLDWIDE
         ======================================================== */}
      <section className="py-24 bg-[#07090e]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-bold">
            THE SCALE
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Thousands of projects.<br />Worldwide.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            From industrial facilities to residential buildings, smart agriculture to critical infrastructure.
            SONIC systems run at the edge of what matters — trusted by clients who cannot afford failure.
          </p>
          <div className="pt-4">
            <a
              href="#gas-projects"
              className="px-8 py-3.5 rounded-full font-bold text-sm text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-white/15 transition-all inline-block"
            >
              See Selected Projects →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
