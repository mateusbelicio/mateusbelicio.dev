import Link from 'next/link';

import { mainConfig } from '@/config/main';
import { cn } from '@/lib/utils';

import { Icons } from '../features/icons';
import { buttonVariants } from './button';

function Footer() {
  return (
    <footer className="bg-secondary py-14 text-secondary-foreground selection:bg-background selection:text-foreground sm:py-6">
      <div className="main-container flex flex-col items-center gap-10 sm:flex-row sm:gap-12">
        <a
          href="#"
          className={buttonVariants({ variant: 'ghost', size: 'icon' })}
          aria-label="Go to top"
        >
          <Icons name="logo" width={32} height={32} />
        </a>

        <ul className="flex flex-col sm:flex-grow sm:flex-row">
          {mainConfig.mainNav.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className={cn(
                  buttonVariants({ variant: 'link', size: 'sm' }),
                  'w-full text-secondary-foreground md:px-5'
                )}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-2">
          {mainConfig.socialLinks.map((link) => (
            <li key={link.title}>
              <SocialLink href={link.href} label={link.title}>
                <Icons name={link.icon} size={24} strokeWidth={1.5} />
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
      className={cn(
        buttonVariants({ size: 'icon', variant: 'ghost' }),
        'hover:bg-secondary-foreground/10'
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to Mateus Belício’s profile on ${label}`}
    >
      {children}
    </a>
  );
}
