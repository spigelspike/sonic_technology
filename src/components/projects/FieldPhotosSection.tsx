'use client';

import React from 'react';
import { FIELD_PHOTOS, FieldPhotoItem } from '@/data/projectsData';
import { Maximize2 } from 'lucide-react';

interface FieldPhotosSectionProps {
  onPhotoClick: (index: number) => void;
}

export const FieldPhotosSection: React.FC<FieldPhotosSectionProps> = ({ onPhotoClick }) => {
  return (
    <section id="project-photos" className="py-16 sm:py-24 border-t border-[var(--border)] relative bg-[var(--bg)]">
      <div className="container-1280 space-y-12 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 sm:w-28 bg-[var(--border)]" />
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-widest text-[var(--text)] uppercase">
              PROJECT PHOTOS
            </h2>
            <span className="h-[1px] w-12 sm:w-28 bg-[var(--border)]" />
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-2)] font-mono">
            Control room displays, touch HMI panels, and gas detection enclosures across operational UAE installations.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {FIELD_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onPhotoClick(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${photo.title}`}
              className="group flex flex-col overflow-hidden rounded-md bg-[var(--card)] border border-[var(--border)] cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] transition-all hover:border-[var(--text)] hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Zoom Icon */}
                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-1.5 rounded bg-black/75 text-white flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* High-Contrast Caption Underneath Photo */}
              <div className="p-3 bg-[var(--card)] border-t border-[var(--border)] flex items-center justify-between gap-2">
                <h3 className="font-heading font-bold text-xs sm:text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                  {photo.title}
                </h3>
                <span className="text-[11px] font-mono text-[var(--text-2)] shrink-0">
                  #{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
