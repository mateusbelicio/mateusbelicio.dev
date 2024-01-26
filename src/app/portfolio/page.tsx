import CallToActionSection from '@/components/sections/cta';
import OtherProjectsSection from '@/components/sections/other-projects';
import RecentProjectsSection from '@/components/sections/recent-projects';

export const metadata = {
  title: 'Portfolio',
  description: 'This page presents my most recent and relevant projects',
};

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
