import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, MessageCircle, Mail, Sparkles } from 'lucide-react';

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
      className={`border-t py-14 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? 'bg-neutral-950 border-neutral-800 text-neutral-400' : 'bg-neutral-900 border-neutral-800 text-neutral-300'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Info & Brand Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-neutral-800/80">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-neutral-700 bg-neutral-900 p-1">
              <img
                src={darkLogo}
                alt="Joshware Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
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
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-neutral-300">Lagos, NG: {lagosTime || '12:00 PM'} (WAT)</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-amber-400 hover:border-neutral-700 transition-colors flex items-center gap-1.5"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-xs">Top</span>
            </button>
          </div>
        </div>

        {/* Navigation & Social Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <span className="text-xs font-bold font-mono">X</span>
            </a>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="mailto:joshuaegesienyinnaya@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-6 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Joshua Egesi Enyinnaya (Joshware). All rights reserved.</p>
          <p>Zero Box Shadows • Production Engineering & UI/UX Design</p>
        </div>
      </div>
    </footer>
  );
};
