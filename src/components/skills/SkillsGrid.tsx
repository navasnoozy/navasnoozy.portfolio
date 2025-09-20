// src/components/skills/SkillsGrid.tsx
import { Box, Chip, Grid, Tab, Tabs } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { skillsData } from '../../data/skillsData';
import { staggerContainer } from '../shared/sharedAnimations';
import SkillCard from './SkillCard';

const SkillsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const getFilteredSkills = () => {
    if (selectedCategory === 'all') {
      return skillsData.flatMap((category) =>
        category.skills.map((skill) => ({
          ...skill,
          categoryData: category,
        }))
      );
    }

    const category = skillsData.find((cat) => cat.name === selectedCategory);
    return category
      ? category.skills.map((skill) => ({
          ...skill,
          categoryData: category,
        }))
      : [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <Box>
      {/* Category Filter */}
      <Box sx={{ mb: { xs: 4, md: 6 }, display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            p: 1,
            overflowX: 'auto',
            maxWidth: '100%',
          }}
        >
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                background: 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)',
                height: 3,
                borderRadius: 2,
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: { xs: '0.9rem', md: '1rem' },
                minHeight: 48,
                '&.Mui-selected': {
                  color: '#64ffda',
                },
                '&:hover': {
                  color: 'rgba(255, 255, 255, 0.9)',
                },
              },
            }}
          >
            <Tab
              label={
                <Chip
                  label="All Skills"
                  size="small"
                  sx={{
                    background:
                      selectedCategory === 'all' ? 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)' : 'transparent',
                    color: selectedCategory === 'all' ? '#000' : 'rgba(255, 255, 255, 0.8)',
                    border: selectedCategory === 'all' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                    fontWeight: 600,
                  }}
                />
              }
              value="all"
            />
            {skillsData.map((category) => (
              <Tab
                key={category.name}
                label={
                  <Chip
                    label={category.name}
                    size="small"
                    sx={{
                      background: selectedCategory === category.name ? category.gradient : 'transparent',
                      color: selectedCategory === category.name ? '#000' : 'rgba(255, 255, 255, 0.8)',
                      border: selectedCategory === category.name ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                      fontWeight: 600,
                    }}
                  />
                }
                value={category.name}
              />
            ))}
          </Tabs>
        </Box>
      </Box>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedCategory} 
          variants={staggerContainer} 
          initial="hidden" 
          animate="visible" 
          exit="hidden"
        >
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {filteredSkills.map((skill, index) => {
              // Simple uniform delay - all cards appear with the same timing pattern
              const animationDelay = (index % 8) * 0.05; // Only first 8 positions get delays, then it repeats
              
              return (
                <Grid
                  key={`${selectedCategory}-${skill.id}`}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }} // MUI v7 syntax
                >
                  <motion.div
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ 
                      duration: 0.4,
                      delay: animationDelay,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    <SkillCard
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      category={skill.category}
                      description={skill.description}
                      delay={animationDelay}
                    />
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </AnimatePresence>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            p: { xs: 3, md: 4 },
            background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(100, 255, 218, 0.2)',
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 4 },
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
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  {skillsData.reduce((total, category) => total + category.skills.length, 0)}+
                </Box>
              </motion.div>
              <Box sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>Technologies</Box>
            </Box>

            <Box>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.4 }}
              >
                <Box
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  {skillsData.length}
                </Box>
              </motion.div>
              <Box sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>Categories</Box>
            </Box>

            <Box>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: 'spring', bounce: 0.4 }}
              >
                <Box
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  1.5+
                </Box>
              </motion.div>
              <Box sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>Years Experience</Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SkillsGrid;