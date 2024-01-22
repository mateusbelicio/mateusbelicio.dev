import { Button, ButtonIcon } from '../ui/button';

function HeroSection() {
  return (
    <section className="pb-12 lg:pb-18">
      <div className="main-container main-grid relative gap-y-6">
        <div className="z-10 flex flex-col items-start gap-8 pt-14 sm:items-center sm:gap-12 sm:pt-14 sm:text-center lg:gap-[3.25rem]">
          <h1 className="heading-1 relative min-w-[19.25rem] max-w-sm after:left-full after:top-1/2 after:-z-10 sm:after:absolute sm:after:h-36 sm:after:w-36 sm:after:content-[url(/sprites/patterns.svg)]">
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
      </div>
    </section>
  );
}

export default HeroSection;
