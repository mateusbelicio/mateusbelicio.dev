import Link from 'next/link';

import ImageWithLoader from '../features/image-with-loader';
import { buttonVariants } from '../ui/button';

function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-18">
      <div className="main-container main-grid">
        <ImageWithLoader
          alt="Mateus Belicio"
          className="h-[21.625rem] w-full max-w-80 place-self-center sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:h-full lg:col-end-7 lg:max-w-none"
          fill
          priority
          imageClassname="object-center sm:object-bottom saturate-[15%]"
          sizes="100vw, (min-width: 400px) 20rem, (min-width: 640px) 40vw, (min-width: 940px) 50vw"
          src="/images/perfil.png"
        />

        <div className="my-8 space-y-6 border-y border-border pb-[3.25rem] pt-8 sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:my-0 sm:pt-[3.25rem] lg:col-start-8 lg:col-end-12">
          <h2 className="heading-2">About me</h2>
          <div className="space-y-3">
            <p>
              I'm a junior front-end developer, recently graduated in control and automation
              engineering from the Federal University of Itajubá - Itabira Campus, and I'm looking
              for a new role as a developer in an exciting company.
            </p>
            <p>
              I started diving into the world of web development about a year and a half ago,
              towards the end of my degree. Since then, I've been learning how to write accessible
              HTML code, using modern CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use <strong>React</strong>, but I can adapt to whatever
              tools are required.
            </p>
            <p>
              I'm based in Governador Valadares, Minas Gerais, BR, but I'm available to move or work
              remotely. I’d love you to check out my work.
            </p>
          </div>
          <Link href="/portfolio" className={buttonVariants()}>
            Go to portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
