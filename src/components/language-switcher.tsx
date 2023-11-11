'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next-intl/client';

import { getDictionaryClientSide } from '@/lib/dictionaries/default-dictionary-client-side';
import { useLanguage } from '@/hooks/useLanguage';
import { useMounted } from '@/hooks/useMounted';

import { Button } from './ui/button';

function LanguageSwitcher() {
  const mounted = useMounted();
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();

  const { alt } = getDictionaryClientSide(language);
  const label = `${alt.changeLanguage} ${language === 'en' ? alt.langPt : alt.langEn}`;

  useEffect(() => {
    if (!language && !mounted) return;

    router.replace(pathname, { locale: language });
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
        alt={alt.flag}
        width={40}
        height={40}
        className="h-6 w-6 rounded-full"
      />
    </Button>
  );
}

export default LanguageSwitcher;
