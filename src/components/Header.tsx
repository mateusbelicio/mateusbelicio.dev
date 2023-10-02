import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky bottom-auto top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex justify-between py-4">
        <Link className="text-background" to="/#">
          LOGO
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
