import Link from 'next/link';

import { Icons } from './icons';
import ImageWithLoader from './image-with-loader';

interface ProjectCardProps {
  title: string;
  description?: string;
  thumbnail: string;
  href: string;
}

function ProjectCard({ title, description, href, thumbnail }: ProjectCardProps) {
  return (
    <article className="flex items-center gap-8 py-8 sm:pb-12 sm:pt-8 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-border">
      <ImageWithLoader
        alt={`Thumbnail of the project ${title}`}
        className="hidden h-36 w-64 shrink-0 sm:block"
        fill
        imageClassname="object-top"
        sizes="(min-width: 640px) 12rem"
        src={thumbnail}
      />
      <div className="flex grow flex-col items-start gap-4">
        <h3 className="heading-4 w-full text-sm hover:text-accent sm:mb-2">
          <Link
            href={href}
            className="flex justify-between gap-4 focus-visible:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="text-ellipsi line-clamp-1 overflow-hidden">{title}</span>
            <Icons name="next" className="shrink-0" />
          </Link>
        </h3>
        <p className="line-clamp-2 max-w-prose overflow-hidden text-ellipsis">{description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
