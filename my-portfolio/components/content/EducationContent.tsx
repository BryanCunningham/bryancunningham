'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.main};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const CertificationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.paper};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const EducationContent = () => {
  const education = {
    degrees: [
      {
        degree: "Bachelor's in Computer Science",
        school: "University Name",
        year: "2014",
        description: "Focus on Software Engineering and Web Technologies"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        year: "2023"
      },
      {
        name: "React Advanced Patterns",
        issuer: "Frontend Masters",
        year: "2022"
      }
    ]
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section>
        <h2>Education</h2>
        {education.degrees.map((edu, index) => (
          <EducationCard
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{edu.degree}</h3>
            <h4>{edu.school}</h4>
            <p>{edu.year}</p>
            <p>{edu.description}</p>
          </EducationCard>
        ))}
      </section>

      <section>
        <h2>Certifications</h2>
        <CertificationGrid>
          {education.certifications.map((cert, index) => (
            <CertificationCard
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <p>{cert.year}</p>
            </CertificationCard>
          ))}
        </CertificationGrid>
      </section>
    </Container>
  );
}; 