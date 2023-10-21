import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

import { useSettings } from '@/lib/hooks/useSettings';

import brFlag from '@/assets/sprites/br.svg';
import gbFlag from '@/assets/sprites/gb.svg';

function Settings() {
  const { theme, changeTheme, language, changeLanguage } = useSettings();

  const handleTheme = () => changeTheme(theme === 'dark' ? 'light' : 'dark');
  const handleLnaguage = () => changeLanguage(language === 'en' ? 'pt' : 'en');

  return (
    <div className="flex items-center">
      <Button variant="navLink" size="icon" aria-label="Change theme" onClick={handleTheme}>
        {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>
      <Button variant="navLink" size="icon" aria-label="Change language" onClick={handleLnaguage}>
        {language === 'en' ? (
          <img src={gbFlag} className="h-5 w-5 rounded-full" alt="Flag of United Kingdom" />
        ) : (
          <img src={brFlag} className="h-5 w-5 rounded-full" alt="Flag of Brazil" />
        )}
      </Button>
    </div>
  );
}

export default Settings;
