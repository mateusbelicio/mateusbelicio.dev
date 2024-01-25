'use client';

import { motion, Variants } from 'framer-motion';

import { animationTemplate } from '@/lib/utils';

type AnimateWrapperProps = React.HTMLAttributes<HTMLDivElement>;

const OPACITY: Variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: 0.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const AnimateWrapper = ({ children }: AnimateWrapperProps) => {
  return <motion.div {...animationTemplate(OPACITY)}>{children}</motion.div>;
};

export default AnimateWrapper;
