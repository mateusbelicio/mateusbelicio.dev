import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allProjects, Project } from 'contentlayer/generated';

import { absoluteUrl, cn, shimmer, toBase64 } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { MDXContent } from '@/components/mdx-components';
import CallToActionSection from '@/components/sections/cta';

type Params = {
  slug: string[];
};
interface PortfolioPageProps {
  params: Params;
}

async function getProjectFromParams(params: Params) {
  const slug = params.slug ? params.slug.join('/') : null;
  const project: Project | undefined = allProjects.find((project) => project.slug === slug);

  if (!project) null;

  return project;
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) return {};

  const url = process.env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set('heading', project.description ?? project.title);
  ogUrl.searchParams.set('type', 'Projects');
  ogUrl.searchParams.set('mode', 'dark');

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: absoluteUrl(project.path),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

async function PortfolioPage({ params }: PortfolioPageProps) {
  const project = await getProjectFromParams(params);

  if (!project) notFound();

  return (
    <>
      <section className="pt-10 sm:pt-[5.875rem]">
        <div className="main-container main-grid lg:items-start">
          <div className="relative mb-10 h-36 w-full overflow-clip rounded-lg sm:h-80 lg:h-[31.25rem]">
            <Image
              src={project.thumbnail}
              alt="Project thumbnail"
              fill
              sizes="100vw"
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1110, 500))}`}
              className="object-cover"
            ></Image>
          </div>
          <div className="mb-12 mt-10 grid justify-items-start gap-6 border-y border-border py-6 sm:mb-10 sm:grid-cols-[inherit] sm:gap-x-[inherit] sm:gap-y-4 sm:py-8 lg:col-span-4 lg:row-span-2 lg:mt-[7.1875rem] lg:grid-cols-1 lg:py-12 lg:[&>*]:col-span-1">
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
                'sm:col-span-5 sm:col-start-1 lg:mt-4'
              )}
            >
              Visit website
            </Link>
          </div>
          <article className="sm:mt-0 lg:col-start-6 lg:col-end-13 lg:mt-[7.1875rem]">
            <MDXContent code={project.body.code} />
          </article>
        </div>
      </section>
      <CallToActionSection />
    </>
  );
}

export default PortfolioPage;
