import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { allProjects, Project } from 'contentlayer/generated';

import { Locale } from '@/config/i18n.config';
import { absoluteUrl } from '@/lib/utils';
import { MDXContent } from '@/components/mdx-components';

type Params = {
  locale: Locale;
  slug: string[];
};
interface ProjectPageProps {
  params: Params;
}

async function getProjectFromParams(params: Params) {
  const slug = !params.slug ? params.locale : `${params.locale}/${params.slug?.join('/')}`;
  const project: Project | undefined = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) null;

  return project;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
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
      url: absoluteUrl(project.slug),
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

async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params);

  if (!project) notFound();

  let date;
  if (project.date) date = new Date(project?.date);

  return (
    <section className="py-10">
      <div className="container">
        <time dateTime={project?.date} className="text-xs font-bold uppercase text-blue-600">
          {date?.toLocaleString('pt-BR', { month: 'long', year: 'numeric', day: '2-digit' })}
        </time>
        <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">{project.title}</h1>
        <p>{project?.description}</p>
        <article className="mt-8 border-t border-border pt-8">
          <MDXContent code={project.body.code} />
        </article>
      </div>
    </section>
  );
}

export default ProjectPage;
