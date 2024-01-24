import { Project } from '@/types/project';

export const allProjects: Project[] = [
  {
    title: 'Art Gallery Website',
    tags: 'react vite typescript framer-motion styled-components',
    description: `In this project I used React and TypeScript to build the interface and Styled Components to style it, I also added some animations using the Framer Motion library. Additionally, I used the MapBox GL tool to create the map on the contact page.`,
    thumbnail: '/images/projects/art-gallery-thumbnail.jpg',
    hero: '/images/projects/art-gallery-hero.jpg',
    link: 'https://mateusbelicio.github.io/art-gallery-website/',
    projectBackground: `<p>This project was based on the <a href="https://www.frontendmentor.io/challenges/art-gallery-website-yVdrZlxyA" target="_blank" rel="noopener noreferrer">Art gallery website challenge</a> from the Frontend Mentor website.</p>
    <p>In this challenge the objective was to create the website based on the design provided and make users able to:</p>
    <ul><li>View the optimal layout for each page depending on their device's screen size</li><li>See hover and focus states for all interactive elements on the page</li><li><strong>Bonus:</strong> Use a JavaScript library for interactive maps to create an interactive location map with custom location pin</li></ul>
    <p>To achieve the goal, I used the following tools to develop the website:</p>
    <ul><li>React - JS library</li><li>Styled Components - For styles</li><li>Framer Motion - For animations</li><li>Mapbox - For the the interactive map</li></ul>
    <p>In this challenge, I chose to use the MapBox GL library to create the interactive map on the contact page. As I had already worked with the Leaflet library previously in another project, it was relatively simple to implement this functionality with the MapBox library.</p>`,
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
    tags: 'html scss css-animations bem',
    description: `In this project I used HTML5, along with Sass to style the interface and JavaScript to make animations to reveal content based on scrolling using the Intersection Observer API.`,
    thumbnail: '/images/projects/clipboard-thumbnail.jpg',
    hero: '/images/projects/clipboard-hero.jpg',
    link: 'https://mateusbelicio.github.io/clipboard-landing-page/',
    projectBackground: `<p>This project was based on the <a href="https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9" target="_blank" rel="noopener noreferrer">Clipboard landing page challenge</a> from the Frontend Mentor website.</p>
    <p>In this challenge the objective was to create the website based on the design provided and make users able to:</p>
    <ul><li>View the optimal layout for each page depending on their device's screen size</li><li>See hover and focus states for all interactive elements on the page</li></ul>
    <p>To achieve the goal, I used basic HTML along with Sass for styling. To name the classes of the HTML elements, I followed the BEM methodology, thus making the code reusable and maintainable. Additionally, I used JavaScript to create reveal animations when scrolling the page, for this I used the Intersection Observer API.</p>`,
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
    description: `In this project I used React and Tailwind CSS to build the interface and JavaScript for areas that required interactivity, such as the body mass index calculator. I also used the Framer Motion library to make some small animations.`,
    thumbnail: '/images/projects/bmi-calculator-thumbnail.jpg',
    hero: '/images/projects/bmi-calculator-hero.jpg',
    link: 'https://mateusbelicio.github.io/bmi-calculator/',
    projectBackground: `<p>This project was based on the <a href="https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T" target="_blank" rel="noopener noreferrer">Body Mass Index Calculator challenge</a> from the Frontend Mentor website.</p>
    <p>In this challenge the objective was to create the website based on the design provided and make users able to:</p>
    <ul><li>Select whether they want to use metric or imperial units</li><li>Enter their height and weight</li><li>See their BMI result, with their weight classification and healthy weight range</li><li>View the optimal layout for the interface depending on their device's screen size</li><li>See hover and focus states for all interactive elements on the page</li></ul>
    <p>To achieve the goal, I used the following tools to develop the website:</p>
    <ul><li>React - JS library</li><li>Tailwind CSS - For styles</li><li>Framer Motion - For animations</li></ul>
    <p>In this challenge, it was the first time I had used the Framer Motion library. I managed to learn a lot of things during the development of the project and I was very happy with the result achieved.</p>`,
    staticPreviews: [
      '/images/projects/bmi-calculator-preview-1.jpg',
      '/images/projects/bmi-calculator-preview-2.jpg',
    ],
    slug: 'bmi-calculator',
    path: '/portfolio/bmi-calculator',
  },
];
