import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { experiences } from '../data/experience';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { MorphicIcon } from './ui/MorphicIcon';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <section
      id="experience"
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-100' : 'bg-neutral-100/30 border-neutral-200 text-neutral-900'
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
                <span>Career History</span>
              </div>
              <h2
                className={`text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}
              >
                Professional Experience & <br className="hidden sm:inline" />
                Engineering Roles.
              </h2>
            </div>

            <p
              className={`text-sm sm:text-base max-w-lg leading-relaxed ${
                isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}
            >
              Real-world systems delivery across enterprise e-commerce platforms and cloud infrastructure environments.
            </p>
          </div>
        </ScrollReveal>

        {/* Experience Timeline Grid with Stagger */}
        <StaggerContainer staggerDelay={0.15} className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <StaggerItem key={exp.id} direction="up">
              <motion.div
                id={`experience-item-${exp.id}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`p-5 sm:p-10 rounded-2xl border transition-all duration-300 space-y-5 sm:space-y-6 shadow-sm hover:shadow-lg ${
                  isDark
                    ? 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50'
                    : 'bg-white border-neutral-300 hover:border-neutral-400'
                }`}
              >
                {/* Header Info */}
                <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 sm:pb-6 border-b ${isDark ? 'border-neutral-800/80' : 'border-neutral-200'}`}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MorphicIcon
                      icon={<Building2 className="w-5 h-5" />}
                      color={idx === 0 ? 'amber' : 'purple'}
                      size="md"
                      isDark={isDark}
                      title={exp.company}
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-amber-400/10 text-amber-600 dark:text-amber-500 border border-amber-400/20 font-semibold">
                          {exp.type}
                        </span>
                        <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500 font-semibold'}`}>
                          0{idx + 1}
                        </span>
                      </div>
                      <h3
                        className={`text-xl sm:text-3xl font-display font-bold ${
                          isDark ? 'text-white' : 'text-neutral-950'
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <div className={`flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono pt-0.5 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        <span className="flex items-center gap-1 text-amber-600 dark:text-amber-500 font-semibold">
                          <span>{exp.company}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed max-w-4xl ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  {exp.overview}
                </p>

                {/* Verified Key Responsibilities & Achievements */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-600 dark:text-amber-500">
                    Key Responsibilities & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((item, i) => (
                      <div
                        key={i}
                        className={`p-3.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                          isDark
                            ? 'bg-neutral-950/40 border-neutral-800 text-neutral-300'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-800'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Applied */}
                <div className={`flex flex-wrap gap-2 pt-2 border-t ${isDark ? 'border-neutral-800/80' : 'border-neutral-200'}`}>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-xs font-mono rounded-lg border ${
                        isDark
                          ? 'border-neutral-800 bg-neutral-950/70 text-neutral-300'
                          : 'border-neutral-200 bg-neutral-100 text-neutral-800 font-medium'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
