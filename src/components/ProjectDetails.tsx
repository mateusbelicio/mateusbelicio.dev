import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from './ui/navigation-menu';
import { cn } from '@/lib/utils/mergeClass';

const ProjectDetailsContext = createContext<any | null>(null);

interface ProjectDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function ProjectDetails({ children }: ProjectDetailsProps) {
  const [currentSectionInView, setCurrentSectionInView] = useState();

  return (
    <ProjectDetailsContext.Provider value={{ currentSectionInView, setCurrentSectionInView }}>
      <div className="container relative grid items-start gap-x-8 py-20 md:grid-cols-[minmax(10rem,15rem)_1fr]">
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
  const isInView = useInView(ref, { margin: '-45% 0px -45% 0px' });
  const { currentSectionInView, setCurrentSectionInView } = useContext(ProjectDetailsContext);

  useEffect(() => {
    if (isInView) setCurrentSectionInView(id);
    if (!isInView && currentSectionInView === id) setCurrentSectionInView(null);
  }, [isInView]);

  return (
    <article ref={ref} className="scroll-mt-24 space-y-2" id={id}>
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
      <NavigationMenu orientation="vertical" aria-label="side-navigation">
        <NavigationMenuList className="flex flex-col items-start gap-4 space-x-0">
          {children}
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
}

interface NavigationLinkProps {
  id: string;
  children: React.ReactNode;
}

function NavigationLink({ children, id }: NavigationLinkProps) {
  const { currentSectionInView } = useContext(ProjectDetailsContext);

  return (
    <NavigationMenuItem
      className={cn(
        'capitalize text-muted-foreground hover:text-foreground',
        currentSectionInView === id ? 'text-primary hover:text-primary' : ''
      )}
    >
      <NavigationMenuLink asChild>
        <Link
          to={`#${id}`}
          className={cn(
            'focus-visible:text-foreground focus-visible:underline focus-visible:outline-none',
            currentSectionInView === id ? 'focus-visible:text-primary' : ''
          )}
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

interface ContentProps {
  children: React.ReactNode;
  title: string;
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ title, children }: ContentProps, ref) => {
    return (
      <div ref={ref} id="" className="content space-y-10">
        <div className="">
          <h1 className="heading-1 max-w-[20ch]">{title}</h1>
        </div>

        {children}
      </div>
    );
  }
);

ProjectDetails.Section = Section;
ProjectDetails.Navigation = Navigation;
ProjectDetails.NavigationLink = NavigationLink;
ProjectDetails.Content = Content;

export default ProjectDetails;
