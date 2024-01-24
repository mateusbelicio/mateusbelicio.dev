import Link from 'next/link';

import { buttonVariants } from '../ui/button';

function CallToActionSection() {
  return (
    <section className="pb-20 pt-8 sm:pb-24 sm:pt-12 lg:pb-36 lg:pt-18">
      <div className="main-container flex flex-col items-center gap-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <h2 className="heading-2 min-w-[18rem] max-w-[22rem]">
          Interested in doing a project together?
        </h2>
        <span className="hidden w-full sm:block sm:h-px sm:flex-grow sm:bg-border"></span>
        <Link href="/contact" scroll={false} className={buttonVariants()}>
          Contact me
        </Link>
      </div>
    </section>
  );
}

export default CallToActionSection;
