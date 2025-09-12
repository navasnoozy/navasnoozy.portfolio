//src/components/homepage/HeroSection.tsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

import HeroText from './HeroText';
import HeroSubtitle from './HeroSubtitle';
import HeroButtons from './HeroButtons';
import { itemVariants } from './homePageAnimations';

interface HeroSectionProps {
  currentText: string;
  currentWordIndex: number;
  words: string[];
  prefixes: string[];
  onResumeClick: () => void;
  onProjectsClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  currentText,
  currentWordIndex,
  words,
  prefixes,
  onResumeClick,
  onProjectsClick
}) => {
  return (
    <motion.div variants={itemVariants}>
      <Box sx={{ position: 'relative' }}>
        {/* Main Hero Text */}
        <Box sx={{ position: 'relative', mb: { xs: 4, md: 6 } }}>
          <HeroText
            currentText={currentText}
            currentWordIndex={currentWordIndex}
            words={words}
            prefixes={prefixes}
          />
        </Box>

        {/* Subtitle */}
        <HeroSubtitle />

        {/* CTA Buttons */}
        <HeroButtons
          onResumeClick={onResumeClick}
          onProjectsClick={onProjectsClick}
        />
      </Box>
    </motion.div>
  );
};

export default HeroSection;

