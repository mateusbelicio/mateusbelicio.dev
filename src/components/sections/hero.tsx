import { Button, ButtonIcon } from '../ui/button';

function HeroSection() {
  return (
    <section className="pb-12 lg:pb-18">
      <div className="main-container main-grid gap-y-6">
        <div className="z-10 row-start-1 flex flex-col items-start gap-8 pt-14 sm:items-center sm:gap-12 sm:pt-14 sm:text-center lg:gap-[3.25rem]">
          <h1 className="heading-1 min-w-[19.25rem] max-w-[22ch]">
            Hey, I’m Mateus Belício and I love building modern and accessible websites
          </h1>
          <Button asChild variant="secondary" className="mt-4">
            <a href="#about">
              <ButtonIcon name="downArrows" />
              About me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
