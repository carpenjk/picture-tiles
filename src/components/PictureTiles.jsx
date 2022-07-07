import { useCallback, useContext, useMemo } from 'react';
import { mapProps, unwindProps, windProps } from 'dataweaver';
import { ThemeContext } from 'styled-components';
import { useBreakpoints } from 'themeweaver/lib/UseBreakpoints';
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
  const theme = useContext(ThemeContext);
  const br = useBreakpoints(theme);

  const numImages = useMemo(() => {
    const test = unwindProps({ images }).map((wound) => wound.images.length);
    console.log('🚀 ~ file: PictureTiles.jsx ~ line 34 ~ test', test);
    return test;
  }, [images]);
  const currBrIndex = !numImages
    ? undefined
    : br.indexOfLower || numImages.length - 1;
  console.log(
    '🚀 ~ file: PictureTiles.jsx ~ line 36 ~ currBrIndex',
    currBrIndex
  );
  return (
    <ImageLoader numImages={numImages[currBrIndex]}>
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
