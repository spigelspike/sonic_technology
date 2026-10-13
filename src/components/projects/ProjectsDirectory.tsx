'use client';

import React, { useState } from 'react';
import {
  ABU_DHABI_PROJECTS,
  DUBAI_PROJECTS,
  ALL_PROJECTS,
  FIELD_PHOTOS,
} from '@/data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectPhotoLightbox } from './ProjectPhotoLightbox';
import { PartnerShowcase } from './PartnerShowcase';
import { FieldPhotosSection } from './FieldPhotosSection';
import { FieldPhotoLightbox } from './FieldPhotoLightbox';
import { ProjectsMapBackground } from './ProjectsMapBackground';
import { ProjectTitleDots } from './ProjectTitleDots';

export const ProjectsDirectory: React.FC = () => {
  // Lightbox state
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeFieldPhotoIndex, setActiveFieldPhotoIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* 1. Hero Section with Architectural UAE Map Background & Premium Title Dots */}
      <section className="relative pt-14 pb-14 sm:pt-20 sm:pb-20 border-b border-[var(--border)] bg-[var(--bg)] overflow-hidden">
        {/* Aesthetic Dot Matrix & Telemetry Accents (Localized exclusively behind the project title background) */}
        <ProjectTitleDots />

        {/* Static Cartographic UAE Map Background on the Right */}
        <ProjectsMapBackground />

        {/* Foreground Content on the Left */}
        <div className="container-1280 relative z-10 space-y-6">
          <div className="max-w-2xl space-y-4">
            {/* Eyebrow: OUR WORK */}
            <div className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-[var(--accent)]">
              OUR WORK
            </div>

            {/* Heading: Projects */}
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text)]">
              Projects
            </h1>

            {/* Official Descriptions */}
            <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed">
              With a strong presence in the Middle East, Sonic Technologies meet energy industry challenges with innovative solutions. Our expert in gas and automation is respected in the energy sector and ensure the seamless execution of our projects.
            </p>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-2)] leading-relaxed">
              A portfolio of the landmark gas warning systems and automation projects across the UAE
            </p>
          </div>
        </div>
      </section>

      {/* 2. Abu Dhabi Section */}
      <section id="abu-dhabi" className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="container-1280 space-y-12">
          {/* Abu Dhabi Section Divider Heading */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-[1px] w-12 sm:w-28 bg-[var(--border)]" />
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-widest text-[var(--text)] uppercase">
                ABU DHABI
              </h2>
              <span className="h-[1px] w-12 sm:w-28 bg-[var(--border)]" />
            </div>
          </div>

          {/* Abu Dhabi Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABU_DHABI_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => {
                  const idx = ALL_PROJECTS.findIndex((p) => p.id === project.id);
                  setActiveProjectIndex(idx >= 0 ? idx : 0);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dubai Section */}
      <section id="dubai" className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="container-1280 space-y-12">
          {/* Dubai Section Divider Heading */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-[1px] w-12 sm:w-28 bg-[var(--border)]" />
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-widest text-[var(--text)] uppercase">
                DUBAI
              </h2>
              <span className="h-[1px] w-12 sm:w-28 bg-[var(--border)]" />
            </div>
          </div>

          {/* Dubai Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DUBAI_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => {
                  const idx = ALL_PROJECTS.findIndex((p) => p.id === project.id);
                  setActiveProjectIndex(idx >= 0 ? idx : 0);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Partners Section (Smooth Marquee) */}
      <PartnerShowcase />

      {/* 5. Project Photos Section */}
      <FieldPhotosSection onPhotoClick={(idx) => setActiveFieldPhotoIndex(idx)} />

      {/* Full-Screen Project Photo Lightbox */}
      <ProjectPhotoLightbox
        projects={ALL_PROJECTS}
        currentIndex={activeProjectIndex}
        onClose={() => setActiveProjectIndex(null)}
        onSelectIndex={(idx) => setActiveProjectIndex(idx)}
      />

      {/* Full-Screen Field Photo Lightbox */}
      <FieldPhotoLightbox
        photos={FIELD_PHOTOS}
        currentIndex={activeFieldPhotoIndex}
        onClose={() => setActiveFieldPhotoIndex(null)}
        onSelectIndex={(idx) => setActiveFieldPhotoIndex(idx)}
      />
    </div>
  );
};
