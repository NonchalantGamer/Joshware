import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Copy, Check, ExternalLink, Sparkles, MapPin, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ContactFormData } from '../types';
import { ScrollReveal } from './ui/ScrollReveal';
import { MorphicIcon } from './ui/MorphicIcon';
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon, GmailIcon } from './ui/BrandIcons';

interface ContactProps {
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Web Application Development',
    budget: '$3,000 – $5,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'joshuaegesienyinnaya@gmail.com';

  const projectTypes = [
    'Web Application Development',
    'Website Development',
    'Mobile Application Development',
    'UI/UX & Product Design',
    'Database & Backend Architecture',
    '3D Spatial / Interactive Web'
  ];

  const budgetRanges = [
    '$1,000 – $3,000',
    '$3,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000+',
    'Hourly / Consultation'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory particle blast
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#fbbf24', '#f59e0b', '#d97706', '#ffffff']
      });

      // Construct mailto backup
      const mailtoUrl = `mailto:${emailAddress}?subject=Project%20Inquiry:%20${encodeURIComponent(
        formData.projectType
      )}%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  return (
    <section
      id="contact"
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-100' : 'bg-neutral-100/30 border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono mb-3 ${
                  isDark
                    ? 'bg-neutral-900/60 border-neutral-800 text-amber-400'
                    : 'bg-amber-100/80 border-amber-300/80 text-amber-900 font-semibold'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Start A Project</span>
              </div>
              <h2
                className={`text-2xl sm:text-4xl lg:text-6xl font-display font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}
              >
                Let&apos;s build something great.
              </h2>
            </div>

            <p
              className={`text-sm sm:text-base max-w-lg leading-relaxed ${
                isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}
            >
              Have a project in mind, need a full-stack web application, or want to consult on technical design? Send an inquiry below.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Direct Communication Channels (Left Column) */}
          <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
            <div
              className={`p-5 sm:p-7 rounded-2xl border space-y-5 sm:space-y-6 ${
                isDark ? 'bg-neutral-900/30 border-neutral-800' : 'bg-white border-neutral-300'
              }`}
            >
              <div className="space-y-2">
                <h3
                  className={`font-display font-bold text-lg ${
                    isDark ? 'text-neutral-100' : 'text-neutral-950'
                  }`}
                >
                  Direct Inquiries & Availability
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  I typically respond within 12–24 hours on business days.
                </p>
              </div>

              {/* Email Card with Copy Button & Morphic Icon */}
              <div
                className={`p-4 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                  isDark ? 'bg-neutral-950/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <MorphicIcon
                    icon={<GmailIcon className="w-4 h-4" />}
                    color="amber"
                    size="sm"
                    isDark={isDark}
                    title="Gmail"
                  />
                  <div className="truncate">
                    <p
                      className={`text-[10px] font-mono uppercase ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
                      }`}
                    >
                      Direct Gmail
                    </p>
                    <p
                      className={`text-xs sm:text-sm font-mono font-semibold truncate ${
                        isDark ? 'text-neutral-100' : 'text-neutral-900'
                      }`}
                    >
                      {emailAddress}
                    </p>
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  title="Copy email to clipboard"
                  className={`p-2 rounded-lg border text-xs font-mono transition-colors flex-shrink-0 ${
                    copiedEmail
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                      : isDark
                        ? 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
                        : 'border-neutral-300 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>

              {/* WhatsApp Quick Chat */}
              <motion.a
                id="contact-whatsapp-direct"
                href={`https://wa.me/2347043534602?text=${encodeURIComponent(
                  'Hello Joshua, I reviewed your portfolio on Joshware and would like to discuss a project.'
                )}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all group ${
                  isDark
                    ? 'bg-neutral-950/60 border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-950'
                    : 'bg-neutral-50 border-neutral-200 hover:border-emerald-500 hover:bg-emerald-50/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MorphicIcon
                    icon={<WhatsappIcon className="w-4 h-4" />}
                    color="emerald"
                    size="sm"
                    isDark={isDark}
                    title="WhatsApp"
                  />
                  <div>
                    <p
                      className={`text-[10px] font-mono uppercase ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
                      }`}
                    >
                      Instant WhatsApp
                    </p>
                    <p
                      className={`text-xs sm:text-sm font-mono font-semibold ${
                        isDark ? 'text-neutral-100' : 'text-neutral-900'
                      }`}
                    >
                      +234 704 353 4602
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-emerald-500 transition-colors" />
              </motion.a>

              {/* Social Channels */}
              <div className={`pt-4 border-t space-y-3 ${isDark ? 'border-neutral-800/80' : 'border-neutral-200'}`}>
                <p
                  className={`text-xs font-mono uppercase ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600 font-semibold'
                  }`}
                >
                  Professional Networks
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`p-2.5 rounded-xl border text-center text-xs font-mono transition-colors flex items-center justify-center gap-1.5 ${
                      isDark
                        ? 'border-neutral-800 bg-neutral-950/50 text-neutral-300 hover:border-neutral-700 hover:text-white'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 font-medium'
                    }`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`p-2.5 rounded-xl border text-center text-xs font-mono transition-colors flex items-center justify-center gap-1.5 ${
                      isDark
                        ? 'border-neutral-800 bg-neutral-950/50 text-neutral-300 hover:border-neutral-700 hover:text-white'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 font-medium'
                    }`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://x.com/josh_ware25"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`p-2.5 rounded-xl border text-center text-xs font-mono transition-colors flex items-center justify-center gap-1.5 ${
                      isDark
                        ? 'border-neutral-800 bg-neutral-950/50 text-neutral-300 hover:border-neutral-700 hover:text-white'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 font-medium'
                    }`}
                  >
                    <XIcon className="w-3.5 h-3.5" />
                    <span>X</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* High-Conversion Project Inquiry Form (Right Column) */}
          <ScrollReveal direction="left" className="lg:col-span-7">
            <form
              id="portfolio-contact-form"
              onSubmit={handleSubmit}
              className={`p-7 sm:p-9 rounded-2xl border space-y-6 ${
                isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-300 shadow-sm'
              }`}
            >
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl font-display font-bold ${
                      isDark ? 'text-white' : 'text-neutral-950'
                    }`}
                  >
                    Message Received!
                  </h3>
                  <p
                    className={`text-xs sm:text-sm max-w-md leading-relaxed ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    Thank you for reaching out, {formData.name}. Joshua will review your project details and follow up promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Web Application Development',
                        budget: '$3,000 – $5,000',
                        message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-xl border border-neutral-700 bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className={`text-xs font-mono uppercase ${
                          isDark ? 'text-neutral-400' : 'text-neutral-700 font-semibold'
                        }`}
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                          isDark
                            ? 'bg-neutral-950/70 border-neutral-800 text-neutral-100 placeholder:text-neutral-600'
                            : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder:text-neutral-400'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className={`text-xs font-mono uppercase ${
                          isDark ? 'text-neutral-400' : 'text-neutral-700 font-semibold'
                        }`}
                      >
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                          isDark
                            ? 'bg-neutral-950/70 border-neutral-800 text-neutral-100 placeholder:text-neutral-600'
                            : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder:text-neutral-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-project-type"
                      className={`text-xs font-mono uppercase ${
                        isDark ? 'text-neutral-400' : 'text-neutral-700 font-semibold'
                      }`}
                    >
                      Project Classification
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                        isDark
                          ? 'bg-neutral-950/70 border-neutral-800 text-neutral-100'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                      }`}
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Scope */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-budget"
                      className={`text-xs font-mono uppercase ${
                        isDark ? 'text-neutral-400' : 'text-neutral-700 font-semibold'
                      }`}
                    >
                      Estimated Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                        isDark
                          ? 'bg-neutral-950/70 border-neutral-800 text-neutral-100'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                      }`}
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className={`text-xs font-mono uppercase ${
                        isDark ? 'text-neutral-400' : 'text-neutral-700 font-semibold'
                      }`}
                    >
                      Project Details & Scope *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to design or build..."
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                        isDark
                          ? 'bg-neutral-950/70 border-neutral-800 text-neutral-100 placeholder:text-neutral-600'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder:text-neutral-400'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full min-h-[48px] py-3.5 px-6 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider uppercase border border-amber-300 bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:opacity-50 shadow-md touch-manipulation"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
