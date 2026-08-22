import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'eagle-excel-ventures',
    title: 'Eagle Excel Ventures',
    category: 'E-Commerce',
    badge: 'Enterprise Platform',
    tagline: 'Wholesale & Importation E-Commerce System with CMS & CRM',
    description:
      'A wholesale and importation business platform designed to allow customers to browse products, place bulk orders, and manage transactions, backed by a complete custom CRM and CMS business management suite.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Node.js', 'REST APIs'],
    liveUrl: 'https://eagle-excel-ventures.vercel.app',
    previewImage: 'https://res.cloudinary.com/doujptiz/image/upload/v1787235591/31b212d9-1e0c-449b-9c38-5f3433693a7d.png',
    screenshots: [
      {
        title: 'Homepage & Storefront',
        caption: 'Digital wholesale storefront showcasing real-time product catalogs, bulk ordering mechanics, and brand presentation.',
        url: 'https://res.cloudinary.com/doujptiz/image/upload/v1787235591/31b212d9-1e0c-449b-9c38-5f3433693a7d.png',
        tag: 'Storefront'
      },
      {
        title: 'Content Management System (CMS)',
        caption: 'Administrative dashboard for real-time inventory management, category categorization, media uploads, and catalog updates.',
        url: 'https://res.cloudinary.com/doujptiz/image/upload/v1787235661/72d53fde-e32e-46b0-9606-ead9c6377395.png',
        tag: 'CMS'
      },
      {
        title: 'Customer Relationship Management (CRM)',
        caption: 'Centralized client relationship management suite for tracking wholesale inquiries, purchase orders, and communications.',
        url: 'https://res.cloudinary.com/doujptiz/image/upload/v1787235665/03006a24-612f-43b2-9612-749b51dfcf4c.png',
        tag: 'CRM'
      }
    ],
    highlights: [
      'Digital wholesale storefront with real-time product catalogs',
      'Integrated customer relationship management (CRM) & order workflow',
      'Comprehensive administrative content management system (CMS)',
      'High-performance mobile-first responsive shopping experience'
    ],
    caseStudy: {
      overview:
        'Eagle Excel Ventures is a high-volume wholesale and importation business requiring a centralized digital solution. Joshua designed and implemented an end-to-end commerce platform that streamlined inventory presentation, customer bulk ordering, and back-office management.',
      clientOrContext: 'Eagle Excel Ventures (Commercial Wholesale & Importation)',
      role: 'Lead Full-Stack Developer & UI/UX Designer',
      problem:
        'The business relied on fragmented communication channels for catalog dissemination and order tracking, causing order delays, inventory mismatches, and operational bottlenecks for bulk buyers.',
      solution:
        'Engineered a bespoke web platform combining a frictionless customer-facing catalog with a synchronized administrative control center for real-time inventory adjustments, inquiry routing, and order processing.',
      keyFeatures: [
        'Dynamic Product Catalog: Multi-tier categorization, search, and bulk order request mechanics.',
        'Administrative CMS: Real-time inventory publishing, category management, and media uploads.',
        'Customer Inquiry & CRM: Centralized transaction logging and client communication management.',
        'Responsive Design System: Tailored for seamless usage across smartphones, tablets, and desktop workstations.',
        'Secure Data Layer: Persistent and structured data storage for rapid queries and high availability.'
      ],
      technicalArchitecture: [
        'Component Architecture: Modular React with type-safe interfaces in TypeScript.',
        'State Management: Synchronous client state paired with cloud database persistence.',
        'Styling System: Utility-first Tailwind CSS configured with a bespoke enterprise neutral palette.',
        'Deployment: Production build hosted on modern edge infrastructure with sub-second page loads.'
      ],
      designConsiderations: [
        'Information Density: Designed high-density tabular and card views for wholesale buyers prioritizing speed.',
        'Touch Targets: 48px+ touch surfaces for field staff ordering on mobile devices.',
        'Zero-Distraction Layout: Focused navigation to guide visitors directly from catalog exploration to order checkout.'
      ],
      outcome:
        'Delivered an active commercial platform operating at eagle-excel-ventures.vercel.app that unified client ordering and operational management.'
    }
  },
  {
    id: 'joshstream-web',
    title: 'Joshware',
    category: 'Full-Stack Web',
    badge: 'Flagship Platform',
    tagline: 'Personal Software Engineering & Web Development Ecosystem',
    description:
      'Personal software and web development ecosystem and portfolio platform showcasing full-stack development capabilities, projects, services, and modern interactive web experiences.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    liveUrl: 'https://joshware.vercel.app/',
    previewImage: 'https://res.cloudinary.com/doujptiz/image/upload/v1787235973/7ae447ee-edab-420d-9499-5edcee61c7d1.png',
    screenshots: [
      {
        title: 'Homepage & Platform Hero',
        caption: 'Joshware flagship digital interface featuring clean typography, interactive project case studies, and responsive navigation.',
        url: 'https://res.cloudinary.com/doujptiz/image/upload/v1787235973/7ae447ee-edab-420d-9499-5edcee61c7d1.png',
        tag: 'Homepage'
      },
      {
        title: 'Project Case Studies & Modal Interface',
        caption: 'Detailed project breakdown system showcasing technical architecture, problem-solving workflows, and live links.',
        url: 'https://res.cloudinary.com/doujptiz/image/upload/v1787236298/b64ac412-dfeb-4104-9785-b07b7a856e5f.png',
        tag: 'Case Studies'
      }
    ],
    highlights: [
      'Full-stack web architecture with responsive design systems',
      'Interactive project modal breakdowns and dynamic category filtering',
      'Integrated contact communication channels with instant copy helpers',
      'Optimized load times and modular component architecture'
    ],
    caseStudy: {
      overview:
        'Joshware serves as the primary software engineering ecosystem and portfolio platform, showcasing full-stack capabilities, case studies, and modern web experiences.',
      clientOrContext: 'Joshware Software Solutions',
      role: 'Full-Stack Developer & UI/UX Designer',
      problem:
        'Needed a modern, high-performance platform to present full-stack engineering projects, demonstrate real-time 3D capabilities, and provide direct communication channels for opportunities.',
      solution:
        'Engineered an ultra-fast, responsive web platform featuring structured project filtering, interactive case study modals, tactile micro-interactions, and accessible contact methods.',
      keyFeatures: [
        'Homepage & Portfolio: Dynamic interactive project previews, technical skill matrix, and professional experience timeline.',
        'Interactive Modals: Detailed case studies with full screenshot galleries and live project links.',
        'Theme System: High-contrast aesthetic maintaining accessibility across all components.',
        'Adaptive Layouts: Optimized viewport scaling across desktop, tablet, and mobile browsers.'
      ],
      technicalArchitecture: [
        'Frontend: Modern React with TypeScript and strict type safety.',
        'Styling: Tailwind CSS with high-contrast accessibility standards.',
        'State Management: Lightweight React hooks and tactile feedback context.',
        'Deployment: Hosted on global edge networks with dynamic asset caching.'
      ],
      designConsiderations: [
        'Clean Hierarchy: Balanced typography pairing with amber accent highlights.',
        'Tactile Micro-Interactions: Fluid transitions and subtle feedback for interactive controls.',
        'High Accessibility: WCAG AA color contrast across all sections.'
      ],
      outcome:
        'Successfully published and operational at joshware.vercel.app, presenting verified engineering work and technical skills.'
    }
  },
  {
    id: 'cosmo3d',
    title: 'Cosmo3D',
    category: 'Interactive Experience',
    badge: 'Real-Time Graphics',
    tagline: 'Interactive 3D Web Graphics & User Authentication Suite',
    description:
      'A real-time 3D web application and visual workspace featuring interactive parametric geometry, dynamic shader materials, camera orbit kinetics, and user account management.',
    technologies: ['TypeScript', 'WebGL / Three.js', 'React', 'Motion', 'Tailwind CSS', 'Auth / Firebase'],
    liveUrl: 'https://cosmo3d-26yicczrn-nonchalantgamers-projects.vercel.app/',
    previewImage: 'https://res.cloudinary.com/doujptiz/image/upload/v1787236609/b961c32b-7b36-4eaa-ab52-cabd9739aecf.png',
    screenshots: [
      {
        title: 'Homepage & 3D Interactive Canvas',
        caption: 'Central 3D exploration interface providing real-time polygon manipulation, shader illumination, and orbit physics directly in the browser.',
        url: 'https://res.cloudinary.com/doujptiz/image/upload/v1787236609/b961c32b-7b36-4eaa-ab52-cabd9739aecf.png',
        tag: 'Homepage'
      },
      {
        title: 'Log In / Sign Up Authentication Portal',
        caption: 'Full-featured account onboarding and authentication suite providing secure user registration, session management, and credential recovery.',
        url: 'https://res.cloudinary.com/doujptiz/image/upload/v1787236706/54ab195d-4c0e-4608-92ce-61158ffd444f.png',
        tag: 'Auth'
      }
    ],
    highlights: [
      'Interactive parametric 3D geometry engine with live wireframe & shading toggles',
      'Secure user login, registration, and session authentication architecture',
      'Real-time mouse tracking and gyroscope-inspired rotational physics',
      'Embedded interactive live playground and live deployed web application'
    ],
    caseStudy: {
      overview:
        'Cosmo3D combines raw mathematical web visualization with practical application features including user authentication, personalized 3D scenes, and responsive cross-device performance.',
      clientOrContext: 'Creative Engineering Lab & 3D Web Application',
      role: 'Full-Stack 3D & Graphics Engineer',
      problem:
        'Complex 3D web applications often lack structured user management and suffer from poor mobile performance and slow initial load times.',
      solution:
        'Built an optimized 3D graphics playground coupled with a clean user authentication system, enabling visitors to log in, explore parametric 3D geometries, and experience smooth 60 FPS graphics.',
      keyFeatures: [
        'Procedural Geometry Engine: Real-time manipulation of polyhedra, geodesic structures, and surface normals.',
        'Authentication Suite: Dedicated log in and sign up interfaces for persistent user sessions.',
        'Kinetic Orbit Physics: Inertial dampening and momentum rotation tracking user inputs.',
        'Interactive Lighting Studio: Dynamic directional lighting, specular highlights, and ambient controls.'
      ],
      technicalArchitecture: [
        'WebGL Core: Optimized mathematical vector transformations and render cycles.',
        'Auth Layer: Secure token management and client-side authentication states.',
        'Modular Components: Packaged as reusable, highly responsive React views.'
      ],
      designConsiderations: [
        'Industrial Graphics UI: High-contrast dark backdrop paired with vivid glowing wireframe shaders.',
        'Frictionless Auth: Focused sign-in forms with instant validation and error handling.',
        'Mobile Responsiveness: Seamless touch gestures for 3D navigation on mobile screens.'
      ],
      outcome:
        'Live and accessible at cosmo3d-26yicczrn-nonchalantgamers-projects.vercel.app, featuring both live web deployment and interactive in-portfolio demonstration.'
    }
  }
];
