import { useMemo } from 'react';
import { flattenProps, unflattenProps, mapFlatProp } from 'dataweaver';
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
  const _images = useMemo(
    () =>
      mapFlatProp(
        ({
          images: flatImages,
          columnWidth: cWidth,
          maxColWidth: maxCWidth,
          rowHeight: rHeight,
        }) =>
          flatImages.map((img) => ({
            width: (maxCWidth || cWidth) * img.colSpan,
            height: rHeight * img.rowSpan,
            ...img,
          })),
        flattenProps({ images, columnWidth, maxColWidth, rowHeight })
      )[(images, columnWidth, maxColWidth, rowHeight)]
  );
  console.log('🚀 ~ file: PictureTiles.jsx ~ line 48 ~ _images', _images);

  return (
    <ImageLoader numImages={images && images.length ? images.length : 0}>
      <Tiles
        columns={columns}
        columnWidth={columnWidth}
        gridHeight={gridHeight}
        gridWidth={gridWidth}
        images={unflattenProps(_images)}
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
