import { MetadataRoute } from 'next';
import { allProjects } from '@/content/portfolio';

const projectsMap: MetadataRoute.Sitemap = allProjects.map((project) => ({
  url: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio/${project.slug}`,
  lastModified: new Date(),
  changeFrequency: 'yearly',
  priority: 0.5,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.5,
    },
    ...projectsMap,
  ];
}
