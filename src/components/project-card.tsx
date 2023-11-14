import Image, { ImageProps } from 'next/image';
import { Slot } from '@radix-ui/react-slot';

import { AspectRatio } from './ui/aspect-ratio';

interface ProjectCardProps {
  children: React.ReactNode;
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  thumbnail?: string;
  href: string;
  onlineUrl?: string;
  direction: 'normal' | 'reverse';
}

function ProjectCard({ children }: ProjectCardProps) {
  return <article className="flex justify-center gap-10">{children}</article>;
}

ProjectCard.Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-3">{children}</div>;
};

ProjectCard.Title = ({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) => {
  const Comp = asChild ? Slot : 'h2';

  return <Comp className="text-2xl font-bold">{children}</Comp>;
};

ProjectCard.Description = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base text-neutral-600">{children}</p>
);

ProjectCard.Image = (props: ImageProps) => {
  return (
    <AspectRatio ratio={16 / 9} className="max-h-80 bg-muted">
      <Image fill {...props} />
    </AspectRatio>
  );
};

export default ProjectCard;
