'use client';

import { domAnimation, LazyMotion, Variants } from 'framer-motion';

import { animationTemplate } from '@/lib/utils';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';

import { Button } from '../ui/button';
import { Icons } from './icons';

const TOGGLE_MODE: Variants = {
  initial: { scale: 0.6, rotate: 90 },
  enter: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
};

export function ThemeSwitcher() {
  const { theme, buttonRef, isMounted, handlers, ThemeIcon } = useThemeSwitcher();

  if (!isMounted) return <ButtonFallback />;

  return (
    <LazyMotion features={domAnimation}>
      <Button
        ref={buttonRef}
        onClick={handlers.toggleTheme}
        onMouseDown={handlers.mouseHold}
        onMouseLeave={handlers.mouseLeave}
        variant="ghost"
        size="icon"
        className="relative"
        aria-label={`Change theme to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <ThemeIcon {...animationTemplate(TOGGLE_MODE)} />
      </Button>
    </LazyMotion>
  );
}

function ButtonFallback() {
  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme">
      <Icons className="animate-spin" name="loader" />
    </Button>
  );
}
