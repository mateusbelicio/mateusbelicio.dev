'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next-intl/client';

import { getDictionaryClientSide } from '@/lib/dictionaries/default-dictionary-client-side';
import { useLanguage } from '@/lib/hooks/useLanguage';

import { Button } from './ui/button';

function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const alt = useRef(getDictionaryClientSide(language).alt);

  const label = `${alt.current.changeLanguage} ${
    language === 'en' ? alt.current.langPt : alt.current.langEn
  }`;

  useEffect(() => {
    if (!mounted) return setMounted(true);
    if (!language) return;

    router.replace(pathname, { locale: language });
    alt.current = getDictionaryClientSide(language).alt;
  }, [language]);

  function toggleLanguage() {
    if (language === 'en') setLanguage('pt');
    else setLanguage('en');
  }

  if (!mounted) return null;

  return (
    <Button variant="ghost" size="icon" aria-label={label} onClick={toggleLanguage}>
      <Image
        src={language === 'en' ? '/sprites/gb.svg' : '/sprites/br.svg'}
        alt={alt.current.flag}
        width={40}
        height={40}
        className="h-6 w-6 rounded-full"
      />
    </Button>
  );
}

export default LanguageSwitcher;
