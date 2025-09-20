// src/components/projects/ProjectCard.tsx
import React, { useState } from 'react';
import { Box, Typography, Chip, IconButton, Tooltip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitHub, 
  Language, 
  PlayCircle, 
  Launch,
  CalendarToday,
  Timer,
  Person,
  ArrowForward,
  LinkedIn
} from '@mui/icons-material';

import type { Project, ProjectLink } from '../../data/projectsData';
import { AnimatedCard } from '../shared';


interface ProjectCardProps {
  project: Project;
  delay?: number;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getIconForLink = (type: ProjectLink['type']) => {
    switch (type) {
      case 'github': return <GitHub />;
      case 'live': return <Language />;
      case 'demo': return <Launch />;
      case 'video': return <PlayCircle />;
      case 'linkedin': return <LinkedIn />;
      default: return <Launch />;
    }
  };

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
            height: 250,
            margin: -4,
            mb: 3,
            overflow: 'hidden',
            borderRadius: '16px 16px 0 0',
            background: project.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          {/* Placeholder while image loads */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: imageLoaded ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: project.gradient,
            }}
          >
            <Typography
              sx={{
                fontSize: '3rem',
                fontWeight: 900,
                opacity: 0.2,
                color: 'white'
              }}
            >
              {project.title.charAt(0)}
            </Typography>
          </Box>

          {/* Actual Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: imageLoaded ? 'block' : 'none'
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? 'brightness(0.8)' : 'brightness(1)'
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
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px'
                }}
              >
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {project.links.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Tooltip title={link.label}>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(link.url, '_blank');
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
                          {getIconForLink(link.type)}
                        </IconButton>
                      </Tooltip>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Featured Badge */}
          {project.featured && (
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
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
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Category & Year */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Chip
              label={project.category.toUpperCase()}
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
              {project.year}
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'white',
              mb: 1,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              lineHeight: 1.2
            }}
          >
            {project.title}
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              color: 'rgba(100, 255, 218, 0.8)',
              fontWeight: 600,
              fontSize: '0.95rem',
              mb: 2
            }}
          >
            {project.subtitle}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              mb: 3,
              flex: 1
            }}
          >
            {project.description}
          </Typography>

          {/* Technologies */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {project.technologies.slice(0, 4).map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: delay + 0.1 + index * 0.05 }}
                >
                  <Chip
                    label={tech.name}
                    size="small"
                    sx={{
                      background: `${tech.color}20`,
                      color: tech.color,
                      border: `1px solid ${tech.color}20`,
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      '&:hover': {
                        background: `${tech.color}30`,
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                </motion.div>
              ))}
              {project.technologies.length > 4 && (
                <Chip
                  label={`+${project.technologies.length - 4}`}
                  size="small"
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    fontWeight: 600,
                    fontSize: '0.75rem'
                  }}
                />
              )}
            </Box>
          </Box>

          {/* Meta Info */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 2,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
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
                <Timer sx={{ fontSize: '0.9rem' }} />
                {project.duration}
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
                <Person sx={{ fontSize: '0.9rem' }} />
                {project.role}
              </Typography>
            </Box>

            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowForward 
                sx={{ 
                  color: '#64ffda',
                  fontSize: '1.2rem'
                }} 
              />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </AnimatedCard>
  );
};

export default ProjectCard;