import {
  AlertTriangle,
  ArrowLeft,
  Briefcase,
  Clock4Icon,
  Copyright,
  Github,
  Linkedin,
  Loader2,
  Menu,
  Moon,
  SunMedium,
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

export const Icons = {
  back: ArrowLeft,
  clock: Clock4Icon,
  close: X,
  copy: Copyright,
  github: Github,
  linkedin: Linkedin,
  loader: Loader2,
  logo: LogoIcon,
  menu: Menu,
  moon: Moon,
  spinner: Loader2,
  sun: SunMedium,
  user: User2,
  warning: AlertTriangle,
  work: Briefcase,
};
