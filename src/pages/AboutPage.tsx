// src/pages/AboutPage.tsx
import React from 'react';
import AnimatedSection from '../components/shared/AnimatedSection/AnimatedSection';
import SectionTitle from '../components/shared/SectionTitle/SectionTitle';
import AboutHero from '../components/about/AboutHero/AboutHero';
import AboutTimeline from '../components/about/AboutTimeline/AboutTimeline';
import AboutValues from '../components/about/AboutValues/AboutValues';
import { fadeInUp, slideInFromBottom } from '../components/shared/animations/sharedAnimations';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection 
        variants={fadeInUp}
        py={{ xs: 8, md: 12 }}
        minHeight="80vh"
        background="linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(20, 20, 30, 0.1) 100%)"
      >
        <AboutHero />
      </AnimatedSection>

      {/* Timeline Section */}
      <AnimatedSection 
        variants={slideInFromBottom}
        py={{ xs: 8, md: 12 }}
        delay={0.2}
        background="linear-gradient(135deg, rgba(100, 255, 218, 0.02) 0%, rgba(168, 85, 247, 0.02) 100%)"
      >
        <SectionTitle
          title="My Journey"
          subtitle="From curious beginner to experienced developer - here's how my passion for technology has evolved over the years."
          centerAlign={true}
        />
        <AboutTimeline />
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection 
        variants={fadeInUp}
        py={{ xs: 8, md: 12 }}
        delay={0.3}
      >
        <SectionTitle
          title="Core Values"
          subtitle="The principles that guide my work and drive me to create meaningful, impactful solutions."
          centerAlign={true}
        />
        <AboutValues />
      </AnimatedSection>
    </>
  );
};

export default AboutPage;