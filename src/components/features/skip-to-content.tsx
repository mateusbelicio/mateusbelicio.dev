import { cn } from '@/lib/utils';

import { buttonVariants } from '../ui/button';

function SkipToContent() {
  return (
    <a
      href="#main"
      className={cn(
        buttonVariants({ variant: 'secondary' }),
        'fixed left-2 top-2 z-50 -translate-x-[120%] focus-visible:translate-x-0 motion-safe:transition-transform motion-safe:duration-300'
      )}
    >
      Skip to Content
    </a>
  );
}

export default SkipToContent;
