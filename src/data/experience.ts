import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'eagle-excel-ventures-exp',
    role: 'Web Developer / Software Developer',
    company: 'Eagle Excel Ventures',
    period: 'Project & Professional Engagement',
    location: 'Lagos, Nigeria',
    type: 'Full-Stack Development',
    overview:
      'Engineered a complete end-to-end e-commerce, content management (CMS), and customer relationship (CRM) web platform for a major commercial wholesale and importation company.',
    achievements: [
      'Architected a full-featured customer storefront allowing bulk buyers to explore catalogs, review specifications, and place wholesale orders.',
      'Developed an administrative back-office system enabling real-time product inventory updates, category classification, and transaction review.',
      'Integrated customer inquiry management to automate direct customer follow-ups and order routing.',
      'Engineered a high-performance responsive interface ensuring fast load times across low-bandwidth mobile networks and desktop workstations.',
      'Constructed modular frontend components with modern TypeScript and reactive state patterns for ongoing scalability.'
    ],
    skills: ['E-Commerce Systems', 'React', 'TypeScript', 'CMS & CRM Architecture', 'Tailwind CSS', 'API Integration', 'Responsive UI']
  },
  {
    id: 'edgebase-technology-exp',
    role: 'Cloud Networking & Services Intern',
    company: 'Edgebase Technology Nigeria',
    period: 'Professional Internship',
    location: 'Nigeria',
    type: 'Cloud & Systems Internship',
    overview:
      'Gained practical industry exposure to cloud infrastructure, enterprise networking topology, systems monitoring, and professional software engineering workflows.',
    achievements: [
      'Worked directly within enterprise cloud environments, gaining hands-on exposure to cloud networking configurations and server routing.',
      'Participated in system reliability analysis, infrastructure monitoring, and cloud services maintenance routines.',
      'Collaborated within structured engineering workflows, adhering to version control best practices and system security standards.',
      'Applied cloud networking and service architecture concepts directly to improve backend connectivity and latency in personal full-stack projects.'
    ],
    skills: ['Cloud Networking', 'Cloud Services', 'Systems Infrastructure', 'Network Topology', 'Engineering Workflows']
  }
];
