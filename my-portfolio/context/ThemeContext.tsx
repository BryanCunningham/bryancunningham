'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Global, css } from '@emotion/react';
import { lightTheme, darkTheme, highContrastTheme, ThemeType } from '../styles/theme';

type ThemeContextType = {
  themeType: ThemeType;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  light: lightTheme,
  dark: darkTheme,
  'high-contrast': highContrastTheme,
};

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  * {
    box-sizing: border-box;
  }
`;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeType, setThemeType] = useState<ThemeType>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme && savedTheme in themes) {
      setThemeType(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeType('dark');
    }
  }, []);

  const cycleTheme = () => {
    const themeOrder: ThemeType[] = ['light', 'dark', 'high-contrast'];
    const currentIndex = themeOrder.indexOf(themeType);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    const newTheme = themeOrder[nextIndex];
    
    setThemeType(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeType, cycleTheme }}>
      <EmotionThemeProvider theme={themes[themeType]}>
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