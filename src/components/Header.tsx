import { Separator } from './ui/separator';

import Navigation from './Navigation';
import Settings from './Settings';
import Logo from './Logo';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function Header() {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <header className="sticky bottom-auto top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center py-2 md:gap-4">
        <Logo />
        <Navigation />
        {matches && <Separator orientation="vertical" className="h-auto min-h-full" />}
        <Settings />
      </div>
    </header>
  );
}

export default Header;
