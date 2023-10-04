import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { AspectRatio } from './ui/aspect-ratio';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

export const projectCardVariants = cva('flex flex-wrap gap-[1.875rem] items-start', {
  variants: {
    direction: {
      normal: 'flex-row group is-normal',
      reverse: 'flex-row-reverse group is-reverse'
    }
  },
  defaultVariants: {
    direction: 'normal'
  }
});

export interface ProjectCardProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof projectCardVariants> {
  thumbnail: string;
  description: string;
  tags: string[];
  onlineUrl: string;
  href: string;
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
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'li';

    return (
      <Comp className={cn(projectCardVariants({ direction, className }))} ref={ref} {...props}>
        <div className="w-full min-w-[20rem] max-w-[540px] space-y-4">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
            <img
              className="w-full object-cover"
              src={thumbnail}
              alt={`Thumbnail of ${title} project`}
            />
          </AspectRatio>
          <div className="flex flex-wrap gap-2 group-[.is-normal]:justify-end">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-semibold leading-none">
                {tag}
              </Badge>
            ))}
          </div>
          <Separator className="md:hidden" />
        </div>
        <div className="mt-4 flex min-w-[30ch] max-w-md flex-col gap-8 group-[.is-reverse]:text-right">
          <header className="flex flex-col items-start gap-2 group-[.is-reverse]:items-end">
            <h3 className="max-w-[18ch] text-3xl font-bold leading-normal">{title}</h3>
            <p className="max-w-prose">{description}</p>
          </header>

          <div className="flex items-center gap-4 group-[.is-reverse]:justify-end">
            <Button asChild>
              <Link to={href}>About</Link>
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
