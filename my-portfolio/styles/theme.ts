import '@emotion/react';
import { Theme as MyTheme} from './theme.types';

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}

export const lightTheme = {
  colors: {
    // Primary variations
    primary: {
      main: '#023047',
      light: '#034268',
      lighter: '#045489',
      dark: '#012436',
      darker: '#011825'
    },
    // Secondary variations
    secondary: {
      main: '#219EBC',
      light: '#3CACC7',
      lighter: '#57BBD2',
      dark: '#1B7E96',
      darker: '#145E70'
    },
    // Accent variations
    accent: {
      main: '#FFB703',
      light: '#FFC22E',
      lighter: '#FFCD59',
      dark: '#CC9202',
      darker: '#996E02'
    },
    // Background variations
    background: {
      main: '#F8F9FA',
      paper: '#FFFFFF',
      subtle: '#EDF1F5',
      muted: '#E2E8F0',
      dark: '#E5E7EB'
    },
    // Text variations
    text: {
      primary: '#1F2937',
      secondary: '#4B5563',
      muted: '#6B7280',
      light: '#9CA3AF',
      inverse: '#FFFFFF'
    },
    // Semantic colors
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6'
    },
    // Border colors
    border: {
      light: '#E5E7EB',
      main: '#D1D5DB',
      dark: '#9CA3AF'
    },
    // Shadow colors with opacity
    shadow: {
      light: 'rgba(31, 41, 55, 0.05)',
      main: 'rgba(31, 41, 55, 0.1)',
      dark: 'rgba(31, 41, 55, 0.2)'
    }
  },
  // Spacing system
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '4rem'
  },
  // Breakpoints
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  },
  // Typography
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  // Border radius
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px'
  },
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out'
  },
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: {
      main: '#034268',
      light: '#045489',
      lighter: '#0566AA',
      dark: '#023047',
      darker: '#011825'
    },
    secondary: {
      main: '#3CACC7',
      light: '#57BBD2',
      lighter: '#72CADD',
      dark: '#219EBC',
      darker: '#1B7E96'
    },
    accent: {
      main: '#FFC22E',
      light: '#FFCD59',
      lighter: '#FFD884',
      dark: '#FFB703',
      darker: '#CC9202'
    },
    background: {
      main: '#1F2937',
      paper: '#111827',
      subtle: '#374151',
      muted: '#4B5563',
      dark: '#6B7280'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E5E7EB',
      muted: '#D1D5DB',
      light: '#9CA3AF',
      inverse: '#1F2937'
    },
    status: {
      success: '#34D399',
      warning: '#FBBF24',
      error: '#F87171',
      info: '#60A5FA'
    },
    border: {
      light: '#374151',
      main: '#4B5563',
      dark: '#6B7280'
    },
    shadow: {
      light: 'rgba(0, 0, 0, 0.1)',
      main: 'rgba(0, 0, 0, 0.15)',
      dark: 'rgba(0, 0, 0, 0.2)'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
  }
};

export const highContrastTheme = {
  ...lightTheme,
  colors: {
    primary: {
      main: '#FFB703',
      light: '#FFC22E',
      lighter: '#FFCD59',
      dark: '#CC9202',
      darker: '#996E02'
    },
    secondary: {
      main: '#219EBC',
      light: '#3CACC7',
      lighter: '#57BBD2',
      dark: '#1B7E96',
      darker: '#145E70'
    },
    accent: {
      main: '#023047',
      light: '#034268',
      lighter: '#045489',
      dark: '#012436',
      darker: '#011825'
    },
    background: {
      main: '#000000',
      paper: '#121212',
      subtle: '#1A1A1A',
      muted: '#242424',
      dark: '#2A2A2A'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#F0F0F0',
      muted: '#E0E0E0',
      light: '#CCCCCC',
      inverse: '#000000'
    },
    status: {
      success: '#00FF00',
      warning: '#FFD700',
      error: '#FF0000',
      info: '#00FFFF'
    },
    border: {
      light: '#FFFFFF',
      main: '#F0F0F0',
      dark: '#E0E0E0'
    },
    shadow: {
      light: 'rgba(255, 255, 255, 0.1)',
      main: 'rgba(255, 255, 255, 0.15)',
      dark: 'rgba(255, 255, 255, 0.2)'
    }
  }
};

// Add global transitions for theme switching
export const globalStyles = `
  *, *::before, *::after {
    transition: background-color 0.3s ease, 
                color 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
  }
`;

export type ThemeType = 'light' | 'dark' | 'high-contrast';
export type Theme = typeof lightTheme; 