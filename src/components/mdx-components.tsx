import Image from 'next/image';
import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';

import { Callout } from './callout';
import { MdxCard } from './mdx-card';

const components: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={cn('heading-1 scroll-m-20 [&:not(:first-child)]:mt-2', className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn('heading-2 scroll-m-20 pb-1 [&:not(:first-child)]:mt-10', className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn('heading-3 scroll-m-20 [&:not(:first-child)]:mt-8', className)} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn('mt-8 scroll-m-20 font-serif text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn('mt-8 scroll-m-20 font-serif text-lg font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn('mt-8 scroll-m-20 text-base font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a className={cn('font-medium underline underline-offset-4', className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }) => <li className={cn('mt-2', className)} {...props} />,
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground', className)}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className={cn('h-48 w-full rounded-md border sm:h-[25rem]', className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn('mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4', className)}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn('relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm', className)}
      {...props}
    />
  ),
  Image,
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
