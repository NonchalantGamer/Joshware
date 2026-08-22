import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { experiences } from '../data/experience';
import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { MorphicIcon } from './ui/MorphicIcon';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-10 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Section Header with Scroll Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6">
          <div>
            <TextReveal as="div" delay={0} distance={14} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-200 bg-white text-amber-800 text-[11px] sm:text-xs font-mono mb-2 sm:mb-3 font-semibold shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Career History</span>
            </TextReveal>
            <TextReveal
              as="h2"
              delay={0.08}
              distance={18}
              className="text-xl sm:text-3xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 leading-tight"
            >
              Professional Experience & <br className="hidden sm:inline" />
              Engineering Roles.
            </TextReveal>
          </div>

          <TextReveal
            as="p"
            delay={0.15}
            distance={16}
            className="text-xs sm:text-base max-w-lg leading-relaxed text-slate-600"
          >
            Real-world systems delivery across enterprise e-commerce platforms and cloud infrastructure environments.
          </TextReveal>
        </div>

        {/* Experience Timeline Grid with Stagger */}
        <StaggerContainer staggerDelay={0.15} className="space-y-4 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <StaggerItem key={exp.id} direction="up">
              <motion.div
                id={`experience-item-${exp.id}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:border-amber-400/80 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 space-y-3.5 sm:space-y-6 shadow-xs sm:shadow-md"
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-3.5 sm:pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-2.5 sm:gap-4">
                    <MorphicIcon
                      icon={<Building2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                      color={idx === 0 ? 'amber' : 'purple'}
                      size="md"
                      isDark={false}
                      title={exp.company}
                    />
                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[10px] sm:text-xs font-mono rounded-md bg-amber-500/10 text-amber-800 border border-amber-500/30 font-bold">
                          {exp.type}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono text-slate-400 font-bold">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-2xl lg:text-3xl font-display font-bold text-slate-950">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-mono pt-0.5 text-slate-600">
                        <span className="flex items-center gap-1 text-amber-700 font-bold">
                          <span>{exp.company}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-[11px] sm:text-sm leading-relaxed max-w-4xl text-slate-600">
                  {exp.overview}
                </p>

                {/* Verified Key Responsibilities & Achievements */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-amber-700">
                    Key Responsibilities & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                    {exp.achievements.map((item, i) => (
                      <div
                        key={i}
                        className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50 text-[11px] sm:text-xs leading-relaxed flex items-start gap-2 text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Applied */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 border-t border-slate-100">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-mono rounded sm:rounded-lg border border-slate-200 bg-slate-100 text-slate-700 font-medium"
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
