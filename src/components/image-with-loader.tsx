import Image, { ImageProps } from 'next/image';

import { shimmer, toBase64 } from '@/lib/utils';

type ImageWithLoaderProps = ImageProps & {
  placeholderWidth: number;
  placeholderHeight: number;
};

function ImageWithLoader({ placeholderWidth, placeholderHeight, ...props }: ImageWithLoaderProps) {
  return (
    <Image
      placeholder={`data:image/svg+xml;base64,${toBase64(
        shimmer(placeholderWidth, placeholderHeight)
      )}`}
      {...props}
    />
  );
}

export default ImageWithLoader;
