import {
  AlertTriangle,
  ArrowLeft,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Clock4Icon,
  Copyright,
  ExternalLink,
  Github,
  Linkedin,
  Loader2,
  Menu,
  User2,
  X,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const LogoIcon = ({ ...props }: LucideProps) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 512 512"
      className="group transition-colors duration-500"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-icon="mb-logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="512" height="512" rx="32" className="fill-logo group-hover:fill-logo/80" />
      <path
        d="M420.6 114V396H342.2V240.4L289 396H223.4L169.8 239.2V396H91.4V114H186.2L257 297.2L326.2 114H420.6Z"
        className="fill-logo-foreground"
      />
    </svg>
  );
};

const DownArrowsIcon = ({ ...props }: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" {...props}>
    <g fill="none" fillRule="evenodd" stroke="currentColor">
      <path d="M0 9l8 4 8-4" />
      <path opacity=".5" d="M0 5l8 4 8-4" />
      <path opacity=".25" d="M0 1l8 4 8-4" />
    </g>
  </svg>
);

const IconsDefinitions = {
  back: ArrowLeft,
  clock: Clock4Icon,
  close: X,
  copy: Copyright,
  downArrows: DownArrowsIcon,
  externalLink: ExternalLink,
  github: Github,
  linkedin: Linkedin,
  loader: Loader2,
  logo: LogoIcon,
  menu: Menu,
  next: ChevronRight,
  previus: ChevronLeft,
  spinner: Loader2,
  user: User2,
  warning: AlertTriangle,
  work: Briefcase,
};

export type IconsName = keyof typeof IconsDefinitions;

export type IconsProps = React.HTMLAttributes<SVGSVGElement> &
  LucideProps & {
    name: IconsName;
  };

export const Icons = ({ name, ...props }: IconsProps) => {
  const Icon = IconsDefinitions[name];
  return <Icon {...props} aria-hidden={true} />;
};
