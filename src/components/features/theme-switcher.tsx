'use client';

import { useEffect, useRef, useState } from 'react';
import { m, useReducedMotion, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';

import { animationTemplate } from '@/lib/utils';
import { useElementPosition } from '@/hooks/useElementPosition';
import { useMounted } from '@/hooks/useMounted';

import { Button } from '../ui/button';
import { Icons } from './icons';

const EXPAND_FULL: Variants = {
  initial: (position) => ({
    opacity: 1,
    clipPath: `circle(0% at 
      ${position.x + position.width / 2}px 
      ${position.y + position.height / 2}px)
    `,
  }),
  enter: (position) => ({
    opacity: 1,
    clipPath: `circle(150% at 
      ${position.x + position.width / 2}px 
      ${position.y + position.height / 2}px)
    `,
    transitionEnd: { opacity: 0 },
    transition: {
      duration: 1,
      ease: [0.32, 0, 0.67, 0],
    },
  }),
};

export function ThemeSwitcher() {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonPosition = useElementPosition(buttonRef);
  const mounted = useMounted();

  const { theme, setTheme, resolvedTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

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
      ref={buttonRef}
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
          {...animationTemplate(EXPAND_FULL, buttonPosition)}
          onAnimationComplete={completeAnimation}
          className="pointer-events-none fixed inset-0 z-50 bg-secondary-opposite transition-opacity duration-1000"
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
