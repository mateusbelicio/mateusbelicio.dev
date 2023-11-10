'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Icons } from './icons';
import { Button } from './ui/button';

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (mounted && resolvedTheme) setTheme(resolvedTheme);
  }, [mounted]);

  function toggleTheme() {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  }

  if (!mounted) return null;

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      {theme === 'dark' ? <Icons.moon /> : <Icons.sun />}
    </Button>
  );
}
