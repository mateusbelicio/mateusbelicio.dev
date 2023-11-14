import { allProjects, Project } from 'contentlayer/generated';

import { Locale } from '@/config/i18n.config';

import ProjectCard from '../project-card';

type Params = {
  locale: Locale;
  slug?: string[];
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

function ProjectsSection({ locale }: { locale: Locale }) {
  const projects = allProjects.filter(
    (project) => project.slugAsParams.startsWith(locale) && project.slugAsParams !== locale
  );

  return (
    <section className="py-40" id="projects">
      <div className="container">
        <h2 className="sr-only">Projects</h2>

        <ul className="flex w-full flex-col gap-y-24">
          {projects.map((project, index: number) => (
            <ProjectCard
              id={project._id}
              key={project._id}
              title={project.title}
              description={project.description}
              href={project.slug}
              direction={index % 2 === 0 ? 'normal' : 'reverse'}
            >
              <ProjectCard.Content>
                <ProjectCard.Title>{project.title}</ProjectCard.Title>
                {project.description ? (
                  <ProjectCard.Description>{project.title}</ProjectCard.Description>
                ) : null}
              </ProjectCard.Content>
              <ProjectCard.Image
                src={`/images/projects/preview-art-gallery.jpg`}
                alt={project.title}
              />
            </ProjectCard>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsSection;
