'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface SelectedProject {
  id: string;
  name: string;
  location: string;
  scope: string;
  image: string;
}

const SELECTED_PROJECTS: SelectedProject[] = [
  {
    id: 'etihad-towers',
    name: 'Etihad Towers',
    location: 'Abu Dhabi',
    scope: 'Multi-tower addressable gas detection and central SCADA loop',
    image: '/assets/projects/EtihadTowersAD.avif',
  },
  {
    id: 'royal-atlantis',
    name: 'The Royal Atlantis',
    location: 'Dubai',
    scope: 'High-density kitchen LPG detection and multi-zone safety interlocks',
    image: '/assets/projects/RoyalAtlantisDXB.avif',
  },
  {
    id: 'one-central',
    name: 'One Central — DWTC',
    location: 'Dubai',
    scope: 'District commercial energy SCADA and flammable gas surveillance',
    image: '/assets/projects/OneCentral-H2B-DWTCDXB.avif',
  },
];

export const AboutProjects: React.FC = () => {
  return (
    <section className="w-full border-b border-[var(--border)] bg-[var(--bg)] transition-colors py-16 sm:py-24 lg:py-32">
      <div className="container-1280 space-y-12 sm:space-y-16">
        
        {/* Section Heading & Link to Projects Page */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-heading text-[var(--text)] tracking-tight leading-tight">
              Selected projects
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--text-2)] font-normal leading-[1.6]">
              Gas detection, flame monitoring, and telemetry deployments across Abu Dhabi and Dubai.
            </p>
          </div>

          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[var(--text)] hover:underline transition-colors shrink-0"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 text-[var(--text-2)]" />
          </a>
        </div>

        {/* Strip of Three Projects: 12-column grid, 4 cols each */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SELECTED_PROJECTS.map((project) => (
            <a
              key={project.id}
              href="/projects"
              className="group flex flex-col space-y-4 focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] rounded-sm"
            >
              {/* Image: Grayscale, restrained, consistent rounded corner, matching hero language */}
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--surface-2)]">
                <Image
                  src={project.image}
                  alt={`${project.name} in ${project.location} — ${project.scope}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale contrast-110 group-hover:scale-[1.02] group-hover:contrast-125 transition-all duration-300"
                />
              </div>

              {/* Name, Location, Scope in one line each */}
              <div className="space-y-1">
                <div className="text-lg font-bold font-heading text-[var(--text)] group-hover:underline">
                  {project.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-[var(--text-2)]">
                  {project.location}
                </div>
                <div className="text-sm text-[var(--text-2)] font-normal leading-snug pt-1">
                  {project.scope}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
