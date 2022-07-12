import { useCallback, useContext, useMemo } from 'react';
import { mapProps, unwindProps, windProps } from 'dataweaver';
import { ThemeContext } from 'styled-components';
import { useBreakpoints } from 'themeweaver/lib/UseBreakpoints';
import Tiles from './Tiles';
import PictureTilesInner from './PictureTilesInner';
import { ImageLoader } from './ImageLoader/ImageLoader';
import useImageSizes from '../hooks/UseImageSizes';
import ClientOnly from './ClientOnly';

function getPropIndex(prop, br) {
  if (!prop) return undefined;
  if (!Array.isArray(prop)) return prop;
  return prop[br] || prop.length - 1;
}
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
    return test;
  }, [images]);
  const currBrIndex = getPropIndex(numImages, br.indexOfLower);

  return (
    <ImageLoader numImages={currBrIndex}>
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
          <PictureTilesInner onPhotoClick={onPhotoClick} images={_images} />
        </ClientOnly>
      </Tiles>
    </ImageLoader>
  );
};
export default PictureTiles;
