'use client';

import { useRef } from 'react';
import Image, { type ImageProps } from 'next/image';
import { useInView } from 'framer-motion';

import { cn } from '@/lib/utils';

type ImageWithLoaderProps = ImageProps & {
  imageClassname?: string;
};

function ImageWithLoader({ src, className, imageClassname, ...props }: ImageWithLoaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-clip rounded-sm border border-border/50 bg-foreground/10',
        className
      )}
    >
      <Image
        className={cn(
          'object-cover transition-opacity duration-1000',
          isInView ? 'opacity-100' : 'opacity-0',
          imageClassname
        )}
        src={src}
        {...props}
      />
    </div>
  );
}

export default ImageWithLoader;
