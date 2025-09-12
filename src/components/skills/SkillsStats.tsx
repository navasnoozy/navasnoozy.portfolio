// src/components/skills/SkillsStats.tsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { number: 25, suffix: '+', label: 'Technologies Mastered', color: '#64ffda' },
  { number: 3, suffix: '+', label: 'Years Experience', color: '#a855f7' },
  { number: 50, suffix: '+', label: 'Projects Completed', color: '#06b6d4' },
  { number: 100, suffix: '%', label: 'Passion for Code', color: '#f59e0b' },
];

const SkillsStats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Box sx={{ mb: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}80 100%)`,
                    },
                  }}
                >
                  {/* Animated background particles */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.1,
                      overflow: 'hidden',
                    }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        style={{
                          position: 'absolute',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: stat.color,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </Box>

                  {/* Number */}
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                        fontWeight: 900,
                        color: stat.color,
                        fontFamily: '"Anton", system-ui, sans-serif',
                        mb: 1,
                        lineHeight: 1,
                      }}
                    >
                      <AnimatedCounter
                        target={stat.number}
                        suffix={stat.suffix}
                        isInView={isInView}
                        delay={index * 0.2}
                      />
                    </Typography>

                    {/* Label */}
                    <Typography
                      sx={{
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontWeight: 500,
                        lineHeight: 1.4,
                        fontFamily: '"Inter", "Roboto", sans-serif',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default SkillsStats;