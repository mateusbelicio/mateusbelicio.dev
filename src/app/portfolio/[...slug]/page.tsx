import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProjects } from '@/content/portfolio';

import { Project } from '@/types/project';
import { absoluteUrl } from '@/lib/utils';
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

  return {
    title: project.title,
    description: project.description,
  };
}

async function PortfolioPage({ params }: PortfolioPageProps) {
  const project = await getProjectFromParams(params);

  if (!project) notFound();

  const currentProjectIndex = allProjects.findIndex((proj) => project.slug === proj.slug);
  const nextProjectIndex =
    currentProjectIndex < allProjects.length - 1 ? currentProjectIndex + 1 : 0;
  const previusProjectIndex =
    currentProjectIndex > 0 ? currentProjectIndex - 1 : allProjects.length - 1;

  return (
    <>
      <DetailsSection
        project={project}
        next={{
          path: allProjects[nextProjectIndex].path,
          title: allProjects[nextProjectIndex].title,
        }}
        previus={{
          path: allProjects[previusProjectIndex].path,
          title: allProjects[previusProjectIndex].title,
        }}
      />
      <CallToActionSection />
    </>
  );
}

export default PortfolioPage;
