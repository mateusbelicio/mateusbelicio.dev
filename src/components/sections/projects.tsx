import { allProjects, Project } from 'contentlayer/generated';

import { Locale } from '@/config/i18n.config';

import ProjectCard from '../project-card';

function ProjectsSection({ locale }: { locale: Locale }) {
  const projects: Project[] = allProjects.filter((project) => project.language === locale);

  return (
    <section className="pt-10 sm:pt-24">
      <div className="main-container flex flex-col gap-18 sm:gap-20">
        <h1 className="heading-1 sr-only">Portfolio</h1>

        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            buttonLabel={locale === 'en' ? 'View project' : 'Ver projeto'}
            href={project.path}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
