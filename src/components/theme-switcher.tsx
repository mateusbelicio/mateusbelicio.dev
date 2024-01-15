'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

import { useMounted } from '@/hooks/useMounted';

import { Icons } from './icons';
import { Button } from './ui/button';

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
      {theme === 'dark' ? <Icons.moon /> : <Icons.sun />}
    </Button>
  );
}
