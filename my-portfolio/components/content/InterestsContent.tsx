'use client';

import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const InterestCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
`;

const DetailPanel = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.subtle};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const InterestsContent = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const interests = [
    {
      title: "Open Source Development",
      icon: "🌐",
      description: "Contributing to and maintaining open source projects",
      details: "Active contributor to several open source projects, focusing on developer tools and utilities."
    },
    {
      title: "Tech Writing",
      icon: "✍️",
      description: "Sharing knowledge through technical articles",
      details: "Regular writer on dev.to and personal blog, covering React, TypeScript, and web development."
    },
    // Add more interests as needed
  ];

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Personal Interests</h2>
      {interests.map((interest) => (
        <div key={interest.title}>
          <InterestCard
            onClick={() => setSelectedInterest(
              selectedInterest === interest.title ? null : interest.title
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3>{interest.icon} {interest.title}</h3>
            <p>{interest.description}</p>
          </InterestCard>
          
          <AnimatePresence mode="wait">
            {selectedInterest === interest.title && (
              <DetailPanel
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {interest.details}
              </DetailPanel>
            )}
          </AnimatePresence>
        </div>
      ))}
    </Container>
  );
}; 