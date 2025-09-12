// src/components/skills/SkillCategory.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SkillItem from './SkillItem';
import type { SkillCategory as SkillCategoryType } from './skillsData';

const SkillCategory: React.FC<SkillCategoryType> = ({
  title,
  icon: Icon,
  skills,
  color,
  description
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Box
        sx={{
          height: '100%',
          p: { xs: 3, md: 4 },
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${color} 0%, ${color}80 100%)`,
          },
          '&:hover': {
            borderColor: `${color}40`,
            boxShadow: `0 20px 60px ${color}20`,
          },
        }}
      >
        {/* Animated background pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 100,
            height: 100,
            opacity: 0.03,
            transform: 'rotate(45deg)',
            background: `linear-gradient(135deg, ${color} 0%, transparent 100%)`,
          }}
        />

        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 3,
          }}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                p: 1.5,
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
                border: `1px solid ${color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon sx={{ fontSize: '1.5rem', color }} />
            </Box>
          </motion.div>
          
          <Box>
            <Typography
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'white',
                fontFamily: '"Inter", "Roboto", sans-serif',
                mb: 0.5,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.4,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        {/* Skills List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillItem skill={skill} color={color} />
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default SkillCategory;