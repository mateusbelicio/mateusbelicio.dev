import { Link } from 'react-router-dom';

import logoLight from '@/assets/logo-light.svg';
import logoDark from '@/assets/logo-dark.svg';

import { useTheme } from '@/contexts/ThemeContext';

function Logo() {
  const { isDarkMode } = useTheme();

  return (
    <Link
      className="mr-auto block h-full flex-shrink-0 select-none space-x-1 rounded-sm px-3 py-1 leading-none text-background no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent-foreground"
      to="/#"
    >
      <img src={isDarkMode ? logoLight : logoDark} alt="Mateus Belicio Developer logo" />
    </Link>
  );
}

export default Logo;
