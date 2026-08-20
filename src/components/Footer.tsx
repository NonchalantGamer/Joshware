import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon, GmailIcon } from './ui/BrandIcons';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const [lagosTime, setLagosTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLagosTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const lightLogo = 'https://res.cloudinary.com/doujptiz/image/upload/v1787232870/20260803_131813_egdl3q.png';
  const darkLogo = 'https://res.cloudinary.com/doujptiz/image/upload/v1787233211/20260803_131853_yiypyb.png';

  return (
    <footer
      id="main-portfolio-footer"
      className={`border-t py-14 px-4 sm:px-6 lg:px-8 transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-neutral-950 border-neutral-800 text-neutral-400' : 'bg-neutral-900 border-neutral-800 text-neutral-300'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Info & Brand Bar */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-neutral-800/80">
            <div className="flex items-center gap-4">
              <img
                src={darkLogo}
                alt="Joshware Logo"
                className="h-10 w-auto object-contain flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-lg font-display font-bold text-white tracking-tight">
                  Joshua Egesi Enyinnaya
                </h3>
                <p className="text-xs font-mono text-amber-400">
                  Full-Stack Developer & UI/UX Designer • Joshware
                </p>
              </div>
            </div>

            {/* Lagos Time indicator & Availability */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-800 bg-neutral-900/60 min-h-[40px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-neutral-300">Lagos, NG: {lagosTime || '12:00 PM'} (WAT)</span>
              </div>

              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll back to top"
                className="min-h-[40px] px-3.5 py-2 rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-amber-400 hover:border-neutral-700 transition-colors flex items-center gap-1.5 cursor-pointer touch-manipulation"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-xs">Top</span>
              </motion.button>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation & Social Links */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-1 text-neutral-400 hover:text-amber-400 transition-colors touch-manipulation"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors touch-manipulation"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors touch-manipulation"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://x.com/josh_ware25"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors touch-manipulation"
              >
                <XIcon className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="https://wa.me/2347043534602"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors touch-manipulation"
              >
                <WhatsappIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:joshuaegesienyinnaya@gmail.com"
                aria-label="Gmail"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors touch-manipulation"
              >
                <GmailIcon className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-6 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Joshua Egesi Enyinnaya (Joshware). All rights reserved.</p>
          <p>Zero Box Shadows • Production Engineering & UI/UX Design</p>
        </div>
      </div>
    </footer>
  );
};
