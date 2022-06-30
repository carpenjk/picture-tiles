import { mapProps, unwindProps, windProps, parseAndCalc } from 'dataweaver';
import { useMemo } from 'react';

const useImageSizes = (images, fallbackWidth, fallbackHeight) => {
  const _images = useMemo(
    () =>
      // function _calc(parsedVars, fn) {
      //   const varValues = parsedVars.map((v) => v && v.value);
      //   const u = parsedVars.find(({ unit }) => unit).unit;
      //   return `${fn(varValues)}${u}`;
      // }
      // function parseAndCalc(vars, fn) {
      //   // const parsedVars = vars.map((v) => parseSizeUnits(v));
      //   return _calc(parseSizeUnits(vars), fn);
      // }

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
