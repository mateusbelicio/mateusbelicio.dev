import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProjects, Project } from 'contentlayer/generated';

import { absoluteUrl } from '@/lib/utils';

type Params = { slug: string[] };

interface ProjectPageProps {
  params: Params;
}

async function getProjectFromParams(params: Params) {
  const slug = params.slug?.join('/') || '';
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

export async function generateStaticParams(): Promise<ProjectPageProps['params'][]> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split('/'),
  }));
}

async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params);

  if (!project) notFound();

  return <div>Project</div>;
}

export default ProjectPage;
