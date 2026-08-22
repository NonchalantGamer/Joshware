import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, ArrowUpRight, Code2, Palette, Cloud, Box, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';

import fullstackImg from '../assets/images/realistic_code_ide_1787333484660.jpg';
import uiuxImg from '../assets/images/realistic_figma_desk_1787333498879.jpg';
import databaseImg from '../assets/images/realistic_server_cloud_1787333512741.jpg';
import spatialImg from '../assets/images/realistic_3d_spatial_1787333525453.jpg';

export const About: React.FC = () => {
  const bentoCards = [
    {
      id: 'fullstack',
      image: fullstackImg,
      index: '01',
      badge: 'Full-Stack Architecture',
      title: 'Full-Stack Web Systems & APIs',
      subtitle: 'Type-Safe Web Applications & High-Throughput Node Services',
      tags: ['React 19', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      highlight: 'Sub-second TTI',
      colSpan: 'col-span-12 lg:col-span-7',
      minHeight: 'min-h-[240px] xs:min-h-[280px] sm:min-h-[380px] lg:min-h-[420px]'
    },
    {
      id: 'uiux',
      image: uiuxImg,
      index: '02',
      badge: 'Product Design',
      title: 'UI/UX & Design Systems',
      subtitle: 'Ergonomic User Flows, Design Tokens & Micro-Interactions',
      tags: ['Figma Prototyping', 'Design Tokens', 'WCAG AA', 'Design Systems'],
      highlight: 'Pixel-Perfect Fidelity',
      colSpan: 'col-span-12 lg:col-span-5',
      minHeight: 'min-h-[240px] xs:min-h-[280px] sm:min-h-[380px] lg:min-h-[420px]'
    },
    {
      id: 'database',
      image: databaseImg,
      index: '03',
      badge: 'Cloud & Database',
      title: 'Database Architecture & Cloud Sync',
      subtitle: 'PostgreSQL Schemas, Supabase Real-Time & Firestore Security Rules',
      tags: ['PostgreSQL', 'Supabase', 'Firebase', 'Prisma', 'Row-Level Security'],
      highlight: 'Real-Time Sync',
      colSpan: 'col-span-12 lg:col-span-5',
      minHeight: 'min-h-[240px] xs:min-h-[280px] sm:min-h-[380px] lg:min-h-[420px]'
    },
    {
      id: 'spatial',
      image: spatialImg,
      index: '04',
      badge: 'Spatial & 3D Web',
      title: 'Spatial Canvas & Interactive 3D WebGL',
      subtitle: 'Three.js 3D Viewports, WebGL Shaders & 60 FPS Micro-Experiences',
      tags: ['Three.js', 'WebGL Shaders', '3D Scene Graphs', 'GLSL Canvas'],
      highlight: '60 FPS Canvas',
      colSpan: 'col-span-12 lg:col-span-7',
      minHeight: 'min-h-[240px] xs:min-h-[280px] sm:min-h-[380px] lg:min-h-[420px]'
    }
  ];

  const bentoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.08
      }
    }
  };

  const bentoItemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.97
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & Framing',
      detail: 'Auditing product objectives, UX friction points, and architecture constraints before coding.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      detail: 'Designing high-fidelity Figma components, design systems, and responsive interactive prototypes.'
    },
    {
      step: '03',
      title: 'Full-Stack Build',
      detail: 'Writing clean TypeScript, robust API services, and connecting secure cloud database layers.'
    },
    {
      step: '04',
      title: 'QA & Optimization',
      detail: 'Core Web Vitals tuning, automated linting/testing, and zero-downtime production deployment.'
    }
  ];

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="py-10 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6">
          <div>
            <TextReveal as="div" delay={0} distance={14} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-200 bg-white text-amber-800 text-[11px] sm:text-xs font-mono mb-2 sm:mb-3 font-semibold shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>About Joshua</span>
            </TextReveal>
            <TextReveal
              as="h2"
              delay={0.08}
              distance={18}
              className="text-xl sm:text-3xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 leading-tight"
            >
              Design Precision + <br className="hidden sm:inline" />
              Full-Stack Engineering.
            </TextReveal>
          </div>

          <TextReveal
            as="p"
            delay={0.15}
            distance={16}
            className="text-xs sm:text-base max-w-lg leading-relaxed text-slate-600"
          >
            I operate at the intersection of aesthetic design, robust software engineering, and business pragmatism to build digital products that perform flawlessly.
          </TextReveal>
        </div>

        {/* Narrative Ethos Card */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="p-4 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white shadow-lg sm:shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
              <div className="lg:col-span-8 space-y-2 sm:space-y-3">
                <TextReveal as="div" distance={12} className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
                    Professional Ethos
                  </span>
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span className="text-[10px] sm:text-xs font-mono text-slate-500">
                    Craft & Technical Discipline
                  </span>
                </TextReveal>
                <TextReveal as="h3" delay={0.06} distance={16} className="text-base sm:text-2xl font-display font-bold leading-snug text-slate-950">
                  Turning ambitious concepts into scalable, intuitive digital realities.
                </TextReveal>
                <TextReveal as="p" delay={0.12} distance={14} className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  As a Full-Stack Developer and UI/UX Designer, I don’t just implement pre-fabricated templates. I conceptualize digital systems from the ground up: establishing clear user flows, designing bespoke responsive interfaces, modeling database schemas, and writing type-safe code that scales with business growth.
                </TextReveal>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-2.5 sm:gap-3 pt-3 sm:pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-6 border-slate-200">
                <div className="space-y-0.5 sm:space-y-1">
                  <TextReveal as="div" distance={12} className="text-xl sm:text-3xl font-mono font-bold text-amber-600">100%</TextReveal>
                  <TextReveal as="div" delay={0.06} distance={10} className="text-[11px] sm:text-xs font-mono text-slate-500">
                    Type-Safe & Performance-Focused
                  </TextReveal>
                </div>
                <motion.button
                  type="button"
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-1.5 min-h-[38px] sm:min-h-[42px] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-amber-400 bg-amber-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-sm sm:shadow-md cursor-pointer touch-manipulation"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Minimalistic Bento Grid with Staggered Entrance Animation & Text Overlaid on Images */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <TextReveal as="h3" distance={14} className="text-base sm:text-xl font-display font-bold tracking-tight text-slate-950">
              Core Architecture & Pillars
            </TextReveal>
            <TextReveal as="span" delay={0.05} distance={12} className="text-[11px] sm:text-xs font-mono text-slate-500 font-semibold">
              Integrated Capabilities
            </TextReveal>
          </div>

          <motion.div
            variants={bentoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "-40px" }}
            className="grid grid-cols-12 gap-3.5 sm:gap-6"
          >
            {bentoCards.map((card) => (
              <motion.div
                key={card.id}
                variants={bentoItemVariants}
                className={card.colSpan}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative ${card.minHeight} rounded-xl sm:rounded-2xl overflow-hidden border border-slate-300/80 bg-[#0a0c10] shadow-md sm:shadow-xl flex flex-col justify-between p-4 sm:p-7 lg:p-8 cursor-default hover:border-amber-400/80 transition-all duration-300 hover:shadow-2xl`}
                >
                  {/* Full-bleed Realistic Image with High-Fidelity Atmosphere */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
                    referrerPolicy="no-referrer"
                  />

                  {/* Cinematic Deep Gradient Overlay for clean readability of text written directly on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />

                  {/* Top Header Badge & Tag Overlaid on Image */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 bg-black/60 text-amber-400 shadow-sm">
                        [{card.index}] {card.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono backdrop-blur-md border border-white/15 bg-black/50 text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{card.highlight}</span>
                    </div>
                  </div>

                  {/* Bottom Minimalistic Text Overlaid Directly on Image */}
                  <div className="relative z-10 space-y-2 sm:space-y-3 pt-6 sm:pt-12">
                    <div className="space-y-0.5 sm:space-y-1">
                      <h4 className="text-base sm:text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-[11px] sm:text-sm text-neutral-300 font-medium leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-none">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Minimalist Tech Pills Overlaid on Image */}
                    <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-1 sm:gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-md text-[10px] sm:text-xs font-mono backdrop-blur-md border border-white/15 bg-black/60 text-neutral-200 font-medium transition-colors group-hover:border-amber-400/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Strategic Delivery Workflow */}
        <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4">
            <TextReveal as="h3" distance={14} className="text-base sm:text-xl font-display font-bold tracking-tight text-slate-950">
              Structured Execution Workflow
            </TextReveal>
            <TextReveal as="span" delay={0.05} distance={12} className="text-[11px] sm:text-xs font-mono text-slate-500 font-semibold">
              4-Phase Lifecycle
            </TextReveal>
          </div>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {workflowSteps.map((step) => (
              <StaggerItem key={step.step} direction="up">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white shadow-xs sm:shadow-sm flex flex-col justify-between space-y-2.5 sm:space-y-4 h-full group hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl sm:text-2xl font-black text-amber-600 group-hover:scale-110 transition-transform origin-left">
                      {step.step}
                    </span>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: Number(step.step) * 0.4 }}
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-slate-950 group-hover:text-amber-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs leading-relaxed text-slate-600">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
