import ProjectCard from './ProjectCard';

import thumbnailArtGallery from '@/assets/preview-art-gallery.jpg';
import thumbnailBMICalculator from '@/assets/preview-bmi-calculator.jpg';
import thumbnailClipboard from '@/assets/preview-clipboard.jpg';

function ProjectsSection() {
  return (
    <section className="py-40" id="projects">
      <div className="container">
        <div className="">
          <h2 className="sr-only">Projects</h2>

          <ul className="flex w-full flex-col gap-y-24">
            <ProjectCard
              title="Body Mass Index Calculator website"
              description="A website developed taking as base the challenge of Frontend Mentor."
              tags={['react', 'framer-motion', 'tailwind-css']}
              thumbnail={thumbnailBMICalculator}
              href="/projects/bmi-calculator"
              onlineUrl="https://mateusbelicio.github.io/bmi-calculator/"
            />
            <ProjectCard
              title="Art Gallery Website"
              description="A website developed taking as base the challenge of Frontend Mentor."
              tags={['react', 'framer-motion', 'tailwind-css', 'react-router', 'react-hook-form']}
              thumbnail={thumbnailArtGallery}
              href="/projects/art-gallery-website"
              onlineUrl="https://mateusbelicio.github.io/art-gallery-website/"
              direction="reverse"
            />
            <ProjectCard
              title="Clipboard Landing Page"
              description="A website developed taking as base the challenge of Frontend Mentor."
              tags={['html', 'sass', 'javascript', 'css-animation']}
              thumbnail={thumbnailClipboard}
              href="/projects/clipboard-landing-page"
              onlineUrl="https://mateusbelicio.github.io/clipboard-landing-page/"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
