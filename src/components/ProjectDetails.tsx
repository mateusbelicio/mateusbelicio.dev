import React, {
  HTMLAttributes,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const ProjectDetailsContext = createContext<any | null>(null);

interface ProjectDetailsProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function ProjectDetails({ children }: ProjectDetailsProps) {
  const [currentSectionInView, setCurrentSectionInView] = useState();

  return (
    <ProjectDetailsContext.Provider value={{ currentSectionInView, setCurrentSectionInView }}>
      <div className="container relative grid md:grid-cols-[minmax(10rem,15rem)_1fr] items-start gap-x-8 py-20">
        {children}
      </div>
    </ProjectDetailsContext.Provider>
  );
}

interface SectionProps {
  children: React.ReactNode;
  title: string;
  id: string;
}

function Section({ title, id, children }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-40% 0px -40% 0px' });
  const { currentSectionInView, setCurrentSectionInView } = useContext(ProjectDetailsContext);

  useEffect(() => {
    if (isInView) setCurrentSectionInView(id);
    if (!isInView && currentSectionInView === id) setCurrentSectionInView(null);
  }, [isInView]);

  return (
    <article ref={ref} className="space-y-2">
      <h2 className="text-lg font-bold capitalize text-primary">{title}</h2>
      {children}
    </article>
  );
}

interface NavigationProps {
  children: React.ReactNode;
}

function Navigation({ children }: NavigationProps) {
  return (
    <aside className="sticky top-32 hidden md:block">
      <ul className="flex flex-col gap-4">{children}</ul>
    </aside>
  );
}

interface NavigationLinkProps {
  id: string;
  href: string;
  children: React.ReactNode;
}

function NavigationLink({ children, id, href }: NavigationLinkProps) {
  const { currentSectionInView } = useContext(ProjectDetailsContext);

  return (
    <li
      className={cn(
        'capitalize text-foreground',
        currentSectionInView === id ? 'text-primary' : ''
      )}
    >
      <Link to={`#${href}`}>{children}</Link>
    </li>
  );
}

interface ContentProps {
  children: React.ReactNode;
  title: string;
}

function Content({ title, children }: ContentProps) {
  return (
    <div className="content space-y-10">
      <div className="">
        <h1 className="heading-1 max-w-[20ch]">{title}</h1>
      </div>

      {children}
    </div>
  );
}

ProjectDetails.Section = Section;
ProjectDetails.Navigation = Navigation;
ProjectDetails.NavigationLink = NavigationLink;
ProjectDetails.Content = Content;

export default ProjectDetails;
