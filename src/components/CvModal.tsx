import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, MapPin, Globe, ExternalLink, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { WhatsappIcon, XIcon, GmailIcon } from './ui/BrandIcons';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, isDark }) => {
  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        id="cv-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="cv-modal-content"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border overflow-hidden transition-colors ${
            isDark
              ? 'bg-neutral-900 border-neutral-800 text-neutral-100'
              : 'bg-white border-neutral-300 text-neutral-900'
          }`}
        >
          {/* Header Action Bar */}
          <div
            className={`flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b flex-shrink-0 ${
              isDark ? 'bg-neutral-950/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2 truncate mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
              <h2 className="font-display font-bold text-xs sm:text-base tracking-tight truncate">
                Curriculum Vitae — Joshua Egesi
              </h2>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={handlePrint}
                className={`inline-flex items-center gap-1.5 min-h-[40px] px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors touch-manipulation ${
                  isDark
                    ? 'border-neutral-700 text-neutral-300 hover:bg-neutral-800'
                    : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close CV Modal"
                className={`min-w-[40px] min-h-[40px] p-2 rounded-lg border transition-colors flex items-center justify-center touch-manipulation ${
                  isDark
                    ? 'border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800'
                    : 'border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="p-4 sm:p-10 overflow-y-auto space-y-6 sm:space-y-8 font-sans">
            {/* Profile Intro */}
            <div className={`border-b pb-6 ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1
                    className={`text-2xl sm:text-3xl font-display font-extrabold tracking-tight ${
                      isDark ? 'text-white' : 'text-neutral-950'
                    }`}
                  >
                    Joshua Egesi Enyinnaya
                  </h1>
                  <p className="text-amber-600 dark:text-amber-500 font-mono text-sm sm:text-base mt-1 font-semibold">
                    Full-Stack Developer & UI/UX Designer
                  </p>
                </div>

                <div className={`space-y-1 text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  <div className="flex items-center gap-2">
                    <GmailIcon className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <a href="mailto:joshuaegesienyinnaya@gmail.com" className="hover:underline">joshuaegesienyinnaya@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <WhatsappIcon className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <a href="https://wa.me/2347043534602" target="_blank" rel="noreferrer" className="hover:underline">+234 704 353 4602 (WhatsApp)</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                    <a href="https://x.com/josh_ware25" target="_blank" rel="noreferrer" className="hover:underline">x.com/josh_ware25</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <p className={`mt-4 text-xs sm:text-sm leading-relaxed max-w-3xl ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
                Versatile Full-Stack Developer and UI/UX Designer with a strong track record of conceptualizing, designing, and engineering high-impact web applications, wholesale e-commerce platforms, and interactive 3D web systems. Adept at bridging technical systems architecture with ergonomic interface design.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-600 dark:text-amber-500">
                Core Competencies & Tech Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                  <p className={`text-xs font-bold mb-1 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>Frontend Engineering</p>
                  <p className={`text-xs leading-normal ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
                    React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3, State Management.
                  </p>
                </div>
                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                  <p className={`text-xs font-bold mb-1 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>Backend & Database</p>
                  <p className={`text-xs leading-normal ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
                    Firebase / Firestore, Supabase, MongoDB, Node.js, Express, REST APIs, Authentication.
                  </p>
                </div>
                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                  <p className={`text-xs font-bold mb-1 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>Design & 3D Web</p>
                  <p className={`text-xs leading-normal ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
                    UI/UX Design, Figma, Wireframing, Interaction Design, WebGL / Three.js, Spatial 3D.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-600 dark:text-amber-500">
                Professional Experience
              </h3>

              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className={`p-4 rounded-xl border ${
                    isDark ? 'bg-neutral-950/30 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <h4 className={`font-display font-bold text-sm ${isDark ? 'text-neutral-100' : 'text-neutral-950'}`}>
                        {exp.role}
                      </h4>
                      <p className="text-xs text-amber-600 dark:text-amber-500 font-mono">{exp.company} • {exp.location}</p>
                    </div>
                    <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'}`}>{exp.period}</span>
                  </div>

                  <p className={`text-xs mb-3 ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>{exp.overview}</p>

                  <ul className={`space-y-1.5 text-xs ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Projects Highlight */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-600 dark:text-amber-500">
                Featured Built Projects
              </h3>

              <div className="space-y-3">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className={`p-4 rounded-xl border ${
                      isDark ? 'bg-neutral-950/30 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`font-bold text-sm ${isDark ? 'text-neutral-200' : 'text-neutral-950'}`}>
                        {proj.title} <span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-normal">({proj.category})</span>
                      </h4>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-amber-600 dark:text-amber-500 hover:underline flex items-center gap-1"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded border ${
                            isDark
                              ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300'
                              : 'border-neutral-200 bg-neutral-100 text-neutral-800 font-medium'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
