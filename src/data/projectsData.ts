// src/data/projectsData.ts
import {
     Brush,
     Code,
     Dataset,
     Language,
     PlayCircle,
     Smartphone
} from '@mui/icons-material';

export interface Technology {
  name: string;
  color: string;
}

export interface ProjectLink {
  type: 'github' | 'live' | 'demo' | 'video';
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'design' | 'video';
  image: string;
  technologies: Technology[];
  featured: boolean;
  year: string;
  duration: string;
  role: string;
  links: ProjectLink[];
  highlights: string[];
  gradient: string;
}

export const projectCategories = [
  { 
    value: 'all', 
    label: 'All Projects',
    icon: Code,
    gradient: 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)'
  },
  { 
    value: 'web', 
    label: 'Web Apps',
    icon: Language,
    gradient: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)'
  },
  { 
    value: 'mobile', 
    label: 'Mobile Apps',
    icon: Smartphone,
    gradient: 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
  },
  { 
    value: 'fullstack', 
    label: 'Full Stack',
    icon: Dataset,
    gradient: 'linear-gradient(90deg, #a855f7 0%, #7c3aed 100%)'
  },
  { 
    value: 'design', 
    label: 'UI/UX Design',
    icon: Brush,
    gradient: 'linear-gradient(90deg, #f59e0b 0%, #dc2626 100%)'
  },
  { 
    value: 'video', 
    label: 'Video Projects',
    icon: PlayCircle,
    gradient: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 100%)'
  }
];

export const projectsData: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    subtitle: 'Modern Shopping Experience',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing through Stripe, and a powerful admin dashboard for business analytics.',
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: true,
    year: '2024',
    duration: '3 months',
    role: 'Full Stack Developer',
    technologies: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Stripe', color: '#008CDD' },
      { name: 'Redux', color: '#764ABC' }
    ],
    links: [
      { type: 'live', url: 'https://example.com', label: 'View Live' },
      { type: 'github', url: 'https://github.com', label: 'Source Code' }
    ],
    highlights: [
      'Processed over $100K in transactions',
      '99.9% uptime with auto-scaling',
      'Sub-second page load times',
      '50+ API endpoints'
    ],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'task-management-app',
    title: 'Task Management System',
    subtitle: 'Collaborative Workspace',
    description: 'Real-time collaborative task management with team chat, file sharing, and project tracking.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    featured: true,
    year: '2024',
    duration: '2 months',
    role: 'Frontend Developer',
    technologies: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Socket.io', color: '#010101' },
      { name: 'Material-UI', color: '#0081CB' }
    ],
    links: [
      { type: 'live', url: 'https://example.com', label: 'Try Demo' },
      { type: 'video', url: 'https://youtube.com', label: 'Watch Demo' }
    ],
    highlights: [
      'Real-time collaboration',
      'Drag-and-drop interface',
      'Advanced filtering system',
      'Mobile responsive'
    ],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    subtitle: 'Health & Wellness',
    description: 'Mobile app for tracking workouts, nutrition, and health metrics with AI recommendations.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    featured: false,
    year: '2023',
    duration: '4 months',
    role: 'Full Stack Developer',
    technologies: [
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'TensorFlow', color: '#FF6F00' }
    ],
    links: [
      { type: 'github', url: 'https://github.com', label: 'View Code' },
      { type: 'demo', url: 'https://example.com', label: 'Try Demo' }
    ],
    highlights: [
      '10K+ active users',
      'AI-powered recommendations',
      'Integration with wearables',
      'Offline mode support'
    ],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    subtitle: 'Analytics Platform',
    description: 'Comprehensive dashboard for managing multiple social media accounts with analytics.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    featured: false,
    year: '2023',
    duration: '2 months',
    role: 'Frontend Developer',
    technologies: [
      { name: 'Vue.js', color: '#4FC08D' },
      { name: 'D3.js', color: '#F68E56' },
      { name: 'Tailwind', color: '#06B6D4' },
      { name: 'Firebase', color: '#FFCA28' }
    ],
    links: [
      { type: 'live', url: 'https://example.com', label: 'View Live' }
    ],
    highlights: [
      'Real-time analytics',
      'Multi-platform support',
      'Custom reporting',
      'Automated posting'
    ],
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 'video-portfolio',
    title: 'Creative Video Portfolio',
    subtitle: 'Motion Graphics Showcase',
    description: 'Collection of professional video editing and motion graphics projects for various clients.',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    featured: true,
    year: '2024',
    duration: 'Ongoing',
    role: 'Video Editor',
    technologies: [
      { name: 'Premiere Pro', color: '#9999FF' },
      { name: 'After Effects', color: '#9999FF' },
      { name: 'DaVinci Resolve', color: '#FF6B00' }
    ],
    links: [
      { type: 'video', url: 'https://youtube.com', label: 'Watch Reel' },
      { type: 'live', url: 'https://vimeo.com', label: 'Portfolio' }
    ],
    highlights: [
      '50+ completed projects',
      'Corporate & creative work',
      '4K production quality',
      'Motion graphics expertise'
    ],
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    id: 'restaurant-booking',
    title: 'Restaurant Booking System',
    subtitle: 'Hospitality Solution',
    description: 'Online reservation system with table management, menu browsing, and customer reviews.',
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    featured: false,
    year: '2023',
    duration: '3 months',
    role: 'Full Stack Developer',
    technologies: [
      { name: 'Next.js', color: '#000000' },
      { name: 'Prisma', color: '#2D3748' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Tailwind', color: '#06B6D4' }
    ],
    links: [
      { type: 'github', url: 'https://github.com', label: 'Source Code' },
      { type: 'live', url: 'https://example.com', label: 'View Demo' }
    ],
    highlights: [
      'Real-time availability',
      'QR code menus',
      'Payment integration',
      'Multi-language support'
    ],
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  }
];