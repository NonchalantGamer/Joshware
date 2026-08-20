import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lightLogo = 'https://res.cloudinary.com/doujptiz/image/upload/v1787232870/20260803_131813_egdl3q.png';
  const darkLogo = 'https://res.cloudinary.com/doujptiz/image/upload/v1787233211/20260803_131853_yiypyb.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            id="navbar-container"
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 backdrop-blur-md ${
              isDark
                ? 'bg-neutral-900/80 border-neutral-800 text-neutral-200'
                : 'bg-white/85 border-neutral-200 text-neutral-800'
            }`}
          >
            {/* Brand Logo & Name */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-neutral-700/50 bg-neutral-950 p-1">
                <img
                  src={isDark ? darkLogo : lightLogo}
                  alt="Joshware Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight leading-none text-neutral-900 dark:text-neutral-100 group-hover:text-amber-500 transition-colors">
                  Joshware
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                  Joshua Enyinnaya
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                      isActive
                        ? isDark
                          ? 'text-amber-400 font-semibold'
                          : 'text-neutral-950 font-semibold'
                        : isDark
                          ? 'text-neutral-400 hover:text-neutral-100'
                          : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className={`absolute inset-0 rounded-full ${
                          isDark ? 'bg-neutral-800/80 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Actions: Theme Toggle & Hire Me CTA */}
            <div className="flex items-center gap-2.5">
              {/* Theme Toggle Button */}
              <button
                id="theme-toggle-btn"
                type="button"
                onClick={onToggleTheme}
                aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
                className={`p-2 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isDark
                    ? 'border-neutral-800 text-neutral-300 hover:bg-neutral-800 hover:text-amber-400'
                    : 'border-neutral-200 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950'
                }`}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Hire Me CTA Button */}
              <a
                id="navbar-hire-me-cta"
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all border ${
                  isDark
                    ? 'bg-amber-400 text-neutral-950 border-amber-300 hover:bg-amber-300'
                    : 'bg-neutral-950 text-white border-neutral-900 hover:bg-neutral-800'
                }`}
              >
                <span>Hire Me!</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Trigger */}
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`lg:hidden p-2 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isDark
                    ? 'border-neutral-800 text-neutral-300 hover:bg-neutral-800'
                    : 'border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-4 top-20 z-40 p-5 rounded-2xl border backdrop-blur-xl lg:hidden ${
              isDark
                ? 'bg-neutral-950/95 border-neutral-800 text-neutral-100'
                : 'bg-white/95 border-neutral-200 text-neutral-900'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between border ${
                    activeSection === link.href.replace('#', '')
                      ? isDark
                        ? 'bg-neutral-900 border-neutral-700 text-amber-400 font-semibold'
                        : 'bg-neutral-100 border-neutral-300 text-neutral-950 font-semibold'
                      : isDark
                        ? 'border-transparent text-neutral-300 hover:bg-neutral-900'
                        : 'border-transparent text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                </a>
              ))}

              <div className="pt-3 mt-1 border-t border-neutral-800/50 flex flex-col gap-2">
                <a
                  id="mobile-menu-hire-me-cta"
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className={`w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border ${
                    isDark
                      ? 'bg-amber-400 text-neutral-950 border-amber-300'
                      : 'bg-neutral-950 text-white border-neutral-900'
                  }`}
                >
                  <span>Hire Me!</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
