export const profile = {
  name: 'Jevi Waugh',
  title: 'Machine Learning Researcher · Engineer · Educator',
  description:
    'Machine learning researcher at The University of Queensland working on frequency-domain methods for computer vision, alongside part-time AI engineering and teaching.',
  email: 'jevi.waugh@uq.edu.au',
  emails: {
    research: 'jevi.waugh@uq.edu.au',
    student: 'jevi.waugh@student.uq.edu.au',
    fintech: 'jevi.waugh@apexfincap.com.au',
  },
  location: 'Brisbane, Australia',
  github: 'https://github.com/Jevi-Waugh',
  linkedin: 'https://www.linkedin.com/in/jevi-waugh-b130ab254/',
  wandb: 'https://wandb.ai/profile/jevi-waugh',
  uq: 'https://eecs.uq.edu.au/profile/12344/jevi-waugh',
  uqcs: 'https://uqcs.org/about/',
};

export const navigation = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'Talks', href: '/talks/' },
];

export const secondaryNavigation = [
  { label: 'Industry Officer', href: '/industry-officer/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Pursuits', href: '/pursuits/' },
  { label: 'Search', href: '/search/' },
];

export const metrics = [
  { value: '+1.77%', label: 'validation performance', detail: 'against a U-Net baseline' },
  { value: '−13.8%', label: 'GPU memory', detail: 'with the Fourier Shuffle model' },
  { value: '$30K+', label: 'sponsorship secured', detail: 'for UQ Computing Society' },
  { value: '1.5K+', label: 'extension downloads', detail: 'for TraceForest' },
];

export type ExperienceItem = {
  role: string;
  organisation: string;
  period: string;
  type: string;
  description: string;
  /** Rendered as HTML, so inline tags such as <strong> are allowed. */
  highlights: string[];
  /** Set when the role has a dedicated page on this site. */
  href?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: 'Machine Learning Research Assistant',
    organisation: 'The University of Queensland',
    period: 'Mar 2026 — Present',
    type: 'Research',
    description:
      'Deriving novel frequency-domain algorithms for frequency-based autoencoders in image segmentation, and evaluating autoencoder architectures for compatibility with them.',
    highlights: [
      'Derived 3 novel algorithms — <strong>Kaleidoscope Fourier</strong>, <strong>Generalised Kaleidoscope Fourier</strong>, and <strong>Fourier Unshuffle</strong> — for use in frequency-based autoencoders for image segmentation tasks.',
      'Developed and evaluated multiple autoencoder architectures to assess compatibility with novel frequency-domain algorithms, comparing model behaviour and performance across architectural variants.',
      'Contributing to research targeting manuscript submission in 2027, focusing on frequency-domain methods for computer vision.',
    ],
  },
  {
    role: 'AI Engineer (Part-time)',
    organisation: 'Apex Fincap',
    period: 'Jul 2026 — Present',
    type: 'Engineering',
    description:
      'Building AI-driven systems for a financial trading platform, spanning data pipelines, model integration, and production reliability. Project specifics are under NDA.',
    highlights: [],
  },
  {
    role: 'Casual Academic',
    organisation: 'The University of Queensland',
    period: 'Jul 2025 — Present',
    type: 'Teaching',
    description:
      'Currently supervising capstone teams (DECO3801) and teaching pattern recognition and deep learning (COMP3710) alongside introductory software engineering (CSSE1001). Previously taught machine learning, functional and logic programming, and theory of computing.',
    highlights: [
      'Delivering classes and guiding students through programming and mathematical concepts.',
      'Supervising capstone teams through scoping, technical decisions, and delivery.',
      'Marking assessments and providing practical, constructive feedback.',
    ],
  },
  {
    role: 'Industry Officer',
    organisation: 'UQ Computing Society',
    period: 'Nov 2025 — Present',
    type: 'Leadership',
    href: '/industry-officer/',
    description:
      'Leading sponsorship outreach, pitching, negotiation, and partner relationships for one of UQ’s largest technology societies.',
    highlights: [
      'Secured more than $30,000 in sponsorship funding.',
      'Increased funding by 40% and expanded the sponsor base by 30% in 2026.',
    ],
  },
  {
    role: 'Summer Research Scholar',
    organisation: 'The University of Queensland',
    period: 'Jan 2026 — Mar 2026',
    type: 'Research',
    description:
      'Designed a PsychoNet-based decoder and derived Fourier Shuffle for frequency–spatial upsampling in medical image segmentation.',
    highlights: [
      'Improved validation performance by 1.77% against a U-Net baseline.',
      'Reduced GPU memory usage by 13.8% with custom PyTorch training scripts.',
    ],
  },
  {
    role: 'AI Integration Engineer',
    organisation: 'Apex Fincap',
    period: 'Nov 2024 — Feb 2025',
    type: 'Engineering',
    description:
      'Built AI-assisted systems that summarised financial data and helped brokers complete reports more efficiently and accurately.',
    highlights: [],
  },
];

export const education = [
  {
    degree: 'Master of Data Science',
    institution: 'The University of Queensland',
    period: '2026 — Present',
    detail: 'Advanced statistics, numerical linear algebra, and deep learning.',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'The University of Queensland',
    period: '2024 — 2025',
    detail: 'Machine Learning major · Semester 2 GPA: 6.5',
  },
];

export const capabilities = [
  'PyTorch',
  'Computer Vision',
  'Fourier Analysis',
  'Transformers',
  'Scikit-learn',
  'Python',
  'Haskell',
  'C',
  'Java',
  'SQL',
];

export const skillGroups = [
  {
    name: 'Languages',
    items: [
      'Python',
      'C (ANSI C)',
      'Haskell',
      'Java',
      'Mojo (Familiar)',
      'Julia (Familiar)',
      'SQL (Familiar)',
      'R (Familiar)',
    ],
  },
  {
    name: 'Frameworks & libraries',
    items: [
      'PyTorch',
      'NumPy',
      'Hugging Face & Transformers',
      'Matplotlib',
      'Scikit-learn',
      'OpenCV',
      'pandas',
    ],
  },
];

export const pursuits = [
  {
    title: 'Music',
    label: 'Listening & discovery',
    description:
      'I enjoy discovering new music and following the ideas, scenes, and communities that form around it.',
  },
  {
    title: 'Games & collecting',
    label: 'Yu-Gi-Oh · Video games',
    description:
      'Strategy, systems, and collecting appeal to the same part of me that enjoys understanding how technical systems fit together.',
  },
  {
    title: 'Ocean & outdoors',
    label: 'Bodyboarding · Dog walking',
    description:
      'Time outdoors is how I reset after long stretches of research, code, and coursework.',
  },
  {
    title: 'Team sport',
    label: 'UQIC Basketball · Football',
    description:
      'Basketball and football keep me active and connected to communities outside the technical space.',
  },
];
