import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from 'contentlayer/generated';

import { cn, shimmer, toBase64 } from '@/lib/utils';

import { MDXContent } from '../mdx-components';
import { Badge } from '../ui/badge';
import { buttonVariants } from '../ui/button';

function DetailsSection({ project }: { project: Project }) {
  return (
    <section className="pb-8 pt-2 sm:pt-8 lg:pt-11">
      <div className="main-container main-grid lg:items-start">
        <div className="relative mb-10 h-36 w-full overflow-clip rounded-lg sm:h-80 lg:mb-28 lg:h-[31.25rem]">
          <Image
            src={project.thumbnail}
            alt="Project thumbnail"
            fill
            sizes="100vw"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1110, 500))}`}
            className="object-cover"
          ></Image>
        </div>
        <div className="mb-12 grid justify-items-start gap-6 border-y border-border py-6 sm:mb-10 sm:grid-cols-[inherit] sm:gap-x-[inherit] sm:gap-y-4 sm:py-8 lg:col-span-4 lg:row-span-2 lg:grid-cols-1 lg:py-12 lg:[&>*]:col-span-1">
          <h1 className="heading-2 sm:col-span-5 sm:col-start-1">{project.title}</h1>
          <p className="text-[0.9375rem] sm:col-span-6 sm:col-start-7 sm:row-span-3 lg:row-span-1 lg:mt-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2  text-[0.8125rem] font-bold text-primary sm:col-span-5 sm:col-start-1 lg:mt-2">
            {project?.tags.split(' ').map((tag) => (
              <Badge key={tag} variant="outline" className="border-blue-600 text-blue-600">
                {tag}
              </Badge>
            ))}
          </div>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'sm:col-span-5 sm:col-start-1 sm:mt-4'
            )}
          >
            Visit website
          </Link>
        </div>
        <article className="sm:mt-0 lg:col-start-6 lg:col-end-13">
          <MDXContent code={project.body.code} />
        </article>
      </div>
    </section>
  );
}

export default DetailsSection;
