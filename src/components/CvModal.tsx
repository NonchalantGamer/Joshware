import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Mail, MapPin, Globe, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, isDark }) => {
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
            className={`flex items-center justify-between px-6 py-4 border-b ${
              isDark ? 'bg-neutral-950/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <h2 className="font-display font-bold text-sm sm:text-base tracking-tight">
                Curriculum Vitae — Joshua Egesi Enyinnaya
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
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
                className={`p-1.5 rounded-lg border transition-colors ${
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
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans">
            {/* Profile Intro */}
            <div className="border-b pb-6 border-neutral-800/40 dark:border-neutral-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                    Joshua Egesi Enyinnaya
                  </h1>
                  <p className="text-amber-500 font-mono text-sm sm:text-base mt-1 font-semibold">
                    Full-Stack Developer & UI/UX Designer
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-500" />
                    <span>joshuaegesienyinnaya@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-amber-500" />
                    <span>eagle-excel-ventures.vercel.app</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
                Versatile Full-Stack Developer and UI/UX Designer with a strong track record of conceptualizing, designing, and engineering high-impact web applications, wholesale e-commerce platforms, and interactive 3D web systems. Adept at bridging technical systems architecture with ergonomic interface design.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-500">
                Core Competencies & Tech Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                  <p className="text-xs font-bold text-neutral-200 dark:text-neutral-100 mb-1">Frontend Engineering</p>
                  <p className="text-xs text-neutral-400 leading-normal">
                    React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3, State Management.
                  </p>
                </div>
                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                  <p className="text-xs font-bold text-neutral-200 dark:text-neutral-100 mb-1">Backend & Database</p>
                  <p className="text-xs text-neutral-400 leading-normal">
                    Firebase / Firestore, Supabase, MongoDB, Node.js, Express, REST APIs, Authentication.
                  </p>
                </div>
                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                  <p className="text-xs font-bold text-neutral-200 dark:text-neutral-100 mb-1">Design & 3D Web</p>
                  <p className="text-xs text-neutral-400 leading-normal">
                    UI/UX Design, Figma, Wireframing, Interaction Design, WebGL / Three.js, Spatial 3D.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-500">
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
                      <h4 className="font-display font-bold text-sm text-neutral-100 dark:text-neutral-100">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-amber-500 font-mono">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">{exp.period}</span>
                  </div>

                  <p className="text-xs text-neutral-400 mb-3">{exp.overview}</p>

                  <ul className="space-y-1.5 text-xs text-neutral-300">
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
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-500">
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
                      <h4 className="font-bold text-sm text-neutral-200 dark:text-neutral-100">
                        {proj.title} <span className="font-mono text-xs text-amber-500 font-normal">({proj.category})</span>
                      </h4>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-amber-500 hover:underline flex items-center gap-1"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono rounded border border-neutral-800 bg-neutral-900/60 text-neutral-300"
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
