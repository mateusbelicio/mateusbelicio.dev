import { mainConfig } from '@/config/main';

import MainNavigation from '../features/main-navigation';

function Header() {
  return (
    <header className="w-full py-8 transition-colors duration-500 sm:py-16">
      <div className="main-container flex items-center gap-2 md:gap-4">
        <MainNavigation items={mainConfig.mainNav} />
      </div>
    </header>
  );
}

export default Header;
