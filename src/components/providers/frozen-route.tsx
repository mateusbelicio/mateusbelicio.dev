import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname, useSearchParams } from 'next/navigation';

function FrozenRouter({ children }: React.PropsWithChildren) {
  const context = useContext(LayoutRouterContext);
  const [frozen, setFrozen] = useState(context);

  const params = useSearchParams().toString();
  const path = usePathname();
  const prevPath = useRef(path);

  useEffect(() => {
    if (prevPath.current === path) setFrozen(context);
    prevPath.current = path;
  }, [params, path]);

  const memoizedContext = useMemo(
    () => ({ ...frozen, childNodes: context?.childNodes }),
    [frozen, context]
  );

  return (
    <LayoutRouterContext.Provider value={memoizedContext}>{children}</LayoutRouterContext.Provider>
  );
}

export default FrozenRouter;
