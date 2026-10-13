'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EngineeringCapability {
  id: string;
  name: string;
  description: string;
  href: string;
}

const CAPABILITIES: EngineeringCapability[] = [
  {
    id: 'gas-fire',
    name: 'Gas & Fire Detection',
    description:
      'Addressable and conventional panels with sub-second FPGA response loops, emergency solenoid interlocks, and life-safety compliance.',
    href: '/applications',
  },
  {
    id: 'scada',
    name: 'SCADA Systems',
    description:
      'Supervisory control and data acquisition with deterministic RTU deployments, Modbus TCP/RTU telemetry, and real-time operator interfaces.',
    href: '/applications',
  },
  {
    id: 'fpga',
    name: 'FPGA Firmware Design',
    description:
      'Proprietary hardware-deterministic gate-array logic for safety-critical interlocks: no operating system, deterministic execution, and sub-15ms loop evaluation.',
    href: '/applications',
  },
  {
    id: 'iot',
    name: 'IoT & Remote Monitoring',
    description:
      'Connected field sensor networks with continuous telemetry logging, automated anomaly detection, and remote engineering access.',
    href: '/applications',
  },
  {
    id: 'control-panels',
    name: 'Industrial Control Panels',
    description:
      'Custom-built power distribution, relay logic, and motor control panels engineered for manufacturing plants and utility facilities.',
    href: '/applications',
  },
  {
    id: 'commercial-automation',
    name: 'Building Safety Automation',
    description:
      'Integrated commercial systems for emergency gas shutoff, exhaust ventilation interlocks, and central BMS telemetry across multi-tenant properties.',
    href: '/applications',
  },
];

export const SolutionsSection: React.FC = () => {
  return (
    <section id="applications" className="w-full border-b border-[var(--border)] bg-[var(--bg)] transition-colors py-16 sm:py-24 lg:py-32">
      <div className="container-1280 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-heading text-[var(--text)] tracking-tight leading-tight">
              What we engineer
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--text-2)] font-normal leading-[1.6]">
              Instrumentation, embedded firmware, and supervisory control systems engineered for harsh operating environments across the UAE.
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[var(--text)] hover:underline transition-colors shrink-0"
          >
            <span>View Selected Projects</span>
            <ArrowRight className="w-4 h-4 text-[var(--text-2)]" />
          </a>
        </div>

        {/* 3-Column Grid of Text Blocks Separated by Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 pt-8 border-t border-[var(--border)]">
          {CAPABILITIES.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between space-y-4 pt-4 border-t border-[var(--border)] md:border-t-0"
            >
              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text)] leading-snug">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[var(--text)] hover:underline transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--text-2)]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
