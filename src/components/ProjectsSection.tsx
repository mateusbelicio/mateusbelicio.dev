import { useProjects } from '@/lib/hooks/useProjects';
import ProjectCard from './ProjectCard';

// import projectsData from '@/data/projects-content.json';

function ProjectsSection() {
  const { projects } = useProjects();

  return (
    <section className="py-40" id="projects">
      <div className="container">
        <div className="">
          <h2 className="sr-only">Projects</h2>

          <ul className="flex w-full flex-col gap-y-24">
            {projects.map((project, index) => (
              <ProjectCard
                id={project.id}
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                thumbnail={project.thumbnail}
                href={project.slug}
                onlineUrl={project.onlineUrl}
                direction={index % 2 === 0 ? 'normal' : 'reverse'}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
