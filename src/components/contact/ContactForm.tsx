// src/components/contact/ContactForm.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { Send, Person, Email, Subject, Message } from '@mui/icons-material';
import { AnimatedCard } from '../shared';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <>
      <AnimatedCard delay={0.2} glowEffect>
        <Box component="form" onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 4,
              background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Send Me a Message
          </Typography>

          {/* Name Field */}
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            style={{ marginBottom: '24px' }}
          >
            <TextField
              fullWidth
              name="name"
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: 'rgba(100, 255, 218, 0.5)' }} />
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(100, 255, 218, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(100, 255, 218, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#64ffda',
                  },
                  '& input': {
                    color: 'white'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#64ffda'
                  }
                },
                '& .MuiFormHelperText-root': {
                  color: '#ff6b6b'
                }
              }}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            style={{ marginBottom: '24px' }}
          >
            <TextField
              fullWidth
              name="email"
              label="Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: <Email sx={{ mr: 1, color: 'rgba(100, 255, 218, 0.5)' }} />
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(100, 255, 218, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(100, 255, 218, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#64ffda',
                  },
                  '& input': {
                    color: 'white'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#64ffda'
                  }
                },
                '& .MuiFormHelperText-root': {
                  color: '#ff6b6b'
                }
              }}
            />
          </motion.div>

          {/* Subject Field */}
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            style={{ marginBottom: '24px' }}
          >
            <TextField
              fullWidth
              name="subject"
              label="Subject"
              value={formData.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
              InputProps={{
                startAdornment: <Subject sx={{ mr: 1, color: 'rgba(100, 255, 218, 0.5)' }} />
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(100, 255, 218, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(100, 255, 218, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#64ffda',
                  },
                  '& input': {
                    color: 'white'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#64ffda'
                  }
                },
                '& .MuiFormHelperText-root': {
                  color: '#ff6b6b'
                }
              }}
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            style={{ marginBottom: '32px' }}
          >
            <TextField
              fullWidth
              name="message"
              label="Your Message"
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              InputProps={{
                startAdornment: (
                  <Message 
                    sx={{ 
                      mr: 1, 
                      mt: 1,
                      alignSelf: 'flex-start',
                      color: 'rgba(100, 255, 218, 0.5)' 
                    }} 
                  />
                )
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(100, 255, 218, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(100, 255, 218, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#64ffda',
                  },
                  '& textarea': {
                    color: 'white'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#64ffda'
                  }
                },
                '& .MuiFormHelperText-root': {
                  color: '#ff6b6b'
                }
              }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              fullWidth
              size="large"
              disabled={isSubmitting}
              endIcon={<Send />}
              sx={{
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: isSubmitting
                  ? 'rgba(100, 255, 218, 0.2)'
                  : 'linear-gradient(135deg, #64ffda 0%, #06b6d4 100%)',
                color: isSubmitting ? 'rgba(255, 255, 255, 0.5)' : '#000',
                borderRadius: '12px',
                textTransform: 'none',
                boxShadow: '0 8px 25px rgba(100, 255, 218, 0.3)',
                '&:hover': {
                  boxShadow: '0 12px 35px rgba(100, 255, 218, 0.4)',
                },
                '&:disabled': {
                  color: 'rgba(255, 255, 255, 0.5)'
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.div>
        </Box>
      </AnimatedCard>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{
            background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
            border: '1px solid #64ffda',
            color: '#64ffda',
            '& .MuiAlert-icon': {
              color: '#64ffda'
            }
          }}
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;