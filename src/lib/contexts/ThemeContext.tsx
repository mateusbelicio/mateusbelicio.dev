import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

type ThemeContextValue = {
  theme: string;
  setTheme: React.Dispatch<any>;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useLocalStorage('theme', 'system');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === 'dark' || (!('theme' in localStorage) && userPrefersDark)) {
      document.documentElement.dataset.theme = 'dark';
      setIsDarkMode(true);
    } else if (theme === 'system') {
      document.documentElement.dataset.theme = userPrefersDark ? 'dark' : 'light';
      setIsDarkMode(userPrefersDark ? true : false);
    } else {
      document.documentElement.dataset.theme = 'light';
      setIsDarkMode(false);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('The "useTheme" hook must be used inside a "ThemeProvider"');

  return context;
}
