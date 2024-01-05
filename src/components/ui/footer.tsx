import Link from 'next/link';

import { mainConfig } from '@/config/main';
import { cn } from '@/lib/utils';

import { Icons } from '../icons';
import { buttonVariants } from './button';

function Footer() {
  return (
    <footer className="bg-secondary bg-noise-texture bg-repeat-round py-14 text-secondary-foreground transition-colors duration-500 selection:bg-background selection:text-foreground sm:py-6">
      <div className="main-container flex flex-col items-center gap-10 sm:flex-row sm:gap-12">
        <div>
          <Icons.logo width={32} height={32} />
        </div>

        <ul className="flex flex-col sm:flex-grow sm:flex-row">
          {mainConfig.mainNav.map((link) => (
            <li key={link.title}>
              <Link href={link.href} className={cn(buttonVariants({ variant: 'link' }), 'w-full')}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-4">
          {mainConfig.socialLinks.map((link) => (
            <li key={link.title}>
              <SocialLink href={link.href} label={link.title}>
                <link.icon size={24} strokeWidth={1.5} />
              </SocialLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

/**
|--------------------------------------------------
| SOCIAL LINK
|--------------------------------------------------
*/
interface SocialLinkProps {
  children: React.ReactNode;
  label: string;
  href: string;
}

function SocialLink({ children, label, href }: SocialLinkProps) {
  return (
    <a
      className="inline-flex rounded-sm text-secondary-foreground outline-none transition-colors hover:text-secondary-foreground/50 focus-visible:text-secondary-foreground/50 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-secondary-foreground/50"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to Mateus Belício’s profile on ${label}`}
    >
      {children}
    </a>
  );
}
