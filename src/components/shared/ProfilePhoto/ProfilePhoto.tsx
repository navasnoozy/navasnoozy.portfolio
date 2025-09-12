// src/components/shared/ProfilePhoto/ProfilePhoto.tsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import profilePhoto from '../../../assets/profilephoto/profilephoto.jpeg';

interface ProfilePhotoProps {
  size?: 'small' | 'medium' | 'large';
  showFloatingElements?: boolean;
  borderGradient?: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  size = 'large',
  showFloatingElements = true,
  borderGradient = 'linear-gradient(135deg, #64ffda 0%, #a855f7 50%, #06b6d4 100%)'
}) => {
  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return {
          width: { xs: 200, md: 250 },
          height: { xs: 200, md: 250 },
          borderWidth: 4
        };
      case 'medium':
        return {
          width: { xs: 250, md: 350 },
          height: { xs: 250, md: 350 },
          borderWidth: 6
        };
      case 'large':
      default:
        return {
          width: { xs: 300, md: 400, lg: 450 },
          height: { xs: 300, md: 400, lg: 450 },
          borderWidth: 8
        };
    }
  };

  const sizeConfig = getSizeConfig();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Floating Elements */}
      {showFloatingElements && (
        <>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: i % 2 === 0 ? 'rgba(100, 255, 218, 0.6)' : 'rgba(168, 85, 247, 0.6)',
                top: `${15 + Math.random() * 70}%`,
                left: `${15 + Math.random() * 70}%`,
                zIndex: 0
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut'
              }}
            />
          ))}
        </>
      )}

      {/* Main Photo */}
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3, ease: 'easeOut' }
        }}
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: 'spring',
          stiffness: 200,
          damping: 15
        }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <Box
          sx={{
            width: sizeConfig.width,
            height: sizeConfig.height,
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: -sizeConfig.borderWidth,
              borderRadius: '50%',
              background: borderGradient,
              zIndex: -1
            }
          }}
        >
          <motion.img
            src={profilePhoto}
            alt="Navas CK - Full-Stack Developer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
            whileHover={{
              filter: 'brightness(1.1) saturate(1.2)'
            }}
            transition={{ duration: 0.3 }}
          />
        </Box>
      </motion.div>

      {/* Background Glow */}
      <motion.div
        style={{
          position: 'absolute',
          width: sizeConfig.width.lg || sizeConfig.width.md || sizeConfig.width.xs,
          height: sizeConfig.height.lg || sizeConfig.height.md || sizeConfig.height.xs,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.2) 0%, transparent 70%)',
          zIndex: 1
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </Box>
  );
};

export default ProfilePhoto;