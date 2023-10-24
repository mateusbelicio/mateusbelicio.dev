'use client';

import React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '../ui/navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { menuItems } from '@/data/constants';

import { Button } from '../ui/button';

function Navigation() {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <NavigationMenu>
      {matches ? (
        <NavigationMenuList className="text-base font-medium leading-none">
          {menuItems.map((item) => (
            <ListItem key={item.name} href={item.path}>
              {item.name}
            </ListItem>
          ))}
        </NavigationMenuList>
      ) : (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="navLink" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="pt-16">
            <NavigationMenuList className="flex-col items-stretch gap-4 space-x-0 text-base font-medium leading-none">
              {menuItems.map((item) => (
                <SheetClose key={item.name} asChild>
                  <ListItem href={item.path}>{item.name}</ListItem>
                </SheetClose>
              ))}
            </NavigationMenuList>
          </SheetContent>
        </Sheet>
      )}
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Button asChild variant="navLink">
          <Link ref={ref} {...props}>
            {children}
          </Link>
        </Button>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
});
ListItem.displayName = 'ListItem';

export default Navigation;
