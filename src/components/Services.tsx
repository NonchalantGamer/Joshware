import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Layout, Smartphone, Palette, Database, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { services } from '../data/services';

interface ServicesProps {
  isDark: boolean;
}

export const Services: React.FC<ServicesProps> = ({ isDark }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
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
              <span>Services & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              End-to-End Digital <br className="hidden sm:inline" />
              Product Development.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
            From single-page websites to full-stack cloud enterprise applications, I engineer robust systems tailored to tangible business requirements.
          </p>
        </div>

        {/* Interactive Master-Detail Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Selector List (Left Column) */}
          <div className="lg:col-span-6 space-y-3">
            {services.map((service) => {
              const isSelected = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  id={`service-item-${service.id}`}
                  onClick={() => setActiveServiceId(service.id)}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  className={`group p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? isDark
                        ? 'bg-neutral-900 border-amber-400/50 text-neutral-100'
                        : 'bg-white border-neutral-900 text-neutral-900'
                      : isDark
                        ? 'bg-neutral-900/30 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:bg-neutral-900/60'
                        : 'bg-white/60 border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-amber-500">
                      {service.number}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl border transition-colors ${
                        isSelected
                          ? 'border-amber-400/40 bg-amber-400/10 text-amber-400'
                          : 'border-neutral-800 bg-neutral-950/40 text-neutral-400'
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h3
                        className={`text-base font-display font-bold transition-colors ${
                          isSelected
                            ? isDark
                              ? 'text-neutral-100'
                              : 'text-neutral-900'
                            : 'text-neutral-300 dark:text-neutral-300'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-neutral-600'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Service Detailed View (Right Column) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className={`p-7 sm:p-8 rounded-2xl border space-y-6 ${
                  isDark ? 'bg-neutral-900/60 border-neutral-800 text-neutral-100' : 'bg-white border-neutral-300 text-neutral-900'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-amber-500 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                      SERVICE {activeService.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 dark:text-neutral-300 leading-relaxed">
                  {activeService.fullDescription}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
                    Typical Deliverables & Scope
                  </h4>
                  <div className="space-y-2">
                    {activeService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs leading-relaxed ${
                          isDark ? 'bg-neutral-950/40 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Deployed */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono text-neutral-400 uppercase">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg border border-neutral-800 bg-neutral-950 text-amber-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">Need this service?</span>
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold font-mono tracking-wider uppercase rounded-xl border border-amber-300 bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
