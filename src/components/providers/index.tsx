'use client';

import { MotionConfig } from 'framer-motion';

import ThemeProvider from './theme';

export default function RootProviders({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
