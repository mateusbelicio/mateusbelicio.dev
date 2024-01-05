import { LucideIcon } from 'lucide-react';

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

export type SocialLink = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export type MainConfig = {
  mainNav: NavigationItem[];
  socialLinks: SocialLink[];
};
