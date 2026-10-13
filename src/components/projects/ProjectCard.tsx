'use client';

import React from 'react';
import { ProjectItem } from '@/data/projectsData';
import { Maximize2, MapPin } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View photo of ${project.name}`}
      className="group flex flex-col overflow-hidden rounded-md bg-[var(--card)] border border-[var(--border)] cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] transition-all duration-200 hover:border-[var(--text)] hover:shadow-md"
    >
      {/* Architectural Photo */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-2)]">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Hover Zoom Icon */}
        <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="p-1.5 rounded bg-black/75 text-white flex items-center justify-center shadow">
            <Maximize2 className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* High-Contrast Caption Directly Underneath the Image */}
      <div className="p-3.5 bg-[var(--card)] border-t border-[var(--border)] flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors truncate">
            {project.name}
          </h3>
          <p className="text-xs font-mono text-[var(--text-2)] uppercase tracking-wider flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-[var(--accent)] shrink-0" />
            <span>{project.city}, UAE</span>
          </p>
        </div>

        <span className="text-[11px] font-mono text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 font-semibold">
          Enlarge &rarr;
        </span>
      </div>
    </div>
  );
};
