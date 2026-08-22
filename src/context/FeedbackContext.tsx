import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

export type FeedbackType = 'click' | 'section' | 'pop' | 'close' | 'tab' | 'success' | 'toggle' | 'hover';

interface FeedbackContextType {
  feedbackEnabled: boolean;
  setFeedbackEnabled: (enabled: boolean) => void;
  toggleFeedback: () => void;
  playFeedback: (type: FeedbackType) => void;
  triggerHaptic: (pattern?: number | number[]) => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

// Web Audio synthesizer for pristine, zero-dependency, ultra-low-latency UI acoustic feedback
class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    // AudioContext will be lazily initialized on first user gesture to comply with browser autoplay policies
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  private getAudioContext(): AudioContext | null {
    if (this.isMuted) return null;
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  // Crisp micro-click for buttons and navigational elements
  public playClick() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(3, now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1100, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.035);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {
      // Ignore audio synthesis errors in restrictive browser environments
    }
  }

  // Subtle ambient harmonic chord for section transitions
  public playSectionTransition() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.022, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);
      masterGain.connect(ctx.destination);

      const notes = [329.63, 440.0, 659.25]; // E4, A4, E5 harmonic chord
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.02);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.02, now + 0.3);

        noteGain.gain.setValueAtTime(0.35, now + idx * 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now + idx * 0.02);
        osc.stop(now + 0.32);
      });
    } catch {
      // Ignore
    }
  }

  // Soft resonant pop for modal & drawer openings
  public playPop() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.06);

      gain.gain.setValueAtTime(0.045, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.075);
    } catch {
      // Ignore
    }
  }

  // Gentle dismiss tone for closing modals & dropdowns
  public playClose() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.05);

      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.065);
    } catch {
      // Ignore
    }
  }

  // Crisp metallic switch for tab/filter switching
  public playTab() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.03);

      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {
      // Ignore
    }
  }

  // Pleasant dual-tone chime for success / copy / form submission
  public playSuccess() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      const gain2 = ctx.createGain();

      // First note: C5 (523.25 Hz)
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now);
      gain1.gain.setValueAtTime(0.045, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.13);

      // Second note: E5 (659.25 Hz) - slightly delayed
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(659.25, now + 0.07);
      gain2.gain.setValueAtTime(0.05, now + 0.07);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.07);
      osc2.stop(now + 0.3);
    } catch {
      // Ignore
    }
  }

  // Toggle feedback tone
  public playToggle(enabled: boolean) {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      if (enabled) {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      } else {
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.exponentialRampToValueAtTime(330, now + 0.08);
      }

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // Ignore
    }
  }
}

const synthInstance = new SoundSynthesizer();

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read initial preference from localStorage (default: true for full tactile richness, user can toggle anytime)
  const [feedbackEnabled, setFeedbackEnabledState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('joshware_feedback_enabled');
      if (saved !== null) {
        return saved === 'true';
      }
    }
    return true;
  });

  const lastSectionRef = useRef<string>('');
  const lastHapticTimeRef = useRef<number>(0);

  const setFeedbackEnabled = useCallback((enabled: boolean) => {
    setFeedbackEnabledState(enabled);
    synthInstance.setMuted(!enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('joshware_feedback_enabled', String(enabled));
    }
  }, []);

  const triggerHaptic = useCallback((pattern: number | number[] = 10) => {
    if (!feedbackEnabled) return;
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        const now = Date.now();
        // Prevent haptic vibration spamming
        if (now - lastHapticTimeRef.current > 60) {
          navigator.vibrate(pattern);
          lastHapticTimeRef.current = now;
        }
      } catch {
        // Silently catch unsupported vibration permissions
      }
    }
  }, [feedbackEnabled]);

  const playFeedback = useCallback((type: FeedbackType) => {
    if (!feedbackEnabled) return;

    switch (type) {
      case 'click':
        synthInstance.playClick();
        triggerHaptic(8);
        break;
      case 'section':
        synthInstance.playSectionTransition();
        triggerHaptic(10);
        break;
      case 'pop':
        synthInstance.playPop();
        triggerHaptic(12);
        break;
      case 'close':
        synthInstance.playClose();
        triggerHaptic(8);
        break;
      case 'tab':
        synthInstance.playTab();
        triggerHaptic(9);
        break;
      case 'success':
        synthInstance.playSuccess();
        triggerHaptic([10, 30, 15]);
        break;
      case 'toggle':
        synthInstance.playToggle(true);
        triggerHaptic(14);
        break;
      default:
        synthInstance.playClick();
        triggerHaptic(8);
    }
  }, [feedbackEnabled, triggerHaptic]);

  const toggleFeedback = useCallback(() => {
    const nextState = !feedbackEnabled;
    if (nextState) {
      // Temporarily enable synthesizer to play the confirmation sound
      synthInstance.setMuted(false);
      synthInstance.playToggle(true);
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate([12, 40, 15]);
        } catch {
          // Ignore
        }
      }
    } else {
      synthInstance.playToggle(false);
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate(10);
        } catch {
          // Ignore
        }
      }
    }
    setFeedbackEnabled(nextState);
  }, [feedbackEnabled, setFeedbackEnabled]);

  // Sync mute state on mount
  useEffect(() => {
    synthInstance.setMuted(!feedbackEnabled);
  }, [feedbackEnabled]);

  // Global listener for interactive button & link clicks to ensure subtle tactile feedback across all views
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!feedbackEnabled) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if target or ancestor is interactive and hasn't explicitly disabled feedback
      const interactiveEl = target.closest<HTMLElement>(
        'button, a, [role="button"], input[type="submit"], input[type="button"], [data-feedback="click"]'
      );

      if (interactiveEl) {
        // Skip if marked with data-feedback="custom" to prevent double feedback
        if (interactiveEl.getAttribute('data-feedback') === 'custom') return;

        synthInstance.playClick();
        triggerHaptic(8);
      }
    };

    window.addEventListener('click', handleDocumentClick, { capture: true, passive: true });
    return () => window.removeEventListener('click', handleDocumentClick, { capture: true });
  }, [feedbackEnabled, triggerHaptic]);

  return (
    <FeedbackContext.Provider
      value={{
        feedbackEnabled,
        setFeedbackEnabled,
        toggleFeedback,
        playFeedback,
        triggerHaptic,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = (): FeedbackContextType => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};
