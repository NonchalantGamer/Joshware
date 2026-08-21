import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const heroThreshold = heroSection ? heroSection.offsetHeight * 0.7 : 400;

      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > heroThreshold);

      // Calculate total page scroll percentage for subtle progress indicator
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScrollY / totalScrollHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-40"
        >
          <motion.button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to top of page"
            className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-700/80 bg-[#0a0c10]/95 text-neutral-200 hover:text-amber-400 hover:border-amber-400/60 shadow-xl shadow-black/50 backdrop-blur-xl transition-colors cursor-pointer touch-manipulation"
          >
            {/* Circular Progress SVG Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-800/40"
              />
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={132}
                strokeDashoffset={132 - (132 * scrollProgress) / 100}
                strokeLinecap="round"
                className="text-amber-400 transition-all duration-100 ease-out"
              />
            </svg>

            {/* Icon */}
            <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
