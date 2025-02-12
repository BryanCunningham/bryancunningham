'use client';

import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { ThemeToggle } from './ThemeToggle';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Navigation = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressBar = styled(motion.div)<{ progress: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: ${({ theme }) => theme.colors.primary};
  width: ${({ progress }) => `${progress}%`};
`;

const MainContent = styled(motion.main)`
  padding-top: 80px;
  min-height: calc(100vh - 80px);
`;

interface LayoutProps {
  children: ReactNode;
  progress?: number;
  showNav?: boolean;
  onBack?: () => void;
}

export const Layout = ({ children, progress = 0, showNav = true, onBack }: LayoutProps) => {
  return (
    <LayoutContainer>
      <AnimatePresence>
        {showNav && (
          <Navigation
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
            >
              ← Back
            </motion.button>
            <ProgressBar progress={progress} />
          </Navigation>
        )}
      </AnimatePresence>
      <MainContent>{children}</MainContent>
      <ThemeToggle />
    </LayoutContainer>
  );
}; 