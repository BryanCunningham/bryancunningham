'use client';

import { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './Layout';
import { ExperienceContent } from './content/ExperienceContent';
import { SkillsContent } from './content/SkillsContent';
import { ProjectsContent } from './content/ProjectsContent';
import { EducationContent } from './content/EducationContent';
import { InterestsContent } from './content/InterestsContent';
import { keyframes } from '@emotion/react';

type Category = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const categories: Category[] = [
  {
    id: 'experience',
    title: 'Professional Experience',
    description: 'Learn about my journey through tech companies and roles',
    icon: '💼'
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    description: 'Explore my technical expertise and tools I work with',
    icon: '🛠️'
  },
  {
    id: 'projects',
    title: 'Projects & Achievements',
    description: 'See the impact and outcomes of my work',
    icon: '🚀'
  },
  {
    id: 'education',
    title: 'Education & Certifications',
    description: 'View my educational background and certifications',
    icon: '🎓'
  },
  {
    id: 'interests',
    title: 'Personal Interests',
    description: 'Get to know me beyond the code',
    icon: '🎯'
  }
];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.primary.main};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Card = styled(motion.button)<{ isSelected: boolean }>`
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary.light : theme.colors.background.paper};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.text.inverse : theme.colors.text.primary};
  border: 2px solid ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary.main : theme.colors.border.main};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: left;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  h2 {
    font-size: 1.25rem;
    margin: 1rem 0 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.isSelected ? 'rgba(255, 255, 255, 0.9)' : '#666'};
    margin: 0;
  }
`;

const Icon = styled.span`
  font-size: 2rem;
  display: block;
`;

const Button = styled.button<{ disabled?: boolean }>`
  background: ${props => props.disabled ? '#9ca3af' : 'linear-gradient(to right, #3b82f6, #2563eb)'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  animation: ${fadeIn} 0.6s ease-out 0.4s backwards;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }
`;

const BackButton = styled(Button)`
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.primary.main};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.background.subtle};
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

interface ContentViewProps {
  selectedCategories: string[];
  onBack: () => void;
}

const ContentView = ({ selectedCategories, onBack }: ContentViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = ((currentIndex + 1) / selectedCategories.length) * 100;

  const getComponentForCategory = (category: string) => {
    switch (category) {
      case 'experience':
        return ExperienceContent;
      case 'skills':
        return SkillsContent;
      case 'projects':
        return ProjectsContent;
      case 'education':
        return EducationContent;
      case 'interests':
        return InterestsContent;
      default:
        return null;
    }
  };

  const CurrentComponent = getComponentForCategory(selectedCategories[currentIndex]);

  const handleNext = () => {
    if (currentIndex < selectedCategories.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <Layout progress={progress} onBack={onBack}>
      <ContentContainer>
        <AnimatePresence mode="wait">
          {CurrentComponent && (
            <motion.div
              key={selectedCategories[currentIndex]}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <CurrentComponent />
            </motion.div>
          )}
        </AnimatePresence>
        
        <NavigationButtons>
          <BackButton
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </BackButton>
          <Button
            onClick={handleNext}
            disabled={currentIndex === selectedCategories.length - 1}
          >
            Next
          </Button>
        </NavigationButtons>
      </ContentContainer>
    </Layout>
  );
};

export default function Onboarding() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [step, setStep] = useState<'select' | 'view'>('select');

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleContinue = () => {
    if (selectedCategories.length > 0) {
      setStep('view');
    }
  };

  if (step === 'select') {
    return (
      <Layout showNav={false}>
        <Container>
          <Title>Welcome! What would you like to know?</Title>
          <Subtitle>Select the topics you're interested in</Subtitle>
          
          <Grid>
            {categories.map(category => (
              <Card
                key={category.id}
                isSelected={selectedCategories.includes(category.id)}
                onClick={() => toggleCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon>{category.icon}</Icon>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </Card>
            ))}
          </Grid>

          <Button
            onClick={handleContinue}
            disabled={selectedCategories.length === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue
          </Button>
        </Container>
      </Layout>
    );
  }

  return <ContentView selectedCategories={selectedCategories} onBack={() => setStep('select')} />;
} 