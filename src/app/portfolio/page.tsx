import CallToActionSection from '@/components/sections/cta';
import OtherProjectsSection from '@/components/sections/other-projects';
import RecentProjectsSection from '@/components/sections/recent-projects';

function Portfolio() {
  return (
    <>
      <RecentProjectsSection />
      <OtherProjectsSection />
      <CallToActionSection />
    </>
  );
}

export default Portfolio;
