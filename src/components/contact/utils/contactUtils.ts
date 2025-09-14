// src/components/contact/utils/contactUtils.ts
import { useState, useEffect, useCallback } from 'react';

// Form validation utilities
export interface FormValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface FormValidationRules {
  [key: string]: FormValidationRule;
}

export const validateField = (value: string, rules: FormValidationRule): string | null => {
  if (rules.required && !value.trim()) {
    return 'This field is required';
  }

  if (rules.minLength && value.length < rules.minLength) {
    return `Minimum length is ${rules.minLength} characters`;
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return `Maximum length is ${rules.maxLength} characters`;
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    return 'Invalid format';
  }

  if (rules.custom) {
    return rules.custom(value);
  }

  return null;
};

// Contact form validation rules
export const contactFormValidationRules: FormValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    custom: (value: string) => {
      const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
      const domain = value.split('@')[1];
      if (domain && commonDomains.includes(domain.toLowerCase())) {
        return null;
      }
      return null; // Accept all domains for now
    }
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 100,
  },
  message: {
    required: true,
    minLength: 20,
    maxLength: 1000,
  },
};

// Custom hook for form validation
export const useFormValidation = <T extends Record<string, string>>(
  initialData: T,
  validationRules: FormValidationRules
) => {
  const [formData, setFormData] = useState<T>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    Object.keys(validationRules).forEach((field) => {
      const value = formData[field as keyof T] || '';
      const rules = validationRules[field];
      const error = validateField(value, rules);
      
      if (error) {
        newErrors[field as keyof T] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validationRules]);

  const updateField = useCallback((field: keyof T, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));

    // Clear error for this field if it becomes valid
    if (errors[field]) {
      const rules = validationRules[field as string];
      if (rules && !validateField(value, rules)) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    }
  }, [errors, validationRules]);

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
    setTouched({});
  }, [initialData]);

  const getFieldError = useCallback((field: keyof T): string | undefined => {
    return touched[field] ? errors[field] : undefined;
  }, [errors, touched]);

  return {
    formData,
    errors,
    touched,
    validateForm,
    updateField,
    resetForm,
    getFieldError,
    isValid: Object.keys(errors).length === 0,
    isFormTouched: Object.keys(touched).length > 0,
  };
};

// Custom hook for scroll-based animations
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const element = document.querySelector('[data-scroll-animate]');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return isVisible;
};

// Custom hook for copy to clipboard
export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  }, []);

  return { copyToClipboard, copied };
};

// Animation variants for consistent motion
export const contactAnimationVariants = {
  // Form field animations
  fieldFocus: {
    scale: 1.02,
    boxShadow: '0 0 25px rgba(100, 255, 218, 0.2)',
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  fieldBlur: {
    scale: 1,
    boxShadow: 'none',
    transition: { duration: 0.2, ease: 'easeOut' }
  },

  // Button animations
  buttonHover: {
    scale: 1.02,
    boxShadow: '0 12px 35px rgba(100, 255, 218, 0.4)',
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  buttonTap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  },

  // Card animations
  cardHover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 16px 48px rgba(100, 255, 218, 0.25)',
    transition: { duration: 0.3, ease: 'easeOut' }
  },

  // Social link animations
  socialHover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' }
  },

  // Loading animations
  loadingSpinner: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: 'linear' }
  },

  // Success animations
  successPulse: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

// Utility functions for form submission
export const formatContactData = (formData: any) => {
  return {
    timestamp: new Date().toISOString(),
    ...formData,
    source: 'portfolio-website',
    userAgent: navigator.userAgent,
    referrer: document.referrer,
  };
};

export const submitContactForm = async (formData: any): Promise<boolean> => {
  try {
    // Simulate API call - replace with actual endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formatContactData(formData)),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    return false;
  }
};

// Analytics tracking utilities
export const trackContactEvent = (action: string, data?: any) => {
  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      category: 'Contact Form',
      label: data?.label || '',
      value: data?.value || 0,
      custom_parameters: data?.custom || {},
    });
  }

  // Facebook Pixel tracking
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Contact', data);
  }
};

// Contact form analytics events
export const contactAnalyticsEvents = {
  formStart: (data: any) => trackContactEvent('form_start', data),
  fieldFocus: (field: string) => trackContactEvent('field_focus', { label: field }),
  formError: (field: string, error: string) => 
    trackContactEvent('form_error', { label: field, custom: { error } }),
  formSubmit: (data: any) => trackContactEvent('form_submit', data),
  formSuccess: (data: any) => trackContactEvent('form_success', data),
  socialClick: (platform: string) => 
    trackContactEvent('social_click', { label: platform }),
  copyContact: (type: string) => 
    trackContactEvent('copy_contact', { label: type }),
};

// Theme-aware color utilities
export const getContactThemeColors = (theme: 'light' | 'dark' = 'dark') => {
  const colors = {
    light: {
      primary: '#0891b2',
      secondary: '#7c3aed',
      accent: '#059669',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1f2937',
      textSecondary: '#6b7280',
    },
    dark: {
      primary: '#64ffda',
      secondary: '#a855f7',
      accent: '#10b981',
      background: '#0f0f0f',
      surface: 'rgba(255, 255, 255, 0.05)',
      text: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.7)',
    }
  };

  return colors[theme];
};

// Responsive breakpoint utilities
export const contactBreakpoints = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('md');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 600) setScreenSize('xs');
      else if (width < 900) setScreenSize('sm');
      else if (width < 1200) setScreenSize('md');
      else if (width < 1536) setScreenSize('lg');
      else setScreenSize('xl');
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

// Performance monitoring utilities
export const performanceMonitor = {
  startTiming: (label: string) => {
    performance.mark(`${label}-start`);
  },
  
  endTiming: (label: string) => {
    performance.mark(`${label}-end`);
    performance.measure(label, `${label}-start`, `${label}-end`);
    
    const measure = performance.getEntriesByName(label)[0];
    console.log(`${label}: ${measure.duration.toFixed(2)}ms`);
    
    // Send to analytics
    trackContactEvent('performance_timing', {
      label,
      value: Math.round(measure.duration),
    });
  }
};

export default {
  validateField,
  contactFormValidationRules,
  useFormValidation,
  useScrollAnimation,
  useCopyToClipboard,
  contactAnimationVariants,
  formatContactData,
  submitContactForm,
  trackContactEvent,
  contactAnalyticsEvents,
  getContactThemeColors,
  contactBreakpoints,
  useResponsive,
  performanceMonitor,
};