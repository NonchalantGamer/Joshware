import React from 'react';
import { motion, AnimatePresence, Transition } from 'motion/react';
import { Sun, Moon, Menu, X, Check, Plus, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';

export type IconMorphAnimation = 'rotate-flip' | 'spring-scale' | 'slide-fade' | 'pop-rotate' | 'burst';
export type IconMorphPreset = 'theme' | 'menu' | 'check' | 'chevron' | 'custom';
export type IconMorphColor = 'amber' | 'emerald' | 'blue' | 'purple' | 'neutral' | 'current';
export type IconMorphSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export interface IconMorpherProps {
  /**
   * Current boolean toggle state (true = secondary/active, false = primary/default)
   * or a custom state identifier string when using dynamic icon sets.
   */
  isToggled?: boolean;
  stateKey?: string;

  /**
   * Primary icon shown when isToggled is false (or default state)
   */
  primaryIcon?: React.ReactNode;

  /**
   * Secondary icon shown when isToggled is true (or active state)
   */
  secondaryIcon?: React.ReactNode;

  /**
   * Ready-made presets with built-in icons & tailored transitions:
   * - 'theme': Sun <-> Moon morph
   * - 'menu': Menu hamburger <-> X close morph
   * - 'check': Check <-> Plus / Checkmark morph
   * - 'chevron': ChevronRight <-> ChevronDown morph
   * - 'custom': User-provided primaryIcon / secondaryIcon
   */
  preset?: IconMorphPreset;

  /**
   * Animation transition choreography style
   */
  animation?: IconMorphAnimation;

  /**
   * Visual variant styling of the icon container
   */
  variant?: 'inline' | 'subtle-button' | 'badge' | 'glow-badge';

  /**
   * Theme color accents
   */
  color?: IconMorphColor;

  /**
   * Size presets ('xs', 'sm', 'md', 'lg', 'xl') or pixel dimension number
   */
  size?: IconMorphSize;

  /**
   * Dark mode context indicator
   */
  isDark?: boolean;

  /**
   * Optional click handler (transforms container into an interactive button)
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;

  /**
   * Extra styling classes
   */
  className?: string;
  iconClassName?: string;

  /**
   * Accessibility and identification
   */
  id?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export const IconMorpher: React.FC<IconMorpherProps> = ({
  isToggled = false,
  stateKey,
  primaryIcon,
  secondaryIcon,
  preset = 'custom',
  animation = 'rotate-flip',
  variant = 'inline',
  color = 'current',
  size = 'md',
  isDark = true,
  onClick,
  className = '',
  iconClassName = '',
  id,
  ariaLabel,
  disabled = false
}) => {
  // Resolve numeric or preset sizing
  const getSizeStyles = (s: IconMorphSize | string) => {
    if (typeof s === 'number') {
      return {
        boxSize: `w-[${s}px] h-[${s}px]`,
        iconPx: s,
        pad: 'p-1'
      };
    }
    switch (s) {
      case 'xs':
        return { boxSize: 'w-6 h-6', iconPx: 14, pad: 'p-1' };
      case 'sm':
        return { boxSize: 'w-8 h-8', iconPx: 16, pad: 'p-1.5' };
      case 'lg':
        return { boxSize: 'w-12 h-12', iconPx: 24, pad: 'p-3' };
      case 'xl':
        return { boxSize: 'w-14 h-14', iconPx: 28, pad: 'p-3.5' };
      case 'md':
      default:
        return { boxSize: 'w-10 h-10', iconPx: 20, pad: 'p-2' };
    }
  };

  const { boxSize, iconPx, pad } = getSizeStyles(size);

  // Resolve preset icons if not provided directly
  let renderedPrimary = primaryIcon;
  let renderedSecondary = secondaryIcon;

  if (preset === 'theme') {
    renderedPrimary = <Sun size={iconPx} className={`text-amber-500 ${iconClassName}`} />;
    renderedSecondary = <Moon size={iconPx} className={`text-amber-400 ${iconClassName}`} />;
  } else if (preset === 'menu') {
    renderedPrimary = <Menu size={iconPx} className={iconClassName} />;
    renderedSecondary = <X size={iconPx} className={iconClassName} />;
  } else if (preset === 'check') {
    renderedPrimary = <Plus size={iconPx} className={iconClassName} />;
    renderedSecondary = <Check size={iconPx} className={`text-emerald-500 ${iconClassName}`} />;
  } else if (preset === 'chevron') {
    renderedPrimary = <ChevronRight size={iconPx} className={iconClassName} />;
    renderedSecondary = <ChevronDown size={iconPx} className={iconClassName} />;
  }

  // Active icon decision based on toggle boolean or state key
  const activeIcon = isToggled ? (renderedSecondary ?? renderedPrimary) : (renderedPrimary ?? renderedSecondary);
  const activeKey = stateKey || (isToggled ? 'secondary-icon-state' : 'primary-icon-state');

  // Animation variants configuration
  const getAnimationVariants = (anim: IconMorphAnimation | string) => {
    switch (anim) {
      case 'rotate-flip':
        return {
          initial: (customToggled: boolean) => ({
            rotate: customToggled ? -90 : 90,
            scale: 0.4,
            opacity: 0,
            filter: 'blur(3px)'
          }),
          animate: {
            rotate: 0,
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 380,
              damping: 22,
              mass: 0.8
            } as Transition
          },
          exit: (customToggled: boolean) => ({
            rotate: customToggled ? 90 : -90,
            scale: 0.4,
            opacity: 0,
            filter: 'blur(3px)',
            transition: {
              duration: 0.16,
              ease: 'easeIn'
            } as Transition
          })
        };

      case 'spring-scale':
        return {
          initial: {
            scale: 0.2,
            opacity: 0,
            y: 4
          },
          animate: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 450,
              damping: 25
            } as Transition
          },
          exit: {
            scale: 0.2,
            opacity: 0,
            y: -4,
            transition: {
              duration: 0.15
            } as Transition
          }
        };

      case 'slide-fade':
        return {
          initial: {
            opacity: 0,
            y: isToggled ? -8 : 8
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.22,
              ease: 'easeOut'
            } as Transition
          },
          exit: {
            opacity: 0,
            y: isToggled ? 8 : -8,
            transition: {
              duration: 0.15,
              ease: 'easeIn'
            } as Transition
          }
        };

      case 'pop-rotate':
        return {
          initial: {
            scale: 0,
            rotate: -180,
            opacity: 0
          },
          animate: {
            scale: [0, 1.25, 1],
            rotate: 0,
            opacity: 1,
            transition: {
              duration: 0.35,
              times: [0, 0.7, 1],
              ease: 'easeOut'
            } as Transition
          },
          exit: {
            scale: 0,
            rotate: 180,
            opacity: 0,
            transition: {
              duration: 0.18
            } as Transition
          }
        };

      case 'burst':
      default:
        return {
          initial: {
            scale: 0.5,
            opacity: 0
          },
          animate: {
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 500,
              damping: 30
            } as Transition
          },
          exit: {
            scale: 0.5,
            opacity: 0,
            transition: { duration: 0.14 } as Transition
          }
        };
    }
  };

  const variants = getAnimationVariants(animation);

  // Color scheme mappings for container variants
  const colorMap = {
    amber: {
      bgDark: 'bg-amber-400/10 border-amber-400/30 text-amber-400 hover:bg-amber-400/20',
      bgLight: 'bg-amber-100/70 border-amber-300 text-amber-800 hover:bg-amber-200/80',
      glowDark: 'from-amber-500/30 to-amber-300/10',
      glowLight: 'from-amber-400/20 to-amber-200/5'
    },
    emerald: {
      bgDark: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20',
      bgLight: 'bg-emerald-100/70 border-emerald-300 text-emerald-800 hover:bg-emerald-200/80',
      glowDark: 'from-emerald-500/30 to-emerald-300/10',
      glowLight: 'from-emerald-400/20 to-emerald-200/5'
    },
    blue: {
      bgDark: 'bg-sky-400/10 border-sky-400/30 text-sky-400 hover:bg-sky-400/20',
      bgLight: 'bg-sky-100/70 border-sky-300 text-sky-800 hover:bg-sky-200/80',
      glowDark: 'from-sky-500/30 to-sky-300/10',
      glowLight: 'from-sky-400/20 to-sky-200/5'
    },
    purple: {
      bgDark: 'bg-purple-400/10 border-purple-400/30 text-purple-400 hover:bg-purple-400/20',
      bgLight: 'bg-purple-100/70 border-purple-300 text-purple-800 hover:bg-purple-200/80',
      glowDark: 'from-purple-500/30 to-purple-300/10',
      glowLight: 'from-purple-400/20 to-purple-200/5'
    },
    neutral: {
      bgDark: 'bg-neutral-900/80 border-neutral-800 text-neutral-200 hover:bg-neutral-800',
      bgLight: 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200',
      glowDark: 'from-neutral-700/20 to-transparent',
      glowLight: 'from-neutral-300/20 to-transparent'
    },
    current: {
      bgDark: 'bg-transparent border-transparent text-inherit',
      bgLight: 'bg-transparent border-transparent text-inherit',
      glowDark: 'from-amber-400/20 to-transparent',
      glowLight: 'from-amber-500/15 to-transparent'
    }
  };

  const selectedPalette = colorMap[color];

  // Container styling classes according to variant
  let containerStyles = 'inline-flex items-center justify-center relative select-none';

  if (variant === 'subtle-button') {
    containerStyles += ` ${boxSize} ${pad} rounded-full border transition-all duration-200 shadow-sm ${
      isDark ? selectedPalette.bgDark : selectedPalette.bgLight
    }`;
  } else if (variant === 'badge') {
    containerStyles += ` ${boxSize} ${pad} rounded-xl border transition-all duration-200 ${
      isDark ? selectedPalette.bgDark : selectedPalette.bgLight
    }`;
  } else if (variant === 'glow-badge') {
    containerStyles += ` ${boxSize} ${pad} rounded-2xl border transition-all duration-200 ${
      isDark ? selectedPalette.bgDark : selectedPalette.bgLight
    }`;
  } else {
    // 'inline'
    containerStyles += ' w-auto h-auto p-0.5';
  }

  const InnerContent = (
    <>
      {/* Background ambient glow when toggled in glow-badge variant */}
      {variant === 'glow-badge' && isToggled && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.25 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 -z-10 rounded-full blur-md bg-gradient-to-tr ${
            isDark ? selectedPalette.glowDark : selectedPalette.glowLight
          }`}
        />
      )}

      {/* Animated SVG morph container */}
      <AnimatePresence mode="wait" initial={false} custom={isToggled}>
        <motion.div
          key={activeKey}
          custom={isToggled}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex items-center justify-center flex-shrink-0"
        >
          {activeIcon}
        </motion.div>
      </AnimatePresence>
    </>
  );

  if (onClick) {
    return (
      <motion.button
        id={id}
        type="button"
        onClick={onClick}
        disabled={disabled}
        whileTap={{ scale: 0.88 }}
        whileHover={{ scale: 1.06 }}
        aria-label={ariaLabel || (typeof preset === 'string' ? `Toggle ${preset}` : 'Toggle icon')}
        aria-pressed={isToggled}
        className={`${containerStyles} ${className} focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {InnerContent}
      </motion.button>
    );
  }

  return (
    <div id={id} className={`${containerStyles} ${className}`}>
      {InnerContent}
    </div>
  );
};
