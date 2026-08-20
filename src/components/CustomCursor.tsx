import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device or reduced motion
    if (typeof window !== 'undefined') {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (hasTouch || prefersReduced) {
        setIsTouchDevice(true);
        return;
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, textarea, select, [role="button"], [data-cursor="pointer"]');
        setIsPointer(!!interactive);
        
        const customAction = target.closest('[data-cursor="action"]');
        setIsHovered(!!customAction);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Central dot */}
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full ${
          isDark ? 'bg-amber-400' : 'bg-neutral-900'
        }`}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border ${
          isDark
            ? isPointer
              ? 'border-amber-400 bg-amber-400/10'
              : 'border-white/30'
            : isPointer
              ? 'border-neutral-900 bg-neutral-900/10'
              : 'border-neutral-950/30'
        }`}
        animate={{
          x: mousePosition.x - (isPointer ? 24 : 14),
          y: mousePosition.y - (isPointer ? 24 : 14),
          width: isPointer ? 48 : 28,
          height: isPointer ? 48 : 28,
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </div>
  );
};
