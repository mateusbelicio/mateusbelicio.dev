import Link from 'next/link';

import { buttonVariants } from '../ui/button';

function CallToActionSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-36">
      <div className="main-container flex flex-col items-center gap-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <h2 className="heading-2 min-w-[18rem] max-w-[22rem]">
          Interested in doing a project together?
        </h2>
        <span className="hidden w-full sm:block sm:h-px sm:flex-grow sm:bg-border"></span>
        <Link href="/contact" className={buttonVariants()}>
          Contact me
        </Link>
      </div>
    </section>
  );
}

export default CallToActionSection;
