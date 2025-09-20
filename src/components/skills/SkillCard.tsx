// src/components/skills/SkillCard.tsx
import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import IconRenderer from '../AnimatedBackground/IconRenderer';
import type { IconType } from '../AnimatedBackground/icons';
import { AnimatedCard } from '../shared';

interface SkillCardProps {
  name: string;
  level: number;
  icon: IconType;
  category: string;
  delay?: number;
  description?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  level,
  icon,
  category,
  delay = 0,
  description
}) => {
  return (
    <AnimatedCard delay={delay} glowEffect>
      <Box sx={{ textAlign: 'center' }}>
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '16px'
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(100, 255, 219, 0.47) 0%, rgba(169, 85, 247, 0.37) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(100, 255, 218, 0.2)',
            }}
          >
            <IconRenderer
              IconComponent={icon}
              style={{
                width: '32px',
                height: '32px',
                color: '#64ffda'
              }}
            />
          </Box>
        </motion.div>

        {/* Category */}
        <Typography
          sx={{
            fontSize: '0.75rem',
            color: 'rgba(100, 255, 218, 0.8)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1,
            mb: 1
          }}
        >
          {category}
        </Typography>

        {/* Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: 'white',
            mb: 1,
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}
        >
          {name}
        </Typography>

        {/* Description */}
        {description && (
          <Typography
            sx={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.6)',
              mb: 3,
              lineHeight: 1.4
            }}
          >
            {description}
          </Typography>
        )}

        {/* Progress Bar */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 600
              }}
            >
              Proficiency
            </Typography>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: '#64ffda',
                fontWeight: 700
              }}
            >
              {level}%
            </Typography>
          </Box>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: delay + 0.5 }}
          >
            <LinearProgress
              variant="determinate"
              value={0}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  background: 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)',
                }
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.5, delay: delay + 0.7, ease: 'easeOut' }}
            style={{
              height: 8,
              borderRadius: 4,
              background: 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)',
              marginTop: -8,
              position: 'relative',
              zIndex: 1
            }}
          />
        </Box>
      </Box>
    </AnimatedCard>
  );
};

export default SkillCard;