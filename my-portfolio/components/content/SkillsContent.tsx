'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillCategory = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
`;

export const SkillsContent = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'JavaScript', 'CSS-in-JS'],
    designSystems: ['Component Libraries', 'Style Guides', 'Documentation'],
    tools: ['Git', 'Webpack', 'Jest', 'Storybook']
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {Object.entries(skills).map(([category, items], categoryIndex) => (
        <SkillCategory
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.2 }}
        >
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <SkillGrid>
            {items.map((skill, index) => (
              <SkillCard
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
              >
                {skill}
              </SkillCard>
            ))}
          </SkillGrid>
        </SkillCategory>
      ))}
    </Container>
  );
}; 