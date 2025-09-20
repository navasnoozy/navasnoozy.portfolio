// src/components/about/AboutHero.tsx
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  AnimatedCard,
  fadeInLeft,
  fadeInRight,
  GradientText,
  ProfilePhoto,
} from "../shared";

const AboutHero: React.FC = () => {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
      {/* Text Content */}
      <Grid size={{ xs: 12, md: 8 }}>
        <motion.div variants={fadeInLeft} initial="hidden" animate="visible">
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                fontWeight: 900,
                lineHeight: 1.2,
                mb: 3,
                color: "white",
              }}
            >
              Hello, I'm{" "}
              <GradientText
                component="span"
                sx={{ fontWeight: "inherit", fontSize: "inherit" }}
              >
                Navas CK
              </GradientText>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                color: "rgba(100, 255, 218, 0.9)",
                fontWeight: 600,
                mb: 4,
                lineHeight: 1.4,
              }}
            >
              Full-Stack Developer • Video Editor • Tech Enthusiast
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: 1.7,
                mb: 4,
                fontFamily: '"Inter", "Roboto", sans-serif',
              }}
            >
              <Typography variant="body1" gutterBottom>
                Passionate Full-Stack Developer with 1.5+ years of experience
                specializing in the MERN stack (MongoDB, Express.js, React.js,
                Node.js) along with TypeScript and Next.js. Skilled in Docker,
                Kubernetes, Kafka and CI/CD pipelines.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Bringing 9+ years of excellence in sales and customer
                relationship management, with proven expertise in e-commerce
                management, inventory handling, ad campaigns, and customer
                service.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Driven by curiosity and a deep passion for technology, I combine a
                creative mindset, strong research ability, problem-solving
                skills, and a collaborative approach. Dedicated to continuous
                learning and growth across both technical and business domains.
              </Typography>
            </Typography>

          </Box>
        </motion.div>
      </Grid>

      {/* Profile Photo */}
      <Grid size={{ xs: 12, md: 4 }}>
        <motion.div variants={fadeInRight} initial="hidden" animate="visible">
          <ProfilePhoto size="medium" showFloatingElements={true} />
        </motion.div>
      </Grid>

      {/* Stats Cards */}
      <Grid size={{ xs: 12 }}>
        <motion.div variants={fadeInRight} initial="hidden" animate="visible">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <AnimatedCard delay={0.2} glowEffect>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 900,
                      background:
                        "linear-gradient(135deg, #64ffda 0%, #a855f7 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1,
                    }}
                  >
                    1.5+
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    Years Experience
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid>

            {/* <Grid size={{ xs: 12, sm: 4 }}>
              <AnimatedCard delay={0.3} glowEffect>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 900,
                      background:
                        "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1,
                    }}
                  >
                    50+
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    Projects Built
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid> */}

            <Grid size={{ xs: 12, sm: 4 }}>
              <AnimatedCard delay={0.4} glowEffect>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 900,
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1,
                    }}
                  >
                    Full-Stack
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    Development Focus
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid>
          </Grid>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default AboutHero;
