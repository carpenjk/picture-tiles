import { useContext, useMemo } from 'react';
import { unwindProps, getIndexedPropValue } from '@carpenjk/prop-x';
import { ThemeContext } from 'styled-components';
import { useBreakpoints } from '@carpenjk/prop-x/useBreakpoints';
import { ImageLoader } from './imageLoader/ImageLoader';
import Tiles from './Tiles';
import PictureTilesInner from './PictureTilesInner';
import useImageSizes from '../hooks/UseImageSizes';
import ClientOnly from './ClientOnly';

const PictureTiles = ({
  columns,
  columnWidth,
  gridHeight,
  gridWidth,
  imageFit,
  maxGridWidth,
  maxColWidth,
  minColWidth,
  rows,
  rowHeight,
  images,
  onOverlayClick,
  onPhotoClick,
  overlayButton,
}) => {
  const _images = useImageSizes(images, columnWidth || maxColWidth, rowHeight);
  const theme = useContext(ThemeContext);
  const br = useBreakpoints(theme);

  const numImages = useMemo(() => {
    const valAry = unwindProps({ images }).map((wound) => wound.images.length);
    const indexedPropValue = getIndexedPropValue(valAry, br.indexOfLower);
    return indexedPropValue;
  }, [images, br.indexOfLower]);

  return (
    <ImageLoader numImages={numImages}>
      <Tiles
        columns={columns}
        columnWidth={columnWidth}
        gridHeight={gridHeight}
        gridWidth={gridWidth}
        images={_images}
        imageFit={imageFit}
        maxColWidth={maxColWidth}
        maxGridWidth={maxGridWidth}
        minColWidth={minColWidth}
        rows={rows}
        rowHeight={rowHeight}
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
