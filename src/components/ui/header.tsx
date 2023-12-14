import { mainConfig } from '@/config/home';

import MainNavigation from '../main-navigation';
import Settings from '../settings';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/60 bg-noise-texture transition-colors duration-500 supports-[backdrop-filter]:bg-background/95 supports-[backdrop-filter]:backdrop-blur">
      <div className="main-container flex items-center gap-2 pb-3 pt-6 md:gap-4">
        <MainNavigation items={mainConfig.mainNav} />
        <Settings className="hidden md:flex" />
      </div>
    </header>
  );
}

export default Header;
