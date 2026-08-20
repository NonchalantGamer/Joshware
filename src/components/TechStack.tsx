import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Database, Sparkles, Layers, Terminal, CheckCircle2, Cpu, Wrench } from 'lucide-react';
import { technologies, skillCategories } from '../data/technologies';
import { TechItem } from '../types';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';

interface TechStackProps {
  isDark: boolean;
}

export const TechStack: React.FC<TechStackProps> = ({ isDark }) => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(technologies[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const marqueeItems = [
    'React', 'Next.js', 'TypeScript', 'Firebase', 'Supabase', 'MongoDB',
    'JavaScript', 'Node.js', 'Tailwind CSS', 'WebGL', 'Three.js', 'HTML5 & CSS3',
    'Express', 'Figma UI/UX', 'REST APIs', 'Cloud Firestore'
  ];

  const categories = ['All', 'Frontend', 'Backend & Database', '3D & Spatial', 'Tools & Design'];

  const filteredTech =
    activeCategory === 'All'
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section
      id="skills"
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-100' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono mb-3 ${
                  isDark
                    ? 'bg-neutral-900/60 border-neutral-800 text-amber-400'
                    : 'bg-amber-100/80 border-amber-300/80 text-amber-900 font-semibold'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Technical Competencies</span>
              </div>
              <h2
                className={`text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}
              >
                Production Stack & <br className="hidden sm:inline" />
                Core Technologies.
              </h2>
            </div>

            <p
              className={`text-sm sm:text-base max-w-lg leading-relaxed ${
                isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}
            >
              A battle-tested ecosystem of modern frameworks, scalable database solutions, and creative 3D web graphics.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Infinite Marquee Ribbon */}
        <div
          className={`relative w-full overflow-hidden py-3 border-y ${
            isDark
              ? 'border-neutral-800/60 bg-neutral-900/20'
              : 'border-neutral-200 bg-neutral-100/80'
          }`}
        >
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span
                  className={`text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-colors ${
                    isDark
                      ? 'text-neutral-300 hover:text-amber-400'
                      : 'text-neutral-800 hover:text-amber-600'
                  }`}
                >
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skills Architecture with Stagger Reveal */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <StaggerItem key={cat.category} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 sm:p-7 rounded-2xl border space-y-5 transition-all h-full ${
                  isDark ? 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700' : 'bg-white border-neutral-300 hover:border-neutral-400'
                }`}
              >
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-500 uppercase">
                    DOMAIN 0{i + 1}
                  </span>
                  <h3
                    className={`text-lg font-display font-bold ${
                      isDark ? 'text-neutral-100' : 'text-neutral-950'
                    }`}
                  >
                    {cat.category}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {cat.description}
                  </p>
                </div>

                <div className={`space-y-2 pt-2 border-t ${isDark ? 'border-neutral-800/80' : 'border-neutral-200'}`}>
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs ${
                        isDark
                          ? 'bg-neutral-950/40 border-neutral-800/80'
                          : 'bg-neutral-50 border-neutral-200'
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          isDark ? 'text-neutral-200' : 'text-neutral-900'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`font-mono text-[11px] px-2 py-0.5 rounded border ${
                          isDark
                            ? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
                            : 'text-amber-800 bg-amber-100/80 border-amber-300 font-semibold'
                        }`}
                      >
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
        <ScrollReveal direction="up" className="space-y-6 pt-4">
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${isDark ? 'border-neutral-800/80' : 'border-neutral-300'}`}>
            <div>
              <h3
                className={`text-lg font-display font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}
              >
                Inspect How Joshua Deploys Each Tool
              </h3>
              <p
                className={`text-xs ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                Click any card to inspect implementation details.
              </p>
            </div>

            {/* Filter Pills with Horizontal Scroll on Mobile */}
            <div className="w-full sm:w-auto overflow-x-auto no-scrollbar py-1">
              <div className="flex items-center gap-1.5 min-w-max">
                {categories.map((c) => (
                  <motion.button
                    key={c}
                    type="button"
                    onClick={() => setActiveCategory(c)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`min-h-[38px] px-3.5 py-1.5 text-xs font-mono rounded-lg border transition-colors flex items-center justify-center touch-manipulation ${
                      activeCategory === c
                        ? isDark
                          ? 'bg-amber-400 text-neutral-950 border-amber-300 font-bold shadow-md shadow-amber-400/20'
                          : 'bg-neutral-950 text-white border-neutral-900 font-bold shadow-md'
                        : isDark
                          ? 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                          : 'bg-white border-neutral-200 text-neutral-700 hover:text-neutral-950'
                    }`}
                  >
                    {c}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTech.map((tech) => {
              const isSelected = selectedTech?.name === tech.name;
              return (
                <motion.div
                  key={tech.name}
                  onClick={() => setSelectedTech(tech)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 touch-manipulation ${
                    isSelected
                      ? isDark
                        ? 'bg-neutral-900 border-amber-400 text-neutral-100 shadow-md shadow-amber-400/5 ring-1 ring-amber-400/40'
                        : 'bg-white border-neutral-950 text-neutral-950 shadow-md ring-1 ring-neutral-950'
                      : isDark
                        ? 'bg-neutral-900/30 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/60'
                        : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-500 font-semibold">
                        {tech.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    </div>
                    <h4
                      className={`font-display font-bold text-base ${
                        isDark ? 'text-white' : 'text-neutral-950'
                      }`}
                    >
                      {tech.name}
                    </h4>
                    <p
                      className={`text-xs mt-0.5 line-clamp-1 ${
                        isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'
                      }`}
                    >
                      {tech.role}
                    </p>
                  </div>

                  <p
                    className={`text-xs leading-relaxed border-t pt-2 line-clamp-3 ${
                      isDark
                        ? 'text-neutral-400 border-neutral-800/60'
                        : 'text-neutral-700 border-neutral-200'
                    }`}
                  >
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
