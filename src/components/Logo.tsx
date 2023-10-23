import { Link } from 'react-router-dom';

import logoLight from '@/assets/sprites/logo-light.svg';
import logoDark from '@/assets/sprites/logo-dark.svg';

import { useAppSelector } from '@/lib/hooks/useAppRedux';

function Logo() {
  const {
    settings: { theme },
    content: { alt }
  } = useAppSelector((state) => state);
  const isDarkMode = theme === 'dark' ? true : false;

  return (
    <Link
      className="mr-auto block h-full flex-shrink-0 select-none space-x-1 rounded-sm px-3 py-1 leading-none text-background no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent-foreground"
      to="/#"
    >
      <img src={isDarkMode ? logoLight : logoDark} alt={alt.logo} />
    </Link>
  );
}

export default Logo;
