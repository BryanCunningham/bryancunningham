export interface Theme {
  colors: {
    primary: {
      main: string;
      light: string;
      lighter: string;
      dark: string;
      darker: string;
    };
    background: {
      main: string;
      paper: string;
      subtle: string;
      muted: string;
      dark: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
      light: string;
      inverse: string;
    };
    border: {
      light: string;
      main: string;
      dark: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  typography: {
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
} 