import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, MapPin, Globe, ExternalLink, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { WhatsappIcon, XIcon, GmailIcon } from './ui/BrandIcons';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="cv-modal-content"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-[#1e222d] bg-[#0e1017] text-neutral-100 overflow-hidden shadow-2xl"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#1e222d] bg-[#0a0c10] flex-shrink-0">
            <div className="flex items-center gap-2 truncate mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
              <h2 className="font-display font-bold text-xs sm:text-base tracking-tight truncate text-white">
                Curriculum Vitae — Joshua Egesi
              </h2>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-[#1e222d] bg-[#11141c] text-neutral-300 hover:bg-[#181d28] hover:text-white transition-colors touch-manipulation cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close CV Modal"
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg border border-[#1e222d] text-neutral-400 hover:text-neutral-100 hover:bg-[#151922] transition-colors flex items-center justify-center touch-manipulation cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="p-4 sm:p-10 overflow-y-auto space-y-6 sm:space-y-8 font-sans">
            {/* Profile Intro */}
            <div className="border-b border-[#1e222d] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">
                    Joshua Egesi Enyinnaya
                  </h1>
                  <p className="text-amber-400 font-mono text-sm sm:text-base mt-1 font-semibold">
                    Full-Stack Developer & UI/UX Designer
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <GmailIcon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <a href="mailto:joshuaegesienyinnaya@gmail.com" className="hover:underline hover:text-amber-400">joshuaegesienyinnaya@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <WhatsappIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <a href="https://wa.me/2347043534602" target="_blank" rel="noreferrer" className="hover:underline hover:text-emerald-400">+234 704 353 4602 (WhatsApp)</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                    <a href="https://x.com/josh_ware25" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">x.com/josh_ware25</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed max-w-3xl text-neutral-400">
                Versatile Full-Stack Developer and UI/UX Designer with a strong track record of conceptualizing, designing, and engineering high-impact web applications, wholesale e-commerce platforms, and interactive 3D web systems. Adept at bridging technical systems architecture with ergonomic interface design.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400">
                Core Competencies & Tech Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl border border-[#1e222d] bg-[#0a0c10]">
                  <p className="text-xs font-bold mb-1 text-neutral-200">Frontend Engineering</p>
                  <p className="text-xs leading-normal text-neutral-400">
                    React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3, State Management.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-[#1e222d] bg-[#0a0c10]">
                  <p className="text-xs font-bold mb-1 text-neutral-200">Backend & Database</p>
                  <p className="text-xs leading-normal text-neutral-400">
                    Firebase / Firestore, Supabase, MongoDB, Node.js, Express, REST APIs, Authentication.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-[#1e222d] bg-[#0a0c10]">
                  <p className="text-xs font-bold mb-1 text-neutral-200">Design & 3D Web</p>
                  <p className="text-xs leading-normal text-neutral-400">
                    UI/UX Design, Figma, Wireframing, Interaction Design, WebGL / Three.js, Spatial 3D.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400">
                Professional Experience
              </h3>

              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 rounded-xl border border-[#1e222d] bg-[#0a0c10]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <h4 className="font-display font-bold text-sm text-neutral-100">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-amber-400 font-mono">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">{exp.period}</span>
                  </div>

                  <p className="text-xs mb-3 text-neutral-400">{exp.overview}</p>

                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Projects Highlight */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400">
                Featured Built Projects
              </h3>

              <div className="space-y-3">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl border border-[#1e222d] bg-[#0a0c10]"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-neutral-200">
                        {proj.title} <span className="font-mono text-xs text-amber-400 font-normal">({proj.category})</span>
                      </h4>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs mt-1 text-neutral-400">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono rounded border border-[#1e222d] bg-[#11141c] text-neutral-300"
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
