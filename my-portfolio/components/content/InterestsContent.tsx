'use client';

import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const InterestCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Icon = styled.span`
  font-size: 2rem;
  line-height: 1;
`;

const Content = styled.div`
  flex: 1;
`;

export const InterestsContent = () => {
  const interests = [
    {
      title: "Open Source Development",
      description: "Contributing to and maintaining open source projects in the React ecosystem",
      icon: "🌟"
    },
    {
      title: "Design Systems",
      description: "Passionate about creating scalable and maintainable design systems",
      icon: "🎨"
    },
    {
      title: "Web Performance",
      description: "Optimizing web applications for the best possible user experience",
      icon: "⚡"
    },
    {
      title: "Mentorship",
      description: "Helping other developers grow and succeed in their careers",
      icon: "🌱"
    }
  ];

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {interests.map((interest, index) => (
        <InterestCard
          key={interest.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Icon>{interest.icon}</Icon>
          <Content>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </Content>
        </InterestCard>
      ))}
    </Container>
  );
}; 