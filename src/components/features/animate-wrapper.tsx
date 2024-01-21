'use client';

import React, { ElementRef } from 'react';
import { m, MotionProps, Variants } from 'framer-motion';

import FrozenRouter from '../providers/frozen-route';

type AnimateWrapperProps = React.HTMLAttributes<HTMLDivElement>;

const OPACITY: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 1 },
};

const SLIDE: Variants = {
  initial: { top: '100vh' },
  enter: { top: '100vh' },
  exit: {
    top: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const PERSPECTIVE: Variants = {
  initial: { y: 0, opacity: 1 },
  enter: { y: 0, opacity: 1 },
  exit: {
    y: -100,
    opacity: 0.8,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
};

const AnimateWrapper = React.forwardRef<ElementRef<typeof m.div>, AnimateWrapperProps>(
  ({ children }, ref) => {
    const animationTemplate = (variants: Variants) => {
      return {
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
        variants,
      } as MotionProps;
    };

    return (
      <div ref={ref} className="bg-foreground/75">
        <m.div
          className="pointer-events-none fixed inset-0 z-50 select-none bg-background"
          {...animationTemplate(SLIDE)}
        />
        <m.div {...animationTemplate(PERSPECTIVE)} className="bg-background">
          <m.div {...animationTemplate(OPACITY)}>
            <FrozenRouter>{children}</FrozenRouter>
          </m.div>
        </m.div>
      </div>
    );
  }
);

export default AnimateWrapper;
