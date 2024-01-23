import { RefObject, useEffect, useState } from 'react';

import { useMounted } from './useMounted';

export function useElementPosition(ref: RefObject<HTMLElement>) {
  const [position, setPosition] = useState<DOMRect>();
  const mounted = useMounted();

  useEffect(() => {
    const getButtonPosition = () => {
      if (!ref.current) return;
      setPosition(ref.current?.getBoundingClientRect());
    };

    if (mounted) {
      getButtonPosition();
      window.addEventListener('resize', getButtonPosition);
    }

    return () => window.removeEventListener('resize', getButtonPosition);
  }, [mounted]);

  return position;
}
