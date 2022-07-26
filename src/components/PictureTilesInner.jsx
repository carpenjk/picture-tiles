import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useBreakpoints } from 'prop-x/useBreakpoints';
import { getPropIndex } from 'prop-x';
import ImageWrapper from './ImageLoader/ImageWrapper';
import ImgButton from './ImgButton';
import { useImageLoader } from './ImageLoader/ImageLoader';
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
