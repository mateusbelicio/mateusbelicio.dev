'use client';

import Image from 'next/image';
import Link from 'next/link';

import logoLight from '/public/sprites/logo-light.svg';
import logoDark from '/public/sprites/logo-dark.svg';

// import { useAppSelector } from '@/lib/hooks/useAppRedux';
import { useTheme } from 'next-themes';

function Logo() {
  // const {
  //   settings: { theme },
  //   content: { alt }
  // } = useAppSelector((state) => state);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark' ? true : false;

  return (
    <Link
      className="mr-auto block h-full flex-shrink-0 select-none space-x-1 rounded-sm px-3 py-1 leading-none text-background no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent-foreground"
      href="/#"
    >
      <Image src={isDarkMode ? logoLight : logoDark} alt={'alt.logo'} />
    </Link>
  );
}

export default Logo;
