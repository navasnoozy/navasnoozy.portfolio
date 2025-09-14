// src/components/projects/ProjectModal.tsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Chip,
  Button,
  Grid
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Close,
  GitHub,
  Language,
  Launch,
  PlayCircle,
  CheckCircle,
  CalendarToday,
  Timer,
  Person
} from '@mui/icons-material';
import type { Project,ProjectLink } from '../../data/projectsData';


interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, open, onClose }) => {
  if (!project) return null;

  const getIconForLink = (type: ProjectLink['type']) => {
    switch (type) {
      case 'github': return <GitHub />;
      case 'live': return <Language />;
      case 'demo': return <Launch />;
      case 'video': return <PlayCircle />;
      default: return <Launch />;
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              overflow: 'hidden'
            }
          }}
        >
          <Box sx={{ position: 'relative' }}>
            {/* Close Button */}
            <IconButton
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                zIndex: 10,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#64ffda'
                }
              }}
            >
              <Close />
            </IconButton>

            {/* Hero Image */}
            <Box
              sx={{
                height: { xs: 200, md: 300 },
                position: 'relative',
                background: project.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                overflow: 'hidden'
              }}
            >
              <motion.img
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)'
                }}
              />

              {/* Featured Badge */}
              {project.featured && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
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
                    Featured Project
                  </Typography>
                </Box>
              )}
            </Box>

            <DialogContent sx={{ p: { xs: 3, md: 4 } }}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Header */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900,
                      color: 'white',
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      mb: 1,
                      background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography
                    sx={{
                      color: 'rgba(100, 255, 218, 0.9)',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      mb: 2
                    }}
                  >
                    {project.subtitle}
                  </Typography>

                  {/* Meta Info */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                    <Chip
                      label={project.category.toUpperCase()}
                      sx={{
                        background: 'rgba(100, 255, 218, 0.1)',
                        color: '#64ffda',
                        border: '1px solid rgba(100, 255, 218, 0.3)',
                        fontWeight: 600
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                      }}
                    >
                      <CalendarToday sx={{ fontSize: '1rem' }} />
                      {project.year}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                      }}
                    >
                      <Timer sx={{ fontSize: '1rem' }} />
                      {project.duration}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                      }}
                    >
                      <Person sx={{ fontSize: '1rem' }} />
                      {project.role}
                    </Typography>
                  </Box>

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {project.links.map((link, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1, type: 'spring' }}
                      >
                        <Button
                          variant="contained"
                          startIcon={getIconForLink(link.type)}
                          onClick={() => window.open(link.url, '_blank')}
                          sx={{
                            background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                            color: '#64ffda',
                            border: '1px solid rgba(100, 255, 218, 0.3)',
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
                              borderColor: '#64ffda'
                            }
                          }}
                        >
                          {link.label}
                        </Button>
                      </motion.div>
                    ))}
                  </Box>
                </Box>

                {/* Content Grid */}
                <Grid container spacing={4}>
                  {/* Description */}
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: 'white',
                          mb: 2,
                          fontSize: { xs: '1.2rem', md: '1.4rem' }
                        }}
                      >
                        About the Project
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.8,
                          fontSize: '1rem'
                        }}
                      >
                        {project.longDescription || project.description}
                      </Typography>
                    </Box>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: 'white',
                            mb: 2,
                            fontSize: { xs: '1.2rem', md: '1.4rem' }
                          }}
                        >
                          Key Highlights
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {project.highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.1 + index * 0.1 }}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 2,
                                  p: 2,
                                  background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
                                  borderRadius: '12px',
                                  border: '1px solid rgba(100, 255, 218, 0.1)'
                                }}
                              >
                                <CheckCircle sx={{ color: '#64ffda', fontSize: '1.2rem' }} />
                                <Typography
                                  sx={{
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '0.95rem'
                                  }}
                                >
                                  {highlight}
                                </Typography>
                              </Box>
                            </motion.div>
                          ))}
                        </Box>
                      </Box>
                    )}
                  </Grid>

                  {/* Technologies Sidebar */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{
                        p: 3,
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'white',
                          mb: 3,
                          fontSize: '1.1rem'
                        }}
                      >
                        Technologies Used
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {project.technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.05, type: 'spring' }}
                          >
                            <Chip
                              label={tech.name}
                              sx={{
                                background: `${tech.color}20`,
                                color: tech.color,
                                border: `1px solid ${tech.color}40`,
                                fontWeight: 600,
                                '&:hover': {
                                  background: `${tech.color}30`,
                                  transform: 'scale(1.05)'
                                }
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </DialogContent>
          </Box>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;