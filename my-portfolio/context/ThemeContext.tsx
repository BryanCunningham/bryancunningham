'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Global, css } from '@emotion/react';
import { lightTheme, darkTheme } from '../styles/theme';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    background-color: ${lightTheme.colors.background.main};
    color: ${lightTheme.colors.text.primary};
    font-family: ${lightTheme.typography.fontFamily.sans};
  }

  * {
    box-sizing: border-box;
  }
`;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <EmotionThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Global styles={globalStyles} />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 