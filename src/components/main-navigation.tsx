'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { NavigationItem } from '@/types';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import MobileNavigation from './mobile-navigation';
import { buttonVariants } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';

interface MainNavigationProps {
  items?: NavigationItem[];
  children?: React.ReactNode;
}

function MainNavigation({ items, children }: MainNavigationProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex grow items-center gap-6 md:gap-10">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'flex h-auto w-auto items-center rounded-sm'
        )}
      >
        <Icons.logo width={32} height={32} />
      </Link>
      {items?.length ? (
        <NavigationMenu>
          <NavigationMenuList className="hidden justify-start gap-2 md:flex">
            {items.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.disabled ? '#' : item.href}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'sm' }),
                      item.href.startsWith(`/${segment}`)
                        ? 'text-foreground'
                        : 'text-foreground/60',
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
      <MobileNavigation items={items} />
    </div>
  );
}

export default MainNavigation;
