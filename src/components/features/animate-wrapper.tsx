'use client';

import React, { ElementRef, useEffect, useState } from 'react';
import { m, SVGMotionProps, useReducedMotion, Variants } from 'framer-motion';

import { animationTemplate, cn } from '@/lib/utils';

type AnimateWrapperProps = React.HTMLAttributes<HTMLDivElement>;
type SVGProps = SVGMotionProps<SVGSVGElement> & { width: number; height: number };

const OPACITY: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 1, transition: { duration: 0.8 } },
};

const SLIDE: Variants = {
  initial: { right: '-300px' },
  enter: {
    right: '100%',
    transitionEnd: { right: 'calc(-100% - 600px)' },
    transition: {
      duration: 0.8,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  exit: {
    right: '-300px',
    transition: {
      duration: 0.8,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

const AnimateWrapper = React.forwardRef<ElementRef<typeof m.div>, AnimateWrapperProps>(
  ({ children }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

    useEffect(() => {
      const resize = () =>
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      resize();

      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
    }, []);

    return (
      <div ref={ref}>
        <div
          className={cn('background-slide', dimensions.width > 0 ? 'opacity-0' : 'opacity-100')}
        />
        {!shouldReduceMotion && dimensions.width > 0 ? <SVG {...dimensions} /> : null}
        <m.div {...animationTemplate(OPACITY)}>{children}</m.div>
      </div>
    );
  }
);

function SVG({ width, height, ...props }: SVGProps) {
  const initialPath = `
    M300 0
    L${width + 600} 0
    L${width + 300} ${height}
    L0 ${height}
    L300 0
  `;

  return (
    <m.svg {...animationTemplate(SLIDE)} {...props} className="background-slide text-secondary">
      <path d={initialPath} fill="currentColor" />
    </m.svg>
  );
}

export default AnimateWrapper;
