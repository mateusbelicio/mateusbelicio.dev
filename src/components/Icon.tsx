import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  path: string;
  color: string;
  width: number;
  height: number;
}

function Icon({ className, name, color, path, width, height, ...props }: IconProps) {
  return (
    <div className={cn(`text-${color}`, className)} {...props}>
      <svg width={width} height={height}>
        <use xlinkHref={`${path}#${name}`} />
      </svg>
    </div>
  );
}

export default Icon;
