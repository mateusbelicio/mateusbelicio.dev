import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

interface HomeLayoutProps {
  children: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
