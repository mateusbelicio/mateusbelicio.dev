import { MainConfig } from '@/types';

import { Icons } from '@/components/icons';

export const mainConfig: MainConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
    },
    {
      title: 'Contact Me',
      href: '/contact',
    },
  ],
  socialLinks: [
    {
      title: 'Linkedin',
      href: 'http://linkedin.com/in/mateusbelicio/',
      icon: Icons.linkedin,
    },
    {
      title: 'Github',
      href: 'https://github.com/mateusbelicio',
      icon: Icons.github,
    },
  ],
};
