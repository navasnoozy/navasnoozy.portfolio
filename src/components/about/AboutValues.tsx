// src/components/about/AboutValues.tsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Speed,
  People,
  Psychology,
  TrendingUp,
  Verified,
} from '@mui/icons-material';
import { AnimatedCard, staggerContainer } from '../shared';


interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const values: Value[] = [
  {
    icon: <Lightbulb />,
    title: 'Innovation',
    description:
      'Always exploring new technologies and creative solutions to solve complex problems.',
    color: '#f59e0b',
  },
  {
    icon: <Speed />,
    title: 'Efficiency',
    description:
      'Delivering high-quality solutions quickly without compromising on excellence.',
    color: '#06b6d4',
  },
  {
    icon: <People />,
    title: 'Collaboration',
    description:
      'Working closely with teams and clients to create shared visions and successful outcomes.',
    color: '#10b981',
  },
  {
    icon: <Psychology />,
    title: 'User-Centric',
    description:
      'Prioritizing user experience and accessibility in every design and development decision.',
    color: '#a855f7',
  },
  {
    icon: <TrendingUp />,
    title: 'Continuous Growth',
    description:
      'Committed to lifelong learning and staying current with industry best practices.',
    color: '#ef4444',
  },
  {
    icon: <Verified />,
    title: 'Quality',
    description:
      'Maintaining high standards in code quality, testing, and documentation.',
    color: '#64ffda',
  },
];

const AboutValues: React.FC = () => {
  return (
    <Box
      component={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {values.map((value, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }} // ✅ MUI v7 syntax
          >
            <Box
              component={motion.div}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              sx={{ height: '100%' }}
            >
              <AnimatedCard delay={index * 0.1} glowEffect>
                <Box sx={{ textAlign: 'center', height: '100%' }}>
                  {/* Icon */}
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${value.color}20 0%, ${value.color}40 100%)`,
                        border: `2px solid ${value.color}60`,
                        color: value.color,
                        fontSize: '2rem',
                        boxShadow: `0 8px 25px ${value.color}20`,
                      }}
                    >
                      {value.icon}
                    </Box>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      mb: 2,
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                    }}
                  >
                    {value.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              </AnimatedCard>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutValues;
