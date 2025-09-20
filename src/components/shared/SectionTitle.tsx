// src/components/shared/SectionTitle.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GradientText from './GradientText';


interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centerAlign?: boolean;
  titleSize?: 'small' | 'medium' | 'large';
  showDecorator?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centerAlign = true,
  titleSize = 'large',
  showDecorator = true
}) => {
  const getTitleSize = () => {
    switch (titleSize) {
      case 'small':
        return { xs: '1.5rem', md: '2rem' };
      case 'medium':
        return { xs: '2rem', md: '2.5rem' };
      case 'large':
      default:
        return { xs: '2.5rem', md: '3.5rem', lg: '4rem' };
    }
  };

  return (
    <Box
      sx={{
        textAlign: centerAlign ? 'center' : 'left',
        mb: { xs: 4, md: 6 },
        position: 'relative'
      }}
    >
      {showDecorator && (
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            height: 4,
            background: 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)',
            borderRadius: 2,
            margin: centerAlign ? '0 auto 24px' : '0 0 24px 0'
          }}
        />
      )}

      <GradientText
        variant="h1"
        sx={{
          fontSize: getTitleSize(),
          fontWeight: 900,
          lineHeight: 1.1,
          fontFamily: '"Anton", system-ui, sans-serif',
          textTransform: 'uppercase',
          mb: subtitle ? 2 : 0
        }}
      >
        {title}
      </GradientText>

      {subtitle && (
        <Typography
          variant="h6"
          sx={{
            color: 'rgba(255, 255, 255, 0.81)',
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.2rem' },
            maxWidth: centerAlign ? 600 : 'none',
            mx: centerAlign ? 'auto' : 0,
            fontFamily: '"Inter", "Roboto", sans-serif',
            lineHeight: 1.5
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;