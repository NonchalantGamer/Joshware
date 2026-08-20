import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { experiences } from '../data/experience';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <section
      id="experience"
      className={`py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-100' : 'bg-neutral-100/30 border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono mb-3 bg-neutral-900/60 border-neutral-800 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Career History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Professional Experience & <br className="hidden sm:inline" />
              Engineering Roles.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
            Real-world systems delivery across enterprise e-commerce platforms and cloud infrastructure environments.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className={`p-6 sm:p-10 rounded-2xl border transition-all duration-300 space-y-6 ${
                isDark
                  ? 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700'
                  : 'bg-white border-neutral-300 hover:border-neutral-400'
              }`}
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-amber-400/10 text-amber-500 border border-amber-400/20 font-semibold">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-100 dark:text-neutral-100">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-neutral-400 pt-0.5">
                    <span className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <p className="text-xs sm:text-sm text-neutral-300 dark:text-neutral-300 leading-relaxed max-w-4xl">
                {exp.overview}
              </p>

              {/* Verified Key Responsibilities & Achievements */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-500">
                  Key Responsibilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((item, i) => (
                    <div
                      key={i}
                      className={`p-3.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                        isDark ? 'bg-neutral-950/40 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-800/80">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-lg border border-neutral-800 bg-neutral-950/70 text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
