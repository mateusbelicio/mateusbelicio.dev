import 'server-only';

import { i18n, Locale } from '@/config/i18n.config';

import { defaultDictionary } from './default-dictionaries';

export const getDictionaryServerSide = (locale: Locale) => {
  return defaultDictionary[locale] ?? defaultDictionary[i18n.defaultLocale as Locale];
};
