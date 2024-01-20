import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import AnimateWrapper from '@/components/features/animate-wrapper';

function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimateWrapper>
      <Header />
      {children}
      <Footer />
    </AnimateWrapper>
  );
}

export default Template;
