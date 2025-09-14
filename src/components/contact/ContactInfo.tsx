// src/components/contact/ContactInfo.tsx
import {
     CheckCircle,
     ContentCopy,
     Email,
     GitHub,
     Instagram,
     LinkedIn,
     MessageOutlined,
     Phone,
     Schedule,
     Twitter,
     VideoCall,
     WhatsApp,
     YouTube
} from '@mui/icons-material';
import { Box, Divider, IconButton, Link, Tooltip, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { AnimatedCard } from '../shared';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  delay?: number;
  copyable?: boolean;
  description?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ 
  icon, 
  label, 
  value, 
  href, 
  delay = 0, 
  copyable = false, 
  description 
}) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mb: 3,
        p: 2,
        borderRadius: '12px',
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(100, 255, 218, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)'
          : 'transparent',
        border: isHovered 
          ? '1px solid rgba(100, 255, 218, 0.2)' 
          : '1px solid transparent',
        transition: 'all 0.3s ease',
        cursor: href ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated background gradient on hover */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.1), transparent)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
              border: '2px solid rgba(100, 255, 218, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 3,
              color: '#64ffda',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: -2,
                borderRadius: '18px',
                padding: 2,
                background: 'linear-gradient(135deg, #64ffda, #a855f7)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'subtract',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }
            }}
          >
            {icon}
          </Box>
        </motion.div>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.6)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              mb: 0.5
            }}
          >
            {label}
          </Typography>
          <Typography
            sx={{
              fontSize: '1.1rem',
              color: href ? '#64ffda' : 'white',
              fontWeight: 600,
              textDecoration: 'none',
              mb: description ? 0.5 : 0,
              '&:hover': href ? {
                textDecoration: 'underline'
              } : {}
            }}
          >
            {value}
          </Typography>
          {description && (
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.5)',
                lineHeight: 1.4
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        {copyable && (
          <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCopy(value);
                }}
                sx={{
                  color: copied ? '#10b981' : 'rgba(100, 255, 218, 0.7)',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.2)',
                  }
                }}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <CheckCircle fontSize="small" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <ContentCopy fontSize="small" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </IconButton>
            </motion.div>
          </Tooltip>
        )}
      </Box>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return content;
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  color: string;
  delay?: number;
  followers?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ 
  icon, 
  href, 
  label, 
  color, 
  delay = 0, 
  followers 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        type: 'spring', 
        stiffness: 200,
        damping: 15
      }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Tooltip 
          title={
            <Box sx={{ textAlign: 'center', p: 1 }}>
              <Typography sx={{ fontWeight: 600, mb: 0.5 }}>{label}</Typography>
              {followers && (
                <Typography sx={{ fontSize: '0.8rem', opacity: 0.8 }}>
                  {followers}
                </Typography>
              )}
            </Box>
          }
          placement="top"
        >
          <motion.div
            whileHover={{ 
              scale: 1.15, 
              rotate: [0, -5, 5, 0],
              y: -8 
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
                border: `2px solid ${color}60`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at center, ${color}60 0%, transparent 70%)`,
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  animation: isHovered ? 'pulse 2s infinite' : 'none',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 0,
                  height: 0,
                  borderRadius: '50%',
                  background: `${color}40`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'all 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                  height: '100%',
                }
              }}
            >
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                {icon}
              </motion.div>
            </Box>
          </motion.div>
        </Tooltip>
      </Link>
    </motion.div>
  );
};

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: <Email fontSize="large" />,
      label: 'Email',
      value: 'hello@navasck.dev',
      href: 'mailto:hello@navasck.dev',
      copyable: true,
      description: 'Primary contact for all inquiries'
    },
    {
      icon: <Phone fontSize="large" />,
      label: 'Phone',
      value: '+91 9876 543 210',
      href: 'tel:+919876543210',
      copyable: true,
      description: 'Available 9 AM - 6 PM IST (Mon-Fri)'
    },
    {
      icon: <WhatsApp fontSize="large" />,
      label: 'WhatsApp',
      value: '+91 9876 543 210',
      href: 'https://wa.me/919876543210?text=Hi%20Navas%2C%20I%27d%20like%20to%20discuss%20a%20project',
      description: 'Quick responses, project discussions'
    },
    {
      icon: <VideoCall fontSize="large" />,
      label: 'Video Call',
      value: 'Schedule a Meeting',
      href: 'https://calendly.com/navasck',
      description: 'Free 30min consultation call'
    }
  ];

  const socialLinks = [
    {
      icon: <GitHub fontSize="large" />,
      href: 'https://github.com/navasck',
      label: 'GitHub',
      color: '#64ffda',
      followers: '1.2k followers'
    },
    {
      icon: <LinkedIn fontSize="large" />,
      href: 'https://linkedin.com/in/navasck',
      label: 'LinkedIn',
      color: '#0077B5',
      followers: '500+ connections'
    },
    {
      icon: <Twitter fontSize="large" />,
      href: 'https://twitter.com/navasck',
      label: 'Twitter',
      color: '#1DA1F2',
      followers: '800 followers'
    },
    {
      icon: <YouTube fontSize="large" />,
      href: 'https://youtube.com/@navasck',
      label: 'YouTube',
      color: '#FF0000',
      followers: '2.5k subscribers'
    },
    {
      icon: <Instagram fontSize="large" />,
      href: 'https://instagram.com/navasck',
      label: 'Instagram',
      color: '#E4405F',
      followers: '1k followers'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Emergency only' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Main Contact Info */}
      <AnimatedCard delay={0.1} glowEffect>
        <Box sx={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center'
              }}
            >
              Get in Touch
            </Typography>

            <Typography
              sx={{
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                mb: 4,
                lineHeight: 1.6
              }}
            >
              Ready to start your next project? Choose your preferred way to connect with me.
            </Typography>
          </motion.div>

          {contactDetails.map((item, index) => (
            <ContactItem
              key={index}
              icon={item.icon}
              label={item.label}
              value={item.value}
              href={item.href}
              copyable={item.copyable}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </Box>
      </AnimatedCard>

      {/* Working Hours */}
      <AnimatedCard delay={0.3} glowEffect>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <Schedule /> Working Hours
          </Typography>

          {workingHours.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 2,
                  px: 3,
                  mb: index < workingHours.length - 1 ? 1 : 0,
                  borderRadius: '12px',
                  background: index === 2 
                    ? 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(100, 255, 218, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
                  border: index === 2 
                    ? '1px solid rgba(255, 107, 107, 0.2)'
                    : '1px solid rgba(100, 255, 218, 0.1)',
                }}
              >
                <Typography sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 600 
                }}>
                  {schedule.day}
                </Typography>
                <Typography sx={{ 
                  color: index === 2 ? '#ff6b6b' : '#64ffda',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}>
                  {schedule.hours}
                </Typography>
              </Box>
              {index < workingHours.length - 1 && (
                <Divider sx={{ 
                  borderColor: 'rgba(100, 255, 218, 0.1)',
                  my: 0 
                }} />
              )}
            </motion.div>
          ))}
        </Box>
      </AnimatedCard>

      {/* Social Links */}
      <AnimatedCard delay={0.4} glowEffect>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 3,
            background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center'
          }}
        >
          Let's Connect
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.95rem',
            mb: 4,
            lineHeight: 1.6
          }}
        >
          Follow my journey and stay updated with my latest projects and insights.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))',
            gap: 2,
            justifyItems: 'center',
            maxWidth: 500,
            mx: 'auto'
          }}
        >
          {socialLinks.map((social, index) => (
            <SocialLink
              key={index}
              icon={social.icon}
              href={social.href}
              label={social.label}
              color={social.color}
              followers={social.followers}
              delay={index * 0.1}
            />
          ))}
        </Box>
      </AnimatedCard>

      {/* Availability Status */}
      <AnimatedCard delay={0.6} glowEffect>
        <Box sx={{ textAlign: 'center', position: 'relative' }}>
          {/* Animated background */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotateZ: [0, 360],
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' }
            }}
            style={{ 
              display: 'inline-block', 
              marginBottom: '20px',
              position: 'relative',
              zIndex: 1
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'radial-gradient(circle, #10b981 0%, #064e3b 100%)',
                boxShadow: '0 0 30px #10b981, inset 0 2px 4px rgba(255,255,255,0.3)',
                display: 'inline-block',
                border: '3px solid rgba(16, 185, 129, 0.3)',
              }}
            />
          </motion.div>
          
          <Typography
            sx={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: '#10b981',
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: 1,
              position: 'relative',
              zIndex: 1
            }}
          >
            Available for Projects
          </Typography>
          
          <Typography
            sx={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.7,
              maxWidth: 400,
              mx: 'auto',
              position: 'relative',
              zIndex: 1
            }}
          >
            I'm currently accepting new projects and would love to hear about your ideas. 
            Let's discuss how we can bring your vision to life!
          </Typography>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: '24px', position: 'relative', zIndex: 1 }}
          >
            <Link
              href="mailto:hello@navasck.dev?subject=Project%20Inquiry&body=Hi%20Navas%2C%0D%0A%0D%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you."
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '2px solid #10b981',
                borderRadius: '25px',
                color: '#10b981',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  boxShadow: '0 5px 20px rgba(16, 185, 129, 0.3)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <MessageOutlined fontSize="small" />
              Start a Conversation
            </Link>
          </motion.div>
        </Box>
      </AnimatedCard>

      {/* Pulse Animation Styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
      `}</style>
    </Box>
  );
};

export default ContactInfo;