import { mapProps, unwindProps, windProps, parseAndCalc } from 'dataweaver';
import { useMemo } from 'react';

const useImageSizes = (images, fallbackWidth, fallbackHeight) => {
  const _images = useMemo(
    () =>
      mapProps(
        ({ images: imgs, fallbackWidth: width, fallbackHeight: height }) =>
          imgs.map((img) => ({
            width: parseAndCalc(
              [width, img.colSpan],
              ([_width, cSpan]) => _width * cSpan
            ),
            height: parseAndCalc(
              [height, img.rowSpan],
              ([_height, rSpan]) => _height * rSpan
            ),
            ...img,
          })),
        unwindProps({ images: [images], fallbackWidth, fallbackHeight })
      ),
    [images, fallbackWidth, fallbackHeight]
  );

  return windProps(_images);
};

export default useImageSizes;
