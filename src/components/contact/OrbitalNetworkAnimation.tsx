// src/components/contact/OrbitalNetworkAnimation.tsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import {
  LinkedIn,
  WhatsApp,
  Twitter,
  Instagram,
  GitHub,
  Email,
  Phone,
  YouTube,
  Telegram,
  Facebook
} from '@mui/icons-material';

interface OrbitingIcon {
  icon: React.ReactNode;
  color: string;
  label: string;
  radius: number;
  duration: number;
  delay: number;
  reverse?: boolean;
}

const OrbitalNetworkAnimation: React.FC = () => {
  const orbitingIcons: OrbitingIcon[] = [
    {
      icon: <LinkedIn sx={{ fontSize: 24 }} />,
      color: '#0077B5',
      label: 'LinkedIn',
      radius: 120,
      duration: 15,
      delay: 0,
    },
    {
      icon: <WhatsApp sx={{ fontSize: 24 }} />,
      color: '#25D366',
      label: 'WhatsApp',
      radius: 120,
      duration: 15,
      delay: 3,
    },
    {
      icon: <Twitter sx={{ fontSize: 24 }} />,
      color: '#1DA1F2',
      label: 'Twitter',
      radius: 120,
      duration: 15,
      delay: 6,
    },
    {
      icon: <Instagram sx={{ fontSize: 24 }} />,
      color: '#E4405F',
      label: 'Instagram',
      radius: 120,
      duration: 15,
      delay: 9,
    },
    {
      icon: <GitHub sx={{ fontSize: 24 }} />,
      color: '#64ffda',
      label: 'GitHub',
      radius: 120,
      duration: 15,
      delay: 12,
    },
    // Second orbit
    {
      icon: <Email sx={{ fontSize: 20 }} />,
      color: '#a855f7',
      label: 'Email',
      radius: 180,
      duration: 20,
      delay: 0,
      reverse: true,
    },
    {
      icon: <Phone sx={{ fontSize: 20 }} />,
      color: '#06b6d4',
      label: 'Phone',
      radius: 180,
      duration: 20,
      delay: 5,
      reverse: true,
    },
    {
      icon: <YouTube sx={{ fontSize: 20 }} />,
      color: '#FF0000',
      label: 'YouTube',
      radius: 180,
      duration: 20,
      delay: 10,
      reverse: true,
    },
    {
      icon: <Telegram sx={{ fontSize: 20 }} />,
      color: '#0088cc',
      label: 'Telegram',
      radius: 180,
      duration: 20,
      delay: 15,
      reverse: true,
    },
    // Third orbit
    {
      icon: <Facebook sx={{ fontSize: 18 }} />,
      color: '#1877F2',
      label: 'Facebook',
      radius: 240,
      duration: 25,
      delay: 0,
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 500,
        overflow: 'hidden',
      }}
    >
      {/* Central Core with Pulsing Effect */}
      <motion.div
        style={{
          position: 'absolute',
          zIndex: 10,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100, 255, 218, 0.8) 0%, rgba(168, 85, 247, 0.6) 50%, rgba(6, 182, 212, 0.4) 100%)',
            boxShadow: '0 0 60px rgba(100, 255, 218, 0.6), 0 0 100px rgba(168, 85, 247, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #fff 0%, rgba(100, 255, 218, 0.8) 100%)',
              animation: 'coreGlow 2s ease-in-out infinite',
            }}
          />
        </Box>
      </motion.div>

      {/* Expanding and Contracting Circles */}
      {[1, 2, 3, 4].map((index) => (
        <motion.div
          key={`circle-${index}`}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: `1px solid rgba(100, 255, 218, ${0.3 - index * 0.05})`,
          }}
          animate={{
            width: [
              100 + index * 80,
              100 + index * 100,
              100 + index * 80,
            ],
            height: [
              100 + index * 80,
              100 + index * 100,
              100 + index * 80,
            ],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        />
      ))}

      {/* Rotating Orbital Paths */}
      <motion.div
        style={{
          position: 'absolute',
          width: 240,
          height: 240,
          borderRadius: '50%',
          border: '1px dashed rgba(100, 255, 218, 0.2)',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          width: 360,
          height: 360,
          borderRadius: '50%',
          border: '1px dashed rgba(168, 85, 247, 0.2)',
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          width: 480,
          height: 480,
          borderRadius: '50%',
          border: '1px dashed rgba(6, 182, 212, 0.2)',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Orbiting Social Icons */}
      {orbitingIcons.map((item, index) => (
        <motion.div
          key={`${item.label}-${index}`}
          style={{
            position: 'absolute',
            width: item.radius * 2,
            height: item.radius * 2,
            pointerEvents: 'none',
          }}
          animate={{
            rotate: item.reverse ? -360 : 360,
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: item.delay,
          }}
        >
          {/* Icon Container */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{
              rotate: item.reverse ? 360 : -360,
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: item.delay,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: Math.random() * 2,
                },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}40 100%)`,
                  border: `2px solid ${item.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  boxShadow: `0 0 20px ${item.color}50`,
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at center, ${item.color}40 0%, transparent 70%)`,
                    animation: 'pulse 2s ease-in-out infinite',
                  },
                }}
              >
                {item.icon}
              </Box>
            </motion.div>
            
            {/* Trailing Light Effect */}
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                pointerEvents: 'none',
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${item.color} 0%, transparent 70%)`,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  filter: 'blur(8px)',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Connecting Lines/Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          style={{
            position: 'absolute',
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: i % 3 === 0 ? '#64ffda' : i % 3 === 1 ? '#a855f7' : '#06b6d4',
          }}
          animate={{
            x: [
              Math.cos((i * 24) * Math.PI / 180) * 100,
              Math.cos((i * 24) * Math.PI / 180) * 250,
              Math.cos((i * 24) * Math.PI / 180) * 100,
            ],
            y: [
              Math.sin((i * 24) * Math.PI / 180) * 100,
              Math.sin((i * 24) * Math.PI / 180) * 250,
              Math.sin((i * 24) * Math.PI / 180) * 100,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Energy Waves */}
      {[0, 1, 2].map((wave) => (
        <motion.div
          key={`wave-${wave}`}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: `2px solid rgba(100, 255, 218, 0.3)`,
            pointerEvents: 'none',
          }}
          animate={{
            width: [80, 500],
            height: [80, 500],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeOut',
            delay: wave * 1.3,
          }}
        />
      ))}

      {/* CSS Animations */}
      <style>{`
        @keyframes coreGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </Box>
  );
};

export default OrbitalNetworkAnimation;