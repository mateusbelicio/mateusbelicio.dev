import Link from 'next/link';

import { Locale } from '@/config/i18n.config';
import { getDictionaryServerSide } from '@/lib/dictionaries/default-dictionary-server-side';
import { cn } from '@/lib/utils';

import { buttonVariants } from '../ui/button';

function HeroSection({ locale }: { locale: Locale }) {
  const dictionary = getDictionaryServerSide(locale);

  return (
    <section className="pb-16 pt-20 md:pb-20 md:pt-40">
      <div className="main-container main-grid relative gap-y-6">
        <div className="z-10 flex flex-col items-start gap-8 sm:col-start-1 sm:col-end-10 sm:row-start-1 sm:gap-12 sm:self-end sm:pr-14 sm:pt-14 lg:col-end-8 lg:gap-[3.25rem]">
          <h1 className="heading-1 min-w-[19.25rem] max-w-sm">{dictionary.blurb.title}</h1>
          <div className="mt-4 flex gap-4">
            <a href="#about" className={cn(buttonVariants())}>
              {dictionary.blurb.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
