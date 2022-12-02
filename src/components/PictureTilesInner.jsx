import { useImageLoader } from './imageLoader/ImageLoader';
import ImageWrapper from './imageLoader/ImageWrapper';
import ImgButton from './ImgButton';
import Tile from './Tile';

const PictureTilesInner = ({ images, onPhotoClick }) => {
  const { onLoad } = useImageLoader();
  return (
    <>
      {images.map((img, i) => {
        const { rowSpan, colSpan, ...imgProps } = img;
        return (
          <Tile key={i} rowSpan={img.rowSpan} colSpan={img.colSpan}>
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
