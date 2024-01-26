import { allProjects } from '@/content/portfolio';

import ProjectCard from '../features/project-card';

function OtherProjectsSection() {
  const projects = allProjects.filter((project) => !project.highlight);

  return (
    <section className="pb-12 pt-16 sm:pt-24">
      <div className="main-container flex flex-col gap-12 sm:gap-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <h2 className="heading-1 whitespace-nowrap">More Projects</h2>
          <span className="h-px w-full grow bg-border" aria-hidden="true"></span>
        </div>
        <div className="">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              href={project.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherProjectsSection;
