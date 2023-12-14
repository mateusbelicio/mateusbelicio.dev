import { Locale } from '@/config/i18n.config';
import AboutSection from '@/components/sections/about';
import CallToActionSection from '@/components/sections/cta';
import HeroSection from '@/components/sections/hero';

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <>
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <CallToActionSection locale={locale} />
    </>
  );
}
