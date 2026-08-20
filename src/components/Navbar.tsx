import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { IconMorpher } from './IconMorpher';
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon, GmailIcon } from './ui/BrandIcons';

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

  // Scroll detection to identify when navbar moves away from top hero area
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scrolling completely when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const preventBackgroundScroll = (e: TouchEvent) => {
        const target = e.target as HTMLElement | null;
        const menuDrawer = document.getElementById('mobile-menu-drawer');
        if (menuDrawer && menuDrawer.contains(target)) {
          return; // Allow scrolling inside the menu itself if needed
        }
        e.preventDefault();
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('touchmove', preventBackgroundScroll, { passive: false });
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener('touchmove', preventBackgroundScroll);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

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

  // Is the header currently in blurry white mode? (only in dark mode when scrolled out of hero)
  const isBlurryWhite = isDark && isScrolled;

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <nav
            id="navbar-container"
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full border transition-all duration-300 backdrop-blur-xl backdrop-saturate-180 ${
              isBlurryWhite
                ? 'bg-white/40 border-white/50 text-neutral-950 shadow-lg shadow-black/15'
                : isScrolled
                ? 'bg-neutral-950/85 border-neutral-800/80 text-neutral-100 shadow-xl shadow-black/25'
                : 'bg-neutral-900/40 border-neutral-700/50 text-white shadow-md'
            }`}
          >
            {/* Standalone Brand Logo & Name */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full touch-manipulation"
            >
              {/* Standalone Logo Image */}
              <img
                src={isBlurryWhite ? lightLogo : darkLogo}
                alt="Joshware Logo"
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span
                  className={`font-display font-bold text-sm sm:text-base tracking-tight leading-none transition-colors ${
                    isBlurryWhite
                      ? 'text-neutral-950 group-hover:text-amber-600'
                      : 'text-white group-hover:text-amber-400'
                  }`}
                >
                  Joshware
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] font-mono tracking-wider uppercase transition-colors ${
                    isBlurryWhite ? 'text-neutral-600 font-medium' : 'text-neutral-400'
                  }`}
                >
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
                        ? isBlurryWhite
                          ? 'text-amber-600 font-bold'
                          : 'text-amber-400 font-semibold'
                        : isBlurryWhite
                        ? 'text-neutral-700 hover:text-neutral-950 font-medium'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className={`absolute inset-0 rounded-full border ${
                          isBlurryWhite
                            ? 'bg-white/60 border-white/70 shadow-xs'
                            : 'bg-neutral-800/90 border-neutral-700'
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
            <div className="flex items-center gap-2">
              {/* Morphic Theme Toggle Button using IconMorpher with 44px touch target */}
              <motion.button
                id="theme-toggle-btn"
                type="button"
                onClick={onToggleTheme}
                whileHover={{ scale: 1.08, rotate: isDark ? 15 : -15 }}
                whileTap={{ scale: 0.92 }}
                aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
                className={`relative min-w-[44px] min-h-[44px] p-2.5 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 overflow-hidden group flex items-center justify-center touch-manipulation ${
                  isBlurryWhite
                    ? 'border-white/50 bg-white/40 text-neutral-900 hover:text-amber-600 shadow-xs'
                    : 'border-neutral-700/80 bg-neutral-900/60 text-neutral-200 hover:text-amber-400 shadow-inner'
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-300/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-xs"
                />
                <IconMorpher
                  preset="theme"
                  isToggled={!isDark}
                  animation="rotate-flip"
                  size={18}
                  isDark={!isBlurryWhite}
                  className="relative z-10"
                />
              </motion.button>

              {/* Hire Me CTA Button */}
              <motion.a
                id="navbar-hire-me-cta"
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[40px] text-xs font-bold tracking-wider uppercase rounded-full transition-all border border-amber-300 bg-amber-400 text-neutral-950 hover:bg-amber-300 shadow-sm"
              >
                <span>Hire Me!</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>

              {/* Mobile Menu Trigger using IconMorpher with 44px touch target */}
              <motion.button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className={`lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 flex items-center justify-center touch-manipulation ${
                  isBlurryWhite
                    ? 'border-white/50 bg-white/40 text-neutral-900 hover:bg-white/60 shadow-xs'
                    : 'border-neutral-700 text-neutral-200 hover:bg-neutral-800'
                }`}
              >
                <IconMorpher
                  preset="menu"
                  isToggled={mobileMenuOpen}
                  animation="rotate-flip"
                  size={18}
                  isDark={!isBlurryWhite}
                />
              </motion.button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu & Full-Screen Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop that absorbs all background clicks and touch interactions */}
            <motion.div
              id="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden touch-none"
              aria-hidden="true"
            />

            {/* Mobile Drawer */}
            <motion.div
              id="mobile-menu-drawer"
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed inset-x-3 sm:inset-x-4 top-20 z-50 p-5 rounded-2xl border border-neutral-800 bg-neutral-950/98 text-neutral-100 backdrop-blur-2xl shadow-2xl max-h-[calc(100vh-5.5rem)] overflow-y-auto lg:hidden overscroll-contain"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    id={`mobile-nav-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`min-h-[48px] px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between border touch-manipulation ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-neutral-900 border-neutral-700 text-amber-400 font-semibold'
                        : 'border-transparent text-neutral-300 hover:bg-neutral-900/80 hover:text-white'
                    }`}
                  >
                    <span className="text-base sm:text-sm">{link.name}</span>
                    <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                  </a>
                ))}

                <div className="pt-3 mt-2 border-t border-neutral-800/80 flex flex-col gap-2">
                  <a
                    id="mobile-menu-hire-me-cta"
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, '#contact')}
                    className="w-full min-h-[48px] py-3.5 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-amber-300 bg-amber-400 text-neutral-950 hover:bg-amber-300 touch-manipulation"
                  >
                    <span>Hire Me!</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <div className="flex items-center justify-center gap-2 pt-2 text-xs font-mono text-neutral-400">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:text-white hover:border-neutral-700 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:text-white hover:border-neutral-700 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://x.com/josh_ware25"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="X (Twitter)"
                      className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:text-white hover:border-neutral-700 transition-colors"
                    >
                      <XIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://wa.me/2347043534602"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:text-white hover:border-neutral-700 transition-colors"
                    >
                      <WhatsappIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:joshuaegesienyinnaya@gmail.com"
                      aria-label="Gmail"
                      className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:text-white hover:border-neutral-700 transition-colors"
                    >
                      <GmailIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
