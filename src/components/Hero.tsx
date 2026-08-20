import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown, FileText, Sparkles, Terminal, Code2, Database, Layout } from 'lucide-react';
import { MorphicIcon } from './ui/MorphicIcon';
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon, GmailIcon } from './ui/BrandIcons';

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
      icon: <GithubIcon className="w-4 h-4" />,
      id: 'hero-social-github',
      color: 'neutral' as const
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <LinkedinIcon className="w-4 h-4" />,
      id: 'hero-social-linkedin',
      color: 'blue' as const
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/josh_ware25',
      icon: <XIcon className="w-3.5 h-3.5" />,
      id: 'hero-social-x',
      color: 'purple' as const
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/2347043534602?text=Hello%20Joshua,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project',
      icon: <WhatsappIcon className="w-4 h-4" />,
      id: 'hero-social-whatsapp',
      color: 'emerald' as const
    },
    {
      name: 'Gmail',
      href: 'mailto:joshuaegesienyinnaya@gmail.com?subject=Project%20Inquiry%20from%20Portfolio',
      icon: <GmailIcon className="w-4 h-4" />,
      id: 'hero-social-email',
      color: 'amber' as const
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
      {/* Background Image with 100% Opacity and Cinematic Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={bgImage}
          alt="Atmospheric studio background"
          className="w-full h-full object-cover object-center opacity-100 scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Subtle gradient vignette to preserve full image vividness while ensuring crisp text readability */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950/95'
              : 'bg-gradient-to-b from-neutral-950/65 via-neutral-950/35 to-neutral-950/90'
          }`}
        />
        <div className="absolute inset-0 bg-radial-vignette opacity-50" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          id="hero-availability-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full border border-neutral-700/80 bg-neutral-900/80 backdrop-blur-md text-[11px] sm:text-xs font-mono mb-6 text-neutral-300 max-w-full"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-medium text-emerald-400">Available for projects & roles</span>
          <span className="text-neutral-500 hidden xs:inline">|</span>
          <span className="text-neutral-400 hidden xs:inline">Lagos, NG (Remote Worldwide)</span>
        </motion.div>

        {/* Identity & Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2.5 sm:space-y-3 mb-6"
        >
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-400 font-semibold">
            Joshua Egesi Enyinnaya — Joshware
          </p>
          <h1
            id="hero-main-title"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.08] max-w-4xl px-2 sm:px-0"
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
          className="text-sm sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8 font-light px-2 sm:px-0"
        >
          I design and build modern digital experiences, web applications, and scalable business systems that turn ideas into functional, production-ready products.
        </motion.p>

        {/* Capability Chips with Morphic Hover Transitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 px-2"
        >
          {capabilityPills.map((pill) => (
            <motion.div
              key={pill.label}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-md text-[11px] sm:text-xs font-mono text-neutral-300 shadow-sm cursor-default hover:border-amber-400/40 hover:text-white transition-colors touch-manipulation"
            >
              <span className="text-amber-400 transition-transform group-hover:rotate-12">{pill.icon}</span>
              <span>{pill.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Primary & Secondary Call to Actions with Mobile Thumb Ergonomics */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-10 sm:mb-12 w-full max-w-md sm:max-w-none px-4 sm:px-0"
        >
          {/* Primary CTA */}
          <motion.button
            id="hero-hire-me-btn"
            type="button"
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase border border-amber-300 bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-lg shadow-amber-400/20 touch-manipulation"
          >
            <span>Hire Me!</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            id="hero-view-projects-btn"
            type="button"
            onClick={() => scrollToSection('#projects')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide border border-neutral-700 bg-neutral-900/80 text-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 touch-manipulation"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 text-neutral-400" />
          </motion.button>

          {/* CV Action */}
          <motion.button
            id="hero-download-cv-btn"
            type="button"
            onClick={onOpenCv}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto min-h-[48px] px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide border border-neutral-800 bg-neutral-950/60 text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 touch-manipulation"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Download CV</span>
          </motion.button>
        </motion.div>

        {/* Social Links with Morphic Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 sm:gap-3.5 pt-4 border-t border-neutral-800/80 w-full max-w-xs sm:max-w-none"
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
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            >
              <MorphicIcon
                icon={s.icon}
                color={s.color}
                size="md"
                isDark={true}
                title={s.name}
              />
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
