import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useBreakpoints } from '@carpenjk/prop-x/useBreakpoints';
import { getPropIndex } from '@carpenjk/prop-x';
import { useImageLoader } from './imageLoader/ImageLoader';
import ImageWrapper from './imageLoader/ImageWrapper';
import ImgButton from './ImgButton';

import Tile from './Tile';

const PictureTilesInner = ({ images, onPhotoClick }) => {
  const { onLoad } = useImageLoader();
  const theme = useContext(ThemeContext);
  const br = useBreakpoints(theme);
  const currBrIndex = getPropIndex(images, br.indexOfLower);
  return (
    <>
      {images[currBrIndex].map((img, i) => {
        const { rowSpan, colSpan, ...imgProps } = img;
        return (
          <Tile
            key={`${currBrIndex}${i}`}
            rowSpan={img.rowSpan}
            colSpan={img.colSpan}
          >
            <ImageWrapper id={i}>
              <ImgButton
                type="button"
                onLoad={() => onLoad(i)}
                onClick={() => onPhotoClick(i)}
                loading="lazy"
                {...imgProps}
              />
            </ImageWrapper>
          </Tile>
        );
      })}
    </>
  );
};

export default PictureTilesInner;
