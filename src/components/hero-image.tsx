import React from 'react';
import Image from 'next/image';

import Sprite from './sprites';

function HeroImage() {
  return (
    <div className="relative self-start justify-self-center md:row-span-2 md:row-start-2 lg:col-start-2 lg:row-span-1 lg:row-start-1">
      <Sprite
        className="absolute -left-9 top-11 -z-10"
        src="/images/sprites/patterns.svg"
        name="pattern-circle"
        color="accent"
        width={88}
        height={88}
      />
      <Sprite
        className="absolute -bottom-12 -right-14 -z-10"
        src="/images/sprites/patterns.svg"
        name="pattern-square"
        color="primary"
        width={88}
        height={88}
      />

      <div className="h-64 w-64 rounded-lg shadow before:absolute before:left-6 before:top-6 before:h-full before:w-full before:rounded-lg before:border before:border-border">
        <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
          <Image
            src="/images/perfil.jpg"
            alt="Photo of Mateus Belício"
            className="max-w-none object-cover object-center"
            width={256}
            height={256}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
