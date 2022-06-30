import { useMemo } from 'react';
import { unwindProps, windProps, mapProps, parseSizeUnits } from 'dataweaver';
import Tiles from './Tiles';
import PictureTilesInner from './PictureTilesInner';
import { ImageLoader } from './ImageLoader/ImageLoader';

const DEFAULT_OPTIONS = {
  imgProps: {
    large: {
      width: 800,
      height: 533,
      fit: 'fill',
    },
    small: {
      width: 500,
      height: 333,
      fit: 'fill',
    },
  },
  numDisplayedMap: [1, 1, 3, 3, 5],
};

const PictureTiles = ({
  columns,
  columnWidth,
  gridHeight,
  gridWidth,
  maxGridWidth,
  maxColWidth,
  minColWidth,
  rows,
  rowHeight,
  rowWidth,
  images,
  onOverlayClick,
  onPhotoClick,
  options,
  overlayButton,
}) => {
  console.log('🚀 ~ file: PictureTiles.jsx ~ line 36 ~ images', images);
  const _images = useMemo(() => {
    function _calc(parsedVars, fn) {
      console.log(
        '🚀 ~ file: PictureTiles.jsx ~ line 43 ~ _calc ~ parsedVars',
        parsedVars
      );
      const varValues = parsedVars.map((v) => v.value);
      console.log(
        '🚀 ~ file: PictureTiles.jsx ~ line 44 ~ _calc ~ varValues',
        varValues
      );
      const u = parsedVars.find(({ unit }) => unit).unit;
      return `${fn(varValues)}${u}`;
    }
    function parseAndCalc(vars, fn) {
      const parsedVars = vars.map((v) => parseSizeUnits(v));
      return _calc(parsedVars, fn);
    }

    return mapProps(
      ({
        images: unwoundImages,
        columnWidth: cWidth,
        maxColWidth: maxCWidth,
        rowHeight: rHeight,
      }) =>
        unwoundImages.map((img) => ({
          width: parseAndCalc(
            [maxCWidth, cWidth, img.colSpan],
            ([_maxCWidth, _cWidth, cSpan]) =>
              maxCWidth ? _maxCWidth * cSpan : _cWidth * cSpan
          ),
          height: rHeight * img.rowSpan,
          ...img,
        })),
      unwindProps({ images: [images], columnWidth, maxColWidth, rowHeight })
    );
  }, [images, columnWidth, maxColWidth, rowHeight]);
  console.log('🚀 ~ file: PictureTiles.jsx ~ line 48 ~ _images', _images);

  return (
    <ImageLoader numImages={images && images.length ? images.length : 0}>
      <Tiles
        columns={columns}
        columnWidth={columnWidth}
        gridHeight={gridHeight}
        gridWidth={gridWidth}
        images={windProps(_images)}
        maxColWidth={maxColWidth}
        maxGridWidth={maxGridWidth}
        minColWidth={minColWidth}
        rows={rows}
        rowHeight={rowHeight}
        rowWidth={rowWidth}
        onOverlayClick={onOverlayClick}
        overlayButton={overlayButton}
      >
        <PictureTilesInner onPhotoClick={onPhotoClick} images={images} />
      </Tiles>
    </ImageLoader>
  );
};
export default PictureTiles;
