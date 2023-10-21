import { Link } from 'react-router-dom';

import { Button } from './ui/button';
import Icon from './Icon';

import profileImage from '@/assets/images/perfil.jpg';
import pattern from '@/assets/sprites/patterns.svg';
import { useAppSelector } from '@/lib/hooks/useAppRedux';

function HeroSection() {
  const { blurb, alt } = useAppSelector((state) => state.content);

  return (
    <section className="pb-16 pt-20 md:pb-20 md:pt-40">
      <div className="container grid gap-20 md:grid-cols-2">
        <div className="flex flex-col items-start gap-4 md:row-span-2 md:row-start-1 lg:row-span-1 ">
          <h1 className="heading-1">
            {blurb.title}{' '}
            <span className="relative before:absolute before:bottom-2 before:h-1 before:w-full before:bg-primary">
              Mateus
            </span>
            !
          </h1>
          <p className="max-w-lg">{blurb.paragraph}</p>
          <div className="mt-4 flex gap-4">
            <Button asChild>
              <Link to="/#contact">{blurb.cta}</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/#projects">{blurb.more}</Link>
            </Button>
          </div>
        </div>
        <div className="relative self-start justify-self-center md:row-span-2 md:row-start-2 lg:col-start-2 lg:row-span-1 lg:row-start-1">
          <Icon
            className="absolute -left-9 top-11 -z-10"
            path={pattern}
            name="pattern-circle"
            color="accent"
            width={88}
            height={88}
          />
          <Icon
            className="absolute -bottom-12 -right-14 -z-10"
            path={pattern}
            name="pattern-square"
            color="primary"
            width={88}
            height={88}
          />

          <div className="h-64 w-64 rounded-lg shadow before:absolute before:left-6 before:top-6 before:h-full before:w-full before:rounded-lg before:border before:border-border">
            <div className="relative flex h-full w-full items-start justify-center overflow-hidden rounded-lg">
              <img
                src={profileImage}
                alt={alt.selfie}
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
