import React from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useFeedback } from '../../context/FeedbackContext';

interface FeedbackToggleProps {
  variant?: 'navbar' | 'drawer' | 'floating' | 'card';
  className?: string;
}

export const FeedbackToggle: React.FC<FeedbackToggleProps> = ({
  variant = 'navbar',
  className = ''
}) => {
  const { feedbackEnabled, toggleFeedback } = useFeedback();

  if (variant === 'drawer') {
    return (
      <div
        id="feedback-toggle-drawer-container"
        className={`flex items-center justify-between p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60 ${className}`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
              feedbackEnabled
                ? 'border-amber-500/40 bg-amber-500/10 text-amber-400'
                : 'border-neutral-700 bg-neutral-800 text-neutral-400'
            }`}
          >
            {feedbackEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-neutral-200">
              Acoustic & Haptics
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              {feedbackEnabled ? 'Sound & Tactile enabled' : 'Muted'}
            </span>
          </div>
        </div>

        <motion.button
          type="button"
          id="drawer-feedback-toggle-btn"
          data-feedback="custom"
          onClick={toggleFeedback}
          whileTap={{ scale: 0.92 }}
          aria-label={feedbackEnabled ? 'Mute audio & haptics' : 'Enable audio & haptics'}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
            feedbackEnabled ? 'bg-amber-400' : 'bg-neutral-700'
          }`}
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-neutral-950 shadow-md ring-0 transition duration-200 ease-in-out ${
              feedbackEnabled ? 'translate-x-5 bg-neutral-950' : 'translate-x-0 bg-neutral-300'
            }`}
          />
        </motion.button>
      </div>
    );
  }

  // Default 'navbar' minimal compact pill button
  return (
    <motion.button
      type="button"
      id="navbar-feedback-toggle-btn"
      data-feedback="custom"
      onClick={toggleFeedback}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      title={feedbackEnabled ? 'Mute Sound & Haptics' : 'Enable Sound & Haptics'}
      aria-label={feedbackEnabled ? 'Mute Sound & Haptics' : 'Enable Sound & Haptics'}
      className={`group relative min-w-[38px] sm:min-w-[40px] h-[38px] sm:h-[40px] px-2.5 sm:px-3 rounded-full border transition-all flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
        feedbackEnabled
          ? 'border-amber-400/50 bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10 hover:border-amber-400 hover:bg-amber-400/20'
          : 'border-neutral-800 bg-neutral-900/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800'
      } ${className}`}
    >
      {feedbackEnabled ? (
        <>
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-400 transition-transform group-hover:scale-110" />
            <motion.span
              animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.95, 1.15, 0.95] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.9)]"
            />
          </div>
          <span className="hidden xl:inline text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-300">
            SFX
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-400 transition-transform group-hover:scale-110" />
          <span className="hidden xl:inline text-[10px] font-mono uppercase tracking-wider font-semibold text-neutral-500">
            Muted
          </span>
        </>
      )}
    </motion.button>
  );
};
