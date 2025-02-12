'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Timeline = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const ExperienceContent = () => {
  const experiences = [
    {
      company: 'Okta',
      role: 'Senior Front End Software Engineer',
      period: '2023 - 2025',
      description: 'Led development on the Odyssey Design System...'
    },
    // Add other experiences
  ];

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Timeline>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{exp.company}</h3>
            <h4>{exp.role}</h4>
            <p>{exp.period}</p>
            <p>{exp.description}</p>
          </ExperienceCard>
        ))}
      </Timeline>
    </Container>
  );
}; 