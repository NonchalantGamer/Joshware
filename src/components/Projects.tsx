import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, ArrowUpRight, Sparkles, Eye, Code, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { Cosmo3DCanvas } from './Cosmo3DCanvas';
import { ScrollReveal } from './ui/ScrollReveal';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'E-Commerce', 'Spatial & 3D', 'Interactive Experience'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#ffffff] text-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Header & Filter Controls with Scroll Reveal */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-200 bg-slate-50 text-amber-800 text-xs font-mono mb-3 font-semibold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Selected Works</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950">
                Production Products & <br className="hidden sm:inline" />
                Interactive Systems.
              </h2>
            </div>

            {/* Category Filter Chips with Morphic Pills & Mobile Horizontal Scroll */}
            <div className="w-full sm:w-auto overflow-x-auto no-scrollbar py-1">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`min-h-[38px] px-4 py-1.5 rounded-full text-xs font-mono transition-all border flex items-center justify-center touch-manipulation cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow-md shadow-amber-400/30'
                        : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl hover:border-slate-300"
              >
                {/* Visual Preview Banner */}
                <div className="relative w-full aspect-video overflow-hidden border-b border-slate-100 bg-slate-900">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />

                  {/* Badge Overlay */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold border bg-neutral-950/85 border-neutral-700 text-amber-400 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono border bg-neutral-950/85 border-neutral-700 text-neutral-200 backdrop-blur-md">
                        {project.screenshots.length} Screenshots
                      </span>
                    </div>
                  )}

                  {project.liveUrl && (
                    <div className="absolute top-3 right-3 z-10">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Open ${project.title} live website`}
                        className="p-1.5 rounded-md border bg-neutral-950/85 border-neutral-700 text-neutral-200 hover:text-amber-400 hover:border-amber-400/50 backdrop-blur-md transition-colors flex items-center justify-center cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-bold">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-slate-950 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs leading-relaxed line-clamp-3 text-slate-600">
                      {project.description}
                    </p>

                    {/* Highlight bullets */}
                    <ul className="space-y-1.5 pt-1">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="text-amber-500 font-bold">•</span>
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack & Actions */}
                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded border border-slate-200 bg-slate-100 text-slate-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <motion.button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-950 transition-colors flex items-center justify-center gap-1.5 touch-manipulation cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-600" />
                        <span>Case Study</span>
                      </motion.button>

                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="min-h-[44px] py-2.5 px-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase border border-amber-400 bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 touch-manipulation shadow-xs cursor-pointer"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
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
