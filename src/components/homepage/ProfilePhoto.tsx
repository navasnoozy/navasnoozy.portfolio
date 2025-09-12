// src/components/homepage/ProfilePhoto.tsx

import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import profilePhoto from '../../assets/profilephoto/profilephoto.jpeg';
import FloatingOrbs from './FloatingOrbs';
import { floatingVariants, profileVariants } from './homePageAnimations';

const ProfilePhoto: React.FC = () => {
  return (
    <motion.div
      variants={profileVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <motion.div variants={floatingVariants} animate="animate" style={{ position: 'relative', zIndex: 5 }}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: 250, sm: 300, md: 350, lg: 400 },
            height: { xs: 250, sm: 300, md: 350, lg: 400 },
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid rgba(100, 255, 218, 0.3)',
            boxShadow: '0 20px 60px rgba(100, 255, 218, 0.2)',
            background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: '-2px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #64ffda, #a855f7, #06b6d4, #64ffda)',
              backgroundSize: '400% 400%',
              animation: 'gradient 4s ease infinite',
              zIndex: -1,
            },
            '@keyframes gradient': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.2rem',
              fontWeight: 500,
              textAlign: 'center',
              fontFamily: '"Inter", "Roboto", sans-serif',
            }}
          >
            <Box
              component="img"
              src={profilePhoto}
              alt="Navas CK"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          <FloatingOrbs />
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePhoto;
