import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type MorphicVariant = 'badge' | 'interactive' | 'floating' | 'ring' | 'subtle';
export type MorphicColor = 'amber' | 'emerald' | 'blue' | 'purple' | 'neutral';

interface MorphicIconProps {
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  isActive?: boolean;
  variant?: MorphicVariant;
  color?: MorphicColor;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isDark?: boolean;
  className?: string;
  onClick?: () => void;
  title?: string;
  id?: string;
}

export const MorphicIcon: React.FC<MorphicIconProps> = ({
  icon,
  activeIcon,
  isActive = false,
  variant = 'badge',
  color = 'amber',
  size = 'md',
  isDark = true,
  className = '',
  onClick,
  title,
  id
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size specifications
  const sizeMap = {
    sm: { box: 'w-8 h-8', iconSize: 'text-xs', p: 'p-1.5' },
    md: { box: 'w-10 h-10', iconSize: 'text-sm', p: 'p-2.5' },
    lg: { box: 'w-12 h-12', iconSize: 'text-base', p: 'p-3' },
    xl: { box: 'w-16 h-16', iconSize: 'text-xl', p: 'p-4' }
  };

  // Color profiles
  const colorMap = {
    amber: {
      darkBg: 'bg-amber-500/10',
      darkBorder: 'border-amber-500/30',
      darkText: 'text-amber-400',
      darkGlow: 'from-amber-500/25 via-amber-400/10 to-transparent',
      lightBg: 'bg-amber-50',
      lightBorder: 'border-amber-300',
      lightText: 'text-amber-700',
      lightGlow: 'from-amber-400/30 via-amber-200/20 to-transparent'
    },
    emerald: {
      darkBg: 'bg-emerald-500/10',
      darkBorder: 'border-emerald-500/30',
      darkText: 'text-emerald-400',
      darkGlow: 'from-emerald-500/25 via-emerald-400/10 to-transparent',
      lightBg: 'bg-emerald-50',
      lightBorder: 'border-emerald-300',
      lightText: 'text-emerald-700',
      lightGlow: 'from-emerald-400/30 via-emerald-200/20 to-transparent'
    },
    blue: {
      darkBg: 'bg-sky-500/10',
      darkBorder: 'border-sky-500/30',
      darkText: 'text-sky-400',
      darkGlow: 'from-sky-500/25 via-sky-400/10 to-transparent',
      lightBg: 'bg-sky-50',
      lightBorder: 'border-sky-300',
      lightText: 'text-sky-700',
      lightGlow: 'from-sky-400/30 via-sky-200/20 to-transparent'
    },
    purple: {
      darkBg: 'bg-purple-500/10',
      darkBorder: 'border-purple-500/30',
      darkText: 'text-purple-400',
      darkGlow: 'from-purple-500/25 via-purple-400/10 to-transparent',
      lightBg: 'bg-purple-50',
      lightBorder: 'border-purple-300',
      lightText: 'text-purple-700',
      lightGlow: 'from-purple-400/30 via-purple-200/20 to-transparent'
    },
    neutral: {
      darkBg: 'bg-neutral-900/60',
      darkBorder: 'border-neutral-800',
      darkText: 'text-neutral-300',
      darkGlow: 'from-neutral-700/20 via-neutral-800/10 to-transparent',
      lightBg: 'bg-neutral-100',
      lightBorder: 'border-neutral-300',
      lightText: 'text-neutral-700',
      lightGlow: 'from-neutral-300/30 via-neutral-200/20 to-transparent'
    }
  };

  const selectedColor = colorMap[color];
  const currentSize = sizeMap[size];

  // Dynamic morphing border radius geometry
  // Regular -> Squircle / Organic fluid shape on hover/active
  const borderRadiusVariants = {
    initial: {
      borderRadius: '14px',
      rotate: 0,
      scale: 1
    },
    hover: {
      borderRadius: ['14px', '22px 8px 22px 8px', '18px', '10px 22px 10px 22px'],
      rotate: [0, -3, 3, 0],
      scale: 1.06,
      transition: {
        borderRadius: { duration: 1.6, repeat: Infinity, repeatType: 'reverse' as const, ease: 'easeInOut' },
        rotate: { duration: 0.4, ease: 'easeOut' },
        scale: { duration: 0.25, ease: 'easeOut' }
      }
    },
    active: {
      borderRadius: '20px 6px 20px 6px',
      rotate: 0,
      scale: 1.08,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      id={id}
      title={title}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center select-none flex-shrink-0 ${currentSize.box} ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
      animate={isActive ? 'active' : isHovered ? 'hover' : 'initial'}
      variants={borderRadiusVariants}
    >
      {/* Morphing Glow Aura */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered || isActive ? 0.85 : 0,
          scale: isHovered || isActive ? 1.25 : 0.8,
          rotate: isHovered ? 180 : 0
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`absolute inset-0 -z-10 rounded-full blur-md bg-gradient-to-tr ${
          isDark ? selectedColor.darkGlow : selectedColor.lightGlow
        }`}
      />

      {/* Morphic Glassmorphic Container Shell */}
      <motion.div
        className={`w-full h-full flex items-center justify-center border transition-colors ${currentSize.p} ${
          isDark
            ? `${selectedColor.darkBg} ${selectedColor.darkBorder} ${selectedColor.darkText}`
            : `${selectedColor.lightBg} ${selectedColor.lightBorder} ${selectedColor.lightText}`
        }`}
        style={{ borderRadius: 'inherit' }}
      >
        <AnimatePresence mode="wait">
          {isActive && activeIcon ? (
            <motion.div
              key="active-icon"
              initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex items-center justify-center"
            >
              {activeIcon}
            </motion.div>
          ) : (
            <motion.div
              key="default-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: isHovered ? 1.12 : 1,
                rotate: isHovered ? [0, -6, 6, 0] : 0,
                opacity: 1
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                scale: { duration: 0.2 },
                rotate: { duration: 0.5, ease: 'easeInOut' }
              }}
              className="flex items-center justify-center"
            >
              {icon}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Ambient Morphic Pulsing Corner Dot */}
      {(isActive || isHovered) && (
        <motion.span
          layoutId={`morphic-dot-${id || 'generic'}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 ${
            isDark ? 'border-neutral-950 bg-amber-400' : 'border-white bg-amber-500'
          }`}
        />
      )}
    </motion.div>
  );
};
