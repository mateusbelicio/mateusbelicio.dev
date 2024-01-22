'use client';

import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';

import ThemeProvider from './theme';

export default function RootProviders({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <LazyMotion strict features={domAnimation}>
          {children}
        </LazyMotion>
      </MotionConfig>
    </ThemeProvider>
  );
}
