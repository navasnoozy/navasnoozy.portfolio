// src/components/about/AboutTimeline/AboutTimeline.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Work, School, Code, VideoLibrary } from '@mui/icons-material';
import AnimatedCard from '../../shared/AnimatedCard/AnimatedCard';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    subtitle: 'Freelance & Contract Work',
    description:
      'Leading complex web development projects, mentoring junior developers, and exploring cutting-edge technologies like AI integration and blockchain development.',
    icon: <Code />,
    color: '#64ffda',
  },
  {
    year: '2023',
    title: 'Full-Stack Developer',
    subtitle: 'Multiple Client Projects',
    description:
      'Developed scalable web applications using React, Node.js, and modern cloud platforms. Specialized in e-commerce solutions and real-time applications.',
    icon: <Work />,
    color: '#a855f7',
  },
  {
    year: '2022',
    title: 'Video Editor & Content Creator',
    subtitle: 'Digital Media Production',
    description:
      'Created engaging video content for various clients, mastering tools like Adobe Premiere Pro, After Effects, and developing a unique visual storytelling approach.',
    icon: <VideoLibrary />,
    color: '#06b6d4',
  },
  {
    year: '2021',
    title: 'Started Programming Journey',
    subtitle: 'Self-Taught Developer',
    description:
      'Began learning web development through online courses and personal projects. Built my first React application and discovered my passion for creating digital solutions.',
    icon: <School />,
    color: '#10b981',
  },
];

const AboutTimeline: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
      {/* Timeline Line */}
      <Box
        component={motion.div}
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          left: { xs: '24px', md: '50%' },
          transform: { xs: 'none', md: 'translateX(-50%)' },
          width: 4,
          background:
            'linear-gradient(180deg, #64ffda 0%, #a855f7 50%, #06b6d4 100%)',
          borderRadius: 2,
          zIndex: 0,
        }}
      />

      {timelineData.map((item, index) => (
        <Box
          key={index}
          component={motion.div}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          sx={{
            position: 'relative',
            mb: '48px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: {
                xs: 'row',
                md: index % 2 === 0 ? 'row' : 'row-reverse',
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            {/* Timeline Icon */}
            <Box
              component={motion.div}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              sx={{
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                order: { xs: 0, md: index % 2 === 0 ? 0 : 2 },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}40 100%)`,
                  border: `2px solid ${item.color}`,
                  color: item.color,
                  boxShadow: `0 0 20px ${item.color}30`,
                }}
              >
                {item.icon}
              </Box>
            </Box>

            {/* Content Card */}
            <Box sx={{ flex: 1, order: { xs: 1, md: 1 } }}>
              <AnimatedCard delay={index * 0.1} glowEffect>
                <Box>
                  {/* Year Badge */}
                  <Box
                    sx={{
                      display: 'inline-block',
                      px: 2,
                      py: 0.5,
                      background: `linear-gradient(90deg, ${item.color}20 0%, ${item.color}40 100%)`,
                      border: `1px solid ${item.color}60`,
                      borderRadius: '20px',
                      color: item.color,
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {item.year}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      mb: 1,
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Subtitle */}
                  <Typography
                    sx={{
                      color: item.color,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      mb: 2,
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </AnimatedCard>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AboutTimeline;
