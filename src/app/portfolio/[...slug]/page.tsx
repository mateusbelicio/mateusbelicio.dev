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
import DetailsSection from '@/components/sections/details';

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
      <DetailsSection project={project} />
      <CallToActionSection />
    </>
  );
}

export default PortfolioPage;
