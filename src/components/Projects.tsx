import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, ArrowUpRight, Sparkles, Eye, Code, ChevronRight, ChevronDown, Filter, Check } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { Cosmo3DCanvas } from './Cosmo3DCanvas';
import { ScrollReveal, TextReveal } from './ui/ScrollReveal';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const categories = ['All', 'E-Commerce', 'Spatial & 3D', 'Interactive Experience'];

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-10 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 bg-[#ffffff] text-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Header & Filter Controls with Scroll Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6">
          <div>
            <TextReveal as="div" delay={0} distance={14} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-amber-800 text-[11px] sm:text-xs font-mono mb-2 sm:mb-3 font-semibold shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Selected Works</span>
            </TextReveal>
            <TextReveal
              as="h2"
              delay={0.08}
              distance={18}
              className="text-xl sm:text-3xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 leading-tight"
            >
              Production Products & <br className="hidden sm:inline" />
              Interactive Systems.
            </TextReveal>
          </div>

          {/* Category Filter Dropdown across all view modes */}
          <div ref={dropdownRef} className="relative w-full sm:w-auto min-w-[200px] sm:min-w-[240px]">
              <motion.button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileTap={{ scale: 0.98 }}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                className="w-full sm:w-auto min-h-[38px] sm:min-h-[42px] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-slate-300/90 bg-white hover:bg-slate-50 hover:border-amber-400 text-slate-900 flex items-center justify-between gap-3 text-xs font-mono transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 touch-manipulation cursor-pointer group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Filter className="w-3.5 h-3.5 text-amber-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-slate-500 hidden xs:inline">Filter:</span>
                  <span className="font-bold text-slate-900 truncate">{selectedCategory}</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                    {getCategoryCount(selectedCategory)}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                    isDropdownOpen ? 'rotate-180 text-amber-600' : ''
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    role="listbox"
                    className="absolute right-0 top-full mt-1.5 w-full sm:w-64 z-30 rounded-xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden p-1.5 space-y-1"
                  >
                    {categories.map((cat) => {
                      const isSelected = selectedCategory === cat;
                      const count = getCategoryCount(cat);
                      return (
                        <button
                          key={cat}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors touch-manipulation cursor-pointer ${
                            isSelected
                              ? 'bg-amber-400/20 text-amber-950 font-bold border border-amber-400/40'
                              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                isSelected ? 'bg-amber-500 animate-pulse' : 'bg-slate-300'
                              }`}
                            />
                            <span className="truncate">{cat}</span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] ${
                                isSelected
                                  ? 'bg-amber-400 text-neutral-950 font-bold'
                                  : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {count}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-amber-600" />}
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 items-stretch">
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
                className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-300 shadow-sm sm:shadow-md hover:shadow-xl hover:border-slate-300"
              >
                {/* Visual Preview Banner */}
                <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-slate-100 bg-slate-900">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />

                  {/* Badge Overlay */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-bold border bg-neutral-950/85 border-neutral-700 text-amber-400 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10">
                      <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono border bg-neutral-950/85 border-neutral-700 text-neutral-200 backdrop-blur-md">
                        {project.screenshots.length} Screenshots
                      </span>
                    </div>
                  )}

                  {project.liveUrl && (
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Open ${project.title} live website`}
                        className="p-1 sm:p-1.5 rounded-md border bg-neutral-950/85 border-neutral-700 text-neutral-200 hover:text-amber-400 hover:border-amber-400/50 backdrop-blur-md transition-colors flex items-center justify-center cursor-pointer touch-manipulation"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-5">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-amber-600 font-bold">
                        {project.category}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-slate-400 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-xl font-display font-bold text-slate-950 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-3 text-slate-600">
                      {project.description}
                    </p>

                    {/* Highlight bullets */}
                    <ul className="space-y-1 pt-0.5 sm:pt-1">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                          <span className="text-amber-500 font-bold">•</span>
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack & Actions */}
                  <div className="space-y-3 pt-2 sm:pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 text-[10px] sm:text-[11px] font-mono rounded border border-slate-200 bg-slate-100 text-slate-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-0.5 sm:pt-1">
                      <motion.button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 min-h-[38px] sm:min-h-[44px] py-2 sm:py-2.5 px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-950 transition-colors flex items-center justify-center gap-1.5 touch-manipulation cursor-pointer"
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
