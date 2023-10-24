import React from 'react';
import { Copyright, Github, Linkedin } from 'lucide-react';

import { Button } from '../ui/button';

function Footer() {
  return (
    <footer className="bg-secondary bg-noise-texture py-12 text-secondary-foreground">
      <div className="container flex items-center justify-between">
        <p className="flex items-center gap-4">
          <span>
            <Copyright width={16} height={16} />
          </span>
          <span>Mateus Belício {new Date().getFullYear()}</span>
        </p>
        <ul className="flex gap-4 p-2.5">
          <SocialLink
            name="LinkedIn"
            href="https://www.linkedin.com/in/mateusbelicio/"
            icon={<Linkedin />}
          />
          <SocialLink name="Github" href="https://github.com/mateusbelicio" icon={<Github />} />
        </ul>
      </div>
    </footer>
  );
}

type SocialLinkProps = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

function SocialLink({ icon, href, name }: SocialLinkProps) {
  return (
    <li>
      <Button variant="ghost" size="icon" asChild className="hover:bg-accent-foreground/20">
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${name}`}>
          {icon}
        </a>
      </Button>
    </li>
  );
}

export default Footer;
