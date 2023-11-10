'use client';

import { createContext } from 'react';
import { domAnimation, LazyMotion } from 'framer-motion';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

import { i18n, Locale } from '@/config/i18n.config';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

/*
|--------------------------------------------------
| THEME PROVIDER
|--------------------------------------------------
*/
function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider attribute="data-theme" enableSystem {...props}>
      {children}
    </NextThemeProvider>
  );
}

/*
|--------------------------------------------------
| LANGUAGE PROVIDER
|--------------------------------------------------
*/
type LanguageContextType = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useLocalStorage('language', i18n.defaultLocale);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

/*
|--------------------------------------------------
| MAIN PROVIDER
|--------------------------------------------------
*/
interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </LanguageProvider>
    </ThemeProvider>
  );
}
