import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Database, Sparkles, Layers, Terminal, CheckCircle2, Cpu, Wrench, ChevronDown, Filter, Check } from 'lucide-react';
import { technologies, skillCategories } from '../data/technologies';
import { TechItem } from '../types';
import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';

export const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(technologies[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
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

  const marqueeItems = [
    'React', 'Next.js', 'TypeScript', 'Firebase', 'Supabase', 'MongoDB',
    'JavaScript', 'Node.js', 'Tailwind CSS', 'WebGL', 'Three.js', 'HTML5 & CSS3',
    'Express', 'Figma UI/UX', 'REST APIs', 'Cloud Firestore'
  ];

  const categories = ['All', 'Frontend', 'Backend & Database', '3D & Spatial', 'Tools & Design'];

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return technologies.length;
    return technologies.filter((t) => t.category === cat).length;
  };

  const filteredTech =
    activeCategory === 'All'
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-10 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 border-t border-[#1e222d] bg-[#0e1017] text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Section Header with Scroll Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6">
          <div>
            <TextReveal as="div" delay={0} distance={14} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-800 bg-neutral-900/80 text-amber-400 text-[11px] sm:text-xs font-mono mb-2 sm:mb-3 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Technical Competencies</span>
            </TextReveal>
            <TextReveal
              as="h2"
              delay={0.08}
              distance={18}
              className="text-xl sm:text-3xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Production Stack & <br className="hidden sm:inline" />
              Core Technologies.
            </TextReveal>
          </div>

          <TextReveal
            as="p"
            delay={0.15}
            distance={16}
            className="text-xs sm:text-base max-w-lg leading-relaxed text-neutral-400"
          >
            A battle-tested ecosystem of modern frameworks, scalable database solutions, and creative 3D web graphics.
          </TextReveal>
        </div>

        {/* Dynamic Infinite Marquee Ribbon */}
        <div className="relative w-full overflow-hidden py-2 sm:py-3 border-y border-neutral-800/60 bg-neutral-900/40">
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <span className="text-[11px] sm:text-sm font-mono font-bold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skills Architecture with Stagger Reveal */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {skillCategories.map((cat, i) => (
            <StaggerItem key={cat.category} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-7 rounded-xl sm:rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 space-y-3.5 sm:space-y-5 transition-all h-full"
              >
                <div className="space-y-1 sm:space-y-1.5">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-400 uppercase">
                    DOMAIN 0{i + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white">
                    {cat.category}
                  </h3>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-neutral-400">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-neutral-800/80">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-neutral-800/80 bg-neutral-950/60 text-xs"
                    >
                      <span className="font-medium text-[11px] sm:text-xs text-neutral-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded border text-amber-400 bg-amber-400/10 border-amber-400/20">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Interactive Deep-Dive Tech Explorer */}
        <ScrollReveal direction="up" className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-neutral-800/80 pb-3 sm:pb-4">
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold tracking-tight text-white">
                Inspect How Joshua Deploys Each Tool
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-400">
                Click any card to inspect implementation details.
              </p>
            </div>

            {/* Category Filter Dropdown across all view modes */}
            <div ref={dropdownRef} className="relative w-full sm:w-auto min-w-[200px] sm:min-w-[240px]">
              <motion.button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileTap={{ scale: 0.98 }}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                className="w-full sm:w-auto min-h-[38px] sm:min-h-[42px] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-neutral-700/80 bg-neutral-900/90 hover:bg-neutral-800/90 hover:border-neutral-600 text-white flex items-center justify-between gap-3 text-xs font-mono transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 touch-manipulation cursor-pointer group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Filter className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-neutral-400 hidden xs:inline">Filter:</span>
                  <span className="font-bold text-amber-400 truncate">{activeCategory}</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-neutral-800 text-neutral-300 border border-neutral-700 font-medium">
                    {getCategoryCount(activeCategory)}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 transition-transform duration-200 flex-shrink-0 ${
                    isDropdownOpen ? 'rotate-180 text-amber-400' : ''
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
                    className="absolute right-0 top-full mt-1.5 w-full sm:w-64 z-30 rounded-xl border border-neutral-700/90 bg-neutral-950/95 backdrop-blur-xl shadow-2xl overflow-hidden p-1.5 space-y-1"
                  >
                    {categories.map((c) => {
                      const isSelected = activeCategory === c;
                      const count = getCategoryCount(c);
                      return (
                        <button
                          key={c}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setActiveCategory(c);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors touch-manipulation cursor-pointer ${
                            isSelected
                              ? 'bg-amber-400/15 text-amber-400 font-bold border border-amber-400/30'
                              : 'text-neutral-300 hover:bg-neutral-800/80 hover:text-white border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                isSelected ? 'bg-amber-400 animate-pulse' : 'bg-neutral-600'
                              }`}
                            />
                            <span className="truncate">{c}</span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] ${
                                isSelected
                                  ? 'bg-amber-400 text-neutral-950 font-bold'
                                  : 'bg-neutral-800 text-neutral-400'
                              }`}
                            >
                              {count}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredTech.map((tech) => {
              const isSelected = selectedTech?.name === tech.name;
              return (
                <motion.div
                  key={tech.name}
                  onClick={() => setSelectedTech(tech)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2.5 sm:space-y-3 touch-manipulation ${
                    isSelected
                      ? 'bg-neutral-900 border-amber-400 text-neutral-100 shadow-md shadow-amber-400/5 ring-1 ring-amber-400/40'
                      : 'bg-neutral-900/30 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase text-amber-400 font-semibold">
                        {tech.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    </div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white">
                      {tech.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs mt-0.5 line-clamp-1 text-neutral-400">
                      {tech.role}
                    </p>
                  </div>

                  <p className="text-[11px] sm:text-xs leading-relaxed border-t border-neutral-800/60 pt-2 line-clamp-3 text-neutral-400">
                    {tech.usageDescription}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
