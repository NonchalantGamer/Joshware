import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  MapPin,
  ExternalLink,
  Download,
  FileText,
  Eye,
  Check,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
  Code2,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon, GmailIcon } from './ui/BrandIcons';
import { useFeedback } from '../context/FeedbackContext';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CV_IMAGE_1 = 'https://res.cloudinary.com/doujptiz/image/upload/v1787427886/Joshua_Enyinnaya_CV_b0uz3n.jpg';
const CV_IMAGE_2 = 'https://res.cloudinary.com/doujptiz/image/upload/v1787428684/file_00000000935882468e3e5639d1e206e6_benaaf.png';

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { playFeedback } = useFeedback();
  const [activeTab, setActiveTab] = useState<'ats' | 'doc1' | 'doc2'>('ats');
  const [isPrintDialogOpen, setIsPrintDialogOpen] = useState<boolean>(false);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const printDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          if (isPrintDialogOpen) {
            setIsPrintDialogOpen(false);
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
  }, [isOpen, onClose, isPrintDialogOpen]);

  // Click outside listener for Print Dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (printDialogRef.current && !printDialogRef.current.contains(e.target as Node)) {
        setIsPrintDialogOpen(false);
      }
    };
    if (isPrintDialogOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPrintDialogOpen]);

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    playFeedback('success');
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  /**
   * Helper to print high-resolution image CV documents accurately
   */
  const printDocumentImage = (imageUrl: string, title: string) => {
    setIsPrinting(true);
    playFeedback('click');
    setIsPrintDialogOpen(false);

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      // Fallback if popup blocked
      window.open(imageUrl, '_blank');
      setIsPrinting(false);
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title} — Joshua Egesi Enyinnaya</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              background-color: #ffffff;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            img {
              width: 100%;
              max-width: 210mm;
              height: auto;
              max-height: 297mm;
              object-fit: contain;
              display: block;
              margin: 0 auto;
            }
            @media print {
              body {
                background: transparent;
              }
              img {
                width: 100vw;
                height: 100vh;
                object-fit: contain;
                page-break-inside: avoid;
              }
            }
          </style>
        </head>
        <body>
          <img src="${imageUrl}" alt="${title}" onload="setTimeout(() => { window.print(); window.close(); }, 500);" />
        </body>
      </html>
    `);
    printWindow.document.close();
    setIsPrinting(false);
  };

  const handlePrintWebLayout = () => {
    playFeedback('click');
    setIsPrintDialogOpen(false);
    setActiveTab('ats');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <AnimatePresence>
      <div
        id="cv-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="cv-modal-content"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-[#1e222d] bg-[#0c0e14] text-neutral-100 overflow-hidden shadow-2xl"
        >
          {/* Header Action Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-[#1e222d] bg-[#08090d] flex-shrink-0 gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
              <div className="truncate">
                <h2 className="font-display font-bold text-xs sm:text-sm tracking-tight truncate text-white">
                  Resume / Curriculum Vitae
                </h2>
                <p className="text-[10px] sm:text-xs font-mono text-neutral-400 truncate">
                  Joshua Egesi Enyinnaya • Full-Stack Developer & UI/UX Designer
                </p>
              </div>
            </div>

            {/* Controls: View Tabs + Print / PDF Dropdown + Close */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {/* Layout Switcher Tabs */}
              <div className="flex items-center p-0.5 rounded-lg border border-[#1e222d] bg-[#11141c] text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => {
                    playFeedback('tab');
                    setActiveTab('ats');
                  }}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'ats'
                      ? 'bg-amber-400 text-neutral-950 font-bold shadow-xs'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  ATS Text
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playFeedback('tab');
                    setActiveTab('doc1');
                  }}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'doc1'
                      ? 'bg-amber-400 text-neutral-950 font-bold shadow-xs'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Doc Form 1
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playFeedback('tab');
                    setActiveTab('doc2');
                  }}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'doc2'
                      ? 'bg-amber-400 text-neutral-950 font-bold shadow-xs'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Doc Form 2
                </button>
              </div>

              {/* Print / PDF Dropdown Menu */}
              <div className="relative" ref={printDialogRef}>
                <button
                  type="button"
                  id="cv-print-dropdown-btn"
                  onClick={() => {
                    playFeedback('click');
                    setIsPrintDialogOpen((prev) => !prev);
                  }}
                  aria-expanded={isPrintDialogOpen}
                  className="inline-flex items-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 transition-all touch-manipulation cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Print / PDF</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isPrintDialogOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Print Options Dropdown Panel */}
                <AnimatePresence>
                  {isPrintDialogOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-xl border border-neutral-700/80 bg-neutral-900/98 text-neutral-100 p-2.5 shadow-2xl backdrop-blur-xl z-50 divide-y divide-neutral-800"
                    >
                      <div className="pb-2 px-2">
                        <p className="text-xs font-bold text-neutral-200">Select Print / PDF Document</p>
                        <p className="text-[10px] font-mono text-neutral-400">Choose preferred CV format for printing or saving</p>
                      </div>

                      {/* Format 1: Technical ATS Format */}
                      <div className="py-2 space-y-1">
                        <button
                          type="button"
                          onClick={() => printDocumentImage(CV_IMAGE_1, 'Technical ATS Resume')}
                          className="w-full flex items-center justify-between p-2 rounded-lg text-left hover:bg-neutral-800 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors">
                                Technical Standard CV (Format 1)
                              </p>
                              <p className="text-[10px] font-mono text-neutral-400">High-Resolution ATS-Ready Layout</p>
                            </div>
                          </div>
                          <Printer className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                        </button>

                        <div className="flex items-center gap-2 pl-9 pr-2">
                          <a
                            href={CV_IMAGE_1}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] font-mono text-amber-400 hover:underline flex items-center gap-1"
                          >
                            <span>Open High-Res</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>

                      {/* Format 2: Formatted Clean Layout */}
                      <div className="py-2 space-y-1">
                        <button
                          type="button"
                          onClick={() => printDocumentImage(CV_IMAGE_2, 'Formatted Clean Resume')}
                          className="w-full flex items-center justify-between p-2 rounded-lg text-left hover:bg-neutral-800 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-neutral-200 group-hover:text-blue-400 transition-colors">
                                Modern Visual CV (Format 2)
                              </p>
                              <p className="text-[10px] font-mono text-neutral-400">Crisp 1-Page Summary Layout</p>
                            </div>
                          </div>
                          <Printer className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                        </button>

                        <div className="flex items-center gap-2 pl-9 pr-2">
                          <a
                            href={CV_IMAGE_2}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] font-mono text-blue-400 hover:underline flex items-center gap-1"
                          >
                            <span>Open High-Res</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>

                      {/* Option 3: Print Web ATS Document */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={handlePrintWebLayout}
                          className="w-full flex items-center justify-between p-2 rounded-lg text-left hover:bg-neutral-800 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                              <Printer className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">
                                Print Web ATS View
                              </p>
                              <p className="text-[10px] font-mono text-neutral-400">Native browser print dialog</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close CV Modal"
                className="min-w-[38px] min-h-[38px] p-2 rounded-lg border border-[#1e222d] text-neutral-400 hover:text-neutral-100 hover:bg-[#151922] transition-colors flex items-center justify-center touch-manipulation cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Main Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 font-sans scroll-smooth">
            {/* VIEW TAB 1: ATS Text Layout */}
            {activeTab === 'ats' && (
              <div id="printable-ats-resume" className="space-y-6 max-w-3xl mx-auto">
                {/* HEADER SECTION */}
                <div className="border-b border-neutral-800 pb-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">
                        Joshua Egesi Enyinnaya
                      </h1>
                      <p className="text-amber-400 font-mono text-sm sm:text-base font-semibold mt-1">
                        Full-Stack Developer | UI/UX Designer
                      </p>
                    </div>

                    {/* Contact details with prioritized hierarchy: GitHub, LinkedIn, Portfolio > X */}
                    <div className="flex flex-col gap-1 text-xs font-mono text-neutral-300">
                      <div className="flex items-center gap-2">
                        <GmailIcon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <a
                          href="mailto:joshuaegesienyinnaya@gmail.com"
                          className="hover:underline hover:text-amber-400"
                        >
                          joshuaegesienyinnaya@gmail.com
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <WhatsappIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <a
                          href="https://wa.me/2347043534602"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline hover:text-emerald-400"
                        >
                          +234 704 353 4602 (Phone / WhatsApp)
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                        <span className="text-neutral-400">Lagos, Nigeria</span>
                      </div>

                      {/* Prioritized links: GitHub, LinkedIn, Portfolio */}
                      <div className="pt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-400">
                        <a
                          href="https://github.com/NonchalantGamer"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-neutral-200 hover:text-amber-400 transition-colors"
                        >
                          <GithubIcon className="w-3 h-3 text-neutral-300" />
                          <span>github.com/NonchalantGamer</span>
                        </a>

                        <a
                          href="https://www.linkedin.com/in/joshua-enyinnaya"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-neutral-200 hover:text-amber-400 transition-colors"
                        >
                          <LinkedinIcon className="w-3 h-3 text-blue-400" />
                          <span>linkedin.com/in/joshua-enyinnaya</span>
                        </a>

                        <a
                          href="https://joshware.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-amber-300 hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>joshware.vercel.app</span>
                        </a>

                        <a
                          href="https://x.com/josh_ware25"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                        >
                          <XIcon className="w-3 h-3" />
                          <span>x.com/josh_ware25</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROFESSIONAL SUMMARY */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Professional Summary</span>
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-300">
                    Early-career Full-Stack Developer and UI/UX Designer with hands-on project experience developing responsive web applications, wholesale e-commerce platforms, CMS/CRM systems, and interactive 3D web experiences. Skilled across modern frontend-to-backend web technologies including React, Next.js, TypeScript, Node.js, and cloud databases, with a strong focus on clean architecture, component design, and production deployment.
                  </p>
                </div>

                {/* TECHNICAL SKILLS */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Technical Skills</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60">
                      <p className="text-xs font-bold text-neutral-200 mb-1">Frontend Development</p>
                      <p className="text-xs leading-relaxed text-neutral-400 font-mono">
                        React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, State Management
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60">
                      <p className="text-xs font-bold text-neutral-200 mb-1">Backend & Database</p>
                      <p className="text-xs leading-relaxed text-neutral-400 font-mono">
                        Node.js, Express, Firebase, Firestore, Supabase, MongoDB, REST APIs, Authentication
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60">
                      <p className="text-xs font-bold text-neutral-200 mb-1">UI/UX & Design</p>
                      <p className="text-xs leading-relaxed text-neutral-400 font-mono">
                        Figma, UI/UX Design, Wireframing, Interaction Design
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60">
                      <p className="text-xs font-bold text-neutral-200 mb-1">3D & Interactive Web</p>
                      <p className="text-xs leading-relaxed text-neutral-400 font-mono">
                        Three.js, WebGL, Spatial 3D
                      </p>
                    </div>
                  </div>
                </div>

                {/* PROFESSIONAL EXPERIENCE */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Professional Experience</span>
                  </h3>

                  {/* Experience Item 1: Eagle Excel Ventures */}
                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="font-display font-bold text-sm text-white">
                          Full-Stack / Web Developer
                        </h4>
                        <p className="text-xs text-amber-400 font-mono">
                          Eagle Excel Ventures • Lagos, Nigeria
                        </p>
                      </div>
                      <span className="text-xs font-mono text-neutral-400">Project & Professional Engagement</span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Built an end-to-end wholesale and importation e-commerce web platform connecting commercial buyers with product catalogs, inventory management, and bulk ordering workflows.
                    </p>

                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>Built an end-to-end wholesale and importation e-commerce platform with a customer-facing storefront and administrative control suite.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>Developed dynamic product catalogs with detailed product specifications and bulk ordering workflows tailored for wholesale buyers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>Implemented administrative functionality for real-time inventory management, category categorization, and product publishing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>Added transaction and order review functionality alongside customer inquiry management to streamline business-to-buyer communication.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>Built responsive, mobile-first interfaces using modular React architecture, TypeScript, and reusable UI components.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Experience Item 2: Edgebase Technology */}
                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="font-display font-bold text-sm text-white">
                          Cloud Networking & Services Intern
                        </h4>
                        <p className="text-xs text-amber-400 font-mono">
                          Edgebase Technology Nigeria • Nigeria
                        </p>
                      </div>
                      <span className="text-xs font-mono text-neutral-400">Professional Internship (SIWES)</span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Gained practical industry exposure to cloud infrastructure, enterprise networking topology, systems monitoring, and professional software engineering workflows.
                    </p>

                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>Gained hands-on exposure to cloud infrastructure, cloud networking concepts, and server routing configurations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>Participated in systems monitoring, network topology reviews, and cloud services maintenance routines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>Collaborated within professional software engineering workflows adhering to Git version control, security practices, and code reviews.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>Applied cloud networking and service architecture principles to optimize backend connectivity and data handling in full-stack web applications.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FEATURED PROJECTS */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Featured Projects</span>
                  </h3>

                  <div className="space-y-3">
                    {/* Project 1: Eagle Excel Ventures */}
                    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-neutral-100">
                          Eagle Excel Ventures <span className="text-xs font-mono text-amber-400 font-normal">(Wholesale E-Commerce Platform)</span>
                        </h4>
                        <a
                          href="https://eagle-excel-ventures.vercel.app"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Wholesale and importation business platform that allows customers to browse product catalogs, inspect product specifications, and submit bulk orders, integrated with administrative inventory and inquiry management.
                      </p>
                      <p className="text-[11px] font-mono text-neutral-400">
                        <span className="text-neutral-200 font-semibold">Technologies:</span> React, Next.js, TypeScript, Tailwind CSS, Firebase, Node.js, REST APIs
                      </p>
                    </div>

                    {/* Project 2: Joshware */}
                    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-neutral-100">
                          Joshware <span className="text-xs font-mono text-amber-400 font-normal">(Full-Stack Web Platform / Software Solutions)</span>
                        </h4>
                        <a
                          href="https://joshware.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Personal software and web development ecosystem and portfolio platform showcasing full-stack development capabilities, projects, services, case studies, and modern interactive web experiences.
                      </p>
                      <p className="text-[11px] font-mono text-neutral-400">
                        <span className="text-neutral-200 font-semibold">Technologies:</span> React, Next.js, TypeScript, Tailwind CSS, Node.js, REST APIs
                      </p>
                    </div>

                    {/* Project 3: Cosmo3D */}
                    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-neutral-100">
                          Cosmo3D <span className="text-xs font-mono text-amber-400 font-normal">(Interactive 3D Web Application)</span>
                        </h4>
                        <a
                          href="https://cosmo3d-26yicczrn-nonchalantgamers-projects.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Interactive 3D web application featuring real-time WebGL graphics, dynamic materials, lighting shaders, kinetic orbit camera controls, and responsive user account interfaces.
                      </p>
                      <p className="text-[11px] font-mono text-neutral-400">
                        <span className="text-neutral-200 font-semibold">Technologies:</span> TypeScript, React, Three.js/WebGL, Motion, Tailwind CSS, Firebase/Auth
                      </p>
                    </div>
                  </div>
                </div>

                {/* EDUCATION SECTION */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Education</span>
                  </h3>

                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">
                        Madonna University Nigeria
                      </h4>
                      <p className="text-xs text-amber-400 font-mono">
                        B.Sc. Software Engineering
                      </p>
                    </div>
                    <div className="text-xs font-mono text-neutral-400">
                      Expected Graduation: <span className="text-neutral-200 font-semibold">2028</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW TAB 2: Document Format 1 (Standard Technical CV Image) */}
            {activeTab === 'doc1' && (
              <div className="flex flex-col items-center justify-center space-y-4 max-w-3xl mx-auto py-2">
                <div className="w-full flex items-center justify-between px-2 text-xs font-mono text-neutral-400">
                  <span>Technical ATS Document Preview (Format 1)</span>
                  <button
                    type="button"
                    onClick={() => printDocumentImage(CV_IMAGE_1, 'Technical ATS Resume')}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 transition-colors"
                  >
                    <Printer className="w-3 h-3" />
                    <span>Print This Format</span>
                  </button>
                </div>

                <div className="w-full rounded-xl overflow-hidden border border-neutral-800 bg-black shadow-2xl flex justify-center">
                  <img
                    src={CV_IMAGE_1}
                    alt="Joshua Egesi Enyinnaya CV Format 1"
                    className="w-full max-w-2xl h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {/* VIEW TAB 3: Document Format 2 (Visual Clean 1-Page Image) */}
            {activeTab === 'doc2' && (
              <div className="flex flex-col items-center justify-center space-y-4 max-w-3xl mx-auto py-2">
                <div className="w-full flex items-center justify-between px-2 text-xs font-mono text-neutral-400">
                  <span>Modern Visual CV Document Preview (Format 2)</span>
                  <button
                    type="button"
                    onClick={() => printDocumentImage(CV_IMAGE_2, 'Formatted Clean Resume')}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-blue-400/40 bg-blue-400/10 text-blue-300 hover:bg-blue-400 hover:text-neutral-950 transition-colors"
                  >
                    <Printer className="w-3 h-3" />
                    <span>Print This Format</span>
                  </button>
                </div>

                <div className="w-full rounded-xl overflow-hidden border border-neutral-800 bg-black shadow-2xl flex justify-center">
                  <img
                    src={CV_IMAGE_2}
                    alt="Joshua Egesi Enyinnaya CV Format 2"
                    className="w-full max-w-2xl h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
