import { allProjects } from 'contentlayer/generated';

import ProjectCard from '../project-card';

function ProjectsSection() {
  return (
    <section className="pb-12 pt-2 sm:pt-8">
      <div className="main-container flex flex-col gap-18 sm:gap-20">
        <h1 className="heading-1 sr-only">Portfolio</h1>

        {allProjects.map((project) => (
          <ProjectCard
            key={project._id}
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

export default ProjectsSection;
