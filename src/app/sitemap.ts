import { MetadataRoute } from 'next';
import { allProjects } from '@/content/portfolio';

const projectsMap: MetadataRoute.Sitemap = allProjects.map((project) => ({
  url: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio/${project.slug}`,
  lastModified: new Date(),
  priority: 0.64,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...projectsMap,
  ];
}
