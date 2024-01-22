import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { EmptyPlaceholder } from '@/components/empty-placeholder';

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center">
      <EmptyPlaceholder className="mx-auto max-w-[800px]">
        <EmptyPlaceholder.Icon name="warning" />
        <EmptyPlaceholder.Title>Uh oh! Not Found</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          This page cound not be found. Please try again.
        </EmptyPlaceholder.Description>
        <Link href="/" scroll={false} className={buttonVariants({ variant: 'secondary' })}>
          Go to home page
        </Link>
      </EmptyPlaceholder>
    </div>
  );
}
