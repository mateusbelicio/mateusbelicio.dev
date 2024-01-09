import Link from 'next/link';

import ImageWithLoader from './image-with-loader';
import { buttonVariants } from './ui/button';

interface ProjectCardProps {
  title: string;
  description?: string;
  thumbnail: string;
  href: string;
  buttonLabel: string;
}

function ProjectCard({ title, description, href, thumbnail, buttonLabel }: ProjectCardProps) {
  return (
    <article className="main-grid group gap-y-8 sm:items-stretch">
      <div className="relative -ml-1 h-72 w-full overflow-clip rounded-lg border border-border bg-foreground/25 sm:start-1 sm:col-span-6 sm:row-start-1 sm:my-auto sm:h-80 sm:group-odd:col-start-7 lg:h-[31rem]">
        <ImageWithLoader
          src={thumbnail}
          sizes="(min-width: 640px) 50vw, 100vw"
          placeholderWidth={575}
          placeholderHeight={300}
          fill
          className="object-cover object-top"
          alt={`Thumbnail of the project ${title}`}
        />
      </div>
      <div className="flex flex-col items-start gap-6 border-y border-border py-6 sm:col-span-5 sm:col-start-8 sm:row-start-1 sm:pb-12 sm:pt-8 sm:group-odd:col-start-1 lg:col-span-4 lg:col-start-8 lg:justify-center lg:group-odd:col-start-2">
        <h2 className="heading-2 sm:mb-2">{title}</h2>
        <p>{description}</p>
        <Link href={href} className={buttonVariants()}>
          {buttonLabel}
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
