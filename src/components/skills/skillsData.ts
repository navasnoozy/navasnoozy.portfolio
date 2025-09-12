// src/components/skills/skillsData.ts
import {
  Code,
  Web,
  Storage,
  CloudQueue,
  Brush,
  DesignServices,
  VideoLibrary,
  Sell,
} from '@mui/icons-material';

// Import skill icons
import JavaScriptIcon from '../../assets/icons/JavaScriptIcon.png';
import TypeScriptIcon from '../../assets/icons/TypeScriptIcon.png';
import ReactIcon from '../../assets/icons/ReactIcon.png';
import NextJSIcon from '../../assets/icons/NextJSIcon.png';
import NodeIcon from '../../assets/icons/NodeIcon.png';
import MongoDBIcon from '../../assets/icons/MongoDBIcon.png';
import PostgreSQLIcon from '../../assets/icons/PostgreSQLIcon.png';
import DockerIcon from '../../assets/icons/Dockericon.png';
import HTML5Icon from '../../assets/icons/HTML5Icon.png';
import CSS3Icon from '../../assets/icons/CSS3Icon.png';
import TailwindCSSIcon from '../../assets/icons/TailwindCSSIcon.png';
import MUIImageIcon from '../../assets/icons/MUIImageIcon.png';
import PrismaIcon from '../../assets/icons/PrismaIcon.png';
import GitIcon from '../../assets/icons/GitIcon.png';
import KubernetesIcon from '../../assets/icons/KubernetesIcon.png';
import ViteIcon from '../../assets/icons/ViteIcon.png';
import ReduxIcon from '../../assets/icons/ReduxIcon.png';

export interface Skill {
  name: string;
  level: number;
  icon?: string | React.ComponentType<any>;
  experience?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Modern web interfaces & user experiences',
    icon: Web,
    color: '#64ffda',
    skills: [
      { name: 'React.js', level: 90, icon: ReactIcon, experience: '3+ years' },
      { name: 'Next.js', level: 85, icon: NextJSIcon, experience: '2+ years' },
      { name: 'TypeScript', level: 88, icon: TypeScriptIcon, experience: '2+ years' },
      { name: 'JavaScript', level: 92, icon: JavaScriptIcon, experience: '3+ years' },
      { name: 'HTML5', level: 95, icon: HTML5Icon, experience: '4+ years' },
      { name: 'CSS3', level: 90, icon: CSS3Icon, experience: '4+ years' },
      { name: 'Tailwind CSS', level: 85, icon: TailwindCSSIcon, experience: '2+ years' },
      { name: 'Material-UI', level: 88, icon: MUIImageIcon, experience: '2+ years' },
      { name: 'Redux', level: 80, icon: ReduxIcon, experience: '2+ years' },
      { name: 'Vite', level: 85, icon: ViteIcon, experience: '1+ years' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Server-side architecture & APIs',
    icon: Code,
    color: '#a855f7',
    skills: [
      { name: 'Node.js', level: 85, icon: NodeIcon, experience: '3+ years' },
      { name: 'Express.js', level: 80, experience: '2+ years' },
      { name: 'RESTful APIs', level: 88, experience: '3+ years' },
      { name: 'GraphQL', level: 75, experience: '1+ years' },
      { name: 'Microservices', level: 70, experience: '1+ years' },
      { name: 'WebSocket', level: 78, experience: '2+ years' },
    ],
  },
  {
    title: 'Database & Storage',
    description: 'Data management & optimization',
    icon: Storage,
    color: '#06b6d4',
    skills: [
      { name: 'MongoDB', level: 85, icon: MongoDBIcon, experience: '3+ years' },
      { name: 'PostgreSQL', level: 80, icon: PostgreSQLIcon, experience: '2+ years' },
      { name: 'Prisma ORM', level: 82, icon: PrismaIcon, experience: '2+ years' },
      { name: 'Redis', level: 70, experience: '1+ years' },
      { name: 'Database Design', level: 85, experience: '3+ years' },
    ],
  },
  {
    title: 'DevOps & Tools',
    description: 'Deployment & development workflow',
    icon: CloudQueue,
    color: '#f59e0b',
    skills: [
      { name: 'Docker', level: 75, icon: DockerIcon, experience: '2+ years' },
      { name: 'Kubernetes', level: 65, icon: KubernetesIcon, experience: '1+ years' },
      { name: 'Git', level: 90, icon: GitIcon, experience: '4+ years' },
      { name: 'CI/CD', level: 70, experience: '1+ years' },
      { name: 'AWS', level: 72, experience: '2+ years' },
      { name: 'Vercel', level: 85, experience: '2+ years' },
    ],
  },
  {
    title: 'Design & UI/UX',
    description: 'Visual design & user experience',
    icon: DesignServices,
    color: '#ec4899',
    skills: [
      { name: 'Figma', level: 80, experience: '2+ years' },
      { name: 'Adobe Photoshop', level: 75, experience: '3+ years' },
      { name: 'UI/UX Design', level: 78, experience: '2+ years' },
      { name: 'Responsive Design', level: 88, experience: '3+ years' },
      { name: 'Prototyping', level: 75, experience: '2+ years' },
      { name: 'Color Theory', level: 82, experience: '2+ years' },
    ],
  },
  {
    title: 'Video Editing',
    description: 'Content creation & post-production',
    icon: VideoLibrary,
    color: '#ef4444',
    skills: [
      { name: 'Adobe Premiere Pro', level: 85, experience: '3+ years' },
      { name: 'Adobe After Effects', level: 80, experience: '2+ years' },
      { name: 'DaVinci Resolve', level: 75, experience: '2+ years' },
      { name: 'Motion Graphics', level: 70, experience: '1+ years' },
      { name: 'Color Grading', level: 78, experience: '2+ years' },
      { name: 'Audio Editing', level: 72, experience: '2+ years' },
    ],
  },
  {
    title: 'Sales & Marketing',
    description: 'Business development & client relations',
    icon: Sell,
    color: '#10b981',
    skills: [
      { name: 'Client Communication', level: 90, experience: '4+ years' },
      { name: 'Project Management', level: 85, experience: '3+ years' },
      { name: 'Digital Marketing', level: 75, experience: '2+ years' },
      { name: 'Lead Generation', level: 80, experience: '3+ years' },
      { name: 'Presentation Skills', level: 88, experience: '4+ years' },
      { name: 'Negotiation', level: 82, experience: '3+ years' },
    ],
  },
  {
    title: 'Soft Skills',
    description: 'Personal & professional development',
    icon: Brush,
    color: '#8b5cf6',
    skills: [
      { name: 'Problem Solving', level: 92, experience: '4+ years' },
      { name: 'Team Leadership', level: 85, experience: '2+ years' },
      { name: 'Critical Thinking', level: 88, experience: '4+ years' },
      { name: 'Adaptability', level: 90, experience: '4+ years' },
      { name: 'Time Management', level: 87, experience: '4+ years' },
      { name: 'Creative Thinking', level: 85, experience: '3+ years' },
    ],
  },
];