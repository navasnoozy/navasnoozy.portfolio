// src/components/contact/ContactForm.tsx
import {
  CheckCircle,
  Email,
  Message,
  Person,
  Send,
  Star,
  Subject,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  InputAdornment,
  LinearProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import React, { useState } from "react";
import { AnimatedCard } from "../shared";
import sendMail from "../../services/emailjs";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      const result = await sendMail(e.currentTarget);

      if (result.text === "OK") {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      });
      }

      
    } catch (error) {
      console.log(error);
      setShowSuccess(false);
      setMailError(true)
    }finally{
       setIsSubmitting(false);
    }
  };

  const getFormProgress = () => {
    const fields = ["name", "email", "subject", "message"];
    const completed = fields.filter((field) =>
      formData[field as keyof FormData].trim()
    ).length;
    return (completed / fields.length) * 100;
  };

  const easeOutBezier = [0.22, 1, 0.36, 1] as const;

  const inputVariants: Variants = {
    focused: {
      scale: 1.02,
      transition: { duration: 0.2, ease: easeOutBezier },
    },
    unfocused: {
      scale: 1,
      transition: { duration: 0.2, ease: easeOutBezier },
    },
  };

  return (
    <>
      <AnimatedCard delay={0.2} glowEffect>
        <Box component="form" onSubmit={handleSubmit}>
          {/* Header with Progress */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #64ffda 0%, #a855f7 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let's Work Together
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Star sx={{ color: "#64ffda", fontSize: 20 }} />
                <Typography
                  sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9rem" }}
                >
                  {Math.round(getFormProgress())}% Complete
                </Typography>
              </Box>
            </Box>

            {/* Progress Bar */}
            <Box sx={{ mb: 3 }}>
              <LinearProgress
                variant="determinate"
                value={getFormProgress()}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                  "& .MuiLinearProgress-bar": {
                    background:
                      "linear-gradient(90deg, #64ffda 0%, #a855f7 100%)",
                    borderRadius: 3,
                  },
                }}
              />
            </Box>
          </Box>

          {/* Name Field */}
          <motion.div
            variants={inputVariants}
            animate={focusedField === "name" ? "focused" : "unfocused"}
            style={{ marginBottom: "24px" }}
          >
            <TextField
              fullWidth
              name="name"
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              error={!!errors.name}
              helperText={errors.name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ color: "rgba(100, 255, 218, 0.5)" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  transition: "all 0.3s ease",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  "& fieldset": {
                    borderColor: "rgba(100, 255, 218, 0.3)",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(100, 255, 218, 0.5)",
                    boxShadow: "0 0 20px rgba(100, 255, 218, 0.1)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#64ffda",
                    boxShadow: "0 0 25px rgba(100, 255, 218, 0.2)",
                  },
                  "& input": {
                    color: "white",
                    fontSize: "1rem",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1rem",
                  "&.Mui-focused": {
                    color: "#64ffda",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                  fontSize: "0.85rem",
                },
              }}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            variants={inputVariants}
            animate={focusedField === "email" ? "focused" : "unfocused"}
            style={{ marginBottom: "24px" }}
          >
            <TextField
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "rgba(100, 255, 218, 0.5)" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  transition: "all 0.3s ease",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  "& fieldset": {
                    borderColor: "rgba(100, 255, 218, 0.3)",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(100, 255, 218, 0.5)",
                    boxShadow: "0 0 20px rgba(100, 255, 218, 0.1)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#64ffda",
                    boxShadow: "0 0 25px rgba(100, 255, 218, 0.2)",
                  },
                  "& input": {
                    color: "white",
                    fontSize: "1rem",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1rem",
                  "&.Mui-focused": {
                    color: "#64ffda",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                  fontSize: "0.85rem",
                },
              }}
            />
          </motion.div>

          {/* Subject Field */}
          <motion.div
            variants={inputVariants}
            animate={focusedField === "subject" ? "focused" : "unfocused"}
            style={{ marginBottom: "24px" }}
          >
            <TextField
              fullWidth
              name="subject"
              label="Subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              error={!!errors.subject}
              helperText={errors.subject}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Subject sx={{ color: "rgba(100, 255, 218, 0.5)" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  transition: "all 0.3s ease",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  "& fieldset": {
                    borderColor: "rgba(100, 255, 218, 0.3)",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(100, 255, 218, 0.5)",
                    boxShadow: "0 0 20px rgba(100, 255, 218, 0.1)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#64ffda",
                    boxShadow: "0 0 25px rgba(100, 255, 218, 0.2)",
                  },
                  "& input": {
                    color: "white",
                    fontSize: "1rem",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1rem",
                  "&.Mui-focused": {
                    color: "#64ffda",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                  fontSize: "0.85rem",
                },
              }}
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            variants={inputVariants}
            animate={focusedField === "message" ? "focused" : "unfocused"}
            style={{ marginBottom: "32px" }}
          >
            <TextField
              fullWidth
              name="message"
              label="Tell me"
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              error={!!errors.message}
              helperText={
                errors.message || `${formData.message.length}/500 characters`
              }
              inputProps={{ maxLength: 500 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ alignSelf: "flex-start", mt: 1 }}
                  >
                    <Message sx={{ color: "rgba(100, 255, 218, 0.5)" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  transition: "all 0.3s ease",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  "& fieldset": {
                    borderColor: "rgba(100, 255, 218, 0.3)",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(100, 255, 218, 0.5)",
                    boxShadow: "0 0 20px rgba(100, 255, 218, 0.1)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#64ffda",
                    boxShadow: "0 0 25px rgba(100, 255, 218, 0.2)",
                  },
                  "& textarea": {
                    color: "white",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1rem",
                  "&.Mui-focused": {
                    color: "#64ffda",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: errors.message
                    ? "#ff6b6b"
                    : "rgba(255, 255, 255, 0.5)",
                  fontSize: "0.85rem",
                },
              }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              fullWidth
              size="large"
              disabled={isSubmitting}
              endIcon={
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          border: "2px solid rgba(0,0,0,0.3)",
                          borderTop: "2px solid #000",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite",
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <Send />
                    </motion.div>
                  )}
                </AnimatePresence>
              }
              sx={{
                py: 2.5,
                fontSize: "1.1rem",
                fontWeight: 700,
                background: isSubmitting
                  ? "rgba(100, 255, 218, 0.2)"
                  : "linear-gradient(135deg, #64ffda 0%, #06b6d4 100%)",
                color: isSubmitting ? "rgba(255, 255, 255, 0.5)" : "#000",
                borderRadius: "16px",
                textTransform: "none",
                boxShadow: isSubmitting
                  ? "none"
                  : "0 8px 25px rgba(100, 255, 218, 0.3)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  transition: "left 0.6s ease",
                },
                "&:hover": {
                  boxShadow: isSubmitting
                    ? "none"
                    : "0 12px 35px rgba(100, 255, 218, 0.4)",
                  "&::before": {
                    left: "100%",
                  },
                },
                "&:disabled": {
                  color: "rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              {isSubmitting ? "Sending Your Message..." : "Send Message"}
            </Button>
          </motion.div>
        </Box>
      </AnimatedCard>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          icon={<CheckCircle />}
          sx={{
            background:
              "linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
            border: "2px solid #64ffda",
            color: "#64ffda",
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "12px",
            backdropFilter: "blur(20px)",
            "& .MuiAlert-icon": {
              color: "#64ffda",
              fontSize: "1.5rem",
            },
            "& .MuiAlert-action": {
              color: "#64ffda",
            },
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
              Message Sent Successfully! 🎉
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", opacity: 0.8 }}>
              I'll get back to you within 24 hours. Thanks for reaching out!
            </Typography>
          </Box>
        </Alert>
      </Snackbar>

            {/* Error mailing Snackbar */}
      <Snackbar
        open={mailError}
        autoHideDuration={6000}
        onClose={() => setMailError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          icon={<CheckCircle />}
          sx={{
            background:
              "linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
            border: "2px solid #64ffda",
            color: "#64ffda",
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "12px",
            backdropFilter: "blur(20px)",
            "& .MuiAlert-icon": {
              color: "#64ffda",
              fontSize: "1.5rem",
            },
            "& .MuiAlert-action": {
              color: "#64ffda",
            },
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
              Could not send mail
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Try again
            </Typography>
          </Box>
        </Alert>
      </Snackbar>

      {/* Custom Keyframes */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default ContactForm;
