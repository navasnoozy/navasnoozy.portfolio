// src/components/skills/SkillsGrid.tsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SkillCategory from './SkillCategory';
import { skillsData } from './skillsData';

const SkillsGrid: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: 4,
          pb: 8,
        }}
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <SkillCategory {...category} />
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default SkillsGrid;