import { useCallback, useMemo } from 'react';
import { mapProps, unwindProps, windProps } from 'dataweaver';
import Tiles from './Tiles';
import PictureTilesInner from './PictureTilesInner';
import { ImageLoader } from './ImageLoader/ImageLoader';
import useImageSizes from '../hooks/UseImageSizes';
import ClientOnly from './ClientOnly';

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
  overlayButton,
}) => {
  const _images = useImageSizes(images, columnWidth || maxColWidth, rowHeight);
  const numImages = useMemo(
    () => unwindProps({ images }).map((wound) => wound.images.length),
    [images]
  );
  console.log('🚀 ~ file: PictureTiles.jsx ~ line 31 ~ numImages', numImages);
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
        <ClientOnly>
          <PictureTilesInner onPhotoClick={onPhotoClick} images={images} />
        </ClientOnly>
      </Tiles>
    </ImageLoader>
  );
};
export default PictureTiles;
