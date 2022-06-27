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
  minColWidth,
  rowHeight,
  rowWidth,
  images,
  onOverlayClick,
  onPhotoClick,
  options,
  overlayButton,
}) => (
  // mapping determines how many images to display based on provided number of images
  // const { numDisplayedMap, gridHeight } = _options;

  <ImageLoader numImages={images.length || 0}>
    <Tiles
      columns={columns}
      columnWidth={columnWidth}
      gridHeight={gridHeight}
      gridWidth={gridWidth}
      images={images}
      maxGridWidth={maxGridWidth}
      minColWidth={minColWidth}
      rowHeight={rowHeight}
      rowWidth={rowWidth}
      onOverlayClick={onOverlayClick}
      overlayButton={overlayButton}
    >
      <PictureTilesInner onPhotoClick={onPhotoClick} images={images} />
    </Tiles>
  </ImageLoader>
);
export default PictureTiles;
