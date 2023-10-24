import HeroSection from '@/components/Sections/hero';
import ProjectsSection from '@/components/Sections/projects';
import AboutSection from '@/components/Sections/about';
import ContactSection from '@/components/Sections/contact';

import { getDictionary } from './dictionaries';

interface HomeProps {
  params: { lang: 'en' | 'pt' };
}

async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection content={dict} />
      <ProjectsSection />
      <AboutSection content={dict.about} />
      <ContactSection content={dict.contact} />
    </>
  );
}

export default Home;
