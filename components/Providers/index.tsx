'use client';

import { ThemeProvider } from 'next-themes';
import { LazyMotion, domAnimation } from 'framer-motion';

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="data-theme">
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </ThemeProvider>
  );
}

export default Providers;
