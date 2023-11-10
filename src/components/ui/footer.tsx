import { cn } from '@/lib/utils';

import { Icons } from '../icons';
import { buttonVariants } from './button';

function Footer() {
  return (
    <footer className="bg-secondary bg-noise-texture py-8 text-secondary-foreground">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <p className="flex items-center gap-4">
          <span>
            <Icons.copy width={16} height={16} />
          </span>
          <span>Mateus Belício {new Date().getFullYear()}</span>
        </p>
        <ul className="flex gap-4">
          <li>
            <SocialLink
              href="http://linkedin.com/in/mateusbelicio/"
              label="Link to Mateus Belício’s profile on Linkedin"
            >
              <Icons.linkedin />
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://github.com/mateusbelicio"
              label="Link to Mateus Belício’s profile on Github"
            >
              <Icons.github />
            </SocialLink>
          </li>
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
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'hover:bg-accent-foreground/20'
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}
