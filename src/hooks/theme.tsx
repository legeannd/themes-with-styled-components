import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { firstTheme, secondTheme } from '../styles/themes';

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

interface Theme {
  name: string;
  colors: {
    primary: string,
    black: string,
    background: string,
    border: string,
  }
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(firstTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'first'){
      setTheme(secondTheme);
    }
    else if (theme.name === 'second') {
      setTheme(firstTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;