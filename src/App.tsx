import React, { useState, useEffect } from 'react';
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
import { Project } from './types';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);

  // Sync theme with html element and favicon
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    // Dynamic Favicon based on theme
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = isDark
        ? 'https://res.cloudinary.com/doujptiz/image/upload/v1787233211/20260803_131853_yiypyb.png'
        : 'https://res.cloudinary.com/doujptiz/image/upload/v1787232870/20260803_131813_egdl3q.png';
    }
  }, [isDark]);

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

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      id="portfolio-root"
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isDark ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'
      }`}
    >
      {/* Desktop Magnetic Custom Cursor */}
      <CustomCursor isDark={isDark} />

      {/* Floating Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main id="main-content-flow">
        <Hero isDark={isDark} onOpenCv={() => setIsCvOpen(true)} />
        <About isDark={isDark} />
        <Services isDark={isDark} />
        <Projects
          isDark={isDark}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <TechStack isDark={isDark} />
        <Experience isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />

      {/* Structured CV Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
