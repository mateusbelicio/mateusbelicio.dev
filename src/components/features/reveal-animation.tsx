'use client';

import { useRef } from 'react';
import { m, useInView, Variants } from 'framer-motion';

type RevealAnimationProps = React.ComponentProps<typeof m.div> & {
  tag?: keyof typeof m;
};

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

function RevealAnimation({ tag = 'div', children, ...props }: RevealAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <m.div
      animate={isInView ? 'show' : 'initial'}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      variants={variants}
      ref={ref}
      {...props}
    >
      {children}
    </m.div>
  );
}

export default RevealAnimation;
