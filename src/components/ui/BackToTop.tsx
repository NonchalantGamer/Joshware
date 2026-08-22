import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useFeedback } from '../../context/FeedbackContext';

export const BackToTop: React.FC = () => {
  const { playFeedback } = useFeedback();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      let isPastHero = false;

      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Becomes visible once the bottom of the hero section scrolls above the top of viewport (with 80px grace buffer)
        isPastHero = heroBottom < 80;
      } else {
        isPastHero = window.scrollY > 450;
      }

      setIsVisible(isPastHero);

      // Calculate total page scroll percentage for the circular progress ring
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScrollHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    playFeedback('click');
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-3.5 sm:bottom-7 sm:right-7 z-40"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <motion.button
            id="floating-back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to top of page"
            className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-700/90 bg-[#0a0c10]/90 text-neutral-200 hover:text-amber-400 hover:border-amber-400/80 shadow-xl shadow-black/60 backdrop-blur-md transition-colors cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {/* Circular Progress SVG Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-800/60"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray={125.6}
                strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
                strokeLinecap="round"
                className="text-amber-400 transition-all duration-75 ease-out"
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
