import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface SpriteProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  src: string;
  color?: string;
  width?: number;
  height?: number;
}

function Sprite({ className, name, color, src, width, height, ...props }: SpriteProps) {
  return (
    <div className={cn(`text-${color}`, className)} {...props}>
      <svg width={width} height={height} aria-hidden="true" focusable="false">
        <use xlinkHref={`${src}#${name}`} />
      </svg>
    </div>
  );
}

export default Sprite;
