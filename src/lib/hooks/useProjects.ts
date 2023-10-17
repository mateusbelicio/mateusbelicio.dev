import { useParams } from 'react-router-dom';

import projectsData from '@/lib/data/projects-content.json';

export function useProjects() {
  const { slug } = useParams();

  const { projects } = projectsData || { projects: [] };
  const [currentProject] = projects?.filter((project) => project.slug === slug);

  return { projects, currentProject };
}
