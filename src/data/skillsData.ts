// src/data/skillsData.ts
import { ALL_ICONS, type IconType } from '../components/AnimatedBackground/icons';

export interface Skill {
  id: string;
  name: string;
  level: number;
  icon: IconType;
  category: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
  gradient: string;
}

// Helper function to get icon by key
const getIconByKey = (key: string): IconType => {
  const iconData = ALL_ICONS.find(icon => icon.key === key);
  return iconData ? iconData.Component : ALL_ICONS[0].Component; // fallback
};

export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    color: '#64ffda',
    gradient: 'linear-gradient(135deg, #64ffda 0%, #06b6d4 100%)',
    skills: [
      {
        id: 'react',
        name: 'React',
        level: 95,
        icon: getIconByKey('react'),
        category: 'Frontend',
        description: 'Modern React with Hooks, Context, and advanced patterns'
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        level: 90,
        icon: getIconByKey('nextjs'),
        category: 'Frontend',
        description: 'Full-stack React framework with SSR and static generation'
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        level: 85,
        icon: getIconByKey('ts'),
        category: 'Frontend',
        description: 'Type-safe development with advanced TypeScript patterns'
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        level: 90,
        icon: getIconByKey('js'),
        category: 'Frontend',
        description: 'ES6+, async/await, and modern JavaScript features'
      },
      {
        id: 'html5',
        name: 'HTML5',
        level: 95,
        icon: getIconByKey('html5'),
        category: 'Frontend',
        description: 'Semantic markup and modern HTML5 APIs'
      },
      {
        id: 'css3',
        name: 'CSS3',
        level: 90,
        icon: getIconByKey('css3'),
        category: 'Frontend',
        description: 'Advanced CSS3, animations, and responsive design'
      }
    ]
  },
  {
    name: 'Styling & UI',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #f59e0b 100%)',
    skills: [
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        level: 95,
        icon: getIconByKey('tailwind'),
        category: 'Styling',
        description: 'Utility-first CSS framework for rapid UI development'
      },
      {
        id: 'mui',
        name: 'Material-UI',
        level: 90,
        icon: getIconByKey('mui'),
        category: 'Styling',
        description: 'React component library with Material Design'
      },
      {
        id: 'chakra',
        name: 'Chakra UI',
        level: 90,
        icon: getIconByKey('chakra'),
        category: 'Styling',
        description: 'Modular and accessible component library'
      },
      {
        id: 'radix',
        name: 'Radix UI',
        level: 75,
        icon: getIconByKey('radix'),
        category: 'Styling',
        description: 'Modular and accessible component library'
      }
    ]
  },
  {
    name: 'Backend Development',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    skills: [
      {
        id: 'nodejs',
        name: 'Node.js',
        level: 85,
        icon: getIconByKey('node'),
        category: 'Backend',
        description: 'Server-side JavaScript with Express and NestJS'
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        level: 82,
        icon: getIconByKey('mongo'),
        category: 'Backend',
        description: 'NoSQL database with Mongoose ODM'
      },
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        level: 78,
        icon: getIconByKey('postgres'),
        category: 'Backend',
        description: 'Relational database with complex queries'
      },
      {
        id: 'prisma',
        name: 'Prisma',
        level: 80,
        icon: getIconByKey('prisma'),
        category: 'Backend',
        description: 'Next-generation ORM with type safety'
      }
    ]
  },
  {
    name: 'State Management',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    skills: [
      {
        id: 'redux',
        name: 'Redux',
        level: 88,
        icon: getIconByKey('redux'),
        category: 'State',
        description: 'Predictable state container with Redux Toolkit'
      },
      {
        id: 'zustand',
        name: 'Zustand',
        level: 85,
        icon: getIconByKey('zustand'),
        category: 'State',
        description: 'Lightweight state management solution'
      }
    ]
  },
  {
    name: 'Tools & DevOps',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    skills: [
      {
        id: 'docker',
        name: 'Docker',
        level: 75,
        icon: getIconByKey('docker'),
        category: 'DevOps',
        description: 'Containerization and microservices architecture'
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        level: 65,
        icon: getIconByKey('k8s'),
        category: 'DevOps',
        description: 'Container orchestration and deployment'
      },
      {
        id: 'git',
        name: 'Git',
        level: 90,
        icon: getIconByKey('git'),
        category: 'Tools',
        description: 'Version control and collaborative development'
      },
      {
        id: 'github',
        name: 'GitHub',
        level: 92,
        icon: getIconByKey('github'),
        category: 'Tools',
        description: 'Repository hosting and CI/CD workflows'
      },
      {
        id: 'vite',
        name: 'Vite',
        level: 88,
        icon: getIconByKey('vite'),
        category: 'Tools',
        description: 'Fast build tool and development server'
      }
    ]
  },
  {
    name: 'Cloud & Deployment',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    skills: [
         {
        id: 'digitalocean',
        name: 'DigitalOcean',
        level: 75,
        icon: getIconByKey('do'),
        category: 'Cloud',
        description: 'Cloud infrastructure and droplets management'
      },
        {
        id: 'aws',
        name: 'Aws',
        level: 50,
        icon: getIconByKey('aws'),
        category: 'Deployment',
        description: 'Full-stack application deployment'
      },
      {
        id: 'vercel',
        name: 'Vercel',
        level: 90,
        icon: getIconByKey('vercel'),
        category: 'Deployment',
        description: 'Frontend deployment and serverless functions'
      },
   
      {
        id: 'render',
        name: 'Render',
        level: 80,
        icon: getIconByKey('render'),
        category: 'Deployment',
        description: 'Full-stack application deployment'
      },
    
    ]
  }
];