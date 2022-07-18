import { useContext, useMemo } from 'react';
import { unwindProps, getIndexedPropValue, windProps } from 'dataweaver';
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
  console.log('🚀 ~ file: PictureTiles.jsx ~ line 27 ~ images', images);
  const _images = useImageSizes(images, columnWidth || maxColWidth, rowHeight);
  const theme = useContext(ThemeContext);
  const br = useBreakpoints(theme);

  const numImages = useMemo(() => {
    // const valAry = unwindProps({ images }).map((wound) => wound.images.length);
    const valAry = unwindProps({ images }).map((wound) => wound.images.length);
    console.log(
      '🚀 ~ file: PictureTiles.jsx ~ line 34 ~ numImages ~ valAry',
      valAry
    );
    const indexedPropValue = getIndexedPropValue(valAry, br.indexOfLower);
    console.log(
      '🚀 ~ file: PictureTiles.jsx ~ line 40 ~ numImages ~ indexedPropValue',
      indexedPropValue
    );
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
