import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

import { Project } from '@/types/project';
import { cn } from '@/lib/utils';

import { Icons } from '../features/icons';
import ImageWithLoader from '../features/image-with-loader';
import { Badge } from '../ui/badge';
import { buttonVariants } from '../ui/button';

type DetailsProps = {
  project: Project;
  next: { path: string; title: string };
  previus: { path: string; title: string };
};

function DetailsSection({ project, next, previus }: DetailsProps) {
  return (
    <section className="pb-8 pt-2 sm:pt-8 lg:pt-11">
      <div className="main-container main-grid lg:items-start">
        <ImageWithLoader
          alt="Project thumbnail"
          className="mb-10 h-36 w-full sm:h-80 lg:mb-28 lg:h-[31.25rem]"
          fill
          priority
          sizes="100vw"
          src={project.hero}
        />
        <div className="mb-12 grid justify-items-start gap-6 border-y border-border py-6 sm:mb-10 sm:grid-cols-[inherit] sm:gap-x-[inherit] sm:gap-y-4 sm:py-8 lg:col-span-4 lg:row-span-2 lg:grid-cols-1 lg:py-12 lg:[&>*]:col-span-1">
          <h1 className="heading-2 sm:col-span-5 sm:col-start-1">{project.title}</h1>
          <p className="text-[0.9375rem] sm:col-span-6 sm:col-start-7 sm:row-span-3 lg:row-span-1 lg:mt-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 text-[0.8125rem] font-bold text-primary sm:col-span-5 sm:col-start-1 lg:mt-2">
            {project?.tags.split(' ').map((tag) => (
              <Badge key={tag} variant="outline" className="border-accent text-accent">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 sm:col-span-full sm:col-start-1 sm:mt-4">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'secondary' })}
            >
              Visit website
            </Link>
            <Link
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View code"
              title="View code"
              className={cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'h-12 w-12')}
            >
              <Icons name="source" />
            </Link>
          </div>
        </div>
        <article className="space-y-8 sm:mt-0 lg:col-start-6 lg:col-end-13 [&_*]:leading-7 [&_*]:text-foreground/80 [&_a]:text-accent hover:[&_a]:underline focus-visible:[&_a]:outline focus-visible:[&_a]:outline-1 focus-visible:[&_a]:outline-offset-4 focus-visible:[&_a]:outline-primary [&_li]:marker:text-accent [&_ul]:list-disc [&_ul]:pl-6">
          <div className="space-y-5">
            <h3 className="heading-3 mb-7 scroll-m-20 [&:not(:first-child)]:mt-10 [&>a]:outline-none">
              Project Background
            </h3>
            {parse(project.projectBackground)}
          </div>
          <div className="space-y-5">
            <h3 className="heading-3 mb-7 scroll-m-20 [&:not(:first-child)]:mt-10 [&>a]:outline-none">
              Static Previews
            </h3>
            <div className="grid gap-8">
              {project.staticPreviews.map((img, index) => (
                <ImageWithLoader
                  alt={`Preview of ${project.title} project (${index + 1})`}
                  className="h-48 w-full sm:h-[25rem]"
                  fill
                  key={index}
                  sizes="100vw, (min-width: 940px) 70vw"
                  src={img}
                />
              ))}
            </div>
          </div>
        </article>

        <div className="col-span-full mt-16 flex justify-center overflow-x-hidden border-y border-border sm:mt-20 lg:mt-16">
          <Link
            href={previus.path}
            className="flex w-1/2 grow flex-col items-start border-r border-border py-6 transition-colors hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-row sm:items-center sm:gap-8 sm:py-8"
          >
            <Icons name="previus" className="shrink-0" />
            <div className="flex max-w-full grow flex-col">
              <span className="heading-3 mt-4 inline-block max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap !leading-9 sm:mt-0">
                {previus.title}
              </span>
              <span className="leading-[1.875rem] text-foreground/50">Previus Project</span>
            </div>
          </Link>
          <Link
            href={next.path}
            className="flex w-1/2 grow flex-col items-end py-6 text-right transition-colors hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-row-reverse sm:items-center sm:gap-8 sm:py-8"
          >
            <Icons name="next" className="shrink-0" />
            <div className="flex max-w-full grow flex-col items-end">
              <span className="heading-3 mt-4 inline-block max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap !leading-9 sm:mt-0">
                {next.title}
              </span>
              <span className="leading-[1.875rem] text-foreground/50">Next Project</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
