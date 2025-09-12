// src/components/skills/SkillItem.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SkillProgressBar from './SkillProgressBar';
import type { Skill } from './skillsData';

interface SkillItemProps {
  skill: Skill;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, color }) => {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <Box
        sx={{
          p: 2,
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.05)',
            borderColor: `${color}30`,
          },
        }}
      >
        {/* Skill Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {skill.icon && (
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {typeof skill.icon === 'string' ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <skill.icon sx={{ fontSize: '1.25rem', color }} />
                )}
              </Box>
            )}
            
            <Typography
              sx={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'white',
                fontFamily: '"Inter", "Roboto", sans-serif',
              }}
            >
              {skill.name}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: color,
              fontFamily: '"Inter", "Roboto", sans-serif',
            }}
          >
            {skill.level}%
          </Typography>
        </Box>

        {/* Progress Bar */}
        <SkillProgressBar level={skill.level} color={color} />

        {/* Experience Badge */}
        {skill.experience && (
          <Box sx={{ mt: 1 }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.5)',
                fontStyle: 'italic',
              }}
            >
              {skill.experience} experience
            </Typography>
          </Box>
        )}
      </Box>
    </motion.div>
  );
};

export default SkillItem;