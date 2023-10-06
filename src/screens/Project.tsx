// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AspectRatio } from '@/components/ui/aspect-ratio';

// import projectsData from '@/lib/data/projects-content.json';
import ProjectDetails from '@/components/ProjectDetails';
import { useProjects } from '@/lib/hooks/useProjects';

function Project() {
  const { currentProject } = useProjects();

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
            <ProjectDetails.NavigationLink href="about" id="about">
              About
            </ProjectDetails.NavigationLink>
            <ProjectDetails.NavigationLink href="learn" id="learn">
              What I learn
            </ProjectDetails.NavigationLink>
            <ProjectDetails.NavigationLink href="tech" id="tech">
              Technologies used
            </ProjectDetails.NavigationLink>
          </ProjectDetails.Navigation>
          <ProjectDetails.Content title={currentProject?.title}>
            <ProjectDetails.Section id="about" title="about">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eveniet!</p>
            </ProjectDetails.Section>

            <ProjectDetails.Section id="learn" title="What I learn">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eveniet!</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod possimus earum?
                Est tenetur vero id. A laudantium officia modi at. Optio, perspiciatis.
              </p>
            </ProjectDetails.Section>

            <ProjectDetails.Section id="tech" title="Technologies used">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima? Repellat
                ipsam, omnis qui facere esse quibusdam minus voluptate accusantium a quam provident
                mollitia magni impedit iusto explicabo enim doloremque consequuntur.
              </p>
            </ProjectDetails.Section>
          </ProjectDetails.Content>
        </ProjectDetails>
      </section>
    </main>
  );
}

export default Project;
