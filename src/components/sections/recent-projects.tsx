import { allProjects } from '@/content/portfolio';

import ProjectHighlight from '../features/project-highlight';

function RecentProjectsSection() {
  const projects = allProjects.filter((project) => project.highlight);

  return (
    <section className="pb-12 pt-2 sm:pt-8">
      <div className="main-container flex flex-col gap-18 sm:gap-20">
        <h1 className="heading-1 sr-only">Portfolio</h1>

        {projects.map((project) => (
          <ProjectHighlight
            key={project.slug}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            buttonLabel="View project"
            href={project.path}
          />
        ))}
      </div>
    </section>
  );
}

export default RecentProjectsSection;
