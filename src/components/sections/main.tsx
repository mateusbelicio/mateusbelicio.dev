'use client';

import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, m } from 'framer-motion';

import FrozenRouter from '../providers/frozen-route';

function Main({ children }: React.PropsWithChildren) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <m.main id="main" key={pathname} className="flex-1">
        <Suspense fallback={<Fallback />}>
          <FrozenRouter>{children}</FrozenRouter>
        </Suspense>
      </m.main>
    </AnimatePresence>
  );
}

export default Main;

function Fallback() {
  return <div className="pointer-events-none fixed inset-0 z-50 bg-secondary"></div>;
}
