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
  }
  role: string;
  target: string;
  limitations: string;
  detailImages: string[];
  conclusion: string;
}

export const projects: Project[] = [
  {
    id: '2',
    title: 'EduInfo',
    slug: 'eduinfo-app',
    client: 'Educational Sector',
    mainImage: '/images/eduinfo-main.jpg',
    target: 'Through basic research using the competitive audit method, two types of potential users were identified: parents/guardians of students, who want to know the progress of their children/wards in their grades; and teachers who want to communicate important information such as exams, activities, and school meetings.',
    role: 'UX Generalist',
    limitations: 'When conducting the usability study, several limitations were identified, including poor positioning of the profile and settings button; users often clicked on images expecting some kind of action but received no feedback; and there was no confirmation message after reporting an error in the students grades.',
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
    detailImages: [
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
    },
    conclusion: 'The results of the usability research positively confirmed the premise of whether the application was easy to use and whether the user considered it necessary for their daily life. Therefore, it is concluded that this application could be very useful in the field of education. As additional points, it would be recommended to develop a chat between parents and teachers to improve communication, as well as the integration of a summary page that includes a graph to quickly appreciate the students progress in their different areas, as well as the integration of assistive technologies (such as voice) for those users who may have limited visibility.'
  },
  {
    id: '3',
    title: 'Medical Products Website',
    slug: 'medical-products-website',
    client: 'Medical Supplies Company',
    mainImage: '/images/mcg-main.jpg',
    role: 'UX Generalist',
    conclusion: 'The results of the usability research positively confirmed the premise that users could visualize the companys products and services, also obtaining more positive feedback on the distribution of information as well as the experience itself. As additional points, it is recommended to integrate an application to the page that allows the potential user to "add to cart" those products for which they want to have additional information (such as specifications, prices, and modes of transfer and delivery) as this is a factor that users consider important.',
    limitations: 'The objective was to correct the errors in the potential users journey, as they could not find the companys medical products. When conducting the usability study, several limitations were identified, including the arrangement of information, which tended to be confusing; and not completing the navigation due to the complexity and surplus information.',
    target: 'Through basic research using the competitive audit method, the type of user found are all those specialists related to the area of health and medicine, as well as those who manage clinics and pharmacies.',
    images: [
      '/images/mcg-2.webp',
      '/images/mcg-3.webp',
      '/images/mcg-4.webp',
      '/images/mcg-5.webp',
      '/images/mcg-6.webp',
      '/images/mcg-7.webp',
    ],
    detailImages: [],
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
    role: 'UX Generalist',
    detailImages: [],
    target:"For this occasion, remote interviews were conducted with those users who demographically represented the aims of the project: those who lived in Venezuela, between 26 and 36 years of age, who mostly use public transport, as well as the face-to-face and hybrid work modes.",
    conclusion: "The results of the research positively confirmed the premise of whether the user would consider this application useful for their daily life. As points to improve, several factors should be taken into account, such as the direction in which the trains or buses are going, the live schedule so that the user can make decisions, and taking into account various ways to navigate when finding what the user needs, which in the end is to have information about transport.",
    limitations: "The objective was to correct the errors in the potential user's journey, as they could not find the company's medical products. When conducting the usability study, several limitations were identified, including the arrangement of information, which tended to be confusing; and not completing the navigation due to the complexity and surplus information.",
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
      tools: ['Figma', 'Trello', 'Zoom']
    }
  }
];

