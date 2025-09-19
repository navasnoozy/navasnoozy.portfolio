// src/components/shared/ProfilePhoto.tsx
import React, { useState, memo } from 'react';
import { Box } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import profilePhoto from '../../assets/profilephoto.jpeg';

interface ProfilePhotoProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  showFloatingElements?: boolean;
  borderGradient?: string;
  animationDelay?: number;
  className?: string;
  alt?: string;
  priority?: boolean;
  glowIntensity?: 'subtle' | 'normal' | 'intense';
  hoverEffect?: boolean;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = memo(({
  size = 'large',
  showFloatingElements = true,
  borderGradient = 'linear-gradient(135deg, #64ffda 0%, #a855f7 50%, #06b6d4 100%)',
  animationDelay = 0.5,
  className,
  alt = "Navas CK - Full-Stack Developer",
  priority = false,
  glowIntensity = 'normal',
  hoverEffect = true
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Size configurations
  const sizeConfigs = {
    small: {
      width: { xs: 120, md: 150 },
      height: { xs: 120, md: 150 },
      borderWidth: 3,
      floatingElements: 4
    },
    medium: {
      width: { xs: 200, md: 250, lg: 280 },
      height: { xs: 200, md: 250, lg: 280 },
      borderWidth: 4,
      floatingElements: 5
    },
    large: {
      width: { xs: 280, md: 350, lg: 400 },
      height: { xs: 280, md: 350, lg: 400 },
      borderWidth: 6,
      floatingElements: 6
    },
    xl: {
      width: { xs: 320, md: 400, lg: 450, xl: 500 },
      height: { xs: 320, md: 400, lg: 450, xl: 500 },
      borderWidth: 8,
      floatingElements: 8
    }
  };

  const config = sizeConfigs[size] || sizeConfigs.large;

  // Glow settings
  const glowOpacity = {
    subtle: 0.15,
    normal: 0.25,
    intense: 0.35
  }[glowIntensity];

  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: { xs: 350, md: 450 },
        minHeight: { xs: 350, md: 450 }
      }}
    >
      {/* Floating Elements */}
      {showFloatingElements && !shouldReduceMotion && (
        <>
          {Array.from({ length: config.floatingElements }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: size === 'small' ? 8 : size === 'xl' ? 16 : 12,
                height: size === 'small' ? 8 : size === 'xl' ? 16 : 12,
                borderRadius: '50%',
                background: i % 3 === 0 
                  ? 'rgba(100, 255, 218, 0.6)' 
                  : i % 3 === 1 
                  ? 'rgba(168, 85, 247, 0.6)' 
                  : 'rgba(6, 182, 212, 0.6)',
                top: `${15 + Math.random() * 70}%`,
                left: `${15 + Math.random() * 70}%`,
                zIndex: 0,
                boxShadow: `0 0 10px currentColor`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut'
              }}
            />
          ))}
        </>
      )}

      {/* Background Glow */}
      <motion.div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(100, 255, 218, ${glowOpacity}) 0%, transparent 70%)`,
          zIndex: 1,
          filter: 'blur(2px)'
        }}
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [10, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Main Photo Container with Floating Animation */}
      <motion.div
        initial={{ scale: 0, rotate: shouldReduceMotion ? 0 : -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0.3 : 1,
          delay: animationDelay,
          type: shouldReduceMotion ? 'tween' : 'spring',
          stiffness: 200,
          damping: 15
        }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Floating Animation Layer */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            y: [0, -12, 0],
            rotate: [0, 4, -4, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {/* Tilt Animation Layer */}
          <motion.div
            animate={shouldReduceMotion ? {} : {
              rotateY: [0, 5, -5, 0],
              rotateX: [0, 2, -2, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ 
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Hover Effect Layer */}
            <motion.div
              whileHover={hoverEffect ? {
                scale: 1.05,
                rotate: shouldReduceMotion ? 0 : 2,
                y: -8
              } : {}}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Box
                sx={{
                  width: config.width,
                  height: config.height,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: hoverEffect ? 'pointer' : 'default',
                  boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -config.borderWidth,
                    borderRadius: '50%',
                    background: borderGradient,
                    zIndex: -1,
                    opacity: imageLoaded ? 1 : 0.5,
                    transition: 'opacity 0.3s ease'
                  }
                }}
              >
                {/* Loading State */}
                {!imageLoaded && !imageError && (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                      borderRadius: '50%',
                      zIndex: 2
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{
                        width: 40,
                        height: 40,
                        border: '3px solid rgba(100, 255, 218, 0.3)',
                        borderTop: '3px solid #64ffda',
                        borderRadius: '50%'
                      }}
                    />
                  </Box>
                )}

                {/* Error State */}
                {imageError && (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)',
                      borderRadius: '50%',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '2rem',
                      zIndex: 2
                    }}
                  >
                    👤
                  </Box>
                )}

                {/* Actual Image */}
                <motion.img
                  src={profilePhoto}
                  alt={alt}
                  loading={priority ? 'eager' : 'lazy'}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(false);
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    opacity: imageLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease'
                  }}
                  whileHover={hoverEffect ? {
                    filter: 'brightness(1.1) saturate(1.2)',
                    scale: 1.02
                  } : {}}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />

                {/* Shine Effect on Hover */}
                {hoverEffect && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)',
                      opacity: 0,
                      pointerEvents: 'none'
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                )}

                {/* Ambient Shadow */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: -8,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 50%)',
                    opacity: 0.5,
                    pointerEvents: 'none',
                    zIndex: -1
                  }}
                  animate={shouldReduceMotion ? {} : {
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </Box>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
});

ProfilePhoto.displayName = 'ProfilePhoto';

export default ProfilePhoto;