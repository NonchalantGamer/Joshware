import React from 'react';
import { motion } from 'motion/react';
import { Layers, Terminal, Sparkles, Database, ArrowUpRight, Cpu, Compass, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const pillars = [
    {
      icon: <Terminal className="w-5 h-5 text-amber-500" />,
      title: 'Full-Stack Engineering',
      description:
        'Architecting resilient, type-safe frontend web applications and backend service pipelines with React, Next.js, Node.js, and TypeScript.'
    },
    {
      icon: <Layers className="w-5 h-5 text-amber-500" />,
      title: 'UI/UX & Product Design',
      description:
        'Crafting intuitive user journeys, wireframes, and scalable design token systems that convert complex workflows into effortless interfaces.'
    },
    {
      icon: <Database className="w-5 h-5 text-amber-500" />,
      title: 'Database Architecture',
      description:
        'Designing secure relational (Supabase/Postgres) and NoSQL (Firebase/MongoDB) document structures with granular access control and rapid queries.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      title: 'Spatial Commerce & 3D Web',
      description:
        'Pioneering spatial 3D interactive web experiences using Three.js and WebGL shaders for next-generation digital retail and interactive media.'
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
      className={`py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-100' : 'bg-neutral-100/50 border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono mb-3 bg-neutral-900/60 border-neutral-800 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>About Joshua</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Design Precision + <br className="hidden sm:inline" />
              Full-Stack Engineering.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
            I operate at the intersection of aesthetic design, robust software engineering, and business pragmatism to build digital products that perform flawlessly.
          </p>
        </div>

        {/* Narrative & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Manifesto */}
          <div
            className={`lg:col-span-5 p-8 rounded-2xl border flex flex-col justify-between space-y-6 ${
              isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-300'
            }`}
          >
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">
                Professional Ethos
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-100 dark:text-neutral-100 leading-snug">
                Turning ambitious concepts into scalable, intuitive digital realities.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                As a Full-Stack Developer and UI/UX Designer, I don’t just implement pre-fabricated templates. I conceptualize digital systems from the ground up: establishing clear user flows, designing bespoke responsive interfaces, modeling database schemas, and writing type-safe code that scales with business growth.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                From high-throughput e-commerce platforms and inventory management suites to interactive 3D spatial experiences, every project is built with an obsession for performance, accessibility, and zero visual clutter.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800/80">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50'
                    : 'bg-white border-neutral-300 hover:border-neutral-400'
                }`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl border border-neutral-800 bg-neutral-950/60 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-display font-bold text-neutral-100 dark:text-neutral-100">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Delivery Workflow */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b pb-4 border-neutral-800/80">
            <h3 className="text-lg sm:text-xl font-display font-bold tracking-tight">
              Structured Execution Workflow
            </h3>
            <span className="text-xs font-mono text-neutral-400">4-Phase Development Lifecycle</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 ${
                  isDark ? 'bg-neutral-900/20 border-neutral-800' : 'bg-white border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-amber-500/80">{step.step}</span>
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-sm text-neutral-100 dark:text-neutral-100">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
