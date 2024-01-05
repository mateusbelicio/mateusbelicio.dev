import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = '/src/lib/data/projects/';

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = projectsDirectory + fileName;
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    return { id, ...(matterResult.data as { date: string; title: string }) };
  });

  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => ({ params: { id: fileName.replace(/\.md$/, '') } }));
}

export async function getProjectData(slug: string) {
  const fullPath = projectsDirectory + `${slug}.md`;
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return { slug, contentHtml, ...(matterResult.data as { date: string; title: string }) };
}
