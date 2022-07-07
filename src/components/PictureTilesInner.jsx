import { useBreakpoints } from 'themeweaver/lib/UseBreakpoints';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import ImageWrapper from './ImageLoader/ImageWrapper';
import ImgButton from './ImgButton';
import { useImageLoader } from './ImageLoader/ImageLoader';
import Tile from './Tile';

const PictureTilesInner = ({ images, onPhotoClick }) => {
  console.log(
    '🚀 ~ file: PictureTilesInner.jsx ~ line 7 ~ PictureTilesInner ~ images',
    images
  );
  const { onLoad } = useImageLoader();
  const theme = useContext(ThemeContext);
  const br = useBreakpoints(theme);
  console.log('br', br);
  // return images[br.current].map...
  return (
    <>
      {images[br.indexOfLower].map((img, i) => (
        <Tile key={i} rowSpan={img.rowSpan} colSpan={img.colSpan}>
          <ImageWrapper id={i}>
            <ImgButton
              type="button"
              onLoad={() => onLoad(i)}
              onClick={() => onPhotoClick(i)}
              loading="lazy"
              src={img.src}
              width={img.width}
              height={img.height}
              alt="property"
            />
          </ImageWrapper>
        </Tile>
      ))}
    </>
  );
};

export default PictureTilesInner;
