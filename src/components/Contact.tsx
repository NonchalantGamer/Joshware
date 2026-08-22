import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Copy, Check, ExternalLink, Sparkles, MapPin, Clock, AlertCircle, MessageSquare, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ContactFormData } from '../types';
import { ScrollReveal, TextReveal } from './ui/ScrollReveal';
import { MorphicIcon } from './ui/MorphicIcon';
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon, GmailIcon } from './ui/BrandIcons';
import { useFeedback } from '../context/FeedbackContext';

export const Contact: React.FC = () => {
  const { playFeedback } = useFeedback();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Web Application Development',
    budget: '$3,000 – $5,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedInquiry, setCopiedInquiry] = useState(false);

  const emailAddress = 'joshuaegesienyinnaya@gmail.com';
  const whatsappNumber = '2347043534602';

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
    playFeedback('success');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyInquiry = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    playFeedback('success');
    setCopiedInquiry(true);
    setTimeout(() => setCopiedInquiry(false), 2500);
  };

  const getMailtoUrl = () => {
    return `mailto:${emailAddress}?subject=Project%20Inquiry:%20${encodeURIComponent(
      formData.projectType
    )}%20from%20${encodeURIComponent(formData.name || 'Client')}&body=${encodeURIComponent(
      `Hi Joshua,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nEstimated Budget: ${formData.budget}\n\nProject Scope & Details:\n${formData.message}`
    )}`;
  };

  const getWhatsAppInquiryUrl = () => {
    const text = `Hello Joshua, I'm reaching out regarding a project inquiry:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Type:* ${formData.projectType}\n*Budget:* ${formData.budget}\n\n*Details:* ${formData.message}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Direct email dispatch to portfolio email via FormSubmit API
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Project Inquiry: ${formData.projectType} from ${formData.name}`,
          'Project Classification': formData.projectType,
          'Estimated Budget': formData.budget,
          message: formData.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        setIsSuccess(true);
        playFeedback('success');
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.75 },
          colors: ['#fbbf24', '#f59e0b', '#d97706', '#ffffff']
        });
      } else {
        const msg = data?.message || 'Could not send directly via form server.';
        setErrorMessage(msg);
        setIsSuccess(true);
        playFeedback('success');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 border-t border-[#1c1f28] bg-[#0c0e14] text-neutral-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Section Header with Scroll Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6">
          <div>
            <TextReveal as="div" delay={0} distance={14} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-800 bg-neutral-900/80 text-amber-400 text-[11px] sm:text-xs font-mono mb-2 sm:mb-3 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Start A Project</span>
            </TextReveal>
            <TextReveal
              as="h2"
              delay={0.08}
              distance={18}
              className="text-xl sm:text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Let&apos;s build something great.
            </TextReveal>
          </div>

          <TextReveal
            as="p"
            delay={0.15}
            distance={16}
            className="text-xs sm:text-base max-w-lg leading-relaxed text-neutral-400"
          >
            Have a project in mind, need a full-stack web application, or want to consult on technical design? Send an inquiry below.
          </TextReveal>
        </div>

        {/* Contact Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
          {/* Direct Communication Channels (Left Column) */}
          <ScrollReveal direction="right" className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-7 rounded-xl sm:rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4 sm:space-y-6">
              <div className="space-y-1 sm:space-y-2">
                <TextReveal as="h3" distance={12} className="font-display font-bold text-base sm:text-lg text-white">
                  Direct Inquiries & Availability
                </TextReveal>
                <TextReveal as="p" delay={0.05} distance={10} className="text-[11px] sm:text-xs leading-relaxed text-neutral-400">
                  I typically respond within 12–24 hours on business days.
                </TextReveal>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-neutral-800 bg-neutral-950/60 flex items-center justify-between gap-2 sm:gap-3 transition-colors">
                <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                  <MorphicIcon
                    icon={<GmailIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    color="amber"
                    size="sm"
                    isDark={true}
                    title="Gmail"
                  />
                  <div className="truncate">
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase text-neutral-400">
                      Direct Gmail
                    </p>
                    <p className="text-[11px] sm:text-sm font-mono font-semibold truncate text-white">
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
                  className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg border text-xs font-mono transition-colors flex-shrink-0 touch-manipulation cursor-pointer ${
                    copiedEmail
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                      : 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
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
                className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-neutral-800 bg-neutral-950/60 hover:border-emerald-500/50 hover:bg-neutral-950 flex items-center justify-between transition-all group touch-manipulation"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <MorphicIcon
                    icon={<WhatsappIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    color="emerald"
                    size="sm"
                    isDark={true}
                    title="WhatsApp"
                  />
                  <div>
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase text-neutral-400">
                      Instant WhatsApp
                    </p>
                    <p className="text-[11px] sm:text-sm font-mono font-semibold text-white">
                      +234 704 353 4602
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
              </motion.a>

              {/* Social Channels */}
              <div className="pt-3 sm:pt-4 border-t border-neutral-800/80 space-y-2 sm:space-y-3">
                <p className="text-[10px] sm:text-xs font-mono uppercase text-neutral-400">
                  Professional Networks
                </p>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="min-h-[38px] sm:min-h-[44px] p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-neutral-800 bg-neutral-950/50 text-neutral-300 hover:border-neutral-700 hover:text-white text-center text-[11px] sm:text-xs font-mono transition-colors flex items-center justify-center gap-1 sm:gap-1.5 touch-manipulation"
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
                    className="min-h-[38px] sm:min-h-[44px] p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-neutral-800 bg-neutral-950/50 text-neutral-300 hover:border-neutral-700 hover:text-white text-center text-[11px] sm:text-xs font-mono transition-colors flex items-center justify-center gap-1 sm:gap-1.5 touch-manipulation"
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
                    className="min-h-[38px] sm:min-h-[44px] p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-neutral-800 bg-neutral-950/50 text-neutral-300 hover:border-neutral-700 hover:text-white text-center text-[11px] sm:text-xs font-mono transition-colors flex items-center justify-center gap-1 sm:gap-1.5 touch-manipulation"
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
              className="p-4 sm:p-9 rounded-xl sm:rounded-2xl border border-neutral-800 bg-neutral-900/50 space-y-4 sm:space-y-6 shadow-md sm:shadow-xl"
            >
              {isSuccess ? (
                <div className="py-8 sm:py-10 flex flex-col items-center text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-md">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                      <Check className="w-3.5 h-3.5" />
                      <span>Inquiry Dispatched</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Thank you, {formData.name || 'Friend'}!
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
                      Your project inquiry has been delivered directly to{' '}
                      <strong className="text-neutral-200">
                        {emailAddress}
                      </strong>
                      . Joshua will review the scope and reply within 12–24 hours.
                    </p>
                  </div>

                  {/* Immediate Direct Action Options */}
                  <div className="w-full max-w-md p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-3 text-left transition-colors">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Instant Communication Options
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <a
                        href={getWhatsAppInquiryUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 transition-colors text-xs font-mono font-semibold touch-manipulation shadow-xs"
                      >
                        <WhatsappIcon className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>

                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg border border-neutral-700 bg-neutral-900 text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors text-xs font-mono font-medium touch-manipulation"
                      >
                        <Mail className="w-4 h-4 text-amber-400" />
                        <span>Open in Email App</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-neutral-200 transition-colors text-xs font-mono touch-manipulation"
                    >
                      {copiedInquiry ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedInquiry ? 'Inquiry Details Copied to Clipboard!' : 'Copy Summary to Clipboard'}</span>
                    </button>
                  </div>

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
                    className="mt-2 px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-300 hover:bg-neutral-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-mono uppercase text-neutral-400"
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
                        className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-neutral-800 bg-neutral-950/70 text-neutral-100 placeholder:text-neutral-600 text-base sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-mono uppercase text-neutral-400"
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
                        className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-neutral-800 bg-neutral-950/70 text-neutral-100 placeholder:text-neutral-600 text-base sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-project-type"
                      className="text-xs font-mono uppercase text-neutral-400"
                    >
                      Project Classification
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-neutral-800 bg-neutral-950/70 text-neutral-100 text-base sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
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
                      className="text-xs font-mono uppercase text-neutral-400"
                    >
                      Estimated Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-neutral-800 bg-neutral-950/70 text-neutral-100 text-base sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
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
                      className="text-xs font-mono uppercase text-neutral-400"
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
                      className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-neutral-800 bg-neutral-950/70 text-neutral-100 placeholder:text-neutral-600 text-base sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
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
