'use client';

import { domAnimation, LazyMotion } from 'framer-motion';

import ThemeProvider from './theme';

export default function RootProviders({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </ThemeProvider>
  );
}
