'use client';

import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/sonicData';

export const ProjectShowcase: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'All') return true;
    if (filter === 'Abu Dhabi' || filter === 'Dubai') return proj.city === filter;
    return proj.category === filter;
  });

  return (
    <section id="deployments" className="py-24 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 text-xs font-mono font-medium tracking-wider mb-3">
              <span>REAL-WORLD VERIFIED DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              UAE Landmark Projects
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-base">
              From super-luxury resorts to national commercial hubs, Sonic Technologies provides the life-safety defense layer behind the UAE&apos;s most demanding landmarks.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Abu Dhabi', 'Dubai', 'Hospitality', 'Commercial'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  filter === category
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30 border border-red-500'
                    : 'bg-[#0f1422] text-zinc-400 border border-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d111a] via-transparent to-transparent" />
                
                {/* City Tag */}
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/70 text-zinc-200 border border-white/20 backdrop-blur-sm">
                  {project.city}
                </span>

                <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-950/80 text-red-300 border border-red-800">
                  {project.sensorsCount} Sensors
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold font-mono text-white group-hover:text-red-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                    {project.scope}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">{project.category}</span>
                  <span className="text-red-400 font-semibold group-hover:translate-x-1 transition-transform">
                    View Specs →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/60 border border-white/10 cursor-pointer"
                aria-label="Close project modal"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-red-950 text-red-300 border border-red-800">
                  {selectedProject.city}
                </span>
                <span className="text-xs font-mono text-zinc-400">{selectedProject.category} Sector</span>
              </div>

              <h3 className="text-2xl font-bold font-mono text-white mt-2">
                {selectedProject.name}
              </h3>

              <p className="text-sm font-mono text-red-400 mt-1">
                {selectedProject.highlight}
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold mb-1">Scope of Engineering:</h4>
                  <p className="text-sm text-zinc-300 bg-[#07090e] p-3 rounded-lg border border-white/5">
                    {selectedProject.scope}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold mb-2">Systems Deployed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.systems.map((sys, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-md text-xs font-mono bg-[#0f1422] text-zinc-200 border border-white/10">
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-900/40 text-xs font-mono text-emerald-300 flex items-center justify-between">
                  <span>Supervised Field Endpoints:</span>
                  <span className="font-bold text-sm">{selectedProject.sensorsCount} Connected Sensors</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-red-600 text-white hover:bg-red-500 cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
