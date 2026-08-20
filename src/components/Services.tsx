import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Layout, Smartphone, Palette, Database, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, Check } from 'lucide-react';
import { services } from '../data/services';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { MorphicIcon, MorphicColor } from './ui/MorphicIcon';
import { IconMorpher } from './IconMorpher';

interface ServicesProps {
  isDark: boolean;
}

export const Services: React.FC<ServicesProps> = ({ isDark }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);

  const getServiceIconData = (iconName: string): { icon: React.ReactNode; color: MorphicColor } => {
    switch (iconName) {
      case 'Globe':
        return { icon: <Globe className="w-5 h-5" />, color: 'amber' };
      case 'Layout':
        return { icon: <Layout className="w-5 h-5" />, color: 'purple' };
      case 'Smartphone':
        return { icon: <Smartphone className="w-5 h-5" />, color: 'emerald' };
      case 'Palette':
        return { icon: <Palette className="w-5 h-5" />, color: 'blue' };
      case 'Database':
        return { icon: <Database className="w-5 h-5" />, color: 'amber' };
      default:
        return { icon: <Sparkles className="w-5 h-5" />, color: 'amber' };
    }
  };

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];
  const activeIconInfo = getServiceIconData(activeService.iconName);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
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
                <span>Services & Capabilities</span>
              </div>
              <h2
                className={`text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}
              >
                End-to-End Digital <br className="hidden sm:inline" />
                Product Development.
              </h2>
            </div>

            <p
              className={`text-sm sm:text-base max-w-lg leading-relaxed ${
                isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}
            >
              From single-page websites to full-stack cloud enterprise applications, I engineer robust systems tailored to tangible business requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Master-Detail Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Services Selector List (Left Column) with Stagger */}
          <div className="lg:col-span-6">
            <StaggerContainer staggerDelay={0.08} className="space-y-2.5 sm:space-y-3">
              {services.map((service) => {
                const isSelected = activeServiceId === service.id;
                const iconData = getServiceIconData(service.iconName);
                return (
                  <StaggerItem key={service.id} direction="up">
                    <motion.div
                      id={`service-item-${service.id}`}
                      onClick={() => setActiveServiceId(service.id)}
                      onMouseEnter={() => setActiveServiceId(service.id)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between touch-manipulation ${
                        isSelected
                          ? isDark
                            ? 'bg-neutral-900 border-amber-400/50 text-neutral-100 shadow-lg shadow-amber-500/5'
                            : 'bg-white border-neutral-900 text-neutral-950 shadow-md'
                          : isDark
                            ? 'bg-neutral-900/30 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:bg-neutral-900/60'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50/80'
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-500">
                          {service.number}
                        </span>
                        
                        {/* Morphic Icon on Service Row */}
                        <MorphicIcon
                          icon={iconData.icon}
                          color={iconData.color}
                          size="md"
                          isActive={isSelected}
                          isDark={isDark}
                          title={service.title}
                        />

                        <div>
                          <h3
                            className={`text-sm sm:text-base font-display font-bold transition-colors ${
                              isSelected
                                ? isDark
                                  ? 'text-neutral-100'
                                  : 'text-neutral-950'
                                : isDark
                                  ? 'text-neutral-300'
                                  : 'text-neutral-800'
                            }`}
                          >
                            {service.title}
                          </h3>
                          <p
                            className={`text-xs line-clamp-1 mt-0.5 ${
                              isDark ? 'text-neutral-400' : 'text-neutral-600'
                            }`}
                          >
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center flex-shrink-0 ml-2">
                        <IconMorpher
                          isToggled={isSelected}
                          primaryIcon={<ChevronRight className={`w-4 h-4 ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`} />}
                          secondaryIcon={<Sparkles className="w-4 h-4 text-amber-500" />}
                          animation="pop-rotate"
                          size="sm"
                          isDark={isDark}
                        />
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Active Service Detailed View (Right Column) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={`p-7 sm:p-8 rounded-2xl border space-y-6 shadow-xl ${
                  isDark
                    ? 'bg-neutral-900/70 border-neutral-800 text-neutral-100'
                    : 'bg-white border-neutral-300 text-neutral-900'
                }`}
              >
                {/* Header with Morphic Active Icon */}
                <div className={`flex items-center justify-between pb-4 border-b ${isDark ? 'border-neutral-800/80' : 'border-neutral-200'}`}>
                  <div className="flex items-center gap-3.5">
                    <MorphicIcon
                      icon={activeIconInfo.icon}
                      color={activeIconInfo.color}
                      size="lg"
                      isActive={true}
                      isDark={isDark}
                      title={activeService.title}
                    />
                    <div>
                      <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-500 uppercase">
                        SERVICE {activeService.number}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-display font-bold ${isDark ? 'text-white' : 'text-neutral-950'}`}>
                        {activeService.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {activeService.fullDescription}
                </p>

                {/* Deliverables Checklist with Stagger Motion */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                    Typical Deliverables & Scope
                  </h4>
                  <div className="space-y-2">
                    {activeService.deliverables.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.05 }}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs leading-relaxed ${
                          isDark
                            ? 'bg-neutral-950/40 border-neutral-800 text-neutral-300'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-800'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies Deployed */}
                <div className="space-y-2 pt-2">
                  <h4 className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-600 font-semibold'}`}>
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-xs font-mono rounded-lg border ${
                          isDark
                            ? 'border-neutral-800 bg-neutral-950 text-amber-400'
                            : 'border-neutral-200 bg-neutral-100 text-neutral-800 font-medium'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className={`pt-4 border-t flex items-center justify-between ${isDark ? 'border-neutral-800/80' : 'border-neutral-200'}`}>
                  <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'}`}>
                    Need this service?
                  </span>
                  <motion.button
                    type="button"
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold font-mono tracking-wider uppercase rounded-xl border border-amber-300 bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
