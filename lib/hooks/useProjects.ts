'use client';

import { useParams } from 'next/navigation';
import projectsData from '@/data/projects-content.json';

export function useProjects() {
  const { slug } = useParams();

  const { projects } = projectsData || { projects: [] };
  const [currentProject] = projects?.filter((project) => project.slug === slug);

  return { projects, currentProject };
}
