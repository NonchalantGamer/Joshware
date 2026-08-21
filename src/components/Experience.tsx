import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { experiences } from '../data/experience';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { MorphicIcon } from './ui/MorphicIcon';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-200 bg-white text-amber-800 text-xs font-mono mb-3 font-semibold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Career History</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950">
                Professional Experience & <br className="hidden sm:inline" />
                Engineering Roles.
              </h2>
            </div>

            <p className="text-sm sm:text-base max-w-lg leading-relaxed text-slate-600">
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
                className="p-5 sm:p-10 rounded-2xl border border-slate-200/90 bg-white hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 space-y-5 sm:space-y-6 shadow-md"
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MorphicIcon
                      icon={<Building2 className="w-5 h-5" />}
                      color={idx === 0 ? 'amber' : 'purple'}
                      size="md"
                      isDark={false}
                      title={exp.company}
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-amber-500/10 text-amber-800 border border-amber-500/30 font-bold">
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-slate-400 font-bold">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-3xl font-display font-bold text-slate-950">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono pt-0.5 text-slate-600">
                        <span className="flex items-center gap-1 text-amber-700 font-bold">
                          <span>{exp.company}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm leading-relaxed max-w-4xl text-slate-600">
                  {exp.overview}
                </p>

                {/* Verified Key Responsibilities & Achievements */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-700">
                    Key Responsibilities & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((item, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs leading-relaxed flex items-start gap-2.5 text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Applied */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono rounded-lg border border-slate-200 bg-slate-100 text-slate-700 font-medium"
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
