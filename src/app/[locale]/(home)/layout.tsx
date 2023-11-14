import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

interface HomeLayoutProps {
  children: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Header />
      <main className="relative flex-1">{children}</main>
      <Footer />
    </>
  );
}

export default HomeLayout;
