import { useMemo } from 'react';
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
      images.map((img) => ({
        width: maxColWidth || columnWidth,
        height: rowHeight,
        ...img,
      }))[(images, columnWidth, maxColWidth, rowHeight)]
  );

  return (
    <ImageLoader numImages={images && images.length ? images.length : 0}>
      <Tiles
        columns={columns}
        columnWidth={columnWidth}
        gridHeight={gridHeight}
        gridWidth={gridWidth}
        images={_images}
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
