'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { NavigationItem } from '@/types';

import { cn } from '@/lib/utils';

import { Button, buttonVariants } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import { Icons } from './icons';

interface MobileNavigationProps {
  items?: NavigationItem[];
  children?: React.ReactNode;
}

function MobileNavigation({ items, children }: MobileNavigationProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 sm:hidden md:gap-10">
      <Sheet>
        <SheetTrigger asChild className="ml-auto flex md:hidden">
          <Button size="icon" variant="ghost">
            <Icons name="menu" />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col gap-10 pt-20 min-[420px]:max-w-sm">
          {items?.length ? (
            <>
              <NavigationMenu orientation="vertical" className="block w-full max-w-none flex-none">
                <NavigationMenuList className="flex w-full flex-none flex-col items-stretch justify-start gap-4 space-x-0">
                  {items.map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <SheetClose asChild>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.disabled ? '#' : item.href}
                            scroll={false}
                            className={cn(
                              buttonVariants({
                                variant: 'link',
                                size: 'sm',
                                className: 'w-full justify-center',
                              }),
                              item.href.startsWith(`/${segment}`)
                                ? 'text-accent hover:text-accent'
                                : 'text-foreground/60',
                              item.href === '/' && !segment ? 'text-accent hover:text-accent' : '',
                              item.disabled && 'cursor-not-allowed opacity-80'
                            )}
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </SheetClose>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavigation;
