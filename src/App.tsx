import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CvModal } from './components/CvModal';
import { CustomCursor } from './components/CustomCursor';
import { SectionSeparator } from './components/ui/SectionSeparator';
import { BackToTop } from './components/ui/BackToTop';
import { FeedbackProvider, useFeedback } from './context/FeedbackContext';
import { Project } from './types';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);
  const { playFeedback } = useFeedback();
  const prevSectionRef = useRef<string>('home');
  const hasInitializedRef = useRef<boolean>(false);

  // Favicon setup
  useEffect(() => {
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = 'https://res.cloudinary.com/doujptiz/image/upload/v1787233211/20260803_131853_yiypyb.png';
    }
  }, []);

  // ScrollSpy to determine active section in navbar
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'skills', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Play subtle feedback on section transitions (after initial load)
  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      prevSectionRef.current = activeSection;
      return;
    }

    if (activeSection !== prevSectionRef.current) {
      playFeedback('section');
      prevSectionRef.current = activeSection;
    }
  }, [activeSection, playFeedback]);

  const handleOpenProject = (project: Project) => {
    playFeedback('pop');
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    playFeedback('close');
    setSelectedProject(null);
  };

  const handleOpenCv = () => {
    playFeedback('pop');
    setIsCvOpen(true);
  };

  const handleCloseCv = () => {
    playFeedback('close');
    setIsCvOpen(false);
  };

  return (
    <div
      id="portfolio-root"
      className="min-h-screen bg-[#0a0c10] text-neutral-100 font-sans antialiased selection:bg-amber-400 selection:text-neutral-950"
    >
      {/* Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections with Alternating Visual Rhythm & Decorative Technical Separators */}
      <main id="main-content-flow">
        <Hero onOpenCv={handleOpenCv} />

        {/* Separator 1: Hero (Dark) -> About (White) */}
        <SectionSeparator
          from="dark"
          to="light"
          label="Core Identity & Architecture"
          code="01 // ABOUT"
          icon="sparkles"
        />

        <About />

        {/* Separator 2: About (White) -> Services (Dark) */}
        <SectionSeparator
          from="light"
          to="dark"
          label="Capabilities & Services"
          code="02 // OFFERINGS"
          icon="layers"
        />

        <Services />

        {/* Separator 3: Services (Dark) -> Projects (White) */}
        <SectionSeparator
          from="dark"
          to="light"
          label="Selected Works & Case Studies"
          code="03 // PORTFOLIO"
          icon="code"
        />

        <Projects onSelectProject={handleOpenProject} />

        {/* Separator 4: Projects (White) -> TechStack (Dark) */}
        <SectionSeparator
          from="light"
          to="dark"
          label="Production Stack & Competencies"
          code="04 // TECH"
          icon="cpu"
        />

        <TechStack />

        {/* Separator 5: TechStack (Dark) -> Experience (White) */}
        <SectionSeparator
          from="dark"
          to="light"
          label="Career History & Roles"
          code="05 // EXPERIENCE"
          icon="disc"
        />

        <Experience />

        {/* Separator 6: Experience (White) -> Contact (Dark) */}
        <SectionSeparator
          from="light"
          to="dark"
          label="Initiate Engagement"
          code="06 // CONTACT"
          icon="sparkles"
        />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Control */}
      <BackToTop />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
      />

      {/* Structured CV Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={handleCloseCv}
      />

      {/* Desktop Precision Custom Cursor (Mounted at top stacking level) */}
      <CustomCursor />
    </div>
  );
}

export default function App() {
  return (
    <FeedbackProvider>
      <PortfolioApp />
    </FeedbackProvider>
  );
}
