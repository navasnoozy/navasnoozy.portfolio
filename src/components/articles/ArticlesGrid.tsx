// src/components/articles/ArticlesGrid.tsx
import React, { useState } from 'react';
import { Box, Grid, Chip, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  GridView, 
  ViewList,
  TrendingUp,
  Schedule,
  Bookmark
} from '@mui/icons-material';
import { 
  articleCategories, 
  articlesData, 
  getArticlesByCategory,
  getArticleStats,
  type Article 
} from '../../data/articlesData';
import { staggerContainer } from '../shared';
import FilterTabs from '../shared/FilterTabs';
import ArticleCard from './ArticleCard';

type ViewMode = 'grid' | 'list';
type SortBy = 'recent' | 'popular' | 'featured';

const ArticlesGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortBy>('recent');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const handleViewModeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: ViewMode | null
  ) => {
    if (newMode !== null) {
      setViewMode(newMode);
    }
  };

  const getFilteredAndSortedArticles = (): Article[] => {
    let filtered = getArticlesByCategory(selectedCategory);

    // Filter by featured
    if (showOnlyFeatured) {
      filtered = filtered.filter(article => article.featured);
    }

    // Sort articles
    switch (sortBy) {
      case 'popular':
        return [...filtered].sort((a, b) => b.views - a.views);
      case 'featured':
        return [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      case 'recent':
      default:
        return [...filtered].sort((a, b) => 
          new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
        );
    }
  };

  const filteredArticles = getFilteredAndSortedArticles();
  const stats = getArticleStats();

  // Add counts to categories
  const categoriesWithCounts = articleCategories.map(cat => ({
    ...cat,
    count: cat.value === 'all' 
      ? articlesData.length 
      : articlesData.filter(a => a.category === cat.value).length
  }));

  return (
    <Box>
      {/* Filter Header */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        {/* Category Tabs */}
        <FilterTabs
          categories={categoriesWithCounts}
          selectedCategory={selectedCategory}
          onChange={handleCategoryChange}
          showCounts={true}
        />

        {/* Controls Row */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 4,
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          {/* Sort Options */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Chip
                label="Recent"
                icon={<Schedule sx={{ fontSize: '1rem' }} />}
                onClick={() => setSortBy('recent')}
                sx={{
                  background: sortBy === 'recent'
                    ? 'linear-gradient(90deg, #64ffda 0%, #06b6d4 100%)'
                    : 'transparent',
                  color: sortBy === 'recent' ? '#000' : 'rgba(255, 255, 255, 0.8)',
                  border: sortBy === 'recent'
                    ? 'none'
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Chip
                label="Popular"
                icon={<TrendingUp sx={{ fontSize: '1rem' }} />}
                onClick={() => setSortBy('popular')}
                sx={{
                  background: sortBy === 'popular'
                    ? 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)'
                    : 'transparent',
                  color: sortBy === 'popular' ? '#000' : 'rgba(255, 255, 255, 0.8)',
                  border: sortBy === 'popular'
                    ? 'none'
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Chip
                label="Featured Only"
                icon={<Bookmark sx={{ fontSize: '1rem' }} />}
                onClick={() => setShowOnlyFeatured(!showOnlyFeatured)}
                sx={{
                  background: showOnlyFeatured
                    ? 'linear-gradient(90deg, #06b6d4 0%, #10b981 100%)'
                    : 'transparent',
                  color: showOnlyFeatured ? '#000' : 'rgba(255, 255, 255, 0.8)',
                  border: showOnlyFeatured
                    ? 'none'
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              />
            </motion.div>
          </Box>

          {/* View Mode Toggle */}
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewModeChange}
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              '& .MuiToggleButton-root': {
                color: 'rgba(255, 255, 255, 0.6)',
                border: 'none',
                px: 2,
                '&.Mui-selected': {
                  background: 'linear-gradient(90deg, #64ffda 0%, #06b6d4 100%)',
                  color: '#000',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #64ffda 0%, #06b6d4 100%)'
                  }
                },
                '&:hover': {
                  background: 'rgba(100, 255, 218, 0.1)'
                }
              }
            }}
          >
            <ToggleButton value="grid">
              <GridView sx={{ mr: 1 }} />
              Grid
            </ToggleButton>
            <ToggleButton value="list">
              <ViewList sx={{ mr: 1 }} />
              List
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      {/* Articles Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedCategory}-${showOnlyFeatured}-${viewMode}`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {viewMode === 'grid' ? (
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {filteredArticles.map((article, index) => (
                <Grid 
                  key={article.id}
                  size={{ xs: 12, md: 6, lg: 4 }}
                >
                  <motion.div
                    variants={{
                      hidden: { y: 50, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ height: '100%' }}
                  >
                    <ArticleCard
                      article={article}
                      delay={index * 0.1}
                      onClick={() => {
                        if (article.link) {
                          window.open(article.link, '_blank');
                        }
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ArticleCard
                    article={article}
                    delay={index * 0.05}
                    variant="compact"
                    onClick={() => {
                      if (article.link) {
                        window.open(article.link, '_blank');
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          )}

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  py: 8,
                  px: 3,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  No articles found
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '1rem'
                  }}
                >
                  Try adjusting your filters to see more articles
                </Typography>
              </Box>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Statistics Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            p: { xs: 3, md: 4 },
            background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(100, 255, 218, 0.2)',
            textAlign: 'center',
            backdropFilter: 'blur(20px)'
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'white',
              mb: 4,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Writing Statistics
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: { xs: 3, md: 4 }
            }}
          >
            <Box>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
              >
                <Box
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1
                  }}
                >
                  {stats.total}
                </Box>
              </motion.div>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                Articles Written
              </Typography>
            </Box>

            <Box>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.4 }}
              >
                <Box
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1
                  }}
                >
                  {(stats.totalViews / 1000).toFixed(1)}k
                </Box>
              </motion.div>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                Total Views
              </Typography>
            </Box>

            <Box>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: 'spring', bounce: 0.4 }}
              >
                <Box
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1
                  }}
                >
                  {stats.totalLikes}
                </Box>
              </motion.div>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                Engagements
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ArticlesGrid;