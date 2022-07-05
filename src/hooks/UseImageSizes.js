import { mapProps, unwindProps, windProps, parseAndCalc } from 'dataweaver';
import { useMemo } from 'react';

const useImageSizes = (images, fallbackWidth, fallbackHeight) => {
  const _images = useMemo(
    () =>
      mapProps(
        ({ images: imgs, width, height }) => ({
          images: imgs.map((img) => ({
            width: parseAndCalc(
              [width, img.colSpan],
              ([_width, cSpan]) => _width * cSpan
            ),
            height: parseAndCalc(
              [height, img.rowSpan],
              ([_height, rSpan]) => _height * rSpan
            ),
            ...img, // overwrite with provided width and height values
          })),
        }),
        unwindProps({
          images,
          width: fallbackWidth,
          height: fallbackHeight,
        })
      ),
    [images, fallbackWidth, fallbackHeight]
  );

  const unwindImages = unwindProps({
    images,
    width: fallbackWidth,
    height: fallbackHeight,
  });
  console.log(
    '🚀 ~ file: UseImageSizes.js ~ line 34 ~ useImageSizes ~ unwindImages',
    unwindImages
  );
  console.log(
    '🚀 ~ file: UseImageSizes.js ~ line 28 ~ useImageSizes ~ _images',
    _images
  );
  const woundImages = windProps(_images);
  console.log(
    '🚀 ~ file: UseImageSizes.js ~ line 30 ~ useImageSizes ~ woundImages',
    woundImages
  );

  return windProps(_images);
};

export default useImageSizes;
