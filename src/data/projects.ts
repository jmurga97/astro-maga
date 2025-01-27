export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  mainImage: string;
  images: string[];
  overview: string;
  process: string[];
  specifications: {
    category: string;
    year: number;
    tools: string[];
  };
}

export const projects: Project[] = [
  {
    id: '2',
    title: 'EduInfo',
    slug: 'eduinfo-app',
    client: 'Educational Sector',
    mainImage: '/images/eduinfo-main.jpg',
    images: [
      '/images/eduinfo-1.webp',
      '/images/eduinfo-2.webp',
      '/images/eduinfo-3.webp',
      '/images/eduinfo-4.webp',
      '/images/eduinfo-5.webp',
      '/images/eduinfo-6.webp',
      '/images/eduinfo-7.webp',
      '/images/eduinfo-8.webp',
      '/images/eduinfo-9.webp',
      '/images/eduinfo-10.webp',
    ],
    overview: 'A new app designed to help parents and guardians stay informed about their children\'s progress in school. The project addresses the communication gap between parents and teachers regarding school progress.',
    process: [
      'User Research',
      'Information Architecture',
      'Wireframing',
      'Prototyping',
      'Visual Design'
    ],
    specifications: {
      category: 'Educational App',
      year: 2023,
      tools: ['Figma', 'Miro', 'Google Surveys']
    }
  },
  {
    id: '3',
    title: 'Medical Products Website',
    slug: 'medical-products-website',
    client: 'Medical Supplies Company',
    mainImage: '/images/mcg-main.jpg',
    images: [
      '/images/mcg-2.webp',
      '/images/mcg-3.webp',
      '/images/mcg-4.webp',
      '/images/mcg-5.webp',
      '/images/mcg-6.webp',
      '/images/mcg-7.webp',
    ],
    overview: 'A redesigned website for a medical products company aimed at improving user experience and making it easier for clients to find and visualize products and services.',
    process: [
      'User Research',
      'Competitive Audit',
      'Information Architecture',
      'Wireframing',
      'Prototyping',
      'Visual Design'
    ],
    specifications: {
      category: 'Web Design',
      year: 2023,
      tools: ['Sketch', 'InVision', 'Google Analytics']
    }
  },
  {
    id: '4',
    title: 'TRANS',
    slug: 'trans-app',
    client: 'Public Transport Users in Venezuela',
    mainImage: '/images/trans-main.jpg',
    images: [
      '/images/trans-1.webp',
      '/images/trans-2.webp',
      '/images/trans-3.webp',
      '/images/trans-4.webp',
      '/images/trans-5.webp',
      '/images/trans-6.webp',
      '/images/trans-7.webp',
      '/images/trans-8.webp',
      '/images/trans-9.webp',
      '/images/trans-10.webp'
    ],
    overview: 'An app designed to help Venezuelans track public transport schedules, allowing users to plan their daily commutes more effectively.',
    process: [
      'User Research',
      'Interaction Design',
      'Wireframing',
      'Prototyping',
      'Information Architecture',
      'Visual Design'
    ],
    specifications: {
      category: 'Transportation App',
      year: 2023,
      tools: ['Adobe XD', 'Trello', 'Zoom']
    }
  }
];

