import { useContext } from 'react';

import { LanguageContext } from '@/components/providers';

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('The "useLanguage" hook must be inside a "LanguageProvider"');

  return context;
}
