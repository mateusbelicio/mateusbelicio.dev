import Link from 'next/link';

import { Locale } from '@/config/i18n.config';
import { getDictionaryServerSide } from '@/lib/dictionaries/default-dictionary-server-side';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <>
      <HeroSection locale={locale} />
      <ProjectsSection locale={locale} />
    </>
  );
}
