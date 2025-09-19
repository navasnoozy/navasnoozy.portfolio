// src/components/articles/ArticleCard.tsx
import {
  Bookmark,
  BookmarkBorder,
  CalendarToday,
  Launch,
  Schedule,
  Share,
  ThumbUp,
  Visibility
} from '@mui/icons-material';
import { Avatar, Box, Chip, IconButton, Tooltip, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import type { Article } from '../../data/articlesData';
import { AnimatedCard } from '../shared';

interface ArticleCardProps {
  article: Article;
  delay?: number;
  onClick?: () => void;
  variant?: 'default' | 'compact' | 'featured';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  delay = 0, 
  onClick,
  variant = 'default'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  if (variant === 'compact') {
    return (
      <AnimatedCard 
        delay={delay} 
        glowEffect 
        sx={{ cursor: 'pointer' }}
      >
        <Box onClick={onClick} sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'white',
                mb: 1,
                fontSize: '1.1rem',
                lineHeight: 1.3
              }}
            >
              {article.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                {article.readTime}
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                {formatDate(article.publishedDate)}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '12px',
              overflow: 'hidden',
              background: article.gradient
            }}
          >
            <img
              src={article.image}
              alt={article.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Box>
      </AnimatedCard>
    );
  }

  return (
    <AnimatedCard 
      delay={delay} 
      glowEffect 
      sx={{ 
        height: '100%', 
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        {/* Image Container */}
        <Box
          sx={{
            position: 'relative',
            height: variant === 'featured' ? 300 : 220,
            margin: -4,
            mb: 3,
            overflow: 'hidden',
            borderRadius: '16px 16px 0 0',
            background: article.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <motion.img
            src={article.image}
            alt={article.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            animate={{
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? 'brightness(0.7)' : 'brightness(1)'
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Overlay on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  padding: '20px'
                }}
              >
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Tooltip title={isBookmarked ? "Remove bookmark" : "Bookmark"}>
                      <IconButton
                        size="small"
                        onClick={handleBookmark}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          color: isBookmarked ? '#64ffda' : 'white',
                          '&:hover': {
                            background: 'rgba(100, 255, 218, 0.2)'
                          }
                        }}
                      >
                        {isBookmarked ? <Bookmark /> : <BookmarkBorder />}
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Tooltip title="Share">
                      <IconButton
                        size="small"
                        onClick={handleShare}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          '&:hover': {
                            background: 'rgba(100, 255, 218, 0.2)',
                            color: '#64ffda'
                          }
                        }}
                      >
                        <Share />
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                </Box>
                {article.link && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Tooltip title="Read on platform">
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(article.link, '_blank');
                        }}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          '&:hover': {
                            background: 'rgba(100, 255, 218, 0.2)',
                            color: '#64ffda'
                          }
                        }}
                      >
                        <Launch />
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Featured Badge */}
          {article.featured && (
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                px: 2,
                py: 0.5,
                background: 'linear-gradient(90deg, #64ffda 0%, #06b6d4 100%)',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(100, 255, 218, 0.4)'
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#000',
                  textTransform: 'uppercase',
                  letterSpacing: 1
                }}
              >
                Featured
              </Typography>
            </Box>
          )}

          {/* Platform Badge */}
          {article.platform && (
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                px: 1.5,
                py: 0.5,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px'
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5
                }}
              >
                {article.platform}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Category & Date */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Chip
              label={article.category.toUpperCase()}
              size="small"
              sx={{
                background: 'rgba(100, 255, 218, 0.1)',
                color: '#64ffda',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                fontWeight: 600,
                fontSize: '0.7rem',
                letterSpacing: 1
              }}
            />
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              <CalendarToday sx={{ fontSize: '0.9rem' }} />
              {formatDate(article.publishedDate)}
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'white',
              mb: 2,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {article.title}
          </Typography>

          {/* Excerpt */}
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              mb: 3,
              flex: 1,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {article.excerpt}
          </Typography>

          {/* Tags */}
          <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {article.tags.slice(0, 3).map((tag, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + 0.1 + index * 0.05 }}
              >
                <Chip
                  label={tag}
                  size="small"
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '0.7rem',
                    height: 24,
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }
                  }}
                />
              </motion.div>
            ))}
            {article.tags.length > 3 && (
              <Chip
                label={`+${article.tags.length - 3}`}
                size="small"
                sx={{
                  background: 'rgba(100, 255, 218, 0.1)',
                  color: '#64ffda',
                  border: '1px solid rgba(100, 255, 218, 0.3)',
                  fontSize: '0.7rem',
                  height: 24
                }}
              />
            )}
          </Box>

          {/* Footer */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 2,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Author */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                  fontSize: '0.9rem',
                  fontWeight: 700
                }}
              >
                {article.author.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              <Box>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'white'
                  }}
                >
                  {article.author.name}
                </Typography>
                {article.author.role && (
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {article.author.role}
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Stats */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <Schedule sx={{ fontSize: '0.9rem' }} />
                {article.readTime}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <Visibility sx={{ fontSize: '0.9rem' }} />
                {formatViews(article.views)}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <ThumbUp sx={{ fontSize: '0.9rem' }} />
                {article.likes}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </AnimatedCard>
  );
};

export default ArticleCard;