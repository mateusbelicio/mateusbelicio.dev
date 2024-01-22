'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, m } from 'framer-motion';

import FrozenRouter from '../providers/frozen-route';

function Main({ children }: React.PropsWithChildren) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <m.main key={pathname} className="flex-1">
        <FrozenRouter>{children}</FrozenRouter>
      </m.main>
    </AnimatePresence>
  );
}

export default Main;
