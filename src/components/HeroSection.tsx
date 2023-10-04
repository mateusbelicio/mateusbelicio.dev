import { Button } from './ui/button';

import profileImage from '@/assets/perfil.jpg';

function HeroSection() {
  return (
    <section className="pb-20 pt-40">
      <div className="container flex space-x-64">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-6xl font-bold leading-tight text-foreground">
            Hi, I&rsquo;m Mateus!
          </h1>
          <p className="max-w-lg">
            Highlights start web cross-pollination working individual most work field line. Build
            speed container reality land eye. Journey regroup talk we must resources needed got
            disband banner.
          </p>
          <div className="mt-4 flex gap-4">
            <Button>Let&rsquo;s talk</Button>
            <Button variant="ghost">or see more below</Button>
          </div>
        </div>
        <div className="pattern-circle--before pattern-square--after relative before:-left-9 before:top-11 before:-z-10 after:-bottom-10 after:-right-14 after:-z-10">
          <div className="h-64 w-64 shadow before:absolute before:left-6 before:top-6 before:h-full before:w-full before:rounded-lg before:border before:border-border">
            <div className="relative flex h-full w-full items-start justify-center overflow-hidden rounded-lg">
              <img
                src={profileImage}
                alt="Photo of Mateus Belício"
                className="-mt-4 max-w-none object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
