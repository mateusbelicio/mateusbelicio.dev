import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from './ui/navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

import { useScrollToAnchor } from '@/hooks/useScrollToAnchor';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { cn } from '@/lib/utils';

function Navigation() {
  const matches = useMediaQuery('(min-width: 768px)');
  useScrollToAnchor();

  return (
    <NavigationMenu>
      {matches ? (
        <NavigationMenuList className="text-base font-medium leading-none text-accent-foreground/70">
          <ListItem to="/">Home</ListItem>
          <ListItem to="/#projects">Projects</ListItem>
          <ListItem to="/#about">About</ListItem>
          <ListItem to="/#contact">Contact</ListItem>
        </NavigationMenuList>
      ) : (
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="menu navigation"
              className="block h-full select-none space-x-1 rounded-sm px-3 py-2
              leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent-foreground md:px-5 md:py-3"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent className="pt-16">
            <NavigationMenuList className="flex-col items-stretch space-x-0 text-base font-medium leading-none text-accent-foreground/70">
              <SheetClose asChild>
                <ListItem to="/">Home</ListItem>
              </SheetClose>
              <SheetClose asChild>
                <ListItem to="/#projects">Projects</ListItem>
              </SheetClose>
              <SheetClose asChild>
                <ListItem to="/#about">About</ListItem>
              </SheetClose>
              <SheetClose asChild>
                <ListItem to="/#contact">Contact</ListItem>
              </SheetClose>
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
        <Link
          ref={ref}
          className={cn(
            'block h-full select-none space-x-1 rounded-sm px-5 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent-foreground',
            className
          )}
          {...props}
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
});
ListItem.displayName = 'ListItem';

export default Navigation;
