import Link from 'next/link';

import { Locale } from '@/config/i18n.config';
import { getDictionaryServerSide } from '@/lib/dictionaries/default-dictionary-server-side';

import { buttonVariants } from '../ui/button';

function AboutSection({ locale }: { locale: Locale }) {
  const { about } = getDictionaryServerSide(locale);

  return (
    <section id="about" className="pt-24 lg:pt-[9.375rem]">
      <div className="main-container main-grid">
        <div className="relative h-[21.625rem] w-full bg-primary/25 sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:h-full lg:col-end-7">
          {/* <Image
            src={profileImage}
            alt="Alex Spencer"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 60vw, (max-width: 1200px) 50vw"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(540, 600))}`}
            className="object-cover object-center sm:object-right"
          /> */}
        </div>
        <div className="my-8 space-y-6 border-y border-border pb-[3.25rem] pt-8 sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:my-0 sm:pt-[3.25rem] lg:col-start-8 lg:col-end-12">
          <h2 className="heading-2">{about.title}</h2>
          <p className="mt-1 ">{about.description}</p>
          <Link href="/portfolio" className={buttonVariants()}>
            {about.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
