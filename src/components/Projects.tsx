import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, ArrowUpRight, Sparkles, Eye, Code, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { Cosmo3DCanvas } from './Cosmo3DCanvas';

interface ProjectsProps {
  isDark: boolean;
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'E-Commerce', 'Spatial & 3D', 'Interactive Experience'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className={`py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-100' : 'bg-neutral-100/40 border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono mb-3 bg-neutral-900/60 border-neutral-800 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Production Products & <br className="hidden sm:inline" />
              Interactive Systems.
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
                  selectedCategory === cat
                    ? isDark
                      ? 'bg-amber-400 text-neutral-950 border-amber-300 font-bold'
                      : 'bg-neutral-950 text-white border-neutral-900 font-bold'
                    : isDark
                      ? 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={`group flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/70'
                    : 'bg-white border-neutral-300 hover:border-neutral-400'
                }`}
              >
                {/* Visual Preview Banner */}
                <div className="relative w-full aspect-video overflow-hidden border-b border-neutral-800/80 bg-neutral-950">
                  {project.id === 'cosmo3d' ? (
                    <div className="w-full h-full p-2">
                      <Cosmo3DCanvas isDark={isDark} interactive={false} />
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors" />
                    </>
                  )}

                  {/* Badge Overlay */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium border bg-neutral-950/80 border-neutral-700 text-amber-400 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {project.liveUrl && (
                    <div className="absolute top-3 right-3 z-10">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live website`}
                        className="p-1.5 rounded-md border bg-neutral-950/80 border-neutral-700 text-neutral-300 hover:text-amber-400 hover:border-amber-400/50 backdrop-blur-md transition-colors flex items-center justify-center"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-neutral-100 dark:text-neutral-100 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlight bullets */}
                    <ul className="space-y-1.5 pt-1">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <span className="text-amber-500 font-bold">•</span>
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack & Actions */}
                  <div className="space-y-4 pt-3 border-t border-neutral-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded border border-neutral-800 bg-neutral-950/60 text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase border transition-colors flex items-center justify-center gap-1.5 ${
                          isDark
                            ? 'bg-neutral-800/90 border-neutral-700 text-neutral-200 hover:bg-neutral-800 hover:text-white'
                            : 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200'
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="py-2.5 px-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase border border-amber-300/80 bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
