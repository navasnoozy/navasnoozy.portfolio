// src/pages/SkillsPage.tsx
import React from 'react';
import AnimatedSection from '../components/shared/AnimatedSection/AnimatedSection';
import SectionTitle from '../components/shared/SectionTitle/SectionTitle';
import SkillsGrid from '../components/skills/SkillsGrid/SkillsGrid';
import { fadeInUp } from '../components/shared/animations/sharedAnimations';

const SkillsPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection 
        variants={fadeInUp}
        py={{ xs: 8, md: 12 }}
        minHeight="50vh"
        background="linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(20, 20, 30, 0.1) 100%)"
      >
        <SectionTitle
          title="My Skills"
          subtitle="A comprehensive overview of my technical expertise and the tools I use to bring ideas to life. From frontend frameworks to backend technologies, here's what I work with daily."
          centerAlign={true}
        />
      </AnimatedSection>

      {/* Skills Grid Section */}
      <AnimatedSection 
        variants={fadeInUp}
        py={{ xs: 6, md: 10 }}
        delay={0.3}
      >
        <SkillsGrid />
      </AnimatedSection>
    </>
  );
};

export default SkillsPage;