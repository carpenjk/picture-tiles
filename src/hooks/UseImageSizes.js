import { unwindProps, windProps, parseAndCalc } from '@carpenjk/prop-x';
import { useMemo } from 'react';

const useImageSizes = (images, fallbackWidth, fallbackHeight) => {
  const _images = useMemo(
    () =>
      unwindProps({
        images,
        width: fallbackWidth,
        height: fallbackHeight,
      }).map(({ images: imgs, width, height }) => ({
        images: imgs.map((img) => ({
          width: parseAndCalc(
            [width, img.colSpan],
            ([_width, cSpan]) => _width * cSpan
          ),
          height: parseAndCalc([height, img.rowSpan], ([_height, rSpan]) =>
            _height && rSpan ? _height * rSpan : undefined
          ),
          ...img, // overwrite with provided width and height values
        })),
      })),
    [images, fallbackWidth, fallbackHeight]
  );
  return windProps(_images).images;
};

export default useImageSizes;
