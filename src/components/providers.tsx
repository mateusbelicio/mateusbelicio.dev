'use client';

import { domAnimation, LazyMotion } from 'framer-motion';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

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
| MAIN PROVIDER
|--------------------------------------------------
*/
interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </ThemeProvider>
  );
}
