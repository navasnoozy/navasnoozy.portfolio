// src/data/articlesData.ts
import {
    AllInclusive,
    Brush,
    Build,
    Code,
    Psychology,
    TrendingUp
} from '@mui/icons-material';

export interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  tags: string[];
  author: Author;
  publishedDate: string;
  readTime: string;
  image: string;
  featured: boolean;
  views: number;
  likes: number;
  link?: string;
  platform?: 'Medium' | 'Dev.to' | 'Personal' | 'LinkedIn';
  gradient?: string;
}

export const articleCategories = [
  { 
    value: 'all', 
    label: 'All Articles', 
    icon: AllInclusive,
    gradient: 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)'
  },
  { 
    value: 'technical', 
    label: 'Technical', 
    icon: Code,
    gradient: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)'
  },
  { 
    value: 'design', 
    label: 'Design', 
    icon: Brush,
    gradient: 'linear-gradient(90deg, #ec4899 0%, #f43f5e 100%)'
  },
  { 
    value: 'thoughts', 
    label: 'Thoughts', 
    icon: Psychology,
    gradient: 'linear-gradient(90deg, #10b981 0%, #14b8a6 100%)'
  },
  { 
    value: 'career', 
    label: 'Career', 
    icon: TrendingUp,
    gradient: 'linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)'
  },
  { 
    value: 'tutorials', 
    label: 'Tutorials', 
    icon: Build,
    gradient: 'linear-gradient(90deg, #06b6d4 0%, #0ea5e9 100%)'
  }
];

export const articlesData: Article[] = [
  {
    id: 'art-1',
    title: 'Building Scalable React Applications with Next.js 14',
    excerpt: 'Explore the latest features in Next.js 14 and learn how to build performant, SEO-friendly applications with App Router, Server Components, and more.',
    category: 'technical',
    tags: ['React', 'Next.js', 'TypeScript', 'Performance'],
    author: {
      name: 'Navas CK',
      role: 'Full Stack Developer'
    },
    publishedDate: '2024-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    featured: true,
    views: 1234,
    likes: 89,
    platform: 'Medium',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'art-2',
    title: 'The Art of Micro-Animations in Modern Web Design',
    excerpt: 'Discover how subtle animations can dramatically improve user experience and engagement. Learn practical techniques with Framer Motion.',
    category: 'design',
    tags: ['UX', 'Animation', 'Framer Motion', 'Design'],
    author: {
      name: 'Navas CK',
      role: 'UI/UX Enthusiast'
    },
    publishedDate: '2024-02-28',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
    featured: true,
    views: 892,
    likes: 67,
    platform: 'Dev.to',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'art-3',
    title: 'From Salesman to Software Developer: My Journey',
    excerpt: 'A personal story about transitioning careers, learning to code, and the challenges faced along the way to becoming a full-stack developer.',
    category: 'career',
    tags: ['Career', 'Personal Growth', 'Learning'],
    author: {
      name: 'Navas CK',
      role: 'Developer'
    },
    publishedDate: '2024-01-20',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    featured: false,
    views: 2103,
    likes: 156,
    platform: 'LinkedIn',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 'art-4',
    title: 'Understanding React Server Components',
    excerpt: 'Deep dive into React Server Components, their benefits, use cases, and how they change the way we think about React applications.',
    category: 'technical',
    tags: ['React', 'RSC', 'Performance', 'Architecture'],
    author: {
      name: 'Navas CK',
      role: 'Full Stack Developer'
    },
    publishedDate: '2024-03-01',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
    featured: false,
    views: 567,
    likes: 45,
    platform: 'Personal',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'art-5',
    title: 'Mastering TypeScript: Advanced Patterns and Best Practices',
    excerpt: 'Level up your TypeScript skills with advanced type patterns, utility types, and real-world examples for building robust applications.',
    category: 'tutorials',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    author: {
      name: 'Navas CK',
      role: 'Full Stack Developer'
    },
    publishedDate: '2024-02-15',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    featured: true,
    views: 1567,
    likes: 124,
    platform: 'Medium',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: 'art-6',
    title: 'The Psychology of Clean Code',
    excerpt: 'Exploring the cognitive science behind readable code and how understanding human psychology can make you a better programmer.',
    category: 'thoughts',
    tags: ['Clean Code', 'Psychology', 'Best Practices'],
    author: {
      name: 'Navas CK',
      role: 'Tech Enthusiast'
    },
    publishedDate: '2024-01-10',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
    featured: false,
    views: 789,
    likes: 56,
    platform: 'Dev.to',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  }
];

// Helper functions
export const getArticlesByCategory = (category: string): Article[] => {
  if (category === 'all') return articlesData;
  return articlesData.filter(article => article.category === category);
};

export const getFeaturedArticles = (): Article[] => {
  return articlesData.filter(article => article.featured);
};

export const getArticleStats = () => {
  const totalViews = articlesData.reduce((sum, article) => sum + article.views, 0);
  const totalLikes = articlesData.reduce((sum, article) => sum + article.likes, 0);
  const categories = new Set(articlesData.map(a => a.category)).size;
  
  return {
    total: articlesData.length,
    featured: getFeaturedArticles().length,
    totalViews,
    totalLikes,
    categories
  };
};