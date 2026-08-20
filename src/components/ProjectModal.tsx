import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Layers, Code, CheckCircle2, ShieldAlert, Cpu, Sparkles, Image as ImageIcon, ZoomIn, Eye } from 'lucide-react';
import { Project } from '../types';
import { Cosmo3DCanvas } from './Cosmo3DCanvas';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  const [zoomScreenshot, setZoomScreenshot] = useState<{
    title: string;
    caption: string;
    url: string;
    tag?: string;
  } | null>(null);

  useEffect(() => {
    setZoomScreenshot(null);
  }, [project]);

  useEffect(() => {
    if (project) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          if (zoomScreenshot) {
            setZoomScreenshot(null);
          } else {
            onClose();
          }
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose, zoomScreenshot]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-case-study-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-case-study-content"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border overflow-hidden transition-colors shadow-2xl ${
            isDark
              ? 'bg-neutral-900 border-neutral-800 text-neutral-100'
              : 'bg-white border-neutral-300 text-neutral-900'
          }`}
        >
          {/* Header Bar */}
          <div
            className={`flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b flex-shrink-0 ${
              isDark ? 'bg-neutral-950/70 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 truncate mr-2">
              <span className="px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-mono font-medium rounded-full bg-amber-400/10 text-amber-500 border border-amber-500/20 flex-shrink-0">
                {project.badge}
              </span>
              <h2 className="font-display font-bold text-sm sm:text-lg tracking-tight truncate">
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 min-h-[40px] px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors touch-manipulation ${
                    isDark
                      ? 'border-amber-400/30 bg-amber-400/10 text-amber-400 hover:bg-amber-400/20'
                      : 'border-neutral-900 bg-neutral-950 text-white hover:bg-neutral-800'
                  }`}
                >
                  <span className="hidden xs:inline">Launch Live</span>
                  <span className="xs:hidden">Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Case Study"
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

          {/* Body Content */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-8 font-sans">
            {/* Special Interactive Canvas for Cosmo3D */}
            {project.id === 'cosmo3d' && (
              <div className="space-y-2">
                <p className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Live Interactive 3D Canvas (Drag to rotate, switch geometry below):</span>
                </p>
                <Cosmo3DCanvas isDark={isDark} interactive={true} />
              </div>
            )}

            {/* All Screenshots Display with Descriptions */}
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="space-y-6">
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3.5 ${
                  isDark ? 'border-neutral-800' : 'border-neutral-300'
                }`}>
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <h3 className={`text-sm sm:text-base font-mono font-bold uppercase tracking-wider ${
                      isDark ? 'text-amber-400' : 'text-neutral-900'
                    }`}>
                      System Architecture & Interface Showcase ({project.screenshots.length} Views)
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    All system modules detailed below
                  </span>
                </div>

                <div className="space-y-8">
                  {project.screenshots.map((s, idx) => (
                    <div
                      key={s.title}
                      className={`rounded-2xl border overflow-hidden transition-all duration-300 shadow-sm ${
                        isDark
                          ? 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
                          : 'bg-white border-neutral-300 hover:border-neutral-400'
                      }`}
                    >
                      {/* Screenshot Header */}
                      <div className={`px-4 sm:px-6 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 ${
                        isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-neutral-100/90 border-neutral-200'
                      }`}>
                        <div className="flex items-center gap-2.5">
                          <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-400/20">
                            0{idx + 1}
                          </span>
                          {s.tag && (
                            <span className={`px-2 py-0.5 rounded text-xs font-mono font-semibold uppercase border ${
                              isDark ? 'bg-neutral-950 border-neutral-800 text-neutral-300' : 'bg-white border-neutral-300 text-neutral-800'
                            }`}>
                              {s.tag}
                            </span>
                          )}
                          <h4 className={`text-sm sm:text-base font-display font-bold ${
                            isDark ? 'text-white' : 'text-neutral-950'
                          }`}>
                            {s.title}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setZoomScreenshot(s)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors flex items-center gap-1.5 ${
                              isDark
                                ? 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                                : 'bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-50'
                            }`}
                          >
                            <ZoomIn className="w-3.5 h-3.5 text-amber-500" />
                            <span>Preview</span>
                          </button>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors flex items-center gap-1.5 ${
                              isDark
                                ? 'bg-neutral-950 border-neutral-800 text-amber-400 hover:border-neutral-700'
                                : 'bg-white border-neutral-300 text-amber-900 font-semibold hover:bg-neutral-50'
                            }`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Full Res</span>
                          </a>
                        </div>
                      </div>

                      {/* Screenshot Image Container */}
                      <div
                        onClick={() => setZoomScreenshot(s)}
                        className="relative w-full bg-neutral-950/60 group cursor-zoom-in overflow-hidden border-b border-neutral-800/60 flex items-center justify-center min-h-[220px]"
                      >
                        <img
                          src={s.url}
                          alt={s.title}
                          className="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="px-3.5 py-1.5 rounded-xl bg-neutral-950/90 text-amber-400 font-mono text-xs border border-neutral-700 flex items-center gap-2 shadow-xl backdrop-blur-md">
                            <ZoomIn className="w-4 h-4" />
                            <span>Click to enlarge screenshot</span>
                          </span>
                        </div>
                      </div>

                      {/* Screenshot Description Box */}
                      <div className={`p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-neutral-300 bg-neutral-900/30' : 'text-neutral-700 bg-neutral-50/70'
                      }`}>
                        <div className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                          <div>
                            <span className={`font-mono text-xs font-bold uppercase mr-2 tracking-wider ${
                              isDark ? 'text-amber-400' : 'text-amber-800'
                            }`}>
                              Interface Architecture & Features:
                            </span>
                            <span className="leading-relaxed">{s.caption}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : project.id !== 'cosmo3d' && (
              /* Fallback Single Image */
              <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-neutral-800">
                <img
                  src={project.previewImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                      {project.tagline}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                <p className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-600 font-semibold'}`}>
                  Context / Client
                </p>
                <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>
                  {project.caseStudy.clientOrContext}
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                <p className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-600 font-semibold'}`}>
                  Role
                </p>
                <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>
                  {project.caseStudy.role}
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'} sm:col-span-2 lg:col-span-1`}>
                <p className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-600 font-semibold'}`}>
                  Live Deployed Endpoint
                </p>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-mono font-semibold text-amber-600 dark:text-amber-500 hover:underline flex items-center gap-1 mt-1 truncate"
                  >
                    <span>{project.liveUrl.replace('https://', '')}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                ) : (
                  <p className={`text-sm font-mono mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'}`}>
                    Embedded In-Page Suite
                  </p>
                )}
              </div>
            </div>

            {/* Problem & Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                <h4 className="font-display font-bold text-sm tracking-tight text-red-500 dark:text-red-400 flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>The Problem & Core Challenge</span>
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                <h4 className="font-display font-bold text-sm tracking-tight text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Engineering & UX Solution</span>
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Key Functional Modules */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-600 dark:text-amber-500 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Key Deliverables & Implemented Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.caseStudy.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-lg border text-xs leading-relaxed ${
                      isDark ? 'bg-neutral-950/50 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    <span className="text-amber-600 dark:text-amber-500 font-mono font-bold mr-1.5">0{idx + 1}.</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Architecture & Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-600 dark:text-amber-500 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>Technical Architecture & Engineering Decisions</span>
              </h4>
              <div className={`p-4 rounded-xl border space-y-2.5 ${isDark ? 'bg-neutral-950/30 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                {project.caseStudy.technicalArchitecture.map((arch, idx) => (
                  <div key={idx} className={`flex items-start gap-2.5 text-xs ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used Pills */}
            <div className="space-y-2">
              <p className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-600 font-semibold'}`}>
                Technologies Deployed
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 text-xs font-mono rounded-lg border ${
                      isDark
                        ? 'border-neutral-800 bg-neutral-900/80 text-amber-400'
                        : 'border-amber-200 bg-amber-50 text-amber-900 font-semibold'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-amber-400/5 border-amber-400/20' : 'bg-amber-50 border-amber-200'}`}>
              <p className="text-xs font-mono text-amber-700 dark:text-amber-500 uppercase font-semibold">
                Project Impact & Outcome
              </p>
              <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Full-Screen Screenshot Lightbox Overlay */}
      {zoomScreenshot && (
        <div
          id="screenshot-lightbox-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
          onClick={() => setZoomScreenshot(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-950 text-white shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-900/90">
              <div className="flex items-center gap-2">
                {zoomScreenshot.tag && (
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-400 text-neutral-950">
                    {zoomScreenshot.tag}
                  </span>
                )}
                <h4 className="font-display font-bold text-sm sm:text-base">
                  {zoomScreenshot.title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={zoomScreenshot.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 text-xs font-mono rounded-lg border border-neutral-700 bg-neutral-800 text-amber-400 hover:bg-neutral-700 transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open High Res</span>
                </a>
                <button
                  type="button"
                  onClick={() => setZoomScreenshot(null)}
                  className="p-1.5 rounded-lg border border-neutral-700 hover:bg-neutral-800 text-neutral-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="overflow-auto p-4 flex items-center justify-center bg-black/40">
              <img
                src={zoomScreenshot.url}
                alt={zoomScreenshot.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 border-t border-neutral-800 bg-neutral-900/90 text-xs sm:text-sm text-neutral-300 font-sans">
              <p>
                <strong className="text-amber-400 font-mono mr-1.5">Overview:</strong>
                {zoomScreenshot.caption}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
