import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils/mergeClass';

import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { AspectRatio } from './ui/aspect-ratio';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

export const projectCardVariants = cva(
  'flex flex-col lg:flex-row flex gap-[1.875rem] text-center lg:text-left items-center lg:items-start',
  {
    variants: {
      direction: {
        normal: 'lg:flex-row group is-normal',
        reverse: 'lg:flex-row-reverse group is-reverse'
      }
    },
    defaultVariants: {
      direction: 'normal'
    }
  }
);

export interface ProjectCardProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof projectCardVariants> {
  thumbnail: string;
  description: string;
  tags: string[];
  onlineUrl: string;
  href: string;
  id: string;
  asChild?: boolean;
}

const ProjectCard = React.forwardRef<HTMLLIElement, ProjectCardProps>(
  (
    {
      className,
      direction,
      thumbnail,
      title,
      description,
      tags,
      onlineUrl,
      href,
      id,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'li';

    return (
      <Comp className={cn(projectCardVariants({ direction, className }))} ref={ref} {...props}>
        <div className="w-full min-w-[20rem] max-w-[540px] flex-shrink-0 space-y-4">
          <motion.div layoutId={`${id}-project-image`}>
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
              <img
                className="w-full object-cover"
                src={thumbnail}
                alt={`Thumbnail of ${title} project`}
              />
            </AspectRatio>
          </motion.div>
          <div className="flex flex-wrap gap-2 lg:group-[.is-normal]:justify-end">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-semibold leading-none">
                {tag}
              </Badge>
            ))}
          </div>
          <Separator className="lg:hidden" />
        </div>
        <div className="flex min-w-[30ch] flex-col items-center gap-8 lg:mt-4 lg:items-stretch lg:group-[.is-reverse]:text-right">
          <header className="flex flex-col items-center gap-2 lg:items-start lg:group-[.is-reverse]:items-end">
            <h3 className="max-w-[18ch] text-3xl font-bold leading-normal">{title}</h3>
            <p className="max-w-sm">{description}</p>
          </header>

          <div className="flex items-center gap-4 lg:group-[.is-reverse]:justify-end">
            <Button asChild>
              <Link to={`projects/${href}`}>More details</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={onlineUrl} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </Button>
          </div>
        </div>
      </Comp>
    );
  }
);
ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
