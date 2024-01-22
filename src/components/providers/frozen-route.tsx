import { useContext, useRef } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

function FrozenRouter({ children }: React.PropsWithChildren) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>;
}

export default FrozenRouter;
