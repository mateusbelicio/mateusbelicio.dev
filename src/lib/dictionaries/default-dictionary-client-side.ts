'use client';

import { i18n, Locale } from '@/config/i18n.config';

import { defaultDictionary } from './default-dictionaries';

export const getDictionaryClientSide = (locale: Locale) => {
  return defaultDictionary[locale] ?? defaultDictionary[i18n.defaultLocale as Locale];
};
