import Link from 'next/link';

import { Locale } from '@/config/i18n.config';
import { getDictionaryServerSide } from '@/lib/dictionaries/default-dictionary-server-side';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import ProjectsSection from '@/components/sections/projects';

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  const dictionary = getDictionaryServerSide(locale);

  return (
    <>
      <section className="pb-16 pt-20 md:pb-20 md:pt-40">
        <div className="container grid justify-items-center gap-20">
          <div className="flex flex-col items-center gap-4 text-center md:row-span-2 md:row-start-1 lg:row-span-1 ">
            <h1 className="heading-1">
              {dictionary.blurb.title} <br />
              <span className="relative before:absolute before:bottom-2 before:h-1 before:w-full before:bg-primary">
                Mateus
              </span>
              !
            </h1>
            <p className="max-w-lg">{dictionary.blurb.paragraph}</p>
            <div className="mt-4 flex gap-4">
              <Link href="/#contact" className={cn(buttonVariants())}>
                {dictionary.blurb.cta}
              </Link>
              <Link href="/#projects" className={cn(buttonVariants({ variant: 'ghost' }))}>
                {dictionary.blurb.more}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ProjectsSection locale={locale} />
      {/* <section className="pb-16 pt-20 md:pb-20 md:pt-40">
        <div className="container grid gap-20 md:grid-cols-2">
          <div className="flex flex-col items-start gap-4 md:row-span-2 md:row-start-1 lg:row-span-1 ">
            <h1 className="heading-1">
              {dictionary.blurb.title} <br />
              <span className="relative before:absolute before:bottom-2 before:h-1 before:w-full before:bg-primary">
                Mateus
              </span>
              !
            </h1>
            <p className="max-w-lg">{dictionary.blurb.paragraph}</p>
            <div className="mt-4 flex gap-4">
              <Link href="/#contact" className={cn(buttonVariants())}>
                {dictionary.blurb.cta}
              </Link>
              <Link href="/#projects" className={cn(buttonVariants({ variant: 'ghost' }))}>
                {dictionary.blurb.more}
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
