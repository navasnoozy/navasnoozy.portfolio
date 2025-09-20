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
    id: 'art-2',
    title: 'Seek for Best Practice',
    excerpt: 'In the current landscape, writing a solution is not enough in coding, it also needs to be optimized, efficient, and aligned with best practices',
    category: 'technical',
    tags: ['Best practice','Cloudinary'],
    author: {
      name: 'Navas CK',
      role: 'Web Developer'
    },
    publishedDate: '2024-02-28',
    readTime: '1 min read',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
    featured: true,
    views: 892,
    likes: 67,
    platform: 'LinkedIn',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  
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