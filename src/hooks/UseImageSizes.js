import { useMemo } from 'react';

const useImageSizes = (images, fallbackWidth, fallbackHeight) => {
  const _images = useMemo(
    () =>
      images.map((img) => ({
        width: fallbackWidth,
        height: fallbackHeight,
        ...img,
      })),
    [images, fallbackWidth, fallbackHeight]
  );

  return _images;
};

export default useImageSizes;
