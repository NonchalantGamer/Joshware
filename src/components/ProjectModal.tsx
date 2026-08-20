import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Layers, Code, CheckCircle2, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { Cosmo3DCanvas } from './Cosmo3DCanvas';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-case-study-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-case-study-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border overflow-hidden transition-colors ${
            isDark
              ? 'bg-neutral-900 border-neutral-800 text-neutral-100'
              : 'bg-white border-neutral-300 text-neutral-900'
          }`}
        >
          {/* Header Bar */}
          <div
            className={`flex items-center justify-between px-6 py-4 border-b ${
              isDark ? 'bg-neutral-950/70 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-amber-400/10 text-amber-500 border border-amber-500/20">
                {project.badge}
              </span>
              <h2 className="font-display font-bold text-base sm:text-lg tracking-tight">
                {project.title} — Case Study
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                    isDark
                      ? 'border-amber-400/30 bg-amber-400/10 text-amber-400 hover:bg-amber-400/20'
                      : 'border-neutral-900 bg-neutral-950 text-white hover:bg-neutral-800'
                  }`}
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Case Study"
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

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
            {/* Media / Interactive Preview */}
            {project.id === 'cosmo3d' ? (
              <div className="space-y-2">
                <p className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Live Interactive 3D Canvas (Drag to rotate, switch geometry below):</span>
                </p>
                <Cosmo3DCanvas isDark={isDark} interactive={true} />
              </div>
            ) : (
              <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-neutral-800">
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
                <p className="text-xs font-mono text-neutral-400 uppercase">Context / Client</p>
                <p className="text-sm font-semibold text-neutral-200 dark:text-neutral-100 mt-1">
                  {project.caseStudy.clientOrContext}
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                <p className="text-xs font-mono text-neutral-400 uppercase">Role</p>
                <p className="text-sm font-semibold text-neutral-200 dark:text-neutral-100 mt-1">
                  {project.caseStudy.role}
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'} sm:col-span-2 lg:col-span-1`}>
                <p className="text-xs font-mono text-neutral-400 uppercase">Live Deployed Endpoint</p>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-mono font-semibold text-amber-500 hover:underline flex items-center gap-1 mt-1 truncate"
                  >
                    <span>{project.liveUrl.replace('https://', '')}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                ) : (
                  <p className="text-sm font-mono text-neutral-400 mt-1">Embedded In-Page Suite</p>
                )}
              </div>
            </div>

            {/* Problem & Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                <h4 className="font-display font-bold text-sm tracking-tight text-red-400 flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>The Problem & Core Challenge</span>
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                <h4 className="font-display font-bold text-sm tracking-tight text-emerald-400 flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Engineering & UX Solution</span>
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Key Functional Modules */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-500 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Key Deliverables & Implemented Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.caseStudy.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-lg border text-xs leading-relaxed ${
                      isDark ? 'bg-neutral-950/50 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                    }`}
                  >
                    <span className="text-amber-500 font-mono font-bold mr-1.5">0{idx + 1}.</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Architecture & Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-500 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>Technical Architecture & Engineering Decisions</span>
              </h4>
              <div className={`p-4 rounded-xl border space-y-2.5 ${isDark ? 'bg-neutral-950/30 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                {project.caseStudy.technicalArchitecture.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used Pills */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-neutral-400 uppercase">Technologies Deployed</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono rounded-lg border border-neutral-800 bg-neutral-900/80 text-amber-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-amber-400/5 border-amber-400/20' : 'bg-amber-50 border-amber-200'}`}>
              <p className="text-xs font-mono text-amber-500 uppercase font-semibold">Project Impact & Outcome</p>
              <p className="text-xs sm:text-sm text-neutral-300 dark:text-neutral-200 mt-1 leading-relaxed">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
