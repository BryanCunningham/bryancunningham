'use client';

import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = styled(motion.button)`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.paper};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
  }
`;

const IconWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const themeIcons = {
  light: '☀️',
  dark: '🌙',
  'high-contrast': '👁️'
} as const;

export const ThemeToggle = () => {
  const { themeType, cycleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={cycleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        <IconWrapper
          key={themeType}
          initial={{ y: 20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          {themeIcons[themeType]}
        </IconWrapper>
      </AnimatePresence>
    </ToggleButton>
  );
}; 