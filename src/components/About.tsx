import React from 'react';
import { motion } from 'motion/react';
import { Layers, Terminal, Sparkles, Database, ArrowUpRight, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { MorphicIcon, MorphicColor } from './ui/MorphicIcon';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const pillars: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: MorphicColor;
  }[] = [
    {
      icon: <Terminal className="w-5 h-5" />,
      title: 'Full-Stack Engineering',
      description:
        'Architecting resilient, type-safe frontend web applications and backend service pipelines with React, Next.js, Node.js, and TypeScript.',
      color: 'amber'
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'UI/UX & Product Design',
      description:
        'Crafting intuitive user journeys, wireframes, and scalable design token systems that convert complex workflows into effortless interfaces.',
      color: 'purple'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Database Architecture',
      description:
        'Designing secure relational (Supabase/Postgres) and NoSQL (Firebase/MongoDB) document structures with granular access control and rapid queries.',
      color: 'blue'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Spatial Commerce & 3D Web',
      description:
        'Pioneering spatial 3D interactive web experiences using Three.js and WebGL shaders for next-generation digital retail and interactive media.',
      color: 'emerald'
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

        {/* Narrative & Core Pillars with Scroll Reveal & Stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Main Narrative Manifesto */}
          <ScrollReveal direction="right" className="lg:col-span-5 h-full">
            <div
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between space-y-6 h-full ${
                isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-300'
              }`}
            >
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-500 font-bold">
                  Professional Ethos
                </span>
                <h3
                  className={`text-xl sm:text-2xl font-display font-bold leading-snug ${
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
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-neutral-400' : 'text-neutral-700'
                  }`}
                >
                  From high-throughput e-commerce platforms and inventory management suites to interactive 3D spatial experiences, every project is built with an obsession for performance, accessibility, and zero visual clutter.
                </p>
              </div>

              <div className={`pt-4 border-t ${isDark ? 'border-neutral-800/80' : 'border-neutral-200'}`}>
                <motion.button
                  type="button"
                  onClick={scrollToContact}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Pillars Grid with Morphic Icons & Stagger Reveal */}
          <div className="lg:col-span-7">
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <StaggerItem key={pillar.title} direction="up">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full group ${
                      isDark
                        ? 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50'
                        : 'bg-white border-neutral-300 hover:border-neutral-400'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Morphic Icon Container */}
                      <MorphicIcon
                        icon={pillar.icon}
                        color={pillar.color}
                        size="md"
                        isDark={isDark}
                        title={pillar.title}
                      />
                      <h4
                        className={`text-base font-display font-bold group-hover:text-amber-500 transition-colors ${
                          isDark ? 'text-neutral-100' : 'text-neutral-900'
                        }`}
                      >
                        {pillar.title}
                      </h4>
                      <p
                        className={`text-xs leading-relaxed ${
                          isDark ? 'text-neutral-400' : 'text-neutral-600'
                        }`}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
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
