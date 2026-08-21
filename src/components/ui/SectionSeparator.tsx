import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code, Cpu, Layers, Disc, CircleDot } from 'lucide-react';

interface SectionSeparatorProps {
  from?: 'dark' | 'light';
  to?: 'dark' | 'light';
  label?: string;
  code?: string;
  icon?: 'sparkles' | 'code' | 'cpu' | 'layers' | 'disc';
}

export const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  from = 'dark',
  to = 'dark',
  label,
  code,
  icon = 'disc'
}) => {
  const isLight = to === 'light' || from === 'light';

  const renderIcon = () => {
    switch (icon) {
      case 'sparkles':
        return <Sparkles className="w-3.5 h-3.5 text-amber-500" />;
      case 'code':
        return <Code className="w-3.5 h-3.5 text-amber-500" />;
      case 'cpu':
        return <Cpu className="w-3.5 h-3.5 text-amber-500" />;
      case 'layers':
        return <Layers className="w-3.5 h-3.5 text-amber-500" />;
      default:
        return <CircleDot className="w-3.5 h-3.5 text-amber-500" />;
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-6 sm:py-8 ${
        from === 'light' && to === 'dark'
          ? 'bg-gradient-to-b from-[#f8fafc] via-[#828896]/10 to-[#0a0c10]'
          : from === 'dark' && to === 'light'
          ? 'bg-gradient-to-b from-[#0a0c10] via-[#828896]/10 to-[#f8fafc]'
          : from === 'light' && to === 'light'
          ? 'bg-[#f8fafc]'
          : 'bg-[#0a0c10]'
      }`}
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-4">
          {/* Left Decorative Line with Fade */}
          <div className="flex-1 flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-amber-500/60' : 'bg-amber-400/40'}`} />
            <div
              className={`h-[1px] flex-1 bg-gradient-to-r ${
                isLight
                  ? 'from-amber-400/40 via-slate-300 to-transparent'
                  : 'from-amber-400/40 via-neutral-800 to-transparent'
              }`}
            />
          </div>

          {/* Center Technical Node Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border shadow-sm backdrop-blur-md ${
              isLight
                ? 'bg-white/90 border-slate-200 text-slate-700 shadow-slate-200/50'
                : 'bg-[#12151e]/90 border-[#1e222d] text-neutral-300 shadow-black/40'
            }`}
          >
            {renderIcon()}
            {label && (
              <span className={`text-[11px] font-mono font-bold tracking-wider uppercase ${isLight ? 'text-slate-800' : 'text-neutral-200'}`}>
                {label}
              </span>
            )}
            {code && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-500 font-semibold border border-amber-400/20">
                {code}
              </span>
            )}
          </motion.div>

          {/* Right Decorative Line with Fade */}
          <div className="flex-1 flex items-center justify-end gap-2">
            <div
              className={`h-[1px] flex-1 bg-gradient-to-l ${
                isLight
                  ? 'from-amber-400/40 via-slate-300 to-transparent'
                  : 'from-amber-400/40 via-neutral-800 to-transparent'
              }`}
            />
            <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-amber-500/60' : 'bg-amber-400/40'}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
