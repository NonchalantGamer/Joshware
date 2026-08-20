import { TechItem } from '../types';

export const technologies: TechItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    role: 'Component Architecture & State Orchestration',
    usageDescription:
      'Leveraged for building reactive, component-driven user interfaces with custom hooks, memoized computations, and virtual DOM performance.',
    proficiencyLevel: 'Production Expert'
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    role: 'Full-Stack Framework & Edge Rendering',
    usageDescription:
      'Utilized for server-side rendering (SSR), static site generation (SSG), API routes, and high-performance production web deployments.',
    proficiencyLevel: 'Production Expert'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    role: 'Type Safety & Domain Modeling',
    usageDescription:
      'Enforces strict static typing, interface contracts, and maintainable enterprise-grade code across frontend and backend modules.',
    proficiencyLevel: 'Production Expert'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    role: 'Core Web Logic & Async Pipelines',
    usageDescription:
      'Deep foundation in modern asynchronous patterns, event loop mechanics, DOM manipulation, and functional programming paradigms.',
    proficiencyLevel: 'Production Expert'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    role: 'Design System & Utility-First Styling',
    usageDescription:
      'Constructs bespoke, responsive, and token-driven design systems with zero runtime CSS overhead and mathematically balanced spacing.',
    proficiencyLevel: 'Production Expert'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    role: 'Semantic Structure & Modern Layouts',
    usageDescription:
      'Standard-compliant semantic markup, accessible ARIA roles, modern CSS Grid/Flexbox architectures, and fluid responsive typography.',
    proficiencyLevel: 'Production Expert'
  },
  {
    name: 'Firebase',
    category: 'Backend & Database',
    role: 'Cloud Firestore, Auth & Hosting',
    usageDescription:
      'Deploys scalable NoSQL databases, real-time client synchronization, authentication rules, and secure cloud storage.',
    proficiencyLevel: 'Advanced Implementation'
  },
  {
    name: 'Supabase',
    category: 'Backend & Database',
    role: 'PostgreSQL, Row-Level Security & Auth',
    usageDescription:
      'Architects relational Postgres tables, row-level security (RLS) policies, instant CRUD APIs, and relational query structures.',
    proficiencyLevel: 'Advanced Implementation'
  },
  {
    name: 'MongoDB',
    category: 'Backend & Database',
    role: 'Document Store & Aggregation Pipelines',
    usageDescription:
      'Designs flexible document schemas, indexing strategies, and aggregation pipelines for dynamic business and e-commerce models.',
    proficiencyLevel: 'Core Architecture'
  },
  {
    name: 'Node.js & Express',
    category: 'Backend & Database',
    role: 'RESTful API Engineering & Server Logic',
    usageDescription:
      'Constructs performant HTTP/REST endpoints, custom middleware pipelines, authentication token handlers, and webhook integrations.',
    proficiencyLevel: 'Advanced Implementation'
  },
  {
    name: 'Three.js & WebGL',
    category: '3D & Spatial',
    role: 'Spatial Computing & 3D Web Graphics',
    usageDescription:
      'Builds real-time 3D web viewports, orbital camera controls, mesh lighting pipelines, and spatial commerce visualizers.',
    proficiencyLevel: 'Advanced Implementation'
  },
  {
    name: 'UI/UX & Figma',
    category: 'Tools & Design',
    role: 'Interface Design & Design Systems',
    usageDescription:
      'Crafts user flows, interactive prototypes, typographic scales, ergonomic touch layouts, and complete multi-theme design tokens.',
    proficiencyLevel: 'Production Expert'
  }
];

export const skillCategories = [
  {
    category: 'Frontend Engineering',
    description: 'Constructing performant, accessible, and reactive browser interfaces.',
    skills: [
      { name: 'React & Next.js', level: 'Expert Architecture' },
      { name: 'TypeScript & Modern JS', level: 'Type-Safe Development' },
      { name: 'Tailwind CSS & Modern CSS', level: 'Responsive Systems' },
      { name: 'HTML5 Semantic Web', level: 'WCAG Accessible' },
      { name: 'State Management & Hooks', level: 'Optimized Rendering' }
    ]
  },
  {
    category: 'Backend & Database Systems',
    description: 'Engineering resilient data stores, authentication, and API endpoints.',
    skills: [
      { name: 'Firebase & Firestore', level: 'Real-Time Sync' },
      { name: 'Supabase & PostgreSQL', level: 'Relational & RLS' },
      { name: 'MongoDB', level: 'Document Schemas' },
      { name: 'Node.js & Express APIs', level: 'REST Endpoints' },
      { name: 'Authentication & Security', level: 'Token & Role Based' }
    ]
  },
  {
    category: 'UI/UX Design & 3D Graphics',
    description: 'Designing intuitive user journeys and immersive spatial web experiences.',
    skills: [
      { name: 'Interface & User Flow Design', level: 'Figma & Prototyping' },
      { name: 'Design Systems & Tokens', level: 'Component Libraries' },
      { name: 'Three.js & WebGL Visuals', level: '3D Mesh Rendering' },
      { name: 'Micro-Interactions & Motion', level: 'Kinetic UI Physics' },
      { name: 'Responsive Ergonomics', level: 'Mobile & Desktop' }
    ]
  }
];
