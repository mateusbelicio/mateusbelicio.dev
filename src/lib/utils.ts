import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function shimmer(w: number, h: number) {
  return `
  <svg
    width="${w}"
    height="${h}"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <linearGradient id="g">
        <stop stop-color="#12121220" offset="20%" />
        <stop stop-color="#12121210" offset="50%" />
        <stop stop-color="#12121220" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#12121220" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate
      xlink:href="#r"
      attributeName="x"
      from="-${w}"
      to="${w}"
      dur="1s"
      repeatCount="indefinite"
    />
  </svg>  
  `;
}

export function toBase64(str: string) {
  return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
}
