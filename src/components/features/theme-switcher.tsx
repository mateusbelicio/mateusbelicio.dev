'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

import { useMounted } from '@/hooks/useMounted';

import { Button } from '../ui/button';
import { Icons } from './icons';

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  useEffect(() => {
    if (mounted && resolvedTheme) setTheme(resolvedTheme);
  }, [mounted]);

  function toggleTheme() {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  }

  if (!mounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label={`Change theme to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Icons name={theme === 'dark' ? 'moon' : 'sun'} />
    </Button>
  );
}
