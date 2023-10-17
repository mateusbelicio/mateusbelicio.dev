import { useRef } from 'react';
import { motion } from 'framer-motion';

import { useProjects } from '@/lib/hooks/useProjects';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import ProjectDetails from '@/components/ProjectDetails';

function Project() {
  const { currentProject } = useProjects();
  const container = useRef<HTMLDivElement>(null);

  return (
    <main>
      <section>
        <motion.div
          className="flex max-h-64 items-center justify-center overflow-hidden opacity-20"
          layoutId={`${currentProject?.id}-project-image`}
        >
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden rounded-lg rounded-t-none bg-muted"
          >
            <img
              className="w-full object-cover"
              src={currentProject?.thumbnail}
              alt={`Thumbnail of ${currentProject?.title} project`}
            />
          </AspectRatio>
        </motion.div>

        <ProjectDetails>
          <ProjectDetails.Navigation>
            {currentProject.sections.map((section) => (
              <ProjectDetails.NavigationLink key={section.id} id={section.id}>
                {section.title}
              </ProjectDetails.NavigationLink>
            ))}
          </ProjectDetails.Navigation>

          <ProjectDetails.Content ref={container} title={currentProject?.title}>
            {currentProject.sections.map((section) => (
              <ProjectDetails.Section key={section.id} id={section.id} title={section.title}>
                {section.content.split('\n').map((text) => (
                  <p>{text}</p>
                ))}
              </ProjectDetails.Section>
            ))}
          </ProjectDetails.Content>
        </ProjectDetails>
      </section>
    </main>
  );
}

export default Project;
