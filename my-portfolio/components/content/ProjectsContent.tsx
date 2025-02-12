'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const ProjectTags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 4px;
  font-size: 0.875rem;
`;

export const ProjectsContent = () => {
  const projects = [
    {
      title: 'Odyssey Design System',
      description: 'Built and maintained scalable design system for Okta',
      tags: ['React', 'TypeScript', 'Design Systems']
    },
    // Add other projects
  ];

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ProjectTags>
            {project.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ProjectTags>
        </ProjectCard>
      ))}
    </Container>
  );
}; 