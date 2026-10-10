'use client';

import React, { useState, useEffect } from 'react';

type SimulationState = 'normal' | 'warning' | 'critical';

interface FacilityNode {
  id: string;
  name: string;
  location: string;
  system: string;
  loopSensors: number;
  gasType: string;
  normalValue: number;
  unit: string;
  maxThreshold: number;
}

const NODES: FacilityNode[] = [
  {
    id: 'node-etihad',
    name: 'Etihad Towers — Main Gas Loop',
    location: 'Abu Dhabi, UAE',
    system: 'FPGA Addressable Loop #01',
    loopSensors: 284,
    gasType: 'Methane (CH4)',
    normalValue: 0.02,
    unit: 'LEL-m',
    maxThreshold: 1.0,
  },
  {
    id: 'node-atlantis',
    name: 'The Royal Atlantis — Kitchen Annular Header',
    location: 'Palm Jumeirah, Dubai',
    system: 'SONIC-ADD-MC2 Pipe-in-Pipe',
    loopSensors: 420,
    gasType: 'LPG (Propane/Butane)',
    normalValue: 0.0,
    unit: '% LEL',
    maxThreshold: 10.0,
  },
  {
    id: 'node-boreal',
    name: 'Perimeter Open-Path Laser Line',
    location: 'Industrial Energy Hub, Abu Dhabi',
    system: 'Boreal GasFinder-LoS (250m Path)',
    loopSensors: 36,
    gasType: 'Hydrogen Sulfide (H2S)',
    normalValue: 0.4,
    unit: 'ppm-m',
    maxThreshold: 10.0,
  },
  {
    id: 'node-dwtc',
    name: 'One Central DWTC — Thermal RTU',
    location: 'Dubai World Trade Centre, Dubai',
    system: 'SCADA RTU-8000 Remote Terminal',
    loopSensors: 310,
    gasType: 'Carbon Monoxide (CO)',
    normalValue: 4.8,
    unit: 'ppm',
    maxThreshold: 50.0,
  },
];

export const ScadaSimulator: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<FacilityNode>(NODES[0]);
  const [simState, setSimState] = useState<SimulationState>('normal');
  const [packetCount, setPacketCount] = useState(148290);
  const [logs, setLogs] = useState<string[]>([
    '09:42:01.120 [FPGA_CORE] Heartbeat ACK received from all 16 remote loop modules.',
    '09:42:01.240 [MODBUS_RTU] Polling baud: 19200, Parity: Even, CRC-16 OK.',
    '09:42:01.380 [AI_SUPERVISOR] Sensor drift baseline confirmed: 0.00% delta.',
  ]);

  // Live packet counter ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  // Update logs when state changes
  useEffect(() => {
    const now = new Date().toTimeString().split(' ')[0] + '.' + Math.floor(Math.random() * 900 + 100);
    if (simState === 'normal') {
      setLogs((prev) => [
        `${now} [SYS_RESET] Loop restored to baseline state. Interlocks cleared.`,
        `${now} [AI_SUPERVISOR] Continuous telemetry: all gas sensors operating below threshold.`,
        ...prev.slice(0, 4),
      ]);
    } else if (simState === 'warning') {
      setLogs((prev) => [
        `${now} [WARN_TRACE] Trace concentration detected on ${selectedNode.gasType} sensor string!`,
        `${now} [BUZZER_RELAY] Pre-alarm horn alert staged. Supervisory notification dispatched.`,
        ...prev.slice(0, 4),
      ]);
    } else if (simState === 'critical') {
      setLogs((prev) => [
        `${now} [CRITICAL_LATCH] LEL THRESHOLD BREACHED (>20% LEL) on ${selectedNode.name}!`,
        `${now} [FPGA_INTERLOCK] Emergency gas isolation solenoid tripped in 11.4 ms.`,
        `${now} [EVAC_SIGNAL] UAE Civil Defence master telemetry interface activated.`,
        ...prev.slice(0, 4),
      ]);
    }
  }, [simState, selectedNode]);

  // Dynamic sensor values based on state
  const getCurrentValue = () => {
    if (simState === 'normal') return selectedNode.normalValue;
    if (simState === 'warning') {
      return Number((selectedNode.maxThreshold * 0.45).toFixed(2));
    }
    return Number((selectedNode.maxThreshold * 1.85).toFixed(2));
  };

  const getStatusBadge = () => {
    if (simState === 'normal') {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          SYSTEM SECURE • NORMAL
        </span>
      );
    }
    if (simState === 'warning') {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-500/50 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          TRACE ELEVATION • PRE-ALARM
        </span>
      );
    }
    return (
      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-950/90 text-red-300 border border-red-500 animate-bounce flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        CRITICAL HAZARD • INTERLOCK ACTIVATED
      </span>
    );
  };

  return (
    <section id="scada-lab" className="py-20 bg-[#0a0e17] relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-medium tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>LIVE INTERACTIVE SCADA ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              Real-Time Telemetry &amp; AI Supervision Lab
            </h2>
            <p className="mt-2 text-zinc-400 max-w-2xl text-sm sm:text-base">
              Test our live deterministic FPGA safety loops. Toggle between live UAE facility nodes and simulate trace gas leaks to watch our autonomous supervisory interlocks respond in real time.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="text-zinc-500">Packets Processed:</span>
            <span className="text-emerald-400 font-bold bg-[#07090e] px-2.5 py-1 rounded border border-white/10">
              {packetCount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* The SCADA Console Box */}
        <div className="glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
          
          {/* Top Bar of Console */}
          <div className="bg-[#0f1422] p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            {/* Facility Node Switcher */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
              <span className="text-xs font-mono uppercase text-zinc-400 font-semibold mr-1 shrink-0">
                Facility Node:
              </span>
              {NODES.map((node) => (
                <button
                  key={node.id}
                  onClick={() => {
                    setSelectedNode(node);
                    setSimState('normal');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                    selectedNode.id === node.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/40 border border-red-500'
                      : 'bg-[#07090e] text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
                  }`}
                >
                  {node.name.split('—')[0]}
                </button>
              ))}
            </div>

            {/* Current State Badge */}
            <div>{getStatusBadge()}</div>

          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left 8 Cols: Telemetry Visualizer & Controls */}
            <div className="lg:col-span-8 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
              
              {/* Selected Node Details Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-lg font-bold font-mono text-white flex items-center gap-2">
                    {selectedNode.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {selectedNode.location} • {selectedNode.system} • {selectedNode.loopSensors} Supervised Points
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase text-zinc-500">Live Reading</div>
                    <div className={`text-2xl font-extrabold font-mono ${
                      simState === 'normal' ? 'text-emerald-400' : simState === 'warning' ? 'text-amber-400' : 'text-red-500'
                    }`}>
                      {getCurrentValue()} {selectedNode.unit}
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Dynamic Waveform Canvas Simulation */}
              <div className="my-6">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span>FPGA High-Frequency Sensor Waveform (0–100% Normalized)</span>
                  <span className="text-zinc-500">Sampling Rate: 1000 S/s</span>
                </div>
                
                {/* Visualizer SVG Canvas */}
                <div className="relative h-44 w-full bg-[#07090e] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
                  
                  {/* Subtle Gridlines */}
                  <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

                  {/* Warning / Alarm Threshold Reference Line */}
                  <div className="absolute w-full top-1/4 border-b border-dashed border-red-500/50 flex justify-between px-3 text-[10px] font-mono text-red-400">
                    <span>HI-HI ALARM TRIP (SOLENOID INTERLOCK)</span>
                    <span>20% LEL / SETPOINT</span>
                  </div>
                  <div className="absolute w-full top-1/2 border-b border-dashed border-amber-500/40 flex justify-between px-3 text-[10px] font-mono text-amber-300">
                    <span>HI ALARM (BUZZER + BMS WARNING)</span>
                    <span>10% LEL</span>
                  </div>

                  {/* Simulated Waveform Path */}
                  <svg className="w-full h-full relative z-10" viewBox="0 0 600 160" preserveAspectRatio="none">
                    <path
                      d={
                        simState === 'normal'
                          ? 'M 0 135 Q 50 130, 100 136 T 200 134 T 300 135 T 400 133 T 500 136 T 600 134'
                          : simState === 'warning'
                          ? 'M 0 130 Q 50 120, 100 100 T 200 85 T 300 88 T 400 82 T 500 86 T 600 84'
                          : 'M 0 130 Q 50 90, 100 50 T 200 32 T 300 28 T 400 35 T 500 29 T 600 31'
                      }
                      fill="none"
                      stroke={simState === 'normal' ? '#10b981' : simState === 'warning' ? '#f59e0b' : '#ef4444'}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                    {/* Glowing Area Fill below curve */}
                    <path
                      d={
                        simState === 'normal'
                          ? 'M 0 135 Q 50 130, 100 136 T 200 134 T 300 135 T 400 133 T 500 136 T 600 134 L 600 160 L 0 160 Z'
                          : simState === 'warning'
                          ? 'M 0 130 Q 50 120, 100 100 T 200 85 T 300 88 T 400 82 T 500 86 T 600 84 L 600 160 L 0 160 Z'
                          : 'M 0 130 Q 50 90, 100 50 T 200 32 T 300 28 T 400 35 T 500 29 T 600 31 L 600 160 L 0 160 Z'
                      }
                      fill={simState === 'normal' ? 'rgba(16, 185, 129, 0.08)' : simState === 'warning' ? 'rgba(245, 158, 11, 0.12)' : 'rgba(239, 68, 68, 0.18)'}
                      className="transition-all duration-700"
                    />
                  </svg>
                </div>
              </div>

              {/* Interactive Simulation Action Buttons */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-zinc-400 font-semibold mb-3">
                  Interactive Test Controls (Click to Simulate):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  <button
                    onClick={() => setSimState('normal')}
                    id="sim-btn-normal"
                    className={`p-3 rounded-xl font-mono text-xs font-semibold text-left transition-all border cursor-pointer ${
                      simState === 'normal'
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-950/50'
                        : 'bg-[#07090e] border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>1. Normal Baseline</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-normal">
                      Zero gas detection. Solenoid valves open, fans normal.
                    </p>
                  </button>

                  <button
                    onClick={() => setSimState('warning')}
                    id="sim-btn-warning"
                    className={`p-3 rounded-xl font-mono text-xs font-semibold text-left transition-all border cursor-pointer ${
                      simState === 'warning'
                        ? 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-lg shadow-amber-950/50'
                        : 'bg-[#07090e] border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>2. Simulate Trace Leak</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-normal">
                      Pre-alarm warning. Buzzer primed, BMS alert staged.
                    </p>
                  </button>

                  <button
                    onClick={() => setSimState('critical')}
                    id="sim-btn-critical"
                    className={`p-3 rounded-xl font-mono text-xs font-semibold text-left transition-all border cursor-pointer ${
                      simState === 'critical'
                        ? 'bg-red-950/90 border-red-500 text-red-300 shadow-lg shadow-red-950/50 animate-pulse'
                        : 'bg-[#07090e] border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>3. Emergency Hazard Trip</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-normal">
                      LEL breached! Deterministic gas shutoff in &lt;15ms.
                    </p>
                  </button>

                </div>
              </div>

            </div>

            {/* Right 4 Cols: Hardware Status & Autonomous AI Logs */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-[#0b0f19] flex flex-col justify-between space-y-6">
              
              {/* Hardware Interlock State Indicators */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-4">
                  Hardware Interlock Matrix
                </h4>
                
                <div className="space-y-3 font-mono text-xs">
                  
                  <div className="p-2.5 rounded-lg bg-[#07090e] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-400">Main Gas Isolation Valve:</span>
                    <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                      simState === 'critical'
                        ? 'bg-red-950 text-red-400 border border-red-800'
                        : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    }`}>
                      {simState === 'critical' ? 'TRIPPED (CLOSED)' : 'ENERGIZED (OPEN)'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#07090e] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-400">Explosion-Proof Exhaust:</span>
                    <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                      simState === 'normal'
                        ? 'bg-zinc-900 text-zinc-400'
                        : 'bg-amber-950 text-amber-300 border border-amber-800'
                    }`}>
                      {simState === 'normal' ? 'STANDBY' : 'FORCED HIGH VELOCITY'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#07090e] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-400">RS485 Modbus Bus Loop:</span>
                    <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
                      HEALTHY (0 DROPPED)
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#07090e] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-400">UAE Civil Defence Link:</span>
                    <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                      simState === 'critical'
                        ? 'bg-red-950 text-red-300 border border-red-700 animate-pulse'
                        : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    }`}>
                      {simState === 'critical' ? 'ALARM DISPATCHED' : 'ONLINE MONITORING'}
                    </span>
                  </div>

                </div>
              </div>

              {/* Live Autonomous AI Supervision Logs */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Autonomous AI Telemetry Log
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-500">Live Buffer</span>
                </div>

                <div className="h-44 bg-[#05070a] rounded-lg p-3 border border-white/10 font-mono text-[11px] text-zinc-300 overflow-y-auto space-y-2 select-text">
                  {logs.map((log, index) => (
                    <div
                      key={index}
                      className={
                        log.includes('CRITICAL') || log.includes('TRIPPED')
                          ? 'text-red-400 font-semibold'
                          : log.includes('WARN')
                          ? 'text-amber-300'
                          : 'text-zinc-400'
                      }
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
