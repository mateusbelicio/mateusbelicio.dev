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
  const isInView = useInView(ref, { once: true, margin: '0px 900px' });

  return (
    <div ref={ref} className={cn('relative bg-foreground/50', className)}>
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
