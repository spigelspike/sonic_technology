'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface ChannelConfig {
  id: string;
  name: string;
  sub: string;
  gas: string;
  baseline: number;
  unit: string;
  tripLevel: number;
  currentMa: number;
}

const CHANNELS: ChannelConfig[] = [
  {
    id: 'ch1',
    name: 'Loop 01: Optical Path',
    sub: 'Boreal GasFinder-LoS • 200m Span',
    gas: 'Methane (CH₄)',
    baseline: 0.02,
    unit: 'LEL-m',
    tripLevel: 0.20,
    currentMa: 4.08,
  },
  {
    id: 'ch2',
    name: 'Loop 02: Annular Interstitial',
    sub: 'SONIC-ADD-MC2 Pipe-in-Pipe',
    gas: 'LPG (Propane / Butane)',
    baseline: 0.0,
    unit: '% LEL',
    tripLevel: 10.0,
    currentMa: 4.02,
  },
  {
    id: 'ch3',
    name: 'Loop 03: Perimeter Boundary',
    sub: 'Optical Spectroscopy Sensor',
    gas: 'Hydrogen Sulfide (H₂S)',
    baseline: 0.35,
    unit: 'ppm-m',
    tripLevel: 5.0,
    currentMa: 4.14,
  },
  {
    id: 'ch4',
    name: 'Loop 04: Central Plant RTU',
    sub: 'SCADA Addressable Node',
    gas: 'Carbon Monoxide (CO)',
    baseline: 4.2,
    unit: 'ppm',
    tripLevel: 35.0,
    currentMa: 4.22,
  },
];

export const MonitoringDemo: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<ChannelConfig>(CHANNELS[0]);
  const [simulatedAlert, setSimulatedAlert] = useState<boolean>(false);
  const [packetCount, setPacketCount] = useState<number>(284910);
  const [currentValue, setCurrentValue] = useState<number>(CHANNELS[0].baseline);
  const [history, setHistory] = useState<number[]>(() => Array.from({ length: 40 }, () => CHANNELS[0].baseline));
  const [events, setEvents] = useState<string[]>([
    '09:42:01.120 [FPGA_CORE] Heartbeat ACK received from all 16 remote loop modules.',
    '09:42:01.240 [MODBUS_RTU] Polling baud: 19200, Parity: Even, CRC-16 OK.',
    '09:42:01.380 [AI_SUPERVISOR] Sensor baseline confirmed: 0.00% drift.',
    '09:42:01.510 [SOLENOID_RELAY] Main fuel emergency gas valve: ENERGIZED (Armed).',
  ]);

  // Handle channel change
  const handleSelectChannel = (ch: ChannelConfig) => {
    setSelectedChannel(ch);
    setSimulatedAlert(false);
    setCurrentValue(ch.baseline);
    setHistory(Array.from({ length: 40 }, () => ch.baseline));
  };

  // Live telemetry ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setPacketCount((p) => p + Math.floor(Math.random() * 3) + 1);

      setCurrentValue((prev) => {
        let nextVal: number;
        if (simulatedAlert) {
          // Surge value near or above trip level with some jitter
          nextVal = +(selectedChannel.tripLevel * 1.35 + (Math.random() * 0.1 - 0.05)).toFixed(2);
        } else {
          // Slight sensor noise around baseline
          const jitter = (Math.random() - 0.5) * 0.02 * (selectedChannel.baseline || 0.1);
          nextVal = Math.max(0, +(selectedChannel.baseline + jitter).toFixed(2));
        }

        setHistory((oldHist) => [...oldHist.slice(1), nextVal]);
        return nextVal;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [selectedChannel, simulatedAlert]);

  // Log events on alert toggle
  const toggleAlert = () => {
    const nextState = !simulatedAlert;
    setSimulatedAlert(nextState);

    const now = new Date().toTimeString().split(' ')[0] + '.' + Math.floor(Math.random() * 899 + 100);

    if (nextState) {
      setEvents((prev) => [
        `${now} [TRIP_ALARM] Elevated concentration detected on ${selectedChannel.gas}!`,
        `${now} [INTERLOCK_ACTIVE] FPGA fast-trip interlock executed (<12 ms).`,
        `${now} [SOLENOID_RELAY] Zone emergency isolation relay command dispatched.`,
        ...prev.slice(0, 3),
      ]);
    } else {
      setEvents((prev) => [
        `${now} [RESET_CMD] Manual supervisory reset executed. Interlocks cleared.`,
        `${now} [CALIBRATION] Baseline restored to nominal: ${selectedChannel.baseline} ${selectedChannel.unit}.`,
        ...prev.slice(0, 4),
      ]);
    }
  };

  // Calculate SVG polyline path for telemetry waveform
  const svgWidth = 600;
  const svgHeight = 160;
  const maxScale = Math.max(selectedChannel.tripLevel * 1.6, selectedChannel.baseline * 2, 1);

  const points = history
    .map((val, idx) => {
      const x = (idx / (history.length - 1)) * svgWidth;
      const normalized = Math.min(1, Math.max(0, val / maxScale));
      const y = svgHeight - normalized * (svgHeight - 30) - 15;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const tripY = svgHeight - (selectedChannel.tripLevel / maxScale) * (svgHeight - 30) - 15;

  return (
    <section id="telemetry" className="py-20 sm:py-28 border-b border-[var(--border)] bg-[var(--bg)] transition-colors relative overflow-hidden">
      <div className="container-1280 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--accent-text)] text-xs font-mono-tech uppercase font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot" />
              <span>Simulated Data • Supervisory Architecture Demonstration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[var(--text)]">
              Real-Time Supervisory Telemetry
            </h2>
            <p className="text-base text-[var(--text-2)] mt-3 max-w-[65ch] leading-relaxed">
              Deterministic multichannel telemetry console demonstrating sub-15ms loop response, Modbus RTU communications, and fail-safe safety interlocks.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono-tech text-xs text-[var(--text-2)]">
            <div className="px-3 py-2 rounded-md bg-[var(--surface-2)] border border-[var(--border)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Baud: 19200 RTU</span>
            </div>
            <div className="px-3 py-2 rounded-md bg-[var(--surface-2)] border border-[var(--border)] hidden sm:block">
              Loop Latency: &lt;15ms
            </div>
          </div>
        </ScrollReveal>

        {/* Demo Console Container */}
        <ScrollReveal>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-lg shadow-black/5">
            
            {/* Top Console Controls: Channels & Status */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[var(--border)] gap-4">
              <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
                <span className="text-[var(--text-2)] uppercase font-semibold text-[11px] mr-1">Monitored Loop:</span>
                {CHANNELS.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => handleSelectChannel(ch)}
                    className={`px-3 py-2 rounded-md border transition-all cursor-pointer font-medium text-xs ${
                      selectedChannel.id === ch.id
                        ? 'border-[var(--accent)] text-[var(--accent-text)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] font-bold shadow-xs'
                        : 'border-[var(--border)] text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]'
                    }`}
                  >
                    <span>{ch.name.split(':')[0]}</span>
                    <span className="opacity-70 ml-1.5 hidden sm:inline">({ch.gas.split(' ')[0]})</span>
                  </button>
                ))}
              </div>

              {/* Live Status + Simulation Trigger */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleAlert}
                  className={`px-3.5 py-1.5 rounded-md font-mono-tech text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    simulatedAlert
                      ? 'bg-amber-500/20 text-amber-500 border border-amber-500/40 hover:bg-amber-500/30'
                      : 'bg-[var(--surface-2)] text-[var(--text-2)] border border-[var(--border)] hover:text-[var(--text)]'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${simulatedAlert ? 'bg-amber-500 animate-ping' : 'bg-zinc-400'}`} />
                  <span>{simulatedAlert ? 'Reset Interlocks' : 'Simulate Gas Event'}</span>
                </button>

                <div className={`px-3 py-1.5 rounded-md font-mono-tech text-xs border font-semibold flex items-center gap-2 ${
                  simulatedAlert
                    ? 'border-red-500/50 bg-red-500/10 text-red-500'
                    : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${simulatedAlert ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`} />
                  <span>{simulatedAlert ? 'TRIP ACTIVE' : 'SYSTEM NOMINAL'}</span>
                </div>
              </div>
            </div>

            {/* Main Console Grid: Chart + Live Gauges + Event Log */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              
              {/* Left 8 Cols: Telemetry Waveform Display */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono-tech text-[var(--text-2)] mb-3 gap-2">
                    <span className="font-semibold text-[var(--text)]">
                      {selectedChannel.name} &bull; <span className="text-[var(--accent-text)]">{selectedChannel.gas}</span>
                    </span>
                    <span>Span: {selectedChannel.sub}</span>
                  </div>

                  {/* SVG Telemetry Oscilloscope Screen */}
                  <div className="h-52 sm:h-64 w-full rounded-lg border border-[var(--border)] bg-[#0A0D14] p-4 relative overflow-hidden flex flex-col justify-between shadow-inner">
                    {/* Background Grid Pattern */}
                    <div 
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                      }}
                    />

                    {/* Top Alarm Trip Threshold Header */}
                    <div className="w-full flex items-center justify-between text-[11px] font-mono-tech z-10">
                      <span className="text-red-400 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        TRIP SETPOINT: {selectedChannel.tripLevel} {selectedChannel.unit}
                      </span>
                      <span className="text-sky-400/90 font-semibold">
                        CURRENT: {currentValue} {selectedChannel.unit}
                      </span>
                    </div>

                    {/* Waveform SVG */}
                    <div className="relative w-full h-32 my-auto z-10">
                      <svg className="w-full h-full" viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={simulatedAlert ? '#EF4444' : '#E52435'} stopOpacity="0.4" />
                            <stop offset="100%" stopColor={simulatedAlert ? '#EF4444' : '#E52435'} stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Trip Threshold Line */}
                        <line
                          x1="0"
                          y1={tripY}
                          x2={svgWidth}
                          y2={tripY}
                          stroke="#EF4444"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          opacity="0.75"
                        />

                        {/* Live Telemetry Polyline */}
                        <polyline
                          fill="none"
                          stroke={simulatedAlert ? '#EF4444' : '#E52435'}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={points}
                        />
                      </svg>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="w-full border-t border-white/10 pt-2 flex justify-between text-[10px] font-mono-tech text-zinc-400 z-10">
                      <span>OFFSET: -24s (Continuous Rolling Buffer)</span>
                      <span>PACKETS RECEIVED: {packetCount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Status Indicators Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 font-mono-tech text-xs">
                  <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)]">
                    <div className="text-[10px] text-[var(--text-2)] uppercase">Current Loop</div>
                    <div className="text-sm font-bold text-[var(--text)] mt-1">
                      {simulatedAlert ? '18.42 mA' : `${selectedChannel.currentMa} mA`}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)]">
                    <div className="text-[10px] text-[var(--text-2)] uppercase">Bus Interface</div>
                    <div className="text-sm font-bold text-[var(--text)] mt-1">RS485 RTU</div>
                  </div>

                  <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)]">
                    <div className="text-[10px] text-[var(--text-2)] uppercase">Solenoid Relay</div>
                    <div className={`text-sm font-bold mt-1 ${simulatedAlert ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
                      {simulatedAlert ? 'TRIPPED (ISOLATED)' : 'ENERGIZED (ARMED)'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)]">
                    <div className="text-[10px] text-[var(--text-2)] uppercase">FPGA Evaluation</div>
                    <div className="text-sm font-bold text-[var(--text)] mt-1">&lt;12 ms Sub-cycle</div>
                  </div>
                </div>
              </div>

              {/* Right 4 Cols: Event Sequence Log */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[var(--border)] lg:pl-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-mono-tech uppercase tracking-wider text-[var(--text-2)] font-semibold">
                      Supervisory Event Stream
                    </h3>
                    <span className="text-[10px] font-mono-tech text-emerald-600 dark:text-emerald-400 font-semibold">
                      LIVE
                    </span>
                  </div>

                  <div className="space-y-2.5 font-mono-tech text-[11px] text-[var(--text-2)]">
                    {events.map((evt, idx) => (
                      <div 
                        key={idx} 
                        className={`p-3 rounded-lg border transition-all ${
                          evt.includes('TRIP') || evt.includes('INTERLOCK')
                            ? 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400 font-medium'
                            : 'bg-[var(--surface-2)] border-[var(--border)]'
                        }`}
                      >
                        {evt}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--border)] mt-6 text-[11px] font-mono-tech text-[var(--text-2)]">
                  Architectural demonstration of deterministic safety control loops developed by Sonic Technologies.
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
