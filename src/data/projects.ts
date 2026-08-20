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
    previewImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
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
    title: 'JoshStream.Web',
    category: 'Spatial & 3D',
    badge: '3D Spatial Web',
    tagline: 'Experimental Spatial Commerce & Immersive 3D Experience',
    description:
      'An innovative web platform exploring the intersection of spatial commerce, 3D interactive product rendering, and immersive visual exploration for next-generation digital retail.',
    technologies: ['React', 'Three.js / WebGL', 'TypeScript', 'Tailwind CSS', 'Vite', 'Spatial Shaders'],
    liveUrl: 'https://josh-stream-web.vercel.app/#home',
    previewImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Real-time interactive 3D product inspection and viewport manipulation',
      'Exploration of Spatial Commerce and WebGL lighting pipelines',
      'Research into Gaussian Splatting and NeRF visual pipelines',
      'Optimized 60 FPS GPU rendering across modern browser environments'
    ],
    caseStudy: {
      overview:
        'JoshStream.Web serves as an exploratory platform pushing the boundaries of traditional e-commerce into spatial 3D environments, enabling users to interact with photorealistic digital assets in real time.',
      clientOrContext: 'Independent Research & Creative Engineering Project',
      role: 'Frontend & 3D Graphics Engineer',
      problem:
        'Flat 2D product photography restricts buyer perception of physical products, leading to hesitation and reduced engagement in high-value e-commerce.',
      solution:
        'Architected an interactive 3D spatial web application that renders geometric models with dynamic lighting, orbital controls, and spatial depth directly within the browser.',
      keyFeatures: [
        'Interactive 3D Viewport: Real-time orbit, zoom, and panning controls with inertia.',
        'Spatial Commerce Concepts: Dynamic material inspection and multi-angle lighting adjustments.',
        'Emerging Tech Alignment: Architectural exploration of Gaussian Splatting and neural radiance field concepts.',
        'Responsive Canvas Management: Adaptive canvas resolution scaling based on device pixel ratio and GPU capacity.'
      ],
      technicalArchitecture: [
        'WebGL Rendering Pipeline: Optimized render loops with requestAnimationFrame and matrix transformations.',
        'Scene Graph Hierarchy: Organized meshes, ambient/directional illumination, and camera vectors.',
        'State Integration: Synchronized 3D canvas state with reactive UI controls.'
      ],
      designConsiderations: [
        'Spatial Clarity: High-contrast dark backdrop to make 3D surfaces and specular highlights pop.',
        'Zero Clutter UI: Minimal floating HUD controls preserving 90%+ of the screen area for the 3D viewport.',
        'Graceful Fallback: Fallback render states for lower-end mobile devices and legacy browsers.'
      ],
      outcome:
        'Published live at josh-stream-web.vercel.app, demonstrating expertise in advanced web graphics, WebGL, and modern spatial interfaces.'
    }
  },
  {
    id: 'cosmo3d',
    title: 'Cosmo3D',
    category: 'Interactive Experience',
    badge: 'Real-Time Graphics',
    tagline: 'Interactive 3D Web Graphics & Mesh Exploration Suite',
    description:
      'A real-time 3D web application demonstrating procedural geometry manipulation, dynamic shader materials, ambient occlusion lighting, and camera orbit kinetics directly in the browser.',
    technologies: ['TypeScript', 'WebGL / Canvas', 'React', 'Motion', 'Tailwind CSS', 'Linear Algebra Math'],
    previewImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Interactive parametric 3D geometry engine with live wireframe & shading toggles',
      'Real-time mouse tracking and gyroscope-inspired rotational physics',
      'Custom vertex and fragment shader simulation directly in the DOM',
      'Embedded interactive live playground available right on this portfolio'
    ],
    caseStudy: {
      overview:
        'Cosmo3D represents a deep-dive into mathematical web visualization, demonstrating how raw mathematics, vertex shaders, and matrix transformations combine to deliver fluid interactive experiences without heavyweight engine bloat.',
      clientOrContext: 'Creative Engineering Lab',
      role: 'Graphics & Creative Web Developer',
      problem:
        'Many web 3D applications suffer from massive initial bundle sizes (50MB+) and sluggish frame drops on standard consumer hardware.',
      solution:
        'Built a lightweight, highly optimized interactive 3D rendering component that leverages pure WebGL & optimized Canvas algorithms to deliver silky 60 FPS interactions with zero bloat.',
      keyFeatures: [
        'Procedural Geometry Engine: Real-time transformation of polyhedra, spheres, tori, and geodesic structures.',
        'Interactive Lighting Studio: Dynamic directional light, specular highlights, and ambient illumination controls.',
        'Wireframe / Solid Matrix: Live toggles between structural edge wireframes, shaded vertices, and surface normals.',
        'Kinetic Orbit Physics: Inertial dampening and momentum rotation following cursor velocities.'
      ],
      technicalArchitecture: [
        'Mathematical Core: Custom vector3, matrix4, and quaternion transformations.',
        'Rendering Loop: Frame-budgeted animation cycle preventing CPU spikes.',
        'Modular Component: Packaged as a clean, reusable React component with prop-driven controls.'
      ],
      designConsiderations: [
        'Minimalist Industrial Aesthetic: Monochromatic wireframe aesthetics with precise typographic readouts.',
        'Tactile Controls: Direct click-and-drag rotation with responsive haptic visual cues.',
        'Seamless Integration: Blends natively into dark and light portfolio themes without visual disruption.'
      ],
      outcome:
        'Embedded natively into Joshware as a live demonstration of Joshua’s graphics engineering and creative UI skills.'
    }
  }
];
