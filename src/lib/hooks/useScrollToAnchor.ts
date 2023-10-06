import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (!location.hash) {
      document.getElementById('root')?.scrollTo({ behavior: 'smooth', top: 0 });
      return;
    }

    lastHash.current = location.hash.slice(1);

    if (document.getElementById(lastHash.current)) {
      setTimeout(() => {
        if (!lastHash.current) return;

        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return null;
}
