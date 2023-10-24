'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useTheme } from 'next-themes';

function Settings() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  // const handleLnaguage = () => changeLanguage(language === 'en' ? 'pt' : 'en');

  return (
    <div className="flex items-center">
      <Button variant="navLink" size="icon" aria-label="Change theme" onClick={handleTheme}>
        {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>
      <Button
        variant="navLink"
        size="icon"
        aria-label={"`${alt.changeLanguage} ${language === 'pt' ? alt.langEn : alt.langPt}`"}
        onClick={() => {}}
      >
        {'en' ? (
          <img
            src="/sprites/gb.svg"
            className="h-5 w-5 rounded-full"
            alt="Flag of United Kingdom"
          />
        ) : (
          <img src="/sprites/br.svg" className="h-5 w-5 rounded-full" alt="Flag of Brazil" />
        )}
      </Button>
    </div>
  );
}

export default Settings;
