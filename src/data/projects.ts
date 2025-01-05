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
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Fashion',
    slug: 'fashion-campaign',
    client: 'Luxury Brand Co.',
    mainImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070',
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070'
    ],
    overview: 'A contemporary fashion campaign that redefines luxury through minimalist photography and innovative styling.',
    process: [
      'Concept Development',
      'Art Direction',
      'Photography',
      'Post-Production'
    ],
    specifications: {
      category: 'Fashion Photography',
      year: 2023,
      tools: ['Photography', 'Lighting', 'Digital Retouching']
    },
    outcomes: [
      'Increased brand engagement by 200%',
      'Featured in Vogue Magazine',
      'Award-winning campaign'
    ]
  }
  // Add more projects here
];