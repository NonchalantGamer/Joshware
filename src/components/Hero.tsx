import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown, FileText, Github, Linkedin, MessageCircle, Mail, Sparkles, Terminal, Code2, Database, Layout } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onOpenCv }) => {
  const bgImage = 'https://res.cloudinary.com/doujptiz/image/upload/v1785239156/samples/cup-on-a-table.jpg';

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <Github className="w-4 h-4" />,
      id: 'hero-social-github'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Linkedin className="w-4 h-4" />,
      id: 'hero-social-linkedin'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/2348000000000?text=Hello%20Joshua,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project',
      icon: <MessageCircle className="w-4 h-4" />,
      id: 'hero-social-whatsapp'
    },
    {
      name: 'Email',
      href: 'mailto:joshuaegesienyinnaya@gmail.com?subject=Project%20Inquiry%20from%20Portfolio',
      icon: <Mail className="w-4 h-4" />,
      id: 'hero-social-email'
    }
  ];

  const capabilityPills = [
    { label: 'Full-Stack Web', icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: 'UI/UX Architecture', icon: <Layout className="w-3.5 h-3.5" /> },
    { label: 'Database & APIs', icon: <Database className="w-3.5 h-3.5" /> },
    { label: '3D Spatial Web', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Layered Contrast Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={bgImage}
          alt="Atmospheric studio background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Gradients & Vignettes for pristine legibility (Zero Box Shadows) */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-neutral-950/85 bg-gradient-to-b from-neutral-950/90 via-neutral-950/75 to-neutral-950'
              : 'bg-neutral-900/70 bg-gradient-to-b from-neutral-950/80 via-neutral-950/65 to-neutral-950'
          }`}
        />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          id="hero-availability-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-700/80 bg-neutral-900/80 backdrop-blur-md text-xs font-mono mb-6 text-neutral-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-medium text-emerald-400">Available for projects & roles</span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-400">Lagos, NG (Remote Worldwide)</span>
        </motion.div>

        {/* Identity & Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3 mb-6"
        >
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-400 font-semibold">
            Joshua Egesi Enyinnaya — Joshware
          </p>
          <h1
            id="hero-main-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
          >
            Full-Stack Developer <br className="hidden sm:inline" />
            <span className="text-neutral-300 font-medium">&</span> UI/UX Designer
          </h1>
        </motion.div>

        {/* Positioning Statement */}
        <motion.p
          id="hero-positioning-statement"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8 font-light"
        >
          I design and build modern digital experiences, web applications, and scalable business systems that turn ideas into functional, production-ready products.
        </motion.p>

        {/* Capability Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {capabilityPills.map((pill) => (
            <div
              key={pill.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm text-xs font-mono text-neutral-300"
            >
              <span className="text-amber-400">{pill.icon}</span>
              <span>{pill.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Primary & Secondary Call to Actions */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-12 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            id="hero-hire-me-btn"
            type="button"
            onClick={() => scrollToSection('#contact')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase border border-amber-300 bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <span>Hire Me!</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA */}
          <button
            id="hero-view-projects-btn"
            type="button"
            onClick={() => scrollToSection('#projects')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide border border-neutral-700 bg-neutral-900/80 text-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 text-neutral-400" />
          </button>

          {/* CV Action */}
          <button
            id="hero-download-cv-btn"
            type="button"
            onClick={onOpenCv}
            className="w-full sm:w-auto px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide border border-neutral-800 bg-neutral-950/60 text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Download CV</span>
          </button>
        </motion.div>

        {/* Social Links & Quick Connect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 pt-4 border-t border-neutral-800/80"
        >
          <span className="text-xs font-mono text-neutral-400 mr-1 hidden sm:inline">
            Connect:
          </span>
          {socials.map((s) => (
            <a
              key={s.name}
              id={s.id}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="p-2.5 rounded-full border border-neutral-800 bg-neutral-900/70 text-neutral-300 hover:text-amber-400 hover:border-neutral-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none opacity-60 hidden md:flex flex-col items-center gap-1">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-neutral-700 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-amber-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
