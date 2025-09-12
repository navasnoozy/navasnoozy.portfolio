// src/components/skills/SkillsHero.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Psychology, Speed } from '@mui/icons-material';

const SkillsHero: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Box
        sx={{
          textAlign: 'center',
          mb: { xs: 6, md: 8 },
          position: 'relative',
        }}
      >
        {/* Animated background text */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            opacity: 0.03,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '8rem', md: '12rem', lg: '16rem' },
              fontWeight: 900,
              fontFamily: '"Anton", system-ui, sans-serif',
              color: 'white',
              userSelect: 'none',
              lineHeight: 1,
            }}
          >
            SKILLS
          </Typography>
        </Box>

        {/* Main title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 900,
              mb: 3,
              background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 50%, #06b6d4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: '"Anton", system-ui, sans-serif',
              textTransform: 'uppercase',
              position: 'relative',
            }}
          >
            My Skills
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontFamily: '"Inter", "Roboto", sans-serif',
            }}
          >
            A comprehensive overview of my technical expertise and creative abilities
            across various domains of modern development.
          </Typography>
        </motion.div>

        {/* Skill icons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap',
            }}
          >
            {[
              { icon: Code, label: 'Development', color: '#64ffda' },
              { icon: Psychology, label: 'Problem Solving', color: '#a855f7' },
              { icon: Speed, label: 'Performance', color: '#06b6d4' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}10 100%)`,
                    border: `1px solid ${item.color}40`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <item.icon sx={{ fontSize: '2rem', color: item.color }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default SkillsHero;