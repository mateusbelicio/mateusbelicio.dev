import { useEffect } from 'react';
import { m, useAnimate, type SVGMotionProps } from 'framer-motion';
import { useTheme } from 'next-themes';

import { useMounted } from './useMounted';

export default function useThemeSwitcher() {
  const mounted = useMounted();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [buttonRef, animate] = useAnimate();
  const ThemeIcon = theme === 'dark' ? Moon : Sun;

  useEffect(() => {
    if (mounted && resolvedTheme) setTheme(resolvedTheme);
  }, [mounted]);

  const handlers = {
    toggleTheme: () => (theme === 'dark' ? setTheme('light') : setTheme('dark')),
    mouseHold: () => animate('svg', { scale: 0.95, rotate: 15 }),
    mouseLeave: () => animate('svg', { scale: 1, rotate: 0 }),
  };

  return { theme, isMounted: mounted, ThemeIcon, buttonRef, handlers };
}

// ========================================
// CUSTOM ANIMATED ICONS COMPONENTS

function Sun(props: SVGMotionProps<SVGSVGElement>) {
  return (
    <m.svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" {...props}>
      <path
        d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
        fill="currentColor"
      />
    </m.svg>
  );
}

function Moon(props: SVGMotionProps<SVGSVGElement>) {
  return (
    <m.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="6" fill="currentColor" />
      <g fill="currentColor">
        <circle cx="3" cy="7" r="1.8" />
        <circle cx="3" cy="17" r="1.8" />
        <circle cx="12" cy="22" r="1.8" />
        <circle cx="21" cy="17" r="1.8" />
        <circle cx="21" cy="7" r="1.8" />
        <circle cx="12" cy="2" r="1.8" />
      </g>
    </m.svg>
  );
}
