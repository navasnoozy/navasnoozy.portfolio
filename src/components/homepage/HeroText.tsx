// src/components/homepage/HeroText.tsx
import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { textVariants } from './homePageAnimations';


interface HeroTextProps {
  currentText: string;
  currentWordIndex: number;
  words: string[];
  prefixes: string[];
}

const HeroText: React.FC<HeroTextProps> = ({ 
  currentText, 
  currentWordIndex, 
  words, 
  prefixes 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getIAmPosition = () => {
    const word = words[currentWordIndex];
    const firstLetter = word;
    const positions: Record<string, string> = {
      N: 'translateX(0px)',
      D: 'translateX(0px)',
      V: 'translateX(0px)',
      S: 'translateX(0px)',
      T: 'translateX(0px)',
    };
    return positions[firstLetter] || 'translateX(0px)';
  };

  return (
    <>
      {/* I am text - positioned to align with first letter */}
      <motion.div
        style={{
          position: 'absolute',
          top: isMobile ? '-22px' : '-36px',
          left: isMobile ? '-10px' : '-18px',
          transform: `${getIAmPosition()} rotate(-12deg)`,
          zIndex: 3,
        }}
        animate={{ rotateZ: [-1, 1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.35rem', sm: '1.7rem', md: '2.1rem', lg: '2.6rem' },
            fontWeight: 700,
            fontFamily: '"Caveat", cursive',
            color: 'rgba(255, 255, 255, 0.8)',
            letterSpacing: '0.02em',
            textTransform: 'none',
            display: 'inline-block',
            transform: 'rotate(-9deg)',
            transformOrigin: 'center',
          }}
        >
          {prefixes[currentWordIndex]}
        </Typography>
      </motion.div>

      {/* Main animated text */}
      <motion.div 
        variants={textVariants} 
        key={currentWordIndex} 
        initial="hidden" 
        animate="visible"
      >
        <Typography
          sx={{
            fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem', lg: '7rem', xl: '8rem' },
            fontWeight: 900,
            lineHeight: 0.9,
            background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 50%, #06b6d4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: '"Anton", system-ui, sans-serif',
            textTransform: 'uppercase',
            position: 'relative',
            '&::after': {
              content: '"|"',
              color: '#64ffda',
              animation: 'blink 1s infinite',
              marginLeft: '4px',
            },
            '@keyframes blink': {
              '0%, 50%': { opacity: 1 },
              '51%, 100%': { opacity: 0 },
            },
          }}
        >
          {currentText}
        </Typography>
      </motion.div>
    </>
  );
};

export default HeroText;
