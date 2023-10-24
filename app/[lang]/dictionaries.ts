import 'server-only';

const dictionaries = {
  en: () => import('@/lib/dictionaries/en.json').then((module) => module.default),
  pt: () => import('@/lib/dictionaries/pt.json').then((module) => module.default)
};

export const getDictionary = async (locale: 'en' | 'pt') => dictionaries[locale]();

export type Dictionary = typeof dictionaries.en;
