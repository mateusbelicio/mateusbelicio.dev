import { Project } from '@/types/project';

export const allProjects: Project[] = [
  {
    title: 'Art Gallery Website',
    tags: 'react vite typescript framer-motion styled-components',
    description: `This project required me to build a website that was fully responsive to the designs provided. I used React and TypeScript to build the interface and Styled Components to style it, I also added some animations using the Framer Motion library. Additionally, I also used the MapBox GL tool to create the map on the contact page.`,
    thumbnail: '/images/projects/art-gallery-thumbnail.jpg',
    hero: '/images/projects/art-gallery-hero.jpg',
    link: 'https://mateusbelicio.github.io/art-gallery-website/',
    projectBackground: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae excepturi omnis pariatur non accusantium id fugiat, animi consequuntur modi iure illo, rerum explicabo natus deserunt, tempore placeat! Iste numquam porro, sapiente ut veritatis quos error ducimus voluptates incidunt dolore esse laudantium culpa consectetur, totam, eum rerum dolorem possimus dolores?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae excepturi omnis pariatur non accusantium id fugiat, animi consequuntur modi iure illo, rerum explicabo natus deserunt, tempore placeat! Iste numquam porro, sapiente ut veritatis quos error ducimus voluptates incidunt dolore esse laudantium culpa consectetur, totam, eum rerum dolorem possimus dolores?`,
    staticPreviews: [
      '/images/projects/art-gallery-preview-1.jpg',
      '/images/projects/art-gallery-preview-2.jpg',
      '/images/projects/art-gallery-preview-3.jpg',
    ],
    slug: 'art-gallery',
    path: '/portfolio/art-gallery',
  },
  {
    title: 'Clipboard Landing Page',
    tags: 'html scss css-animations',
    description: `This project required me to build a landing page that was fully responsive to the provided designs. I used HTML5, along with Scss to style the interface and JavaScript to make animations to reveal content based on scrolling using the Intersection Observer API.`,
    thumbnail: '/images/projects/clipboard-thumbnail.jpg',
    hero: '/images/projects/clipboard-hero.jpg',
    link: 'https://mateusbelicio.github.io/clipboard-landing-page/',
    projectBackground: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae excepturi omnis pariatur non accusantium id fugiat, animi consequuntur modi iure illo, rerum explicabo natus deserunt, tempore placeat! Iste numquam porro, sapiente ut veritatis quos error ducimus voluptates incidunt dolore esse laudantium culpa consectetur, totam, eum rerum dolorem possimus dolores?`,
    staticPreviews: [
      '/images/projects/clipboard-preview-1.jpg',
      '/images/projects/clipboard-preview-2.jpg',
    ],
    slug: 'clipboard',
    path: '/portfolio/clipboard',
  },
  {
    title: 'Body Mass Index Calculator Website',
    tags: 'react tailwind-css framer-motion',
    description: `This project required me to build a landing page that was fully responsive to the provided designs. I used React and Tailwind CSS to build the interface and JavaScript for areas that required interactivity, such as the body mass index calculator. I also used the Framer Motion library to make some little animations.`,
    thumbnail: '/images/projects/bmi-calculator-thumbnail.jpg',
    hero: '/images/projects/bmi-calculator-hero.jpg',
    link: 'https://mateusbelicio.github.io/bmi-calculator/',
    projectBackground: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae excepturi omnis pariatur non accusantium id fugiat, animi consequuntur modi iure illo, rerum explicabo natus deserunt, tempore placeat! Iste numquam porro, sapiente ut veritatis quos error ducimus voluptates incidunt dolore esse laudantium culpa consectetur, totam, eum rerum dolorem possimus dolores?`,
    staticPreviews: [
      '/images/projects/bmi-calculator-preview-1.jpg',
      '/images/projects/bmi-calculator-preview-2.jpg',
    ],
    slug: 'bmi-calculator',
    path: '/portfolio/bmi-calculator',
  },
];
