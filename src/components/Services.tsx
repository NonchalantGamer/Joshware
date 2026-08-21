import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import {
  Globe,
  Layout,
  Smartphone,
  Palette,
  Database,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';
import { services } from '../data/services';
import { Service } from '../types';
import { ScrollReveal } from './ui/ScrollReveal';

// 100% Solid, Opaque Color Configurations for each Service Card (No translucent overlays)
interface ThemeConfig {
  border: string;
  hoverBorder: string;
  cardBg: string; // 100% opaque solid background color
  accent: string;
  accentBg: string;
  badgeBorder: string;
  badgeText: string;
  dotColor: string;
  deliverableBg: string;
  deliverableBorder: string;
  deliverableIcon: string;
  pillBg: string;
  pillBorder: string;
  ctaBorder: string;
  ctaBg: string;
  ctaText: string;
  ctaHoverBg: string;
}

const themeConfigs: Record<string, ThemeConfig> = {
  'web-development': {
    border: 'border-amber-500/40',
    hoverBorder: 'hover:border-amber-400',
    cardBg: 'bg-[#0f1118]', // Solid opaque dark slate
    accent: 'text-amber-400',
    accentBg: 'bg-[#221c13]',
    badgeBorder: 'border-amber-500/40',
    badgeText: 'text-amber-400',
    dotColor: 'bg-amber-400',
    deliverableBg: 'bg-[#171b26]',
    deliverableBorder: 'border-amber-500/20',
    deliverableIcon: 'text-amber-400',
    pillBg: 'bg-[#1a1e2d]',
    pillBorder: 'border-amber-500/30',
    ctaBorder: 'border-amber-400/60',
    ctaBg: 'bg-amber-400/20',
    ctaText: 'text-amber-300',
    ctaHoverBg: 'hover:bg-amber-400/30'
  },
  'web-app-development': {
    border: 'border-cyan-500/40',
    hoverBorder: 'hover:border-cyan-400',
    cardBg: 'bg-[#0b141d]', // Solid opaque cyan-tinted charcoal
    accent: 'text-cyan-400',
    accentBg: 'bg-[#10232c]',
    badgeBorder: 'border-cyan-500/40',
    badgeText: 'text-cyan-400',
    dotColor: 'bg-cyan-400',
    deliverableBg: 'bg-[#121f2d]',
    deliverableBorder: 'border-cyan-500/20',
    deliverableIcon: 'text-cyan-400',
    pillBg: 'bg-[#162738]',
    pillBorder: 'border-cyan-500/30',
    ctaBorder: 'border-cyan-400/60',
    ctaBg: 'bg-cyan-400/20',
    ctaText: 'text-cyan-300',
    ctaHoverBg: 'hover:bg-cyan-400/30'
  },
  'mobile-app-development': {
    border: 'border-emerald-500/40',
    hoverBorder: 'hover:border-emerald-400',
    cardBg: 'bg-[#0a1714]', // Solid opaque forest charcoal
    accent: 'text-emerald-400',
    accentBg: 'bg-[#0f2620]',
    badgeBorder: 'border-emerald-500/40',
    badgeText: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    deliverableBg: 'bg-[#102420]',
    deliverableBorder: 'border-emerald-500/20',
    deliverableIcon: 'text-emerald-400',
    pillBg: 'bg-[#142e29]',
    pillBorder: 'border-emerald-500/30',
    ctaBorder: 'border-emerald-400/60',
    ctaBg: 'bg-emerald-400/20',
    ctaText: 'text-emerald-300',
    ctaHoverBg: 'hover:bg-emerald-400/30'
  },
  'ui-ux-design': {
    border: 'border-purple-500/40',
    hoverBorder: 'hover:border-purple-400',
    cardBg: 'bg-[#14101f]', // Solid opaque purple-tinted charcoal
    accent: 'text-purple-400',
    accentBg: 'bg-[#231836]',
    badgeBorder: 'border-purple-500/40',
    badgeText: 'text-purple-400',
    dotColor: 'bg-purple-400',
    deliverableBg: 'bg-[#1c162c]',
    deliverableBorder: 'border-purple-500/20',
    deliverableIcon: 'text-purple-400',
    pillBg: 'bg-[#241c38]',
    pillBorder: 'border-purple-500/30',
    ctaBorder: 'border-purple-400/60',
    ctaBg: 'bg-purple-400/20',
    ctaText: 'text-purple-300',
    ctaHoverBg: 'hover:bg-purple-400/30'
  },
  'backend-database': {
    border: 'border-blue-500/40',
    hoverBorder: 'hover:border-blue-400',
    cardBg: 'bg-[#0d1322]', // Solid opaque cobalt charcoal
    accent: 'text-blue-400',
    accentBg: 'bg-[#121c33]',
    badgeBorder: 'border-blue-500/40',
    badgeText: 'text-blue-400',
    dotColor: 'bg-blue-400',
    deliverableBg: 'bg-[#141e36]',
    deliverableBorder: 'border-blue-500/20',
    deliverableIcon: 'text-blue-400',
    pillBg: 'bg-[#182542]',
    pillBorder: 'border-blue-500/30',
    ctaBorder: 'border-blue-400/60',
    ctaBg: 'bg-blue-400/20',
    ctaText: 'text-blue-300',
    ctaHoverBg: 'hover:bg-blue-400/30'
  }
};

const defaultTheme: ThemeConfig = {
  border: 'border-neutral-800',
  hoverBorder: 'hover:border-amber-400',
  cardBg: 'bg-[#0f1118]',
  accent: 'text-amber-400',
  accentBg: 'bg-[#1c1e28]',
  badgeBorder: 'border-amber-400/40',
  badgeText: 'text-amber-400',
  dotColor: 'bg-amber-400',
  deliverableBg: 'bg-[#171b26]',
  deliverableBorder: 'border-neutral-700',
  deliverableIcon: 'text-amber-400',
  pillBg: 'bg-[#171b26]',
  pillBorder: 'border-neutral-700',
  ctaBorder: 'border-amber-400/40',
  ctaBg: 'bg-amber-400/15',
  ctaText: 'text-amber-400',
  ctaHoverBg: 'hover:bg-amber-400/25'
};

interface StackingCardProps {
  service: Service;
  index: number;
  total: number;
  onContactClick: () => void;
  progress: MotionValue<number>;
}

const StackingCard: React.FC<StackingCardProps> = ({
  service,
  index,
  total,
  onContactClick,
  progress
}) => {
  const isEven = index % 2 === 0;
  const theme = themeConfigs[service.id] || defaultTheme;

  // Exact step for each of the 5 cards
  const step = 1 / total;
  const targetScale = 1 - (total - 1 - index) * 0.03; // ~0.88 for card 0, 0.91 for card 1, 0.94 for card 2, 0.97 for card 3, 1 for card 4

  // As user scrolls and NEXT cards arrive, this card shrinks smoothly in place:
  // - Starts at scale 1.0 when it first reaches sticky top (at index * step)
  // - Smoothly scales down to targetScale as next cards cover it
  // - If it's the last card (index === total - 1), it stays at scale 1.0
  const range = [index * step, 1];
  const scale = useTransform(
    progress,
    range,
    [1, targetScale]
  );

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className={`w-5 h-5 ${theme.accent}`} />;
      case 'Layout':
        return <Layout className={`w-5 h-5 ${theme.accent}`} />;
      case 'Smartphone':
        return <Smartphone className={`w-5 h-5 ${theme.accent}`} />;
      case 'Palette':
        return <Palette className={`w-5 h-5 ${theme.accent}`} />;
      case 'Database':
        return <Database className={`w-5 h-5 ${theme.accent}`} />;
      default:
        return <Sparkles className={`w-5 h-5 ${theme.accent}`} />;
    }
  };

  // Responsive sticky viewport top offset - tight margin for card stacking on mobile and desktop
  const stickyTop = `calc(var(--sticky-base, 76px) + ${index * 12}px)`;

  return (
    <div
      id={`service-card-slot-${service.id}`}
      className="sticky w-full h-auto flex items-center justify-center pt-1 sm:pt-2 pb-4 sm:pb-8 lg:pb-10"
      style={{
        top: `calc(72px + ${index * 10}px)`,
        zIndex: 10 + index
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center'
        }}
        className={`w-full rounded-2xl sm:rounded-3xl border ${theme.border} ${theme.cardBg} ${theme.hoverBorder} transition-colors duration-200 overflow-hidden shadow-2xl`}
      >
        <div
          className={`flex flex-col ${
            isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } gap-5 sm:gap-8 lg:gap-12 items-center p-4 sm:p-7 lg:p-10`}
        >
          {/* Text & Deliverables Column */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5">
            {/* Header Metadata Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`px-3 py-1 text-xs font-mono font-bold rounded-lg ${theme.accentBg} ${theme.badgeText} border ${theme.badgeBorder} flex items-center gap-1.5`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${theme.dotColor}`} />
                <span>Service {service.number}</span>
              </span>
              {service.tag && (
                <span
                  className={`px-2.5 py-1 text-xs font-mono font-medium rounded-lg ${theme.pillBg} text-neutral-200 border ${theme.pillBorder}`}
                >
                  {service.tag}
                </span>
              )}
            </div>

            {/* Title with Themed Icon */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${theme.deliverableBg} border ${theme.border} flex-shrink-0`}>
                  {getServiceIcon(service.iconName)}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-neutral-300 font-normal">
                {service.shortDescription}
              </p>
            </div>

            {/* Key Deliverables & Capabilities */}
            <div className="space-y-2.5 pt-1">
              <div className={`flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider ${theme.accent}`}>
                <Layers className="w-3.5 h-3.5" />
                <span>Key Capabilities & Deliverables</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.deliverables.slice(0, 4).map((deliverable, dIdx) => (
                  <div
                    key={dIdx}
                    className={`flex items-start gap-2 p-2.5 rounded-xl border ${theme.deliverableBorder} ${theme.deliverableBg} text-xs leading-tight text-neutral-200`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${theme.deliverableIcon} mt-0.5 flex-shrink-0`} />
                    <span className="truncate">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & CTA Action */}
            <div className={`pt-3 border-t ${theme.border} flex flex-wrap items-center justify-between gap-3`}>
              <div className="flex flex-wrap items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-neutral-500 mr-1" />
                {service.techUsed.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded-md border ${theme.pillBorder} ${theme.pillBg} text-neutral-200`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.button
                type="button"
                onClick={onContactClick}
                whileHover={{ scale: 1.04, x: 2 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-1.5 min-h-[42px] px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border ${theme.ctaBorder} ${theme.ctaBg} ${theme.ctaText} ${theme.ctaHoverBg} transition-all cursor-pointer shadow-sm touch-manipulation`}
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>

          {/* Visual Showcase Image Column (100% solid container background) */}
          <div className="w-full lg:w-1/2">
            <div className={`relative rounded-2xl overflow-hidden border ${theme.border} bg-[#06080d]`}>
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#06080d]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Solid Vignette Contrast Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080d]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Status Pill over image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-end pointer-events-none">
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono ${theme.accent} font-bold px-2.5 sm:px-3 py-1 rounded-lg bg-[#0a0c10] border ${theme.badgeBorder}`}
                  >
                    {service.number} // 05
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure scroll progress across the dedicated services section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0c10] text-neutral-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-neutral-800 bg-neutral-900 text-amber-400 text-xs font-mono mb-3 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Services & Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
                End-to-End Digital <br className="hidden sm:inline" />
                Product Development.
              </h2>
            </div>

            <p className="text-sm sm:text-base max-w-lg leading-relaxed text-neutral-400">
              From responsive client-facing web applications to resilient database architectures, I engineer high-performing digital systems tailored to tangible business requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* 
          Scroll-driven Stacking Deck:
          Container height provides natural scroll duration for the 5 cards to glide in,
          stack/shrink over each other sequentially, and then scroll up as a unified stack.
        */}
        <div className="relative flex flex-col gap-12 sm:gap-20 lg:gap-28 pb-16">
          {services.map((service, index) => (
            <StackingCard
              key={service.id}
              service={service}
              index={index}
              total={services.length}
              onContactClick={scrollToContact}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
