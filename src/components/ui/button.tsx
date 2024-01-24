import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { Icons, IconsName } from '../features/icons';

const buttonVariants = cva(
  'group/btn inline-flex items-center gap-9 justify-center whitespace-nowrap rounded-sm text-xs  ring-offset-background tracking-[0.167em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-transparent text-foreground [&:not(:disabled)]:hover:bg-foreground disabled:bg-muted [&:not(:disabled)]:hover:text-background border border-foreground focus-visible:bg-foreground focus-visible:text-background disabled:text-muted disabled:border-muted',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-secondary hover:text-secondary-foreground',
        secondary:
          'bg-secondary text-secondary-foreground [&:not(:disabled)]:hover:bg-accent [&:not(:disabled)]:hover:text-accent-foreground disabled:bg-muted focus-visible:bg-accent focus-visible:text-accent-foreground',
        ghost: 'hover:text-secondary-foreground hover:bg-secondary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-9',
        sm: 'h-10 px-4',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

type ButtonIconProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
  name: IconsName;
  asChild?: boolean;
};

const ButtonIcon = ({ className, asChild, name, ...props }: ButtonIconProps) => (
  <span
    className={cn(
      '-ml-9 flex aspect-square h-full w-12 items-center justify-center self-stretch bg-black/10 group-hover/btn:text-inherit group-focus-visible/btn:text-inherit [&>svg]:w-4',
      className
    )}
    {...props}
  >
    <Icons className="animate-bounce" name={name} />
  </span>
);

export { Button, ButtonIcon, buttonVariants };
