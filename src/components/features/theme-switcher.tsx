'use client';

import { useEffect, useState } from 'react';
import { m, useReducedMotion, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';

import { animationTemplate } from '@/lib/utils';
import { useMounted } from '@/hooks/useMounted';

import { Button } from '../ui/button';
import { Icons } from './icons';

const EXPAND_FULL: Variants = {
  initial: { opacity: 1, clipPath: 'circle(0% at 50% 50%)' },
  enter: {
    opacity: 1,
    clipPath: 'circle(100% at 50% 50%)',
    transitionEnd: { opacity: 0 },
    transition: {
      duration: 1,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const mounted = useMounted();

  useEffect(() => {
    if (mounted && resolvedTheme) setTheme(resolvedTheme);
  }, [mounted]);

  const toggleTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));
  const runAnimation = () => setIsAnimationEnabled(true);
  const completeAnimation = () => {
    toggleTheme();
    setIsAnimationEnabled(false);
  };

  if (!mounted) return <ButtonFallback />;

  return (
    <Button
      onClick={shouldReduceMotion ? toggleTheme : runAnimation}
      variant="ghost"
      size="icon"
      className="relative"
      aria-label={`Change theme to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Icons name={theme === 'dark' ? 'moon' : 'sun'} />
      {isAnimationEnabled ? (
        <m.span
          key="theme"
          {...animationTemplate(EXPAND_FULL)}
          onAnimationComplete={completeAnimation}
          className="bg-secondary-opposite pointer-events-none fixed inset-0 z-50"
        />
      ) : null}
    </Button>
  );
}

function ButtonFallback() {
  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme">
      <Icons className="animate-spin" name="loader" />
    </Button>
  );
}
