'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { NavigationItem } from '@/types';

import { cn } from '@/lib/utils';

import { buttonVariants } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { Icons } from './icons';
import MobileNavigation from './mobile-navigation';
import { ThemeSwitcher } from './theme-switcher';

interface MainNavigationProps {
  items?: NavigationItem[];
}

function MainNavigation({ items }: MainNavigationProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex grow items-center gap-2 sm:gap-6 md:gap-10">
      <Link
        href="/"
        scroll={false}
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'mr-auto flex h-10 w-10 items-center rounded-sm'
        )}
        aria-label="Go to home page"
      >
        <Icons name="logo" width={32} height={32} />
      </Link>
      {items?.length ? (
        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList className="justify-start gap-2">
            {items.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.disabled ? '#' : item.href}
                    scroll={false}
                    className={cn(
                      buttonVariants({ variant: 'link', size: 'sm' }),
                      item.href.startsWith(`/${segment}`) ? 'text-accent' : 'text-foreground/90',
                      item.href === '/' && !segment ? 'text-accent' : '',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      ) : null}
      <ThemeSwitcher />
      <MobileNavigation items={items} />
    </div>
  );
}

export default MainNavigation;
