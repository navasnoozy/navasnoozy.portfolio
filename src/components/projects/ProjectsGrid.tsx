// src/components/projects/ProjectsGrid.tsx
import React, { useState } from 'react';
import { Box, Grid, Tab, Tabs, Chip, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { projectCategories, projectsData, type Project } from '../../data/projectsData';
import { staggerContainer } from '../shared';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';


const ProjectsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const getFilteredProjects = () => {
    let filtered = projectsData;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by featured
    if (showOnlyFeatured) {
      filtered = filtered.filter(project => project.featured);
    }

    return filtered;
  };

  const filteredProjects = getFilteredProjects();

  // Statistics
  const stats = {
    total: projectsData.length,
    featured: projectsData.filter(p => p.featured).length,
    categories: new Set(projectsData.map(p => p.category)).size
  };

  return (
    <Box>
      {/* Filter Header */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        {/* Category Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Box
            sx={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              p: 1,
              overflowX: 'auto',
              maxWidth: '100%'
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
                  borderRadius: 2
                },
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  minHeight: 48,
                  '&.Mui-selected': {
                    color: '#64ffda'
                  },
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.9)'
                  }
                }
              }}
            >
              {projectCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Tab
                    key={category.value}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Icon sx={{ fontSize: '1.2rem' }} />
                        <span>{category.label}</span>
                      </Box>
                    }
                    value={category.value}
                  />
                );
              })}
            </Tabs>
          </Box>
        </Box>

        {/* Additional Filters */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Chip
              label="Featured Only"
              onClick={() => setShowOnlyFeatured(!showOnlyFeatured)}
              sx={{
                background: showOnlyFeatured 
                  ? 'linear-gradient(90deg, #64ffda 0%, #06b6d4 100%)'
                  : 'transparent',
                color: showOnlyFeatured ? '#000' : 'rgba(255, 255, 255, 0.8)',
                border: showOnlyFeatured 
                  ? 'none'
                  : '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 600,
                cursor: 'pointer',
                '&:hover': {
                  background: showOnlyFeatured 
                    ? 'linear-gradient(90deg, #64ffda 0%, #06b6d4 100%)'
                    : 'rgba(100, 255, 218, 0.1)',
                  borderColor: 'rgba(100, 255, 218, 0.3)'
                }
              }}
            />
          </motion.div>
        </Box>
      </Box>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedCategory}-${showOnlyFeatured}`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {filteredProjects.map((project, index) => (
              <Grid 
                key={project.id}
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
                  <ProjectCard
                    project={project}
                    delay={index * 0.1}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
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
                  No projects found
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '1rem'
                  }}
                >
                  Try adjusting your filters to see more projects
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
            Project Overview
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
                Total Projects
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
                  {stats.featured}
                </Box>
              </motion.div>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                Featured Projects
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
                  {stats.categories}
                </Box>
              </motion.div>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                Categories
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Box>
  );
};

export default ProjectsGrid;