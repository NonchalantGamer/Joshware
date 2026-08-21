import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Website Development',
    tag: 'Web & Digital Presence',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=90',
    shortDescription: 'Modern, responsive, high-performance websites engineered for brands and businesses.',
    fullDescription:
      'Design and development of responsive, ultra-fast websites for businesses, brands, and organizations. Focused on clean architecture, semantic accessibility, search engine optimization (SEO), and conversion-driven layouts.',
    deliverables: [
      'High-Performance Corporate & Brand Websites',
      'E-Commerce & Wholesale Storefronts',
      'Mobile-First Responsive Layouts',
      'SEO & Performance Optimization (Core Web Vitals)',
      'Custom CMS Integrations & Content Management'
    ],
    techUsed: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
    iconName: 'Globe'
  },
  {
    id: 'web-app-development',
    number: '02',
    title: 'Web Application Development',
    tag: 'SaaS & Enterprise Apps',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    shortDescription: 'Complex, interactive web applications with robust state and full-stack integration.',
    fullDescription:
      'Development of complete web applications leveraging modern frontend frameworks, backend systems, secure authentication pipelines, real-time databases, and custom API architectures.',
    deliverables: [
      'Single Page Applications (SPAs) & Complex Dashboards',
      'User Authentication & Role-Based Access Control',
      'Real-Time Data Synchronization & WebSockets',
      'REST & GraphQL API Integrations',
      'Admin Panels, CMS, and Business CRMs'
    ],
    techUsed: ['React', 'TypeScript', 'Next.js', 'Firebase', 'Supabase', 'MongoDB', 'Node.js'],
    iconName: 'Layout'
  },
  {
    id: 'mobile-app-development',
    number: '03',
    title: 'Mobile Application Development',
    tag: 'Mobile & Multi-Platform',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85',
    shortDescription: 'Fluid mobile application experiences with responsive ergonomics and reliable backends.',
    fullDescription:
      'Development of responsive, cross-platform mobile experiences with an emphasis on usability, smooth touch gestures, offline tolerance, and seamless cloud synchronization.',
    deliverables: [
      'Cross-Platform Mobile Application Development',
      'Ergonomic Touch UI & Gesture Workflows',
      'Offline-First Data Storage & Sync',
      'Push Notifications & Cloud Messaging',
      'Secure Mobile Authentication & API Binding'
    ],
    techUsed: ['React Native', 'TypeScript', 'Firebase', 'Supabase', 'REST APIs'],
    iconName: 'Smartphone'
  },
  {
    id: 'ui-ux-design',
    number: '04',
    title: 'UI/UX Design',
    tag: 'Product & Visual Systems',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=90',
    shortDescription: 'Intuitive, research-backed user experiences and scalable design systems.',
    fullDescription:
      'Crafting intuitive interfaces from user research and flow diagrams through wireframes, high-fidelity design systems, interactive prototypes, and micro-interactions.',
    deliverables: [
      'User Journey Mapping & Information Architecture',
      'Wireframing & High-Fidelity UI Prototypes',
      'Scalable Design Systems & Component Libraries',
      'Interaction Design & Motion Choreography',
      'Usability Audits & Responsive Breakpoints'
    ],
    techUsed: ['Figma', 'Design Tokens', 'Motion', 'Prototyping', 'Design Systems'],
    iconName: 'Palette'
  },
  {
    id: 'backend-database',
    number: '05',
    title: 'Database & Backend Development',
    tag: 'Infrastructure & APIs',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    shortDescription: 'Scalable cloud databases, server architectures, authentication, and secure APIs.',
    fullDescription:
      'Architecting resilient server infrastructure, relational and NoSQL databases, authentication rules, automated data pipelines, and high-throughput application backends.',
    deliverables: [
      'Relational & NoSQL Database Schema Design',
      'Secure User Authentication & Token Pipelines',
      'RESTful API Development & Third-Party Integrations',
      'Data Migration, Caching, and Query Optimization',
      'Serverless Functions & Edge Cloud Deployments'
    ],
    techUsed: ['Firebase', 'Supabase', 'MongoDB', 'Node.js', 'Express', 'TypeScript'],
    iconName: 'Database'
  }
];
