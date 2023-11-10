import { Icons } from '@/components/icons';

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    github: string;
  };
};

export type NavigationItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainConfig = {
  mainNav: NavigationItem[];
};
