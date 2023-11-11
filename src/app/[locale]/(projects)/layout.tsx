import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center">{children}</main>
      <Footer />
    </>
  );
}

export default ProjectLayout;
