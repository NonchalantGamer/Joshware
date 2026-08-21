export interface Project {
  id: string;
  title: string;
  category: 'E-Commerce' | 'Spatial & 3D' | 'Full-Stack Web' | 'Interactive Experience';
  badge: string;
  tagline: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  previewImage: string;
  screenshots?: {
    title: string;
    caption: string;
    url: string;
    tag?: string;
  }[];
  highlights: string[];
  caseStudy: {
    overview: string;
    clientOrContext: string;
    role: string;
    problem: string;
    solution: string;
    keyFeatures: string[];
    technicalArchitecture: string[];
    designConsiderations: string[];
    outcome: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tag?: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  techUsed: string[];
  iconName: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & Database' | '3D & Spatial' | 'Tools & Design';
  role: string;
  usageDescription: string;
  proficiencyLevel: 'Production Expert' | 'Advanced Implementation' | 'Core Architecture';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-Stack Development' | 'Cloud & Systems Internship';
  overview: string;
  achievements: string[];
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
