import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allProjects, Project } from 'contentlayer/generated';

import { absoluteUrl, cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { MDXContent } from '@/components/mdx-components';

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

  let date;
  if (project.date) date = new Date(project?.date);

  return (
    <section className="py-10">
      <div className="main-container">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: 'outline' }), 'inline-flex gap-2')}
        >
          <Icons.back size={16} /> Back
        </Link>
        <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-4">
            <h1 className="heading-1 mt-2 scroll-m-20">{project.title}</h1>
            <p>{project?.description}</p>
          </div>
          <time
            dateTime={project?.date}
            className="flex-nowrap whitespace-nowrap text-xs font-bold uppercase text-blue-600"
          >
            {date?.toLocaleString('en', {
              month: 'long',
              year: 'numeric',
              day: '2-digit',
            })}
          </time>
        </div>
        <article className="mt-8 border-t border-border pt-8">
          <MDXContent code={project.body.code} />
        </article>
      </div>
    </section>
  );
}

export default PortfolioPage;
