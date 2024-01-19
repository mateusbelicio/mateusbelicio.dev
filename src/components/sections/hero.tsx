import RevealAnimation from '../features/reveal-animation';
import { Button, ButtonIcon } from '../ui/button';

function HeroSection() {
  return (
    <section className="pb-12 lg:pb-18">
      <RevealAnimation className="main-container main-grid relative gap-y-6">
        <div className="relative lg:col-start-7 lg:row-start-1"></div>
        <div className="z-10 flex flex-col items-start gap-8 pt-14 sm:col-start-1 sm:col-end-10 sm:gap-12 sm:self-end sm:pr-14 sm:pt-14 md:row-start-1 lg:col-end-8 lg:gap-[3.25rem]">
          <h1 className="heading-1 min-w-[19.25rem] max-w-sm">
            Hey, I’m Mateus Belício and I love building beautiful websites
          </h1>
          <div className="mt-4">
            <Button asChild variant="secondary">
              <a href="#about">
                <ButtonIcon name="downArrows" />
                About me
              </a>
            </Button>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
}

export default HeroSection;
