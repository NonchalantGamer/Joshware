import React from 'react';
import { motion } from 'motion/react';
import { Layers, Terminal, Sparkles, Database, ArrowUpRight, Cpu, Compass, CheckCircle2, Code2, Palette, Cloud, Box } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { MorphicIcon, MorphicColor } from './ui/MorphicIcon';

import fullstackImg from '../assets/images/bento_fullstack_dev_1787331438551.jpg';
import uiuxImg from '../assets/images/bento_uiux_design_1787331454171.jpg';
import databaseImg from '../assets/images/bento_database_cloud_1787331470774.jpg';
import spatialImg from '../assets/images/bento_spatial_3d_1787331484489.jpg';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const bentoItems: {
    id: string;
    image: string;
    badge: string;
    badgeColor: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    highlight: string;
    colSpan: string;
    morphicColor: MorphicColor;
  }[] = [
    {
      id: 'fullstack',
      image: fullstackImg,
      badge: 'Engineering Core',
      badgeColor: 'amber',
      icon: <Terminal className="w-5 h-5" />,
      title: 'Full-Stack Architecture & Systems',
      subtitle: 'Type-Safe Web Applications & Microservices',
      description:
        'Architecting resilient, production-ready frontend web platforms and scalable backend microservices with React 19, Next.js, Node.js, and TypeScript with zero tech debt.',
      tags: ['React 19', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST & GraphQL'],
      highlight: 'Sub-second TTI & Type-Safe Core',
      colSpan: 'col-span-12 lg:col-span-7',
      morphicColor: 'amber'
    },
    {
      id: 'uiux',
      image: uiuxImg,
      badge: 'Product Design',
      badgeColor: 'purple',
      icon: <Palette className="w-5 h-5" />,
      title: 'UI/UX & Design Systems',
      subtitle: 'Ergonomic Workflows & Visual Tokens',
      description:
        'Translating complex business workflows into intuitive user journeys, interactive wireframes, and design token libraries that convert and delight.',
      tags: ['Figma Prototyping', 'Design Tokens', 'Design Systems', 'Micro-Interactions', 'WCAG AA'],
      highlight: 'Pixel-Perfect Fidelity',
      colSpan: 'col-span-12 lg:col-span-5',
      morphicColor: 'purple'
    },
    {
      id: 'database',
      image: databaseImg,
      badge: 'Cloud & Data',
      badgeColor: 'blue',
      icon: <Database className="w-5 h-5" />,
      title: 'Database & Cloud Architecture',
      subtitle: 'Secure Data Pipelines & Real-Time Sync',
      description:
        'Designing secure relational (PostgreSQL, Supabase) and NoSQL (Firebase, MongoDB) document schemas with real-time sync, indexing, and row-level access control.',
      tags: ['PostgreSQL', 'Supabase', 'Firebase / Firestore', 'Prisma / Drizzle', 'Row-Level Security'],
      highlight: 'Real-Time Sync & Granular RBAC',
      colSpan: 'col-span-12 lg:col-span-5',
      morphicColor: 'blue'
    },
    {
      id: 'spatial',
      image: spatialImg,
      badge: '3D & Spatial Web',
      badgeColor: 'emerald',
      icon: <Box className="w-5 h-5" />,
      title: 'Spatial Commerce & 3D WebGL',
      subtitle: 'Hardware-Accelerated Web Experiences',
      description:
        'Engineering interactive 3D spatial web canvases and interactive product viewers using Three.js and custom GLSL shaders running at 60 FPS.',
      tags: ['Three.js', 'WebGL Shaders', '3D Scene Graphs', 'GLSL Canvas', 'Spatial UX'],
      highlight: '60 FPS Hardware-Accelerated',
      colSpan: 'col-span-12 lg:col-span-7',
      morphicColor: 'emerald'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Problem Framing & Discovery',
      detail: 'Analyzing business objectives, operational bottlenecks, and target user journeys before writing a single line of code.'
    },
    {
      step: '02',
      title: 'UI/UX Architecture & Prototyping',
      detail: 'Developing high-fidelity interactive wireframes, design systems, and ergonomic responsive layouts.'
    },
    {
      step: '03',
      title: 'Full-Stack Implementation',
      detail: 'Writing modular, strictly typed, and performant code paired with cloud database synchronization and secure APIs.'
    },
    {
      step: '04',
      title: 'Optimization & Production Launch',
      detail: 'Executing automated testing, lighthouse speed optimization, Core Web Vitals tuning, and zero-downtime deployment.'
    }
  ];

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-100' : 'bg-neutral-100/60 border-neutral-200 text-neutral-900'
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
                <span>About Joshua</span>
              </div>
              <h2
                className={`text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}
              >
                Design Precision + <br className="hidden sm:inline" />
                Full-Stack Engineering.
              </h2>
            </div>

            <p
              className={`text-sm sm:text-base max-w-lg leading-relaxed ${
                isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}
            >
              I operate at the intersection of aesthetic design, robust software engineering, and business pragmatism to build digital products that perform flawlessly.
            </p>
          </div>
        </ScrollReveal>

        {/* Narrative Banner & Professional Ethos */}
        <ScrollReveal direction="up">
          <div
            className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              isDark
                ? 'bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-neutral-950/80 border-neutral-800 backdrop-blur-md'
                : 'bg-gradient-to-r from-white via-amber-50/20 to-white border-neutral-300 shadow-sm'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
                    Professional Ethos
                  </span>
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Craft & Technical Discipline
                  </span>
                </div>
                <h3
                  className={`text-lg sm:text-2xl font-display font-bold leading-snug ${
                    isDark ? 'text-white' : 'text-neutral-950'
                  }`}
                >
                  Turning ambitious concepts into scalable, intuitive digital realities.
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-neutral-400' : 'text-neutral-700'
                  }`}
                >
                  As a Full-Stack Developer and UI/UX Designer, I don’t just implement pre-fabricated templates. I conceptualize digital systems from the ground up: establishing clear user flows, designing bespoke responsive interfaces, modeling database schemas, and writing type-safe code that scales with business growth.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-6 border-neutral-800/60 dark:border-neutral-800">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-500">100%</div>
                  <div className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Type-Safe & Performance-Focused
                  </div>
                </div>
                <motion.button
                  type="button"
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                    isDark
                      ? 'border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20'
                      : 'border-neutral-900 bg-neutral-950 text-white hover:bg-neutral-800'
                  }`}
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Modern Bento Grid Layout */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3
              className={`text-lg sm:text-xl font-display font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Core Architecture & Pillars
            </h3>
            <span
              className={`text-xs font-mono ${
                isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'
              }`}
            >
              Integrated Capabilities
            </span>
          </div>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-12 gap-5 sm:gap-6">
            {bentoItems.map((item) => (
              <StaggerItem key={item.id} direction="up" className={item.colSpan}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`group h-full rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                    isDark
                      ? 'bg-neutral-900/40 border-neutral-800 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5'
                      : 'bg-white border-neutral-200/90 hover:border-amber-500/40 hover:shadow-xl hover:shadow-neutral-900/5'
                  }`}
                >
                  {/* Framed Inset Preview Canvas */}
                  <div className="p-3 pb-0">
                    <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 shadow-inner group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-colors">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-95"
                        referrerPolicy="no-referrer"
                      />

                      {/* Cinematic Ambient Dark Vignette - preserves deep contrast & luminous glow in both light/dark */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/25 to-neutral-950/40 pointer-events-none" />

                      {/* Floating Glass Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium backdrop-blur-md border bg-neutral-950/75 border-neutral-700/60 text-amber-400 shadow-xs">
                          {item.badge}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono backdrop-blur-md border bg-neutral-950/75 border-neutral-700/60 text-neutral-300">
                          {item.highlight}
                        </span>
                      </div>

                      {/* Bottom mini status indicator inside canvas */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-neutral-400 pointer-events-none">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-neutral-300 text-[10px]">Active Module</span>
                        </div>
                        <span className="text-neutral-400 text-[10px]">60 FPS</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <MorphicIcon
                            icon={item.icon}
                            color={item.morphicColor}
                            size="sm"
                            isDark={isDark}
                            title={item.title}
                          />
                          <div>
                            <h4
                              className={`text-base sm:text-lg font-display font-bold leading-tight group-hover:text-amber-500 transition-colors ${
                                isDark ? 'text-neutral-100' : 'text-neutral-900'
                              }`}
                            >
                              {item.title}
                            </h4>
                            <p
                              className={`text-[11px] font-mono ${
                                isDark ? 'text-neutral-400' : 'text-neutral-500 font-medium'
                              }`}
                            >
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isDark ? 'text-neutral-400' : 'text-neutral-600'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Technology / Capability Pills */}
                    <div className={`pt-3 border-t flex flex-wrap gap-1.5 ${
                      isDark ? 'border-neutral-800/80' : 'border-neutral-200/80'
                    }`}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-[11px] font-mono border transition-colors ${
                            isDark
                              ? 'bg-neutral-950/60 border-neutral-800 text-neutral-300 group-hover:border-neutral-700'
                              : 'bg-neutral-100 border-neutral-200/90 text-neutral-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Strategic Delivery Workflow */}
        <ScrollReveal direction="up" className="space-y-6 pt-4">
          <div className={`flex items-center justify-between border-b pb-4 ${isDark ? 'border-neutral-800/80' : 'border-neutral-300'}`}>
            <h3
              className={`text-lg sm:text-xl font-display font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Structured Execution Workflow
            </h3>
            <span
              className={`text-xs font-mono ${
                isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'
              }`}
            >
              4-Phase Development Lifecycle
            </span>
          </div>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((step) => (
              <StaggerItem key={step.step} direction="up">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 h-full group ${
                    isDark ? 'bg-neutral-900/20 border-neutral-800 hover:border-amber-400/30' : 'bg-white border-neutral-300 hover:border-amber-400/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-amber-500 group-hover:scale-110 transition-transform origin-left">
                      {step.step}
                    </span>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: Number(step.step) * 0.4 }}
                      className="w-2.5 h-2.5 rounded-full bg-amber-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <h4
                      className={`font-display font-bold text-sm group-hover:text-amber-500 transition-colors ${
                        isDark ? 'text-neutral-100' : 'text-neutral-900'
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${
                        isDark ? 'text-neutral-400' : 'text-neutral-600'
                      }`}
                    >
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </section>
  );
};
