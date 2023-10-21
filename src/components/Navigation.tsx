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

import { useScrollToAnchor } from '@/lib/hooks/useScrollToAnchor';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { useAppSelector } from '@/lib/hooks/useAppRedux';

import { Button } from './ui/button';

function Navigation() {
  const { navbar } = useAppSelector((state) => state.content);
  const matches = useMediaQuery('(min-width: 768px)');
  useScrollToAnchor();

  return (
    <NavigationMenu>
      {matches ? (
        <NavigationMenuList className="text-base font-medium leading-none">
          <ListItem to="/">{navbar.home}</ListItem>
          <ListItem to="/#projects">{navbar.projects}</ListItem>
          <ListItem to="/#about">{navbar.about}</ListItem>
          <ListItem to="/#contact">{navbar.contact}</ListItem>
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
              <SheetClose asChild>
                <ListItem to="/">{navbar.home}</ListItem>
              </SheetClose>
              <SheetClose asChild>
                <ListItem to="/#projects">{navbar.projects}</ListItem>
              </SheetClose>
              <SheetClose asChild>
                <ListItem to="/#about">{navbar.about}</ListItem>
              </SheetClose>
              <SheetClose asChild>
                <ListItem to="/#contact">{navbar.contact}</ListItem>
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
