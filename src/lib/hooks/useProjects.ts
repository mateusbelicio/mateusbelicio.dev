import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

  type ProjectType = {
  id: string;
  title: string;
  description: string;
  slug: string;
  onlineUrl: string;
  tags: string[];
  thumbnail: string;
  screenshot: string;
  about: string[];
  whatILearned: string;
};

type ProjectsDataType = {
  projects: ProjectType[]
}

export function useProjects() {
  const [projectsData, setProjectsData] = useState<ProjectsDataType | null>(null);
  const { slug } = useParams();

  const { projects } = projectsData || { projects: [] };
  const [currentProject] = projects?.filter((project) => project.slug === slug);

  useEffect(() => {
    async function getProjectData() {
      try {
        const response = await fetch('/src/lib/data/projects-content.json');
        if (!response.ok) throw new Error('Something went wrong');

        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getProjectData();
  }, []);

  return { projects, currentProject }
}