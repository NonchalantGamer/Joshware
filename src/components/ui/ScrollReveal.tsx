import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none' | 'zoom' | 'flip';

interface ScrollRevealProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'viewport' | 'transition'> {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  staggerChildren?: number;
  once?: boolean;
  threshold?: number;
  scale?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 20,
  className = '',
  staggerChildren,
  once = true,
  scale = 1,
  ...props
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, x: 0, scale };
      case 'down':
        return { opacity: 0, y: -distance, x: 0, scale };
      case 'left':
        return { opacity: 0, x: distance, y: 0, scale };
      case 'right':
        return { opacity: 0, x: -distance, y: 0, scale };
      case 'zoom':
        return { opacity: 0, scale: 0.94, y: distance / 2 };
      case 'flip':
        return { opacity: 0, rotateX: 15, y: distance };
      case 'none':
      default:
        return { opacity: 0, scale };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateX: 0,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: staggerChildren || 0
        }
      }}
      viewport={{ once, margin: '-40px' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  mode?: 'block' | 'words';
  staggerDelay?: number;
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  distance = 16,
  as: Component = 'div',
  mode = 'block',
  staggerDelay = 0.035,
  once = true
}) => {
  if (mode === 'words' && typeof children === 'string') {
    const words = children.split(' ');
    const MotionComponent = motion[Component as keyof typeof motion] as React.ElementType;

    return (
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-40px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay
            }
          }
        }}
        className={className}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: distance, filter: 'blur(2px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="inline-block mr-[0.28em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  const MotionComponent = motion[Component as keyof typeof motion] as React.ElementType;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: distance }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      viewport={{ once, margin: '-40px' }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
  once?: boolean;
}> = ({ children, className = '', staggerDelay = 0.08, delayStart = 0, once = true }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayStart
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  distance?: number;
}> = ({ children, className = '', direction = 'up', distance = 18 }) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
        };
    }
  };

  return (
    <motion.div variants={getVariants()} className={className}>
      {children}
    </motion.div>
  );
};

