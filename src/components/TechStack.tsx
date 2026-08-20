import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Database, Sparkles, Layers, Terminal, CheckCircle2, Cpu, Wrench } from 'lucide-react';
import { technologies, skillCategories } from '../data/technologies';
import { TechItem } from '../types';

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
      className={`py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-100' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono mb-3 bg-neutral-900/60 border-neutral-800 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Production Stack & <br className="hidden sm:inline" />
              Core Technologies.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
            A battle-tested ecosystem of modern frameworks, scalable database solutions, and creative 3D web graphics.
          </p>
        </div>

        {/* Dynamic Infinite Marquee Ribbon */}
        <div className="relative w-full overflow-hidden py-3 border-y border-neutral-800/60 bg-neutral-900/20">
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skills Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className={`p-6 sm:p-7 rounded-2xl border space-y-5 transition-all ${
                isDark ? 'bg-neutral-900/30 border-neutral-800' : 'bg-white border-neutral-300'
              }`}
            >
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-amber-500 uppercase">
                  DOMAIN 0{i + 1}
                </span>
                <h3 className="text-lg font-display font-bold text-neutral-100 dark:text-neutral-100">
                  {cat.category}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-800/80">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs ${
                      isDark ? 'bg-neutral-950/40 border-neutral-800/80' : 'bg-neutral-50 border-neutral-200'
                    }`}
                  >
                    <span className="font-medium text-neutral-200 dark:text-neutral-100">{skill.name}</span>
                    <span className="font-mono text-[11px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Deep-Dive Tech Explorer */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-neutral-800/80">
            <div>
              <h3 className="text-lg font-display font-bold tracking-tight">
                Inspect How Joshua Deploys Each Tool
              </h3>
              <p className="text-xs text-neutral-400">Click any card to inspect implementation details.</p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  className={`px-3 py-1 text-xs font-mono rounded-lg border transition-colors ${
                    activeCategory === c
                      ? isDark
                        ? 'bg-amber-400 text-neutral-950 border-amber-300 font-bold'
                        : 'bg-neutral-950 text-white border-neutral-900 font-bold'
                      : isDark
                        ? 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                        : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTech.map((tech) => {
              const isSelected = selectedTech?.name === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTech(tech)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? isDark
                        ? 'bg-neutral-900 border-amber-400 text-neutral-100'
                        : 'bg-neutral-100 border-neutral-950 text-neutral-950'
                      : isDark
                        ? 'bg-neutral-900/30 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/60'
                        : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase text-amber-500 font-semibold">
                        {tech.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </div>
                    <h4 className="font-display font-bold text-base">{tech.name}</h4>
                    <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">{tech.role}</p>
                  </div>

                  <p className="text-xs text-neutral-400 dark:text-neutral-400 leading-relaxed border-t border-neutral-800/60 pt-2 line-clamp-3">
                    {tech.usageDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
