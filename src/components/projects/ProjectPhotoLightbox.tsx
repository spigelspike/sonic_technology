'use client';

import React, { useEffect, useCallback } from 'react';
import { ProjectItem } from '@/data/projectsData';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectPhotoLightboxProps {
  projects: ProjectItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const ProjectPhotoLightbox: React.FC<ProjectPhotoLightboxProps> = ({
  projects,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const isOpen = currentIndex !== null;
  const currentProject = isOpen ? projects[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onSelectIndex((currentIndex - 1 + projects.length) % projects.length);
  }, [currentIndex, projects.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onSelectIndex((currentIndex + 1) % projects.length);
  }, [currentIndex, projects.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentProject) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project photo viewer"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md text-white animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-heading font-bold text-base sm:text-lg text-white">
            {currentProject.name}
          </span>
          <span className="text-xs font-mono text-gray-400 uppercase">
            • {currentProject.city} ({currentIndex + 1} of {projects.length})
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project photo viewer"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Area */}
      <div className="flex-1 min-h-0 relative flex items-center justify-center p-4 sm:p-8">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute left-3 sm:left-8 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-transform hover:scale-110 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <img
          src={currentProject.image}
          alt={currentProject.name}
          className="max-h-[75vh] max-w-full w-auto object-contain rounded border border-white/15 shadow-2xl"
        />

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project"
          className="absolute right-3 sm:right-8 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-transform hover:scale-110 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnails */}
      <div className="p-3 border-t border-white/10 bg-black/60 overflow-x-auto flex items-center justify-center gap-2">
        {projects.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectIndex(idx)}
            aria-label={`Jump to ${item.name}`}
            className={`relative shrink-0 w-14 h-11 rounded overflow-hidden border transition-all cursor-pointer ${
              idx === currentIndex
                ? 'border-[var(--accent)] ring-2 ring-[var(--accent)]/50 scale-105'
                : 'border-white/20 opacity-50 hover:opacity-100'
            }`}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
