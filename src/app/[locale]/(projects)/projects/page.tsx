import { Locale } from '@/config/i18n.config';
import CallToActionSection from '@/components/sections/cta';
import ProjectsSection from '@/components/sections/projects';

function Portfolio({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <>
      <ProjectsSection locale={locale} />
      <CallToActionSection locale={locale} />
    </>
  );
}

export default Portfolio;
