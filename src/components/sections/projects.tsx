import { allProjects, Project } from 'contentlayer/generated';

import { Locale } from '@/config/i18n.config';

import ProjectCard from '../project-card';

function ProjectsSection({ locale }: { locale: Locale }) {
  const projects: Project[] = allProjects.filter(
    (project) => project.slugAsParams.startsWith(locale) && project.slugAsParams !== locale
  );

  return (
    <section className="pt-10 sm:pt-24">
      <div className="main-container gap-18 flex flex-col sm:gap-20">
        <h1 className="heading-1 sr-only">Portfolio</h1>

        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            buttonLabel={locale === 'en' ? 'View project' : 'Ver projeto'}
            href={`/projects/${project.slugAsParams}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
